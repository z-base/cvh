import { SignJWK, VerificationCluster } from '@z-base/cryptosuite'
import { Bytes, fromJSON, toBase64UrlString } from 'bytecodec'
import { CVHToken } from '../index.js'

export class CVHEntry {
  private static header = toBase64UrlString(
    fromJSON({ alg: 'ED25519', typ: 'jwt' })
  )
  private issuer: string
  private issuedAt: number
  private after: string
  private claims: unknown
  constructor(issuer: string, after: string, claims: unknown) {
    this.issuer = issuer
    this.issuedAt = Date.now()
    this.after = after
    this.claims = claims
  }
  async tokenize(signJwk: SignJWK): Promise<CVHToken> {
    const bytes = fromJSON(this)
    const signature = await VerificationCluster.sign(signJwk, bytes)
    return `${CVHEntry.header}.${toBase64UrlString(bytes)}.${toBase64UrlString(signature)}`
  }
}

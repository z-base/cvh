export type CVHToken =
  `${Base64URLString}.${Base64URLString}.${Base64URLString}`

export type CVHEntry = {
  iss: string
  iat: number
  after: string
  claims: unknown
}

export type CVHSnapshot = Array<CVHToken>

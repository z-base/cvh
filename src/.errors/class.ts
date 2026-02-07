export type CVHErrorCode = 'TAMPERING DETECTED'

export class CVHError extends Error {
  readonly code: CVHErrorCode

  constructor(code: CVHErrorCode, message?: string) {
    const detail = message ?? code
    super(`{@z-base/cvh} ${detail}`)
    this.code = code
    this.name = 'CVHError'
  }
}

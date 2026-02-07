import { CVHEntry } from '../../CVHEntry/class.js'
import { CVH } from '../../index.js'

export async function start(): Promise<CVHSnapshot> {
  const token = await new CVHEntry().tokenize()
  return [token]
}

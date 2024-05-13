import type { Continent } from './continent'

export interface Country {
  id: string
  name: string
  code: string
  emoji: string
  continent?: Continent
}

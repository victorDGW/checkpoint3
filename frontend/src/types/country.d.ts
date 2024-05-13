import type { Continent } from './continent'

export interface Country {
  id: string
  name: string
  code: string
  emoji: string
  continent?: Continent
}

export type AddCountryForm = {
  code: string
  name: string
  emoji: string
  continent?: { id: number } | null
}

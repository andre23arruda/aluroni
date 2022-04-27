import cardapio from 'data/cardapio.json'
import options from 'data/options.json'

export type Option = typeof options[0]

export type Cardapio = typeof cardapio

export type Prato = typeof cardapio[0]
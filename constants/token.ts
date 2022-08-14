import { StaticImageData } from 'next/image'
import WETHLogo from '../public/images/synths/weth.png'
import LUSDLogo from '../public/images/synths/sLUSD.png'
import sUSDLogo from '../public/images/synths/sUSD.png'
import sETHLogo from '../public/images/synths/sETH.png'

export type CurrencyKey = string;
export type TokenAddress = string;

export const sETH_ADDRESS = '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb'
export const LUSD_ADDRESS = '0x5f98805a4e8be255a32880fdec7f6728c6568ba0'
export const sUSD_ADDRESS = '0x57ab1ec28d129707052df4df418d58a2d46d5f51'
export const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

const OVM_ADDRESS = {
	'WETH': '0x4200000000000000000000000000000000000006',
	'LUSD': '0xc40f949f8a4e094d1b49a23ea9241d289b7b2819',
	'sUSD': '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
	'sETH': '0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49',
}

export enum SupportedChainId {
	MAINNET = 1,
	KOVAN = 42,

	OPTIMISM = 10,
	OPTIMISTIC_KOVAN = 69,
}


export enum Tokens {
	sETH = 'sETH',
	LUSD = 'LUSD',
	ETH = 'ETH',
	sUSD = 'sUSD',
	WETH = 'WETH',
}

export type TokenKey = 'seth' | 'lusd' | 'eth' | 'susd'

export interface TokenInterface {
	name: string;
	key: string;
	address: TokenAddress;
	src: StaticImageData;
	decimals: number;
	precision: number;
	ovmAddress: TokenAddress
}

export const LUSD: TokenInterface = {
	name: 'LUSD',
	key: 'lusd',
	address: LUSD_ADDRESS,
	src: LUSDLogo,
	decimals: 18,
	precision: 2,
	ovmAddress: OVM_ADDRESS[Tokens.LUSD]
}

export const sETH: TokenInterface = {
	name: 'sETH',
	key: 'seth',
	address: sETH_ADDRESS,
	src: sETHLogo,
	decimals: 18,
	precision: 4,
	ovmAddress: OVM_ADDRESS[Tokens.sETH]
}

export const WETH: TokenInterface = {
	name: 'WETH',
	key: 'weth',
	address: WETH_ADDRESS,
	src: WETHLogo,
	decimals: 18,
	precision: 4,
	ovmAddress: OVM_ADDRESS[Tokens.WETH]
}

export const sUSD: TokenInterface = {
	name: 'sUSD',
	key: 'susd',
	address: sUSD_ADDRESS,
	src: sUSDLogo,
	decimals: 18,
	precision: 2,
	ovmAddress: OVM_ADDRESS[Tokens.sUSD]
}

export type PairToken = [TokenInterface, TokenInterface]

export const L1_Wrap: PairToken[] = [
	[WETH, sETH],
	[LUSD, sUSD],
]

export const L1_Unwrap: PairToken[] = [
	[sETH, WETH],
	[sUSD, LUSD],
]

export const L2_WRAP: PairToken[] = [
	[LUSD, sUSD],
	[WETH, sETH]
]

export const L2_Unwrap: PairToken[] = [
	[sUSD, LUSD],
	[sETH, WETH],
]
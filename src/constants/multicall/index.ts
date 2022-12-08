import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: '0xE140A37E7C63b60c5AF374bCe1edDdB187fCd7eB'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

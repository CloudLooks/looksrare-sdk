import { Addresses, SupportedChainId } from "../types";

const mainnetAddresses: Addresses = {
  LOOKS: "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
  LOOKS_LP: "0xDC00bA87Cc2D99468f7f34BC04CBf72E111A32f7",
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  ROYALTY_FEE_MANAGER: "0xCBfebA41C3e69d24B5C8b04Ed60C42CC5D883620",
  ROYALTY_FEE_REGISTRY: "0x55010472a93921a117aAD9b055c141060c8d8022",
  ROYALTY_FEE_SETTER: "0x66466107d9cAE4da0176a699406419003F3C27a8",
  EXCHANGE: "0x59728544B08AB483533076417FbBB2fD0B17CE3a",
  TRANSFER_MANAGER_ERC721: "0xf42aa99F011A1fA7CDA90E5E98b277E306BcA83e",
  TRANSFER_MANAGER_ERC1155: "0xFED24eC7E22f573c2e08AEF55aA6797Ca2b3A051",
  TRANSFER_SELECTOR_NFT: "0x9Ba628F27aAc9B2D78A9f2Bf40A8a6DF4Ccd9e2c",
  STRATEGY_STANDARD_SALE_DEPRECATED: "0x56244Bb70CbD3EA9Dc8007399F61dFC065190031",
  STRATEGY_COLLECTION_SALE_DEPRECATED: "0x86F909F70813CdB1Bc733f4D97Dc6b03B8e7E8F3",
  STRATEGY_STANDARD_SALE: "0x579af6FD30BF83a5Ac0D636bc619f98DBdeb930c",
  STRATEGY_COLLECTION_SALE: "0x09F93623019049c76209C26517AcC2aF9d49c69b",
  STRATEGY_PRIVATE_SALE: "0x58D83536D3EfeDB9F7f2A1Ec3BDaad2b1A4DD98C",
  STRATEGY_DUTCH_AUCTION: "0x3E80795Cae5Ee215EBbDf518689467Bf4243BAe0",
  PRIVATE_SALE_WITH_FEE_SHARING: "0x9571cdD8ACB71C83393290F0D63A46173dddE65B",
  FEE_SHARING_SYSTEM: "0xBcD7254A1D759EFA08eC7c3291B2E85c5dCC12ce",
  STAKING_POOL_FOR_LOOKS_LP: "0x2A70e7F51f6cd40C3E9956aa964137668cBfAdC5",
  TOKEN_DISTRIBUTOR: "0x465A790B428268196865a3AE2648481ad7e0d3b1",
  TRADING_REWARDS_DISTRIBUTOR: "0x453c1208B400fE47aCF275315F14E8F9F9fbC3cD",
  MULTI_REWARDS_DISTRIBUTOR: "0x0554f068365eD43dcC98dcd7Fd7A8208a5638C72",
  MULTICALL2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696", // https://github.com/makerdao/multicall#multicall2-contract-addresses
  REVERSE_RECORDS: "0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C",
  AGGREGATOR_UNISWAP_V3: "0x3ab16Af1315dc6C95F83Cbf522fecF98D00fd9ba",
  EXECUTION_MANAGER: "0x9Cc58bf22a173C0Fa8791c13Df396d18185d62b2",
  CURRENCY_MANAGER: "0xC881ADdf409eE2C4b6bBc8B607c2C5CAFaB93d25",
  ORDER_VALIDATOR_V1: "0xdC56dE26C64B14f1A8e95582A16b6A9AEfEEd395",
};

const goerliAddresses: Addresses = {
  LOOKS: "0x20A5A36ded0E4101C3688CBC405bBAAE58fE9eeC",
  LOOKS_LP: "",
  WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  ROYALTY_FEE_MANAGER: "0x37Ac5Af9eE9394F4356E0C7aaBeF3c93731A5c90",
  ROYALTY_FEE_REGISTRY: "0x12405dB79325D06a973aD913D6e9BdA1343cD526",
  ROYALTY_FEE_SETTER: "0x73d3922426f7F27DF51E9cd7B8B2A0e435abCa06",
  EXCHANGE: "0xD112466471b5438C1ca2D218694200e49d81D047",
  TRANSFER_MANAGER_ERC721: "0xF8C81f3ae82b6EFC9154c69E3db57fD4da57aB6E",
  TRANSFER_MANAGER_ERC1155: "0xF2ae42e871937F4e9ffb394C5A814357C16e06d6",
  TRANSFER_SELECTOR_NFT: "0x1b03835903D54dd4DB41F04B07188C0f7645edD7",
  STRATEGY_STANDARD_SALE_DEPRECATED: "0xc771c0A3a7d738A1E12Aa88829A658bAefb32f0f",
  STRATEGY_COLLECTION_SALE_DEPRECATED: "0xeF722abf61a1937E76DAcFcd58d51c2358dE7D1A",
  STRATEGY_STANDARD_SALE: "0x6ACbeb7f6E225FbC0D1CEe27a40ADC49E7277E57",
  STRATEGY_COLLECTION_SALE: "0xAfb81825DC076500BF19CBf69d443684F2EBd3f6",
  STRATEGY_PRIVATE_SALE: "0x6122D4B50B0e2b7D76e63C537038c69d71317943",
  STRATEGY_DUTCH_AUCTION: "0x550fBf31d44f72bA7b4e4bf567C72463C4d6CEDB",
  PRIVATE_SALE_WITH_FEE_SHARING: "",
  FEE_SHARING_SYSTEM: "0x8A29E7b241A32158Fd7F267d484199aAD8dd2E31",
  STAKING_POOL_FOR_LOOKS_LP: "",
  TOKEN_DISTRIBUTOR: "0x861fDb71CCc266b3c0A4b8da8A929E52E83F5e7c",
  TRADING_REWARDS_DISTRIBUTOR: "",
  MULTI_REWARDS_DISTRIBUTOR: "0xdC6dC8d1B784890BA2c38947218F89E963EC2673",
  MULTICALL2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696", // https://github.com/makerdao/multicall#multicall2-contract-addresses
  REVERSE_RECORDS: "0x333Fc8f550043f239a2CF79aEd5e9cF4A20Eb41e",
  AGGREGATOR_UNISWAP_V3: "0x63c38B3BE3eF075a00a5edaeC36F499088c7334C",
  EXECUTION_MANAGER: "0x972B3A1A89ABb5e489163345E3C44Ab1bB813986",
  CURRENCY_MANAGER: "0xAC56740Fa471C0266B59B101C76Ab771f199F2eA",
  ORDER_VALIDATOR_V1: "0xdD6178143Fb0a16DEC9261498F6007a7468D7Aea",
};

export const addressesByNetwork: { [chainId in SupportedChainId]: Addresses } = {
  [SupportedChainId.MAINNET]: mainnetAddresses,
  [SupportedChainId.GOERLI]: goerliAddresses,
  [SupportedChainId.HARDHAT]: goerliAddresses,
};

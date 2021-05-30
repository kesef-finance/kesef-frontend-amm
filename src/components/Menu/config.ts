import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.kesef.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://app.kesef.finance/farms'
  },
  {
    label: 'Mining',
    icon: 'PoolIcon',
    href: 'https://app.kesef.finance/nests'
  },
 {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28-bsc',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
      },
      {
        label: 'BoggedFinance',
        href: 'https://charts.bogged.finance/?token=0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/kesef-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/kesef-finance/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/kesef-finance',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/kesef-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/kesef-finance/',
      },
       {
        label: 'Docs',
        href: 'https://docs.kesef.finance',
      },
      {
        label: 'Blog',
        href: 'https://kesef.medium.com/',
      },
    ],
  }
]

export default config

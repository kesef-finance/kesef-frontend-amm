import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.ķesef.finance/'
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
    href: 'https://app.ķesef.finance/farms'
  },
  {
    label: 'Mining',
    icon: 'PoolIcon',
    href: 'https://app.ķesef.finance/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xf056c78AE863b08808c1FE3c0f8a7dB2a4FDcf28',
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
        label: 'Blog',
        href: 'https://kesef.medium.com/',
      },
    ],
  },
]

export default config

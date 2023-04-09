import localFont from 'next/font/local'

const gilroy = localFont({
  src: [
    {
      path: './font/Gilroy-Bold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './font/Gilroy-SemiBold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './font/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './font/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './font/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal'
    },

  ]
})

export default gilroy

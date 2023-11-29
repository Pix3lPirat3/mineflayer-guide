import { useConfig } from 'nextra-theme-docs'

let isDevEnvironment =  process.env.NODE_ENV === 'development';

const config = {
  logoLink: '/',
  logo: (
    <>
      <img src={isDevEnvironment ? '/prismarine_js.svg' : '/mineflayer-guide/prismarine_js.svg'}/>
      <span style={{ marginLeft: '.4em', fontWeight: 800, color: '#52a58e' }}>
        Prismarine
      </span>
      <sup style={{ fontWeight: 800, color: '#2c5a4c', top: '-0.4em' }}>
      JS
      </sup>
    </>// // this double slash stops IDE from freaking out
  ),
  head: () => {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || '🦃'} />
        <meta property="og:description" content={frontMatter.description || 'A beginner friendly guide for mineflayer written by users for users.'}
        />
      </>// // this double slash stops IDE from freaking out
    )
  },
  useNextSeoProps: () => {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s – Guide',
      description: frontMatter.description || 'A beginner friendly guide for mineflayer written by users for users.'
    }
  },
  footer: {
    text: `MIT License ${new Date().getFullYear()}`
  },
  project: {
    link: 'https://github.com/Pix3lPirat3/mineflayer-guide/',
  },
  chat: {
    link: 'https://discord.gg/prismarinejs-413438066984747026',
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  banner: {
    key: 'pjs-disclaimer',
    text: 'This is not official documentation for PrismarineJS'
  },
  sidebar: {
    toggleButton: true,
    autoCollapse: false,
    defaultMenuCollapseLevel: 3
  },
  toc: {
    float: true
  },
  docsRepositoryBase: 'https://github.com/Pix3lPirat3/mineflayer-guide/tree/main',
  feedback: {
    content: null
  },
  primaryHue: 190
}

export default config

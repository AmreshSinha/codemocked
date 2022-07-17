import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import { useEffect, useState } from 'react'

export default function Home() {
  // Dark mode toggle
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = localStorage.getItem('theme')
      if (localTheme) {
        setTheme(localTheme)
      }
    }
  })

  function setThemeLocStore(theme) {
    localStorage.setItem('theme', theme)
  }
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    setThemeLocStore(theme)
  }
  const light = {
    colors: {
      primary: '#000',
      secondary: '#fff',
      white: '#fff',
    },
    fontSizes: {
      small: '12px',
    },
    fontWeights: {
      bold: 'bold',
    },
  }
  const dark = {
    colors: {
      primary: '#fff',
      secondary: '#000',
      white: '#000',
    },
    fontSizes: {
      small: '12px',
    },
    fontWeights: {
      bold: 'bold',
    },
  }
  var themeObj = theme === 'light' ? light : dark

  return (
    <>
      <Head>
        <title>Codemocked</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hello World!</h1>
      {/* <Button theme={themeObj}>This is a button</Button> */}
    </>
  )
}

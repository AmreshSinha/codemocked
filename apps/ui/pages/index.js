import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

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
  var NavObj = {
    title: process.env.CM_TITLE ? process.env.CM_TITLE : 'Codemocked',
    showStarBadge:
      process.env.CM_STARBADGE === false ? process.env.CM_STARBADGE : true,
  }

  return (
    <Wrapper>
      <Head>
        <title>Codemocked</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar navbar={NavObj} theme={themeObj} />
      {/* <h1>Hello World!</h1> */}
      {/* <Button theme={themeObj}>This is a button</Button> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`

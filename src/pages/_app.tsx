import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'

import { SideBarContextProvider } from '../context/SidebarDrawerContext'
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SideBarContextProvider>
        <Component {...pageProps} />
      </SideBarContextProvider>
    </ChakraProvider>
  )
}

export default MyApp

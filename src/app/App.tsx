import React from 'react'
import styled, {ThemeProvider} from 'styled-components';
import { theme } from '../lib/styles'
import { TranslatorScreen } from '../features/translator';
import { Footer, Header } from 'lib/components';

export const App =()=>(
    <ThemeProvider theme={ theme }>
        <AppContainer>
            <Header />
            <TranslatorScreen
                /*title='Hello from App'
                onClick={()=>{}}
                isActive={false}
                onClick2={()=>true}
                age={12}*/
            />
            <Footer />
        </AppContainer>
    </ThemeProvider>
)

const AppContainer=styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: space-teween;
`

/*export const App =()=>(
    <ThemeProvider theme={{ backgroundColor: '#61dafb' }}>
        <AppContainer>
            Hello world!
        </AppContainer>
    </ThemeProvider>
)

const AppContainer=styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.backgroundColor};
`
/*export const App =()=>(
    <ThemeProvider theme={{ }}>
        <AppContainer>
            Hello world!
        </AppContainer>
    </ThemeProvider>
)

const AppContainer=styled.div`
    width: 100%;
    height: 100vh;
    background-color: #61dafb;
`*/
import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { theme } from '../lib/styles'
import { TranslatorScrean } from '../features/translator';

export const App =()=>(
    <ThemeProvider theme={ theme }>
        <AppContainer>
            <TranslatorScrean
                /*title='Hello from App'
                onClick={()=>{}}
                isActive={false}
                onClick2={()=>true}
                age={12}*/
            />
        </AppContainer>
    </ThemeProvider>
)

const AppContainer=styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background}
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
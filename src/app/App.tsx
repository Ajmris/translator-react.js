import React, { useEffect, useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { theme } from '../lib/styles'
import { TranslatorScreen, translatorActions } from 'features/translator'
import { Footer, Header, Loader, Message } from 'lib/components'
import { Language } from 'lib/models'
import { useTranslations } from 'lib/hooks';

export const App =()=>{
    const T=useTranslations()
    const [languages, setLanguages]=useState<Array<Language>>([])
    const {isLoading,hasError,fetch: getSupportedLanguages}=
    translatorActions.useSupportedLanguages(setLanguages)
    
    useEffect(()=>{
        getSupportedLanguages()
    }, [])
    //useSupportedLanguages()

    const getLayout=()=>{
        if(isLoading){
            return(
                <FetchLoaderContainer>
                    <Loader>
                        <LoaderText>
                            {T.screen.translator.loading}
                        </LoaderText>
                    </Loader>
                </FetchLoaderContainer>
            )
        }
        if(hasError){
            return(
                <CenterContainer>
                    <Message
                    withButton
                    message={T.screen.translator.error}
                    onClick={()=>getSupportedLanguages}
                    />
                </CenterContainer>
            )
        }
        if(languages.length===0){
            return(
                <CenterContainer>
                    <Message
                    withButton={false} // Tutaj możesz ustawić wartość true lub false w zależności od potrzeby
                    message={T.screen.translator.empty}
                    />
                </CenterContainer>
            )
        }
        return(
            <TranslatorScreen languages={languages}/>
        )
    }
    return(
        <ThemeProvider theme={ theme }>
        <AppContainer>
            <Header />
            {getLayout()}
            <Footer />
        </AppContainer>
    </ThemeProvider>
    )
}

const AppContainer=styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: space-teween;
`
const FetchLoaderContainer=styled.div`
    display: flex;
    width: 50%;
    align-self: center;
`
const LoaderText=styled.div`
    color: ${({theme})=>theme.colors.typography};
    margin-top: 10px;
`
const CenterContainer=styled.div`
    display: flex;
    justify-content: center;
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
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useTranslations } from "../../lib/hooks"
import { Message, Loader, SelectLanguage, Confidence, TextCounter, Textinput } from "lib/components"
import { ExchangeLanguage } from "lib/components/ExchangeLanguage"
import { useSupportedLanguages } from "./useSupportedLanguages"
import { Language } from "lib/models"

export const TranslatorScreen: React.FunctionComponent =()=>{
    const [languages, setLanguages]=useState<Array<Language>>([])
    const {isLoading,hasError,fetch: getSupportedLanguages}=useSupportedLanguages(
        setLanguages
    )
    const T=useTranslations()
    useEffect(()=>{
        getSupportedLanguages()
    }, [])
    //useSupportedLanguages()
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
        <Container>
            Hello from Translator!<br />
            <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage />
                    <Textinput />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                    <InputFooter>
                        <Confidence />
                        <TextCounter />
                    </InputFooter>
                </InputContainer>
                <ExchangeLanguage />
                <InputContainer>
                    <SelectLanguage />
                    <Textinput />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                </InputContainer>
            </TranslatorContainer>
        </Container>
    )
}
/*type TranslatorScreanProps={
    isActive: boolean,
    age?: number,
    title: string,
    onClick(): void,
    onClick2(): boolean
}

export const TranslatorScrean: React.FunctionComponent<TranslatorScreanProps> =({
    title
})=>(
    <Container>
        Hello from Translator!<br />
        {title}!
    </Container>
)*/

/*export const TranslatorScrean: React.FunctionComponent<TranslatorScreanProps> =props=>(
    <Container>
        Hello from Translator!
        My age is {props.age}!
    </Container>
)*/

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({theme})=>theme.colors.typegraphy}
`
const TranslatorContainer =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
`
const InputContainer=styled.div`
    display: flex;
    flex-direction: column;
`
const LoaderContainer=styled.div`
    padding: 5px 10px;
`
const FetchLoaderContainer=styled.div`
    display: flex;
    width: 50%;
    align-self: center;
`
const InputFooter=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const LoaderText=styled.div`
    color: ${({theme})=>theme.colors.typography};
    margin-top: 10px;
`
const CenterContainer=styled.div`
    display: flex;
    justify-content: center;
`
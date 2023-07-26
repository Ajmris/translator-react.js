import React from "react"
import styled from "styled-components"
import { useTranslations } from "../../lib/hooks"
import { Louder, SelectLanguage, Confidence, TextCounter, Textinput } from "lib/components"
import { ExchangeLanguage } from "lib/components/ExchangeLanguage"

export const TranslatorScreen: React.FunctionComponent =()=>{
    const T=useTranslations()    
    return(
        <Container>
            Hello from Translator!<br />
            {T.companyName}
            <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage />
                    <Textinput />
                    <LouderContainer>
                        <Louder />
                    </LouderContainer>
                    <InputFooter>
                        <Confidence />
                        <TextCounter />
                    </InputFooter>
                </InputContainer>
                <ExchangeLanguage />
                <InputContainer>
                    <SelectLanguage />
                    <Textinput />
                    <LouderContainer>
                        <Louder />
                    </LouderContainer>
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
const LouderContainer=styled.div`
    padding: 5px 10px;
`
const InputFooter=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
import React, { useState } from "react"
import styled from "styled-components"
import { Loader, SelectLanguage, Confidence, TextCounter, Textinput } from "lib/components"
import { ExchangeLanguage } from "lib/components/ExchangeLanguage"
import { Language, LanguageCode } from "lib/models"
import { SelectedLanguages } from "./types"
import { useTranslations } from "lib/hooks"
import { APP_CONFIG } from "lib/config"

type TranslatorScreanProps={
    languages: Array<Language>
}

export const TranslatorScreen: React.FunctionComponent<TranslatorScreanProps> =({
    languages
})=>{
    const T =useTranslations()
    const [query, setQuery]=useState<string>('')
    const [SelectedLanguages, setSelectedLanguages]=useState<SelectedLanguages>({
        source: LanguageCode.Auto,
        target: LanguageCode.English
    })
    return(
        <Container>
            Hello from Translator!<br />
            <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage
                        languages={languages}
                        exclude={[SelectedLanguages.target]}
                        onChange={newCode => setSelectedLanguages(
                            prevState=>
                            ({...prevState, source: newCode})
                        )}
                        selectedLanguage={SelectedLanguages.source}
                    />
                    <Textinput
                        autoFocus
                        value={query}
                        onChangeText={newQuery=>{
                            if(newQuery.length<APP_CONFIG.TEXT_INPUT_LIMIT){
                                setQuery(newQuery)
                            }
                        }}
                        placeholder={T.screens.translator.sourceInputPlaceholder}
                    />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                    <InputFooter>
                        <Confidence />
                        <TextCounter
                            counter={query.length}
                            limit={APP_CONFIG.TEXT_INPUT_LIMIT}
                        />
                    </InputFooter>
                </InputContainer>
                <ExchangeLanguage
                    hidden={SelectedLanguages.source==LanguageCode.Auto}
                    onClick={()=>setSelectedLanguages(prevState=>({
                        source: prevState.target,
                        target: prevState.source
                    }))}
                />
                <InputContainer>
                    <SelectLanguage
                        languages={languages}
                        exclude={[SelectedLanguages.source, LanguageCode.Auto]}
                        onChange={newCode => setSelectedLanguages(
                            prevState=>
                            ({...prevState, target: newCode})
                        )}
                        selectedLanguage={SelectedLanguages.target}
                    />
                    <Textinput disabled/>
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
const InputFooter=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
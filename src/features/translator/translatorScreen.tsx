import React from "react"
import styled from "styled-components"
import { useTranslations } from "../../lib/hooks"

export const TranslatorScreen: React.FunctionComponent =()=>{
    const T=useTranslations()    
    return(
        <Container>
            Hello from Translator!<br />
            {T.companyName}
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
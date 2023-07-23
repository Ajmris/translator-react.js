import React from "react"
import styled from "styled-components"
import { useTranslations } from "../../lib/hooks"

export const TranslatorScrean: React.FunctionComponent =()=>{
    const T=useTranslations()    
    return(
        <Container>
            Hello from Translator!<br />
            {T.appName}
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
    color: ${({theme})=>theme.colors.typegraphy}
`
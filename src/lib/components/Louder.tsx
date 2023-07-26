import { styled } from "styled-components"

export const Louder =()=>(
    <ActivityIndicater />
)
const ActivityIndicater=styled.div`
    width: 100%;
    height: 2px;
    margin: 5px;
    background-color: ${({theme}) =>theme.colors.primary};
    border-reduce: 6px;
    animation: loading 1s linear infinite alternate;

    @keyframes loading{
        0%{ width:0%;}
        100%{ width:100%;}
    }
`
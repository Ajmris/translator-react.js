import React from "react"
import styled from "styled-components"
import { useEffect } from "react"

type TextInputProps={
    value?: string,
    disabled?: boolean,
    autoFocus?: boolean,
    placeholder?: string,
    onChangeText?(text: string): void
}

export const Textinput: React.FunctionComponent<TextInputProps>=({
    value,
    autoFocus,
    disabled,
    placeholder,
    onChangeText
})=>{
    const inputRef =React.createRef<HTMLTextAreaElement>()
    useEffect(()=>{
        if(!disabled && autoFocus && inputRef.current){
            inputRef.current.focus()
        }
    }, [])
    return(
        <Input
            disabled={disabled}
            ref={inputRef}
            placeholder={disabled ? undefined:placeholder}
            value={value}
            onChange={event=>{
                if(onChangeText){
                    onChangeText(event.target.value)
                }
            }}
        />
    )
}
const Input =styled.textarea`
    background-color: ${({theme})=>theme.colors.input};
    color: ${({theme})=>theme.colors.typography};
    border: none;
    border-radius: 8px;
    height: 300px;
    width: 400px;
    resize: none;
    font-size: 18px;
    padding: 10px 15px;
`
import { styled } from "styled-components"
import { useTranslations } from "lib/hooks"
import { APP_CONFIG } from "lib/config"

export const Footer =()=>{
    const T=useTranslations()
    const year=new Date().getFullYear()
    return(
        <FooterContainer>
            <CodemaskContainer>
                &copy; {year} {T.common.companyName}
            </CodemaskContainer>
            <LinkContainer>
                <Link
                    href={APP_CONFIG.FLAT_ICONS_URL}
                    target="_blank">
                    {T.components.footer.flatIcon}
                </Link>
                <Link
                    href={APP_CONFIG.LIBRE_TRANSLATE_URL}
                    target="_blank">
                    {T.components.footer.libreTranslate}
                </Link>
            </LinkContainer>
        </FooterContainer>
    )
}
const FooterContainer=styled.div`
    height: 60px;
    background-color: ${({theme})=> theme.colors.foreground};
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const CodemaskContainer=styled.div`
    color: ${({theme}) => theme.colors.typography};
`
const LinkContainer=styled.div``
const Link=styled.a`
    color: ${({ theme })=>theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
    padding: 0 10px;
`
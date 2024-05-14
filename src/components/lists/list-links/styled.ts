import styled from "styled-components";


export const BoxListLinks = styled.div`
    padding-top: 25px;
`;

export const ListLinkStyled = styled.ul`
    padding-top: 16px;
    list-style: none;
    margin: 0px;
    padding-inline: 16px;

    display: flex;
    flex-direction: column;
`;


export const ItenListLinks = styled.li`
    height: 30px;
    display: flex;
    align-items: center;
    gap: 12px;

    > svg{
        width: 25px;
        height: 25px;
    }

    a {
        font-weight: 600;
    }
`;
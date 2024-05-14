import styled from "styled-components";

export const SearchInputConteiner = styled.div`
    width: 100%;
    height: 48px;

    padding-inline: 7px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    outline: 1px solid;
    border-radius: 30px;

    background-color: var(--background);
`;

export const ButtonSearch = styled.button`
    min-width: 80px;
    height: 36px;

    border: none;

    border-radius: 30px;

    background-color: var(--brand-color);
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SpanButton = styled.span`
    min-width: 44px;
    font-size: 12.75px;

    padding: 3px;
    border-radius: 30px;
`;

export const SearchSelect = styled.select`
    background-color: transparent;

    outline: none;
    border: none;

    font-size: 16px;
`;

export const BoxButtonInput = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const SearchItenList = styled.li`
    width: 90%;
    height: 35px;
    padding-inline: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: #fff
    }
`;

export const SearchResultContainer = styled.ul`
    width: 100%;
    max-height: 200px;
    min-height: 200px;

    padding-inline: 7px;

    background-color: var(--brand-color);
    color: #fff;
    opacity: 80%;

    position: absolute;
    z-index: 2;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

    overflow: hidden auto;
    list-style: none;

    display: flex;
    align-items: center;
    flex-direction: column;
`

export const SearchBoxInput = styled.div`
    width: 90%;
    height: 90%;

    display: flex;
    align-items: center;
`;

export const SerchInput = styled.input`
    width: calc(100% - 10px);
    height: 100%;

    margin-left:10px ;

    background-color: transparent;
    border: none;

    font-size: 16px;
    :focus {
        border:  none;
        outline: none;
    }
`;

export const SearchConteiner = styled.div`
    position: relative;

    width: 70%;
    max-width: 590px;
`;

export const ButtonCloseInput = styled.button`
    border: none;
    background-color: transparent;

    padding: 12px;

    font-size: 16px;

    border-radius: 100%;

    :hover {
        background-color: rgb(0,0, 0);
    }
`;
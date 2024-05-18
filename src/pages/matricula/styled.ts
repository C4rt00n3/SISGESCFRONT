import styled from "styled-components";

export const MainMatricula = styled.main`
    position: relative;

    width: calc(100% - 24px);
    height: 100%;
    margin: 0;
    margin-block: 5%;
    margin-left: 5%;
    padding-inline: 24px;

    overflow-y: auto;
    overflow-x: hidden;
`;


export const BoxFunctions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    a {
        padding-inline: 18px;
        padding-block: 8px;

        background-color: var(--brand-color);
        color: #fff;
        text-decoration: none;

        border-radius: 30px;

        margin-block: 12px;
    }
`;

export const ConteinerMatricula = styled.div`
    width: 90vw;
    height: 90vh;

    display: flex;
    margin-inline: 5%;

    position: relative;
`;

export const BoxInfos = styled.div`
    width: 100%;
    height: 100%;
`;
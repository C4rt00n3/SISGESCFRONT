import styled from "styled-components";

export const ConteinerHome = styled.div`    
    width: 90%;
    height: 100vh;
    margin-inline: 5%;

    display: flex;
`;

export const MainHome = styled.main`
    position: relative;

    width: calc(90% - 25%);
    height: 90%;
    margin-top: 5%;

    overflow-y: auto;
    
    .input-header{
        position: fixed;
        width: 100%;
        height: 60px;

        background-color: var(--backgoud);
    }
`;

export const BoxList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    padding-top: 80px;

    overflow: hidden scroll;
`;

export const ListInfo = styled.ul<{height: string}>`
    min-height: ${({height}) => height};


    overflow-x: none;
    overflow-y: hidden;

    display: flex;

    gap: 10px;

    padding-inline: 24px;

    padding: 0px;
    list-style: none;
`;

export const ItenListFunctions = styled.li`
    max-width: 224px;
    min-width: 200px;

    height: 272px;

    padding-inline: 13px;

    background-color: white;
    border-radius: 8px;

    svg {
        width: 50px;
        height: 50px;

        margin-top: 50px;

        color: var(--brand-color);
    }

    h4 {
        border-bottom: 1px solid var(--gray-line);

        color: var(--brand-color);
        padding-block: 12px;

        font-weight: bold;
    }

    P {
        font-size: 14px;
        font-weight: bold;

        color: var(--green-sucess);
    }

    small {
        color: var(--gray-text);
    }
`;
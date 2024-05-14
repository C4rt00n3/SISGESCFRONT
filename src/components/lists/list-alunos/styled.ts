import styled from "styled-components";

export const ConteinerTable = styled.div`
    width: calc(100% - 24px);
    max-height: 450px;
    min-height: 300px;

    background-color: var(--withe-color);
    border-radius: 12px;

    display: flex;
    flex-direction: column;
`;

export const TitleTable = styled.h3`
    margin-left: 12px;
`;

export const FormFilter = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;


    width: 100%;

    .check-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div:not(:first-child) {
        display: flex;
        flex-direction: column;
        gap: 8px;
        
        label {
            width: fit-content;
            color: #fff;

            font-size: 14px;
        }

        select {
            width: 100px;
            color: #fff;
            background-color: transparent;
            border: none;

            font-size: 16;

            option {
                background-color: var(--rt-color-dark);
            }
        }
    }
`;

export const ThreadTable = styled.div<{ columns: number }>`
    width: calc(100% - 24px);
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    justify-content: space-between;
    align-items: center;
    padding-inline: 12px;
    border-bottom: 1px solid var(--gray-line);
    
    > p {
        color: var(--brand-color);
        text-align: center
    }

    .settings:first-child {
        width: 250px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--brand-color);

        > p {
            width: fit-content;
            font-size: 10px;
            font-weight: bold;
        }

        > svg {
            width: 20px;
            height: 20px;
        }   
    }

    :not(:first-child) {
        font-size: 12px;
        font-weight: bold;
    }
`;

export const BoxTableItens = styled.ul<{ columns: number }>`
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: calc(100% - 24px);
    height: 100%;

    padding-inline: 12px;

    overflow: auto;

    > li {
        display: grid;
        grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
        justify-content: space-between;
        align-items: center;   
        border-bottom: 1px solid var(--gray-line);

        p  {
            width: 100%;
            min-height: 15px;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
        }

        .turno {
            svg {
                width: 20px;
                height: 20px;

                color: var(--brand-color);
            }
        }
    }
`;

export const BoxUser = styled.div`
    a {
        width: 250px;

        overflow: auto;

        display: flex;
        align-items: center;

        gap: 10px;

        height: max-content;
        text-decoration: none;
    }

    div {
        color: var(--brand-color);

        
        svg {
            width: 15px;
            height: 15px;
        }
    }

    p {
        padding: 0;
        margin: 0;  

        font-size: 14px;
        font-weight: bold;
    }

`;
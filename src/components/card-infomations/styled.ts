import styled from "styled-components";

export const CardInformtionConteiner = styled.div`
    min-width: 270px;
    min-height: 125px;

    background-color: white;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BoxInfomatinsText = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    p {
        width: calc(100% - 12px);
        text-align: end;

        font-size: 12px;

        color: var(--brand-color);
    };

    span {
        width: calc(100% - 12px);
        text-align: end;

        font-size: 28px;
        font-weight: 600;
        color: var(--brand-color);
    }

`;

export const StatusInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    padding-inline: 12px;

    border-top: 1px solid rgb(3, 79, 117,0.3);

    > p {
        color: green;
    }

    > span {
        color: var(--brand-color);
    }
`;
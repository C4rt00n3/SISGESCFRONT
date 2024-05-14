import styled from "styled-components";

export const FormSelect = styled.select`
    padding: 8px;
    color: var(--text-card);
    font-size: 14px;
    min-width: 100px;
    height: 100%;
    width: 100%;
    outline: none;
    border: none;

    :focus {
        outline: none;
    }
`;

export const InputFormConteiner = styled.div<{width?: string, error: boolean}>`
    width: ${({width}) => width ? width : '100%'};
    height: fit-content;
    outline: 2px solid ${({error}) => error ? "red": "var(--text-card)"};
    background-color: var(--withe-color);
    display: flex;
    flex-direction: column;
    border-radius: 8px;

    > input {
        border: none;
        background-color: transparent;
        padding: 8px;
        font-size: 14px;
        min-width: 100px;
        width: 100%;
        height: 100%;
        color: var(--text-card);

        :focus {
            outline: none;
        }
    }
`;

export const InputLabelForm = styled.label`
    margin-left: 12px;
    margin-top: -10px;
    width: fit-content;
    padding: 4px;
    z-index: 1;
    background-color: var(--light-color);
    border-radius: 8px;
    font-size: 10px;
`;

export const SpanError = styled.span`
    color: red;
    font-size: 12px;
`;
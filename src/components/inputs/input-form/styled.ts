import styled from "styled-components";

export const FormSelect = styled.select`
    padding: 8px;
    color: var(--text-card);
    font-size: 14px;
    height: 100%;
    width: 100%;

    margin: 0px;

    outline: none;
    border: none;

    :focus {
        outline: none;
    }
`;

export const InputContainer = styled.div<{ width: string, maxWidth: string }>`
    width: ${({ width }) => width ? width : '35%'};
    min-width: 150px;
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : "100%"};
`;

export const InputFormContainer = styled.div<{ width?: string, error: boolean }>`
    width: 100%;

    outline: 2px solid ${({ error }) => error ? "red" : "var(--text-card)"};
    background-color: var(--withe-color);

    display: flex;
    flex-direction: column;
    border-radius: 8px;

    > input {
        width: 100%;
        border: none;
        background-color: transparent;
        padding: 8px;
        font-size: 14px;
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
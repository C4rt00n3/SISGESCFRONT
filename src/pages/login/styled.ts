import styled from "styled-components";

export const ConteinerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`;

export const FormLogin = styled.form`
    width: 40%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 20px;

    > h3 {
        width: 100%;
    }
`;

export const BoxCetralize = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    margin-inline: 10%;
`;


export const ButtonLogin = styled.button`
    width: 100%;
    height: 50px;

    background-color: var(--brand-color);
    color: var(--withe-color);

    border-radius: 30px;
    border: none;

    padding: 0px;
    padding-inline: 0px;
    :hover {
        opacity: 80%;
    }
`;
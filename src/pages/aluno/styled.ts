import styled from "styled-components";

export const ConteinerAluno = styled.div`
    width: 90vw;
    height: 100vh;

    margin-left: 5%;

    display: flex;
    gap: 52px;
`;

export const MainConteiner = styled.main`
    width: 70%;
    height: 95%;
    margin-top: 2.5%;
`;

export const ListFuctions = styled.ul`
    width: 70%;
    max-width: 590px;

    padding-inline: 7px;
    margin-top: 20px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    padding: 0px;
`;

export const ItenListFunction = styled.li`
    height: 115px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: calc((100% / 3) - 40px);

    border-radius: 18px;

    background-color: rgb(0, 0, 0, 0.5);
    color: var(--light-color);

    > p {
        font-size: 17px;
        font-weight: 600;
    }

    svg {
        width: 100%;
        max-width: 50px;
        height: 50px;

        display: flex;

    }
`;
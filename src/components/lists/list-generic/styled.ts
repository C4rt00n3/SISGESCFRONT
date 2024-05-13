import styled from "styled-components";

export const ConteinerTable = styled.div`
    width: 70%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListTable = styled.ul`
      width: 100%;
    height: 250px;
    overflow: hidden scroll;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 0px;
    flex-direction: column;
`;

export const ListTableIten = styled.li`
    width: calc(100% - 24px);
    height: 40px;
    background-color: var(--gray-secundary);
    margin: 0px;
    border-radius: 30px;
    padding-inline: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        padding-inline: 12px;
        height: 33px;

        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--text-card);

        border: none;
        outline: none;

        background: transparent;

        cursor: pointer;
    }

    p {
        size: 15px;
        color: var(--text-card);
    }
`;
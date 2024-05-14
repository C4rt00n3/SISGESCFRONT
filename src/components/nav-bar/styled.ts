import styled from "styled-components";

export const ConteinerNav = styled.div`
    position: relative;

    width: 25%;
    height: 90%;

        @media (max-width: 900px) {
            display: none;
        }
`;

export const NavBarConteiner = styled.nav`
    min-width: 15%;
    height: 90%;
    padding: 15px;
    background-color: var(--brand-color);
    border-radius: 22px;

    display: flex;
    flex-direction: column;

    position: fixed;
    top: 5%;

    a {
        color: var(--light-color);
        text-decoration: none;
        font-size: 14px;
    }

    span {
        color: var(--gray25);
    }
`;

export const BoxSettings = styled.div`
    width: 100%;

    position: absolute;

    padding-bottom: 12px;

    bottom: 0px;

    display: flex;
    align-items: center;

    gap: 12px;

    svg {
        width: 25px;
        height: 25px;

        color: #fff
    }
`;

export const BoxNavIcon = styled.div`
    display: flex;
    gap: 12px;

    > button {
        background-color: transparent;
        border: none;
        outline: none;
    }
`;

export const BosSchollIcon = styled.div`
    display: flex;
    gap: 12px
`;

export const BoxClose = styled.div`
    a {
        width: fit-content;
    }
`;
import styled from "styled-components";

export const ConteinerLoading = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #0000009a;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 2;

    top: 0px;
    bottom: 0px;

    svg {
        color: #fff;
        animation: rotate 2s linear infinite;
        font-size: 24px;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
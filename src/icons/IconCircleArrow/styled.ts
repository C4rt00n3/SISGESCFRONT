import styled from "styled-components";

export const CircleSvg = styled.svg<{ rotate: number }>`
    transform: rotate(${({ rotate }) => rotate + "deg"}) ;
`;
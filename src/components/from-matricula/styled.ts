import styled from 'styled-components';

export const BoxFormMatricula = styled.form`
   width: 100%;

   > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
   }
`;

export const EnrollmentForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    padding-inline: 14px;
`;

export const ButtonForm = styled.button`
    border-radius: 30px;

    width: 100%;
    padding: 8px;

    color: var(--withe-color);
    border: none;
    font-size: 17px;
    font-weight: 500;
`;

export const BoxButtonDiv = styled.div`
    width: 100%;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
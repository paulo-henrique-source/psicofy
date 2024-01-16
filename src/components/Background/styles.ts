import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: url("./images/psicologa.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    padding-left: 6.5rem;

    @media (max-width: 900px) {
        padding-left: 4.5rem;
    }

    @media (max-width: 835px) {
        padding-left: 2.5rem;
    }

    @media (max-width: 800px) {
        padding-left: 0rem;
    }
`;

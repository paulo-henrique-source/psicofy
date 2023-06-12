import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 2rem 0 2rem 5.25rem;

    section {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 7.1875rem;
    }

    .psicoText {
        font-family: "Archivo Black", sans-serif;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0.19rem rgb(255, 255, 255);
        font-size: 5rem;
        font-weight: 900;
        padding-left: 0.375rem;
    }

    .psicologaName {
        font-family: "Kaushan Script", cursive;
        font-size: 5rem;
        letter-spacing: -0.1875rem;
        top: 2.6rem;
        position: absolute;
    }

    .crpText {
        margin-top: 2.4rem;
        margin-left: 0.5rem;
    }

    .mainDiv {
        border-left: 2px solid white;
        padding-left: 3.75rem;
        margin-bottom: 4.125rem;
    }

    .footerDiv {
        text-align: center;
        display: flex;
        justify-content: center;
        width: 70%;
        flex-direction: column;

        span {
            font-family: "Archivo Black", sans-serif;
        }
    }

    .footerText {
        display: flex;
        flex-direction: row;
        vertical-align: center;
    }

    .socialMedia {
        width: 35%;
        display: flex;
        flex-direction: column;
        gap: 2.25rem;
    }

    .arrowImage {
        position: relative;
        width: 100%;
        div {
            margin: 0;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            width: 100%;
        }
    }

    .bottom-align {
        margin-top: 6rem;
    }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 2rem 0 2rem 5.25rem;

    .mainDiv {
        margin-bottom: 4.125rem;

        span {
            font-size: 2rem;
            display: block;
        }
    }

    .handwrite {
        font-family: "Kaushan Script", cursive;
    }

    .title {
        margin-top: 3rem;
        font-size: 4rem;
    }

    .aboutBody {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        width: 70%;
    }
    .aboutBodyItem {
        display: flex;
        flex-direction: row;
    }
    .aboutBodyItemText {
        width: 50%;
        padding-top: 4.5rem;
    }
    .aboutBodyItemImage {
        width: 50%;
        display: flex;
        justify-content: center;
    }
    .align-right {
        text-align: end;
    }
`;

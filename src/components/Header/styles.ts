import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 980px;
    display: flex;
    padding: 3rem 0 3rem 10.25rem;

    .items {
        display: flex;
        flex-direction: row;
        gap: 80px;
    }
    .item {
        cursor: pointer;
        border-bottom: 1px solid transparent;

        &:hover {
            border-bottom: 1px solid white;
        }
    }
`;

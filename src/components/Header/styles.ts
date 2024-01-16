import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 980px;
    display: flex;
    padding: 3rem 0 3rem 10.25rem;

    .hamburguer-menu {
        display: none;
    }

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

    @media (max-width: 995px) {
        padding: 3rem 0 3rem 5.25rem;
    }

    @media (max-width: 886px) {
        padding: 3rem 0 3rem 1.25rem;
    }

    @media (max-width: 636px) {
        padding: 3rem 0 3rem 3.25rem;
    }

    @media (max-width: 645px) {
        .items {
            display: none;
        }

        .hamburguer-menu {
            display: block;
        }
    }
`;

import styled from 'styled-components';

export const UlPagination = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
`;

export const LiPagination = styled.li`
    list-style: none;
    margin: 0 1rem;
`;

export const ButtonPagination = styled.button`

    height: 30px;
    min-width: 30px;
    padding: 5px;
    border: none;
    color: white;
    background-color: #7C8A6E;

    &:hover {
        color: #7C8A6E;
        background-color: white;
    }

`;

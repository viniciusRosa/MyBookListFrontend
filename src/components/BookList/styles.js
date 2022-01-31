import styled from 'styled-components';

export const ULList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 80%;
`;

export const LIList = styled.li`
    padding: 1.5rem;
    border: 2px solid #7C8A6E;
    border-radius: 10px;
    margin-bottom: 1rem;
    background-color: #f7f7f7;
    list-style: none;
    width: 100%;

`;

export const FavoriteButton = styled.button`

    margin-top: 1rem;
    border: none;
    background-color: #4B5757;
    color: white;
    min-width: 200px;
    height: 2rem;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
        background-color: #58706D;
    }

`;
import styled from 'styled-components';

export const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #4B5757;
    margin-bottom: 0.1rem;
`;

export const Author = styled.p`

    font-size: 1rem;
    color: #898989;
    margin-bottom: 0.5rem;

`;

export const Publisher = styled.div`
   margin-bottom: 1rem;

   & span:first-child {
        font-size: 1rem;
        color: #4B5757;
        font-weight: bold;
        margin-right: 0.4rem;
    }

    & span:last-child {
        font-size: 1rem;
        color: #4B5757;
        margin-right: 0.4rem;
    }
`;

export const Description = styled.p`

    font-size: 1rem;
    color: #4B5757;
    margin-right: 0.4rem;
    line-height: 1.2rem;
    text-align: justify;

`;


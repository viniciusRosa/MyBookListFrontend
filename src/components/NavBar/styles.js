import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #58706d;

    width: 100%;
    height: 4rem;

    margin-bottom: 2rem;
`;

export const NavUl = styled.ul`

    display: flex;
    
`; 

export const NavLi = styled.li`
    margin: 2rem;
    font-size: 1.2rem;
    list-style: none;
`;

export const NaviLink = styled(Link)`
    color: white;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #B0B087
    }
`;
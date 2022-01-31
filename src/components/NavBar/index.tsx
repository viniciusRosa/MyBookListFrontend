import { Container, NavUl, NavLi, NaviLink } from './styles'
import { Link } from 'react-router-dom'

export function NavBar() {
    return (
        <Container>
            <NavUl>
                <NavLi>
                    <NaviLink to="/">Pesquisar</NaviLink>
                </NavLi>
                <NavLi>
                    <NaviLink to="/favorites">Favoritos</NaviLink>
                </NavLi>
            </NavUl>
        </Container>
    )
}
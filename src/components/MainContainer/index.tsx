import { Container } from './styles'

export function MainContainer(props: any) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}
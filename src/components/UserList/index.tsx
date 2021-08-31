// components
import { UserRow } from '../UserRow';

// styles
import { Container, Role } from './styles';

export function UserList() {
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickName="Guilherme Rodz" />

            <Role>Offline - 18</Role>
            <UserRow nickName="Diego Fernandes" isBot/>
        </Container>
    );
}
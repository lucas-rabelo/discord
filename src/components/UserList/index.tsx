// components
import { UserRow } from '../UserRow';

// styles
import { Container, Role } from './styles';

export function UserList() {
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickName="Guilherme Rodz" />

            <Role>Offline - 12</Role>
            <UserRow nickName="Diego Fernandes" />
            <UserRow nickName="Fulano" isBot/>
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" isBot/>
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" isBot/>
            <UserRow nickName="Fulano" />
            <UserRow nickName="Fulano" isBot/>

        </Container>
    );
}
// styles
import { Container, Avatar } from './styles';

interface Props {
    nickName: string;
    isBot?: boolean;
}

export function UserRow({ nickName, isBot }: Props){
    return(
        <Container>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickName}</strong>
            {isBot && <span>bot</span>}
        </Container>
    );
}
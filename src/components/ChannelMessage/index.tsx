// styles
import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles';

interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

export function ChannelMessage({ author, date, content, hasMention, isBot }: Props) {
    return(
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : '' }/>

            <Message>
                <Header>
                    <strong>{author}</strong>
                    { isBot && <span>bot</span> }
                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Message>
        </Container>
    );
}
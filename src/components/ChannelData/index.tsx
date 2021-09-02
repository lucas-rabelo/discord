import { useRef, useEffect } from 'react';

// styles
import { ChannelMessage, Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

export function ChannelData() {

    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messageRef]);

    return(
        <Container>
            <Messages ref={messageRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        key={n}    
                        author="Lucas Rabelo"
                        date="21/08/2021"
                        content="Hojé não é o meu aniversário."
                    />
                ))}
                <ChannelMessage 
                    author="Diego Fernandes"
                    date="21/08/2021"
                    content={
                        <>
                            <Mention>@LucasRabelo</Mention>, me desculpe o equívoco.
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}
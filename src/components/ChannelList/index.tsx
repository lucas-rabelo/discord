// components
import { ChannelButton } from '../ChannelButton';

// styles
import { Container, Category, AddCategoryIcon } from './styles';

export function ChannelList() {
    return(
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="valorant" />
        </Container>
    );
}
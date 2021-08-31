// styles
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

interface Props {
    channelName: string;
    selected?: boolean;
}

export function ChannelButton({ channelName, selected }: Props) {
    return(
        <Container
            className={selected ? 'active': ''}
        >
            <div>
                <HashtagIcon />
                <span>{channelName}</span>
            </div>
            <div className="options">
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    );
}
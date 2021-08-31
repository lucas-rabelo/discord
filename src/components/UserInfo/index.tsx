// styles
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

export function UserInfo() {
    return(
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Guilherme Rodz</strong>
                    <span>#2694</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
}
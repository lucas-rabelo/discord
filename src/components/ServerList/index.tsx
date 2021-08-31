// components
import { ServerButton } from '../ServerButton'; 

// styles
import { Container, Separator } from './styles';

export function ServerList() {
    return(
        <Container>
            <ServerButton isHome/>
            <Separator />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton mentions={12}/>
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton mentions={72}/>
            <ServerButton />
            <ServerButton />
        </Container>
    );
}
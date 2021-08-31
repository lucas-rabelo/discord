// components
import { ChannelInfo } from '../ChannelInfo';
import { ChannelList } from '../ChannelList';
import { ServerList } from '../ServerList';
import { ServerName } from '../ServerName';
import { UserInfo } from '../UserInfo';
import { UserList } from '../UserList';

// styles
import { Grid } from './styles';

export function Layout() {
    return(
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
            <div></div>
            <UserList />
        </Grid>
    );
}
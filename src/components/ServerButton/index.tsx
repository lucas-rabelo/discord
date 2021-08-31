// assets
import LogoSvg from '../../assets/logo.svg';

// styles
import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

export function ServerButton({ selected, isHome, hasNotifications, mentions }: Props) {
    return(
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={LogoSvg} alt='Rocketseat' /> }
        </Button>
    );
}
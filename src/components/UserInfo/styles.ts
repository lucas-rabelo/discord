import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UI;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0,0,0,0.2) 0 1px 0 0;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--gray);

    &::before {
        width: 12px;
        height: 12px;
        background-color: var(--notification);
        position: absolute;
        bottom: 6px;
        left: 95px;
        border-radius: 12px;
        border: 4px solid var(--quaternary); 

        content: '';
    }
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    > strong {
        color: var(--white);
        font-size: 14px;
    }

    > span {
        color: var(--senary);
        font-size: 14px;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
`;

export const MicIcon = styled(Mic)`
    color: var(--senary);
    width: 18px;
    height: 18px;
    cursor: pointer;

    transition: .2s;
    
    &:hover {
        color: var(--white);
    }
`;

export const HeadphoneIcon = styled(Headset)`
    color: var(--senary);
    width: 18px;
    height: 18px;
    cursor: pointer;

    transition: .2s;
    
    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    color: var(--senary);
    width: 18px;
    height: 18px;
    cursor: pointer;

    transition: .2s;
    
    &:hover {
        color: var(--white);
    }
`;
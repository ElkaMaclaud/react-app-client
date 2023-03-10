import React from 'react';
import { Break } from '../../../Break';
import { IconAnon } from '../../../Icons';
import { EColors, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}


export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
   <a 
    href={`https://www.reddit.com/api/v1/authorize?client_id=HTWtjH1kBxmOarlapoMQow&response_type=code&state=random_string&redirect_uri=http://localhost:3000/profile&duration=permanent&scope=read submit identity`}
    className={styles.userBox}
    >
    <div className={styles.avatarBox}>
      {avatarSrc
      ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
      : <IconAnon />
    }
    </div>

    <div className={styles.username}>
      <Break size={12} />
      <Text size={20} color={username ? EColors.black : EColors.gray99}>{username || 'Аноним'}</Text>
    </div>
   </a>
  );
}

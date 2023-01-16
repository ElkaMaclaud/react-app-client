import React from 'react';
import { BlockIcon, WarninIcon } from '../../../Icons';
import { EColors, Text } from '../../../Text';
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <Text size={14} mobileSize={12} color={EColors.gray99}>Скрыть</Text>      
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <WarninIcon />
        <Text size={12} color={EColors.gray99}>Пожаловаться</Text>
      </li>
    </ul>

  );
}

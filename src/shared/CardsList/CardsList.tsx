import React from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card>
        <TextContent />
        <Preview />
        <Menu />
        <Controls />
      </Card>
    </ul>
  );
}

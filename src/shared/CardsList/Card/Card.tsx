import React from 'react';
import styles from './card.css';

interface ICardsProps {
  children?: React.ReactNode;
}
export function Card({ children }: ICardsProps) {
  return (
    <li className={styles.card}>
      {children}
    </li>
  );
}

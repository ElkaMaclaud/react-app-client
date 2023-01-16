import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

/**
 * font-size: 28px;
 * line-height: 33px;
 * 
 * font-size: 20px;
 * line-height: 23px;
 * 
 * font-size: 16px;
 * line-height: 19px;
 * 
 * font-size: 14px;
 * line-height: 16px;
 * 
 * font-size: 12px;
 * line-height: 14px;
 * 
 * font-size: 10px;
 * line-height: 12px;
 * 
 * span, h1234, p, div
 * 
 * colors: 10
 */

export enum EColors {
  black = 'black',
  white = 'white',
  orange ='orange',
  green =  'green',
  greyF4 =  'greyF4',
  greyF3 = 'greyF3',
  greyD9 =  'greyD9',
  greyC4 = 'greyC4', 
  gray99 = 'gray99',
  grey66 = 'gray66',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h3' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const { As = 'span', 
  color = EColors.black, 
  bold = false,
  children, 
  size, 
  mobileSize, 
  tabletSize, 
  desktopSize 
} = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles.bold]: bold },
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}

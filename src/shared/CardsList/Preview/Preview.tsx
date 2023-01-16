import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img  className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/4103731/file/original-ab820d798d635bc4e28233d358833a3f.jpg?compress=1&resize=600x450"
      />
    </div>

  );
}

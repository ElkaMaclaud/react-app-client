import React, { useState } from 'react';
import { Post } from '../../Post';
import styles from './textcontent.css';

export function TextContent() {
  const [isModalOPened, setisModalOpened] = useState(false);

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img 
            className={styles.avatar} 
            src="https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=800x600&vertical=top"
            alt="avatar" 
          />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
        4 часа назад</span>
      </div>
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => { setisModalOpened(true); }}>
        Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности
      </a>   

      {isModalOPened && (
        <Post  
          onClose={() => { setisModalOpened(false); }}
        />
      )}
    </h2>
    </div>
  );  
}

// onClick={ () => {console.log('clicked!!!')} }
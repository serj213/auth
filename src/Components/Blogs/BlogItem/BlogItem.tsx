import React from 'react';

import styles from './blogItem.module.scss';

import blogImg from '../../../assets/images/blog.jpg';

interface BlogItemProp {
  img: string;
  name: string;
  text: string;
}

const BlogItem = ({ img, name, text }: BlogItemProp) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <img src={img} alt="" />
      </div>

      <h5 className={styles.item__name}>{name}</h5>

      <p className={styles.item__text}>{text}</p>
    </div>
  );
};

export default BlogItem;

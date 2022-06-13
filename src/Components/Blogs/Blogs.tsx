import React from 'react';

import BlogItem from './BlogItem/BlogItem';

import styles from './blogs.module.scss';

import blogImg from '../../assets/images/blog.jpg';

const Blogs = () => {
  const dataBlog = [
    {
      id: 0,
      img: blogImg,
      name: 'Какое то название статьи',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur fuga impedit fugiat
        praesentium vel repudiandae iure. Ipsam, ab ullam soluta officiis at ipsum earum doloremque
        nesciunt consequatur quisquam expedita?`,
    },

    {
      id: 1,
      img: blogImg,
      name: 'Вторая интересная статья',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur fuga impedit fugiat
          praesentium vel repudiandae iure. Ipsam, ab ullam soluta officiis at ipsum earum doloremque
          nesciunt consequatur quisquam expedita?`,
    },

    {
      id: 2,
      img: blogImg,
      name: 'третья интересная статья',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur fuga impedit fugiat
          praesentium vel repudiandae iure. Ipsam, ab ullam soluta officiis at ipsum earum doloremque
          nesciunt consequatur quisquam expedita?`,
    },

    {
      id: 3,
      img: blogImg,
      name: 'Четвёртная интересная статья',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur fuga impedit fugiat
          praesentium vel repudiandae iure. Ipsam, ab ullam soluta officiis at ipsum earum doloremque
          nesciunt consequatur quisquam expedita?`,
    },

    {
      id: 4,
      img: blogImg,
      name: 'Пятое название статьи',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur fuga impedit fugiat
          praesentium vel repudiandae iure. Ipsam, ab ullam soluta officiis at ipsum earum doloremque
          nesciunt consequatur quisquam expedita?`,
    },

    {
      id: 5,
      img: blogImg,
      name: 'Шестое интересная статья',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur fuga impedit fugiat
            praesentium vel repudiandae iure. Ipsam, ab ullam soluta officiis at ipsum earum doloremque
            nesciunt consequatur quisquam expedita?`,
    },

    {
      id: 6,
      img: blogImg,
      name: 'Седьмое интересная статья',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur fuga impedit fugiat
            praesentium vel repudiandae iure. Ipsam, ab ullam soluta officiis at ipsum earum doloremque
            nesciunt consequatur quisquam expedita?`,
    },

    {
      id: 7,
      img: blogImg,
      name: 'Восьмое интересная статья',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur fuga impedit fugiat
            praesentium vel repudiandae iure. Ipsam, ab ullam soluta officiis at ipsum earum doloremque
            nesciunt consequatur quisquam expedita?`,
    },
  ];

  return (
    <div className={styles.blogs}>
      {dataBlog.length > 0 &&
        dataBlog.map(({ id, img, name, text }) => {
          return <BlogItem key={id} img={img} name={name} text={text} />;
        })}
    </div>
  );
};

export default Blogs;

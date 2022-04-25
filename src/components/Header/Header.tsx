import React from 'react';
import s from 'components/Header/style/Header.module.css'
import mainImage from 'assets/image/mainImg.jpg'
import {AuthorInfo} from 'enum/';

export const Header = () => {
  return (
    <div className={s.headerContainer}>
      <div className={s.imgContainer}>
        <img src={mainImage} alt='profileImage'/>
      </div>
      <div className={s.authorDescription}>
        <span className={s.authorName}>{AuthorInfo.AuthorName}</span>
        <span className={s.authorPosition}>{AuthorInfo.AuthorPosition}</span>
        <div className={s.authorOffer}>
          <p>{AuthorInfo.AuthorAbout}</p>
        </div>
      </div>

    </div>
  );
};


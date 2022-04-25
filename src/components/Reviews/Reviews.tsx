import React from 'react';
import s from 'components/Reviews/styles/Reviews.module.css'
import likeIcon from 'assets/image/likeIcon.png'
import commentIcon from 'assets/image/commentIcon.png'
import {ReviewsInfo} from 'enum/';

export const Reviews = () => {
  return (
    <div className={s.reviewsContainer}>
      <div className={s.reviewsTitle}>
        <span>{ReviewsInfo.Latest}</span>
        <span className={s.imitation}>{ReviewsInfo.AllReviews}</span>
      </div>
      <div className={s.reviewsCount}>
        <span><img src={likeIcon} alt="likeHeartIcon"/> {ReviewsInfo.LikesCount}</span>
        <span><img src={commentIcon} alt="commentIcon"/> {ReviewsInfo.CommentsCount}</span>
      </div>
    </div>
  );
};


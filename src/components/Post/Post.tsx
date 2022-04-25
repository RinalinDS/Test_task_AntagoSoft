import React from 'react';
import {PostPropsType} from '../../types';
import s from './Post.module.css'

export const Post: React.FC<PostPropsType> = ({name, date, message}) => {
    return (
        <div className={s.postsContainer}>
            <span className={s.name}>{name}</span>
            <span className={s.date}>{date}</span>
            <div className={s.windowTriangle}/>
            <div className={s.postWindow}>
                <p>{message}</p>
            </div>
        </div>
    );
};


import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from 'components/AddPostForm/style/AddPostForm.module.css'
import {AddPostFormPropsType} from 'types';
import {AddPostFormInfo} from 'enum/';


export const AddPostForm: React.FC<AddPostFormPropsType> = ({newPostText, setNewPostText, addPost}) => {
  const onTextAreaChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostText(event.currentTarget.value)
  }
  const addPostFlow = () => {
    if (newPostText.trim()) {
      addPost()
      setNewPostText('')
    }
  }
  const onClickHandler = () => {
    addPostFlow()
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter' && e.ctrlKey) {
      addPostFlow()
    }
  }
  return (
    <div className={s.addPostContainer}>
      <textarea className={s.addPostForm} name='message' value={newPostText} onChange={onTextAreaChangeHandler}
                onKeyPress={onKeyPressHandler}/>
      <button className={s.addPostBtn} onClick={onClickHandler}>{AddPostFormInfo.ButtonName}</button>
    </div>
  );
};


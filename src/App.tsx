import React, {useState} from 'react';
import {v1} from 'uuid';
import s from 'styles/App.module.css';
import {AddPostForm} from 'components/AddPostForm/AddPostForm';
import {Post} from 'components/Post/Post';
import {useAppDispatch, useAppSelector} from 'hooks/useAppDispatchAndSelector';
import {addNewPost} from 'store/reducers/postsSlice';
import {PostType} from 'types';
import {DateFunction, NameRandomizer} from 'utils';
import {Header} from 'components/Header/Header';
import {Reviews} from 'components/Reviews/Reviews';
import {Services} from 'components/Services/Services';


export const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.posts)
  const [newPostText, setNewPostText] = useState<string>('')

  const addPost = () => {
    const newPost: PostType = {
      id: v1(),
      message: newPostText,
      name: NameRandomizer(),
      date: DateFunction()
    }
    dispatch(addNewPost(newPost))
  }

  const mappedPosts = posts.map(m => <Post name={m.name} message={m.message} date={m.date} key={m.id}/>)


  return (
    <div className={s.App}>
      <Header/>
      <Services/>
      <Reviews/>
      {mappedPosts}
      <AddPostForm newPostText={newPostText} setNewPostText={setNewPostText} addPost={addPost}/>
    </div>
  );
}



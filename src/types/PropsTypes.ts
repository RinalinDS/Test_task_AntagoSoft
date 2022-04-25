export type AddPostFormPropsType = {
  newPostText: string
  setNewPostText: (value: string) => void
  addPost: () => void
}

export type PostPropsType = {
  name: string
  date: string
  message: string
}

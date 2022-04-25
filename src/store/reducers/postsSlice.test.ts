import {PostType} from 'types';
import {v1} from 'uuid';
import {addNewPost, postsSlice} from 'store/reducers/postsSlice';
import {DateFunction, NameRandomizer} from 'utils';


let initialState: Array<PostType>;

beforeEach(() => {
  initialState = [
    {
      id: v1(),
      name: 'Samuel Jackson',
      message: 'Hey Eva! You\'re cool. Nice pic!',
      date: '13 Apr 2022'
    },
    {
      id: v1(),
      name: 'Angela Deimon',
      message: ' Thanks for your services! We really liked the ocean view room.',
      date: '10 Apr 2022'
    },
    {
      id: v1(),
      name: 'Ronald Harris',
      message: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
      date: '8 Apr 2022'
    }]
})


test('correct  message should be added', () => {
  const newMessage = 'Why'

  const endState = postsSlice(initialState, addNewPost({
    id: v1(),
    message: newMessage,
    name: NameRandomizer(),
    date: DateFunction()
  }))

  expect(endState.length).toBe(4);
  expect(endState[0].message).toBe('Why');


});



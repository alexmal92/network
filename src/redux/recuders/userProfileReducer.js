import { TEXT_TYPING, CREATE_POST, DELETE_POST, GET_USER_PROFILE, SET_USER_STATUS, SET_USER_PHOTO, SET_USER_INFO } from "../typeAction";

const initialState = {
  user: null,
  status: '',
  text: '',
  posts: [
    { postId: 1, postImg: 'https://avatars.mds.yandex.net/i?id=52e15531ef67d285cc2a2eddf8bff405-5094251-images-thumbs&n=13&exp=1', postMessage: 'Сначала было хорошо, потом очень хорошо, а потом так хорошо, что до сих пор плохо.' },
    { postId: 2, postImg: 'https://avatars.mds.yandex.net/i?id=52e15531ef67d285cc2a2eddf8bff405-5094251-images-thumbs&n=13&exp=1', postMessage: 'Терпение – великая сила. Когда лопнет… ' },
    { postId: 3, postImg: 'https://avatars.mds.yandex.net/i?id=52e15531ef67d285cc2a2eddf8bff405-5094251-images-thumbs&n=13&exp=1', postMessage: 'О, как морозно в январе, Когда удобства во дворе!…' },
    { postId: 4, postImg: 'https://avatars.mds.yandex.net/i?id=52e15531ef67d285cc2a2eddf8bff405-5094251-images-thumbs&n=13&exp=1', postMessage: 'Кто рано встает, тому можно еще поспать. Рано же встал.' },
    { postId: 5, postImg: 'https://avatars.mds.yandex.net/i?id=52e15531ef67d285cc2a2eddf8bff405-5094251-images-thumbs&n=13&exp=1', postMessage: 'Хорошо там, где меня нет… Но ничего, я и туда доберусь!' },
    { postId: 6, postImg: 'https://avatars.mds.yandex.net/i?id=52e15531ef67d285cc2a2eddf8bff405-5094251-images-thumbs&n=13&exp=1', postMessage: 'Трудно понять китайцев и женщин.' }
  ],
  isFetching: false
}


export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_TYPING:
      return {
        ...state,
        text: action.text
      }
    case CREATE_POST:
      let id = state.posts.length + 1
      return {
        ...state,
        posts: [...state.posts, { postId: id, postImg: 'https://avatars.mds.yandex.net/i?id=52e15531ef67d285cc2a2eddf8bff405-5094251-images-thumbs&n=13&exp=1', postMessage: action.text }],
      }
    case DELETE_POST:
      const newPosts = state.posts.filter((e) => e.postId !== action.id)
      return {
        ...state,
        posts: newPosts
      }
    case GET_USER_PROFILE:
      return {
        ...state,
        user: action.payload
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.payload
      }
    case SET_USER_PHOTO:
      return {
        ...state,
        user: {
          ...state.user, 
          photos: action.payload}
      }
    case SET_USER_INFO:
      return {
        ...state,
        user: {
          ...state.user, 
          aboutMe: action.payload}
      }
    default:
      return state
  }
}
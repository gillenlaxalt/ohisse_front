import {
  CHANGE_VALUE, SAVE_CURRENT_COMMENTS, SAVE_NEW_MESSAGE,
} from '../actions/comments';

const initialState = {
  currentComments: [
    {
      id: 3,
      content: 'belle vue',
      pseudo: 'kiki',
      id_user: 3,
      id_spot: 1,
      created_at: '2022-05-11T08:06:22.000000Z',
      updated_at: '2022-05-11T08:06:22.000000Z',
    },
    {
      id: 2,
      content: 'superbe ambiance',
      pseudo: 'toto',
      id_user: 1,
      id_spot: 3,
      created_at: '2022-05-11T08:03:46.000000Z',
      updated_at: '2022-05-11T08:03:46.000000Z',
    },
  ],

  newMessageContent: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        newMessageContent: action.value,
      };
    case SAVE_NEW_MESSAGE:
      return {
        ...state,
        newMessageContent: '',
        currentComments: [
          action.message,
          ...state.currentComments,
        ],
      };

    case SAVE_CURRENT_COMMENTS:
      return {
        ...state,
        currentComments: [...action.comments],
      };
    default:
      return state;
  }
}

export default reducer;

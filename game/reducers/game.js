import {
  UPDATE_CHARACTOR_POSITION,
} from '../actions/game.js';

export default (state = {
  position: {
    horizontalOffset: 0,
  },
}, action) => {
  switch (action.type) {
    case UPDATE_CHARACTOR_POSITION:
      return {
        ...state,
        position: {
          ...state.position,
          ...action.position,
        },
      };

    default:
      return state;
  }
};

import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
  } from '../actions/actionsCommon'

function selectSubreddit(state = 'reactjs', action) {
    switch(action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

export default selectSubreddit

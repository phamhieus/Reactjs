import fecth from 'cross-fecth'
import * as All from './actionsCommon'

export function selectSubreddit(subreddit) {
    return {
        type: All.SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: All.INVALIDATE_SUBREDDIT,
        subreddit
    }
}

export function requestPosts(subreddit) {
    return {
        type: All.REQUEST_POSTS,
        subreddit
    }
}

export function recievePost(subreddit, json) {
    return {
        type: All.RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        reeceiviedAt: Date.now()
    }
}

function fecthPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(resp => resp.json())
            .then(json => dispatch(recievePost(subreddit, json)))
    }
}

function shouldFeacthPosts(state, subreddit) {
    const post = state.postsBySubreddit[subreddit]
    if (!post) {
        return true
    } else if (post.isFetching) {
        return false
    } else {
        return post.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if(shouldFeacthPosts(getState(), subreddit))
            return dispatch(fecthPosts(subreddit))
    }
}

import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchCommentItem } from '../api/index.js'

export default  {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then( response => {
            context.commit('SET_NEWS', response.data);
            })
        .catch(error => console.log(error))
    },
    FETCH_ASKS({commit}) {
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASKS', data);
        })
        .catch(error => console.log(error))
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data);
        })
        .catch(error => console.log(error))
    },
    FETCH_USER({commit}, id) {
        fetchUserInfo(id)
        .then(({data}) => commit('SET_USER', data))
        .catch(error => console.log(error))
    },
    FETCH_COMMENT({commit}, id) {
        fetchCommentItem(id)
        .then(({data}) => commit('SET_COMMENT', data))
        .catch(error => console.log(error))
    }
}
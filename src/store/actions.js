import { fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js'

export default  {
    async FETCH_LIST({commit}, pageName) {
        const res = await fetchList(pageName);
        commit('SET_LIST', res.data);
        return res;
    },
    async FETCH_USER({commit}, id) {
        const res = await fetchUserInfo(id);
        commit('SET_USER', res.data);
    },
    async FETCH_COMMENT({commit}, id) {
        const res = await fetchCommentItem(id);
        commit('SET_COMMENT', res.data);
    }
}
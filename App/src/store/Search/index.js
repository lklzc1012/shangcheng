import {reqSearchInfo} from "@/api"

const state = {
  searchInfo: {}
}

const mutations = {
  GETSEARCHINFO(state, searchInfo) {
    state.searchInfo = searchInfo
  }
}

const actions = {
  // params参数是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
  async getSearchInfo({commit}, params = {}) {
    let result = await reqSearchInfo(params)
    if (result.code == 200) {
      commit('GETSEARCHINFO', result.data)
    }
  }
}

const getters = {
  // state为当前仓库的state而非大仓库state，少search路径
  goodsList(state) {
    // 当数据返回后才能提取到goodsList，否则searchInfo为空对象，会报undefined，如无网络或网络慢
    // 此时需要至少将计算新属性设置为一个空数组，保证遍历
    return state.searchInfo.goodsList || []
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList || []
  },
  attrsList(state) {
    return state.searchInfo.attrsList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

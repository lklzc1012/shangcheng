import {reqCategoryList, reqBannerList, reqFloorList} from "@/api"

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  FLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  async getCategoryList({commit}) {
    // 通过async与await拿到成功的数据
    let result = await reqCategoryList()
    if (result.code == 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async getBannerList({commit}) {
    let result2 = await reqBannerList()
    if (result2.code == 200) {
      commit('BANNERLIST', result2.data)
    }
  },
  async getFloorList({commit}) {
    let result3 = await reqFloorList()
    if (result3.code == 200) {
      commit('FLOORLIST', result3.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}

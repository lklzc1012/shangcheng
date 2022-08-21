import {reqDetailInfo} from "@/api"
import {getUUID} from '@/utils/uuid_token'

const state = {
  detailInfo: {},
  uuid_token: getUUID()
}

const mutations = {
  GETDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo
  }
}

const actions = {
  // 获取产品详情信息
  async getDetailInfo({commit}, skuId) {
    let result = await reqDetailInfo(skuId)
    if (result.code == 200) {
      commit('GETDETAILINFO', result.data)
    }
  }
}

const getters = {
  categoryView(state){
    return state.detailInfo.categoryView || {}
  },
  skuInfo(state){
    return state.detailInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.detailInfo.spuSaleAttrList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

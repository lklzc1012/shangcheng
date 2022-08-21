import {reqUserAddressList} from "@/api"

const state = {
  userAddressList: []
}

const mutations = {
  USERADDRESSLIST(state, userAddressList) {
    state.userAddressList = userAddressList
  }
}

const actions = {
  async userAddressList({commit}){
    let result = await reqUserAddressList()
    if (result.code == 200) {
      commit('USERADDRESSLIST', result.data)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}

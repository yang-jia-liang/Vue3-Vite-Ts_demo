import { defineStore } from 'pinia'


interface UserInfo {
  id?: string,
  name?: string,
}

// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('user', {
  // 必须箭头函数
  state: () => ({
    userInfo: {} as UserInfo,
    permission: [] as string[]
  }),

  // 只读、计算属性、getters间相互调用
  getters: {},

  // 处理业务逻辑、可修改状态、不缓存、可调用getters和actions
  actions: {
    setUserInfo(data: UserInfo) {
      this.userInfo = data
    },

    setUserPermission(data: string[]) {
      this.permission = data
    },

    initUser() {
      this.userInfo = {}
      this.permission = []
    }
  }
})

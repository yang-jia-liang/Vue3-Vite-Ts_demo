<template>
  <el-button @click="login">登录</el-button>
</template>

<script setup lang="ts">
  import * as commonHttp from '@/api/common'
  import { dataUtils, tokenUtils } from '@/utils/common'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const login = () => {
    commonHttp
      .login({
        phone: '13800138000',
        password: dataUtils.encrypt('ql123456'),
        type: 2
      })
      .then(response => {
        tokenUtils.set((response as { access_token: string }).access_token)

        router.replace('/home')
      })
  }
</script>

<style scoped></style>

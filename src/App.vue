<template>
  <Header />

  <el-container>
    <el-aside>
      <Aside />
    </el-aside>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Header from '@/components/layout/header.vue'
import Aside from '@/components/layout/aside.vue'
</script>

<style scoped></style>

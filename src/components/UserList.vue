<script setup lang="ts">
import UserItem from './UserItem.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

userStore.fetchUsers()

const users = userStore.state

</script>

<template>
  <UserItem v-for="user in users" :user="user" :key="user.id"></UserItem>
</template>

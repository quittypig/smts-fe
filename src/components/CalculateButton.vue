<script setup lang="ts">
import { useUserStore, UserDto } from '@/stores/userStore'

defineProps({
  user: UserDto
})

const { increaseStars, decreaseStars } = useUserStore()
</script>

<template>
  <div>
    <button @click="increaseStars(user!)">+</button>
    <button @click="decreaseStars(user!)">-</button>
  </div>
</template>

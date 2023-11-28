import { reactive } from 'vue'
import { defineStore } from 'pinia'
import users from '@/assets/json/users.json'

export const useUserStore = defineStore('user', () => {
  const state: UserDto[] = reactive([])

  const fetchUsers = () => {
    users.forEach((user) => {
      state.push(new UserDto(user.id, user.name, user.stars))
    })
  }

  const increaseStars = (user: UserDto) => {
    user.stars++
  }
  const decreaseStars = (user: UserDto) => {
    if (user.stars <= 0) {
      return
    }

    user.stars--
  }

  return { state, fetchUsers, increaseStars, decreaseStars }
})

export class UserDto {
  id: number

  name: string

  stars: number

  constructor(id: number, name: string, stars: number = 0) {
    this.id = id
    this.name = name
    this.stars = stars
  }
}

import { defineStore } from 'pinia'

export const useUiStore = defineStore('uiStore', {
  state: () => ({
    active: window.innerWidth >= 1098,
  }),
  actions: {
    toggleActive() {
      return (this.active = !this.active)
    },
    updateMedia() {
      this.active = window.innerWidth >= 1098
    },
  },
})

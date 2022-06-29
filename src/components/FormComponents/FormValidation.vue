<template>
  <form @submit.prevent="middleware" novalidate>
    <slot
      :isValidated="isValidated"
    />
  </form>
</template>

<script>
export default {
  name: "FormValidation",
  data() {
    return {
      isValidated: false,
    }
  },
  inject: ['addNotification'],
  methods: {
    middleware(event) {
      if (!event.target.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        this.addNotification('error', 'Помилка', 'Перевірте, чи всі поля правильно заповнено!')
        this.isValidated = true
      } else {
        this.$emit('submitted');
      }
    },
  },
  emits: ['submitted'],
}
</script>

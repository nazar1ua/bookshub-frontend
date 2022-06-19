<template>
  <form @submit.prevent="middleware" class="needs-validation" novalidate>
    <slot/>
  </form>
</template>

<script>
import {errorToast} from "@/helpers/showToast";

export default {
  name: "FormValidation",
  methods: {
    middleware(event) {
      if (!event.target.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        errorToast('Помилка', 'Перевірте, чи всі поля правильно заповнено!')
      } else {
        this.$emit('submitted');
      }
      event.target.classList.add('was-validated')
    },
  },
  emits: ['submitted'],
}
</script>

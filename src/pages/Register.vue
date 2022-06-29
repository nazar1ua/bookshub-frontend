<template>
  <div class="bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Зареєструйте свій акаунт</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form-validation v-slot="{isValidated}" @submitted="register" class="space-y-6">
          <form-input v-model="formData.name" name="name" type="text" autocomplete="name" :validated="isValidated" minlength="3" error="Довжина імені має бути більшою за 3 символи">Ім'я</form-input>
          <form-input v-model="formData.email" name="email" type="email" autocomplete="email" :required="true" :validated="isValidated" error="Введіть правильну електронну адресу">Електронна адреса</form-input>
          <form-input v-model="formData.password" name="password" type="password" autocomplete="current-password" :required="true" minlength="8" :validated="isValidated" error="Пароль має бути не меншим, ніж 8 символів">Пароль</form-input>

          <form-button type="submit">Зареєструватись</form-button>
        </form-validation>
      </div>
    </div>
  </div>
</template>

<script>
import FormValidation from '@/components/FormComponents/FormValidation.vue'
import FormButton from '@/components/FormComponents/FormButton.vue'
import FormInput from '@/components/FormComponents/FormInput.vue'

export default {
  name: "Register",
  components: { FormValidation, FormButton, FormInput },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    register() {
    },
  }
}
</script>

<style scoped>

</style>
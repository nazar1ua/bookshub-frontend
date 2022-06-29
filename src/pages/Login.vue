<template>
  <div class="bg-gray-50 min-h-page flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Ввійдіть в свій акаунт</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form-validation v-slot="{isValidated}" @submitted="login" class="space-y-6">
          <form-input v-model="formData.email" name="email" type="email" autocomplete="email" :required="true" :validated="isValidated" error="Введіть правильну електронну адресу">Електронна адреса</form-input>
          <form-input v-model="formData.password" name="password" type="password" autocomplete="current-password" :required="true" minlength="8" :validated="isValidated" error="Пароль має бути не меншим, ніж 8 символів">Пароль</form-input>
          
          <form-button type="submit">Ввійти</form-button>
        </form-validation>
      </div>
    </div>
  </div>
</template>

<script>
import FormValidation from "@/components/FormComponents/FormValidation.vue";
import FormInput from "@/components/FormComponents/FormInput.vue";
import FormButton from "@/components/FormComponents/FormButton.vue";

export default {
  name: "Login",
  components: { FormValidation, FormInput, FormButton },
  inject: ['addNotification'],
  data() {
    return {
      formData: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    login() {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(this.formData)
      }

      fetch("http://localhost:8081/users/login", requestOptions)
          .then(r => r.json())
          .then(data => {
            if (data.error) {
              this.addNotification('error', 'Помилка', data.message)
            } else {
              this.addNotification('success', 'Успіх', data.message)
            }
          })
    },
  },
}
</script>

<style scoped>

</style>
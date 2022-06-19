<template>
  <div class="container text-center">
    <main class="form-signin w-100 m-auto">
      <form-validation @submitted="login">
        <img class="mb-4" src="//getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">{{ $tc('nav.login', 0) }}</h1>

        <div class="form-floating">
          <input type="email" class="form-control" v-model="formData.email" id="floatingInput" :placeholder="$t('authorization.email')" required>
          <label for="floatingInput">{{ $t('authorization.email') }}</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" v-model="formData.password" id="floatingPassword" :placeholder="$t('authorization.password')" required>
          <label for="floatingPassword">{{ $t('authorization.password') }}</label>
        </div>

        <div class="form-check mb-3 text-start">
          <input type="checkbox" class="form-check-input" id="rememberCheck">
          <label class="form-check-label" for="rememberCheck">{{ $t('authorization.rememberMe') }}</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">{{ $tc('nav.login', 1) }}</button>
      </form-validation>
    </main>
  </div>
</template>

<script>
import FormValidation from "../components/FormValidation.vue";
import {errorToast, successToast} from "@/helpers/showToast";

export default {
  name: "Login",
  components: {FormValidation},
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
              errorToast('Помилка', data.message)
            } else {
              successToast('Успіх', data.message)
            }
          })
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
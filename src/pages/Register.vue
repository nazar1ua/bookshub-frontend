<template>
  <div class="container text-center">
    <main class="form-signin w-100 m-auto">
      <form-validation @submitted="register">
        <img class="mb-4" src="//getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">{{ $tc('nav.register', 0) }}</h1>

        <div class="form-floating">
          <input type="text" class="form-control" id="floatingName" :placeholder="$t('authorization.name')" required minlength="3">
          <label for="floatingName">{{$t('authorization.name')}}</label>
        </div>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" :placeholder="$t('authorization.email')" required>
          <label for="floatingInput">{{ $t('authorization.email') }}</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" :placeholder="$t('authorization.password')" required minlength="8">
          <label for="floatingPassword">{{ $t('authorization.password') }}</label>
        </div>

        <div class="form-check mb-3 text-start">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">{{ $t('authorization.rememberMe') }}</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">{{ $tc('nav.register', 1) }}</button>
      </form-validation>
    </main>
  </div>
</template>

<script>
import FormValidation from '../components/FormValidation.vue'

export default {
  name: "Register",
  components: {FormValidation},
  methods: {
    register() {
      console.log("yes")
    },
  }
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

.form-signin input[type="email"],
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="email"],
.form-signin input[type="password"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
}
</style>
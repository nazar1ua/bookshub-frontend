<template>
  <header class="p-3 mb-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-lg-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap-light"></use>
          </svg>
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">{{$t('nav.pages.home')}}</a></li>
          <!--<li><a href="#" class="nav-link px-2 text-white">Features</a></li>-->
        </ul>

        <!--<div class="locale-changer col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <select v-model="$i18n.locale" class="form-select form-control-dark text-white bg-dark">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ $i18n.messages[locale].name }}</option>
          </select>
        </div>-->

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-white bg-dark" :placeholder="$t('nav.search') + '...'"
                 :aria-label="$t('nav.search')">
        </form>

        <div v-if="login" class="dropdown text-end">
          <a id="dropdownUser1" href="#" class="d-block link-light text-decoration-none dropdown-toggle"
             data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        <div v-else class="text-end">
          <router-link to="/login" class="btn btn-outline-light me-2">{{$tc("nav.login", 0)}}</router-link>
          <router-link to="/register" class="btn btn-warning">{{$tc("nav.register", 0)}}</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    login: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.form-select.form-control-dark {
  background-image: url("data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='%23f8f9fa' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>");
}

.form-control-dark {
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}
</style>

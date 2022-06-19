<template>
  <div class="bg-dark mt-5">
    <div class="container">
      <footer class="py-5 text-white">
        <div class="row">
          <!--<div class="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
            </ul>
          </div>-->

          <div class="col-md-5 offset-md-7 mb-3">
            <form class="text-light">
              <h5>{{$t('footer.mailing.title')}}</h5>
              <p>{{$t('footer.mailing.subtitle')}}</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">{{$t('footer.mailing.placeholder')}}</label>
                <input id="newsletter1" type="text" class="form-control form-control-dark text-white bg-dark" :placeholder="$t('footer.mailing.placeholder')">
                <button class="btn btn-outline-warning" type="button">{{$t('footer.mailing.button')}}</button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-light">
          <p>© 2022 Company, Inc. {{$t('footer.rights')}}.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-light" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#twitter"></use>
              </svg>
            </a></li>
            <li class="ms-3"><a class="link-light" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#instagram"></use>
              </svg>
            </a></li>
            <li class="ms-3"><a class="link-light" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#facebook"></use>
              </svg>
            </a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped>
.form-control-dark {
  border-color: var(--bs-gray);
}

.form-control-dark:focus {
  border-color: #fff;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}
</style>

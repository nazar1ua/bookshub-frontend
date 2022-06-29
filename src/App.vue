<template>
  <Header/>
  <RouterView/>
  <Footer/>
  <Notifications :notifications="notifications"/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Notifications from "@/components/Notifications/Notifications.vue";

export default {
  name: "App",
  components: { Footer, Header, Notifications },
  data() {
    return {
      notifications: [],
    }
  },
  methods: {
    addNotification(type, title, text) {
      const notification = {
        id: Math.random(),
        type,
        title,
        text,
        status: '',
      }

      this.notifications.push(notification)
      setTimeout(() => {
        this.notifications[this.notifications.indexOf(notification)].status = 'removing'
      }, 5000)
    },
  },
  provide() {
    return {
      addNotification: this.addNotification,
    }
  },
}
</script>

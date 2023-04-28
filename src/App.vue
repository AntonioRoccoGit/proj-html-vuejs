<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppMainSection from './components/AppMainSection.vue';
import AppWhyUs from './components/AppWhyUs.vue';
import AppOurBlog from './components/AppOurBlog.vue';
import { store } from "./store";
export default {
  name: "AppVue",
  components: {
    AppHeader,
    AppJumbo,
    AppMainSection,
    AppWhyUs,
    AppOurBlog
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <AppHeader :navLink="store.navBarLink" />
  <AppJumbo />
  <AppMainSection />
  <AppWhyUs />
  <AppOurBlog />
</template>

<style lang="scss">
@use "./scss/general.scss";
</style>

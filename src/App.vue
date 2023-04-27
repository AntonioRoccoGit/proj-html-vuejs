<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppMainSection from './components/AppMainSection.vue';
import AppWhyUs from './components/AppWhyUs.vue';
export default {
  name: "AppVue",
  components: {
    AppHeader,
    AppJumbo,
    AppMainSection,
    AppWhyUs
  },
  data() {
    return {
      navBarLink: {
        "Home": ["esempio1", "esempio2"],
        "Pages": ["esempio1", "esempio2"],
        "Courses": ["esempio1", "esempio2"],
        "Features": ["esempio1", "esempio2"],
        "Blog": ["esempio1", "esempio2"],
        "Shop": ["esempio1", "esempio2"]
      },
    }
  }
}
</script>

<template>
  <AppHeader :navLink="navBarLink" />
  <AppJumbo />
  <AppMainSection />
  <AppWhyUs />
</template>

<style lang="scss">
@use "./scss/general.scss";
</style>

<template>

  <v-app light>
    <Nav :style="navStyle"></Nav>
    <v-content>
      <router-view></router-view>
      <v-footer dark color="primary lighten-1">
        <v-layout justify-center row wrap>
          <div>&copy; {{ new Date().getFullYear() }} - <strong>
              <a href="/">Geocoo</a> &
              <a target="_blank" href="https://steeeeps.cn">steeeeps</a>
            </strong>
          </div>
        </v-layout>
      </v-footer>

    </v-content>

  </v-app>

</template>

<script>
import Tools from './pages/Tools.vue'
import Home from './pages/Home.vue'

import Nav from './components/Nav.vue'
export default {
  name: 'app',
  components: {
    Nav,
    Tools,
    Home
  },
  data () {
    return {
      navStyle: ""
    }
  },
  methods: {
    changeNavStyle (type) {
      if (type == "/") {
        this.navStyle = "background-color: transparent !important;position: absolute;z-index: 1;box-shadow: none;";
      } else {
        this.navStyle = '';
      }

    }
  },
  watch: {
    '$route' (to, from) {
      let path = to.path;
      this.changeNavStyle(path);
    }
  },
  mounted () {
    let path = this.$route.path;
    this.changeNavStyle(path);
  }
}
</script>

<style scoped>
.homenav {
  background-color: transparent !important;
  position: absolute;
  z-index: 1;
  box-shadow: none;
}
.v-footer a {
  color: #fff;
  text-decoration: none;
}
</style>
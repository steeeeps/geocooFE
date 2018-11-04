<template>
    <v-toolbar dark color="primary lighten-1">
        <v-toolbar-title>
            <router-link to="/" class="logo-a"> <img src="./../assets/geocoo.png" class="logo" /><span class="beta">beta</span></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="/tools">
                <v-btn flat>
                    数据管理工具
                </v-btn>
            </router-link>
            <router-link to="/earthviews">
                <v-btn flat>
                    Earth views
                </v-btn>
            </router-link>
            <!-- <v-btn flat>帮助</v-btn> -->
        </v-toolbar-items>
    </v-toolbar>

</template>
<style scoped>
.logo-a {
  background: none !important;
}
.logo {
  max-height: 40px;
  margin-top: 25px;
}

.beta {
  font-size: 14px;
  color: #ffd04b;
  margin-left: -10px;
  position: relative;
  top: -20px;
}

a {
  color: #fff;
  text-decoration: none;
  line-height: 64px;
}

.router-link-active {
  background-color: #74b6f74f;
}
</style>
<script>
export default {

}
</script>
<template>
  <v-app>
    <v-navigation-drawer v-model="showLeftNavigation" app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar
        app
    >
      <template v-slot:img="{ props }">
        <v-img
            gradient="to top right, rgba(255,255,255,1), rgba(255,255,255,.8)"
            v-bind="props"
        ></v-img>
      </template>
      <v-container fill-height>
        <v-avatar class='mr-5'>
          <v-icon color="primary" x-large>mdi-application</v-icon>
        </v-avatar>
        <v-app-bar-nav-icon v-if="isMobile"></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-5">
          Laravel Sanctum Vuetify SPA
        </v-toolbar-title>

        <template v-if="isAuthenticated">
          <menu-component></menu-component>
        </template>

        <v-spacer></v-spacer>
        <template v-if="isAuthenticated">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon @click="logout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>

        </template>

        <template v-if="!isAuthenticated">
          <v-btn text @click="$router.push('/login').catch(()=>{})">
            Login
          </v-btn>
          <v-btn text @click="$router.push('/register').catch(()=>{})">
            Register
          </v-btn>
        </template>


      </v-container>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main id="mainmain">
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <v-container>
        &copy; {{ year }} Laravel Sanctum Vuetify SPA Starter
      </v-container>
    </v-footer>
  </v-app>


</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import MenuComponent from '@/components/Menu';

  export default {
    name: 'App',
    components: {
      MenuComponent
    },
    props: {},
    data () {
      return {
        activeTab: 1,

        showLeftNavigation: false
      };
    },
    computed: {
      ...mapGetters('user', {
        isAuthenticated: 'isAuthenticated'
      }),
      isMobile () {
        return false;
      },
      year () {
        return new Date().getFullYear();
      }
    },
    methods: {
      ...mapActions('user', {
        deauthenticate: 'deauthenticate'
      }),
      logout () {
        this.deauthenticate().then(() => {
          this.$router.push({name: 'Login'});
        });
      }
    },

  };
</script>

<style scoped>

</style>

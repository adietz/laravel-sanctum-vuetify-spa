<template>
  <v-row>
    <v-col cols="12" lg="4" md="6" offset-lg="4" offset-md="3" offset-sm="2" sm="8">

      <v-card>
        <v-toolbar color="primary" dark dense>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="formValid">
            <v-text-field
                v-model="loginForm.email"
                :rules="[v=>!!v|| 'Email is Required']"
                autofocus
                label="Email"
            ></v-text-field>
            <v-text-field
                v-model="loginForm.password"
                :rules="[v=>!!v|| 'Password is Required']"
                label="Password"
                type="password"
                @keyup.enter="login"
            ></v-text-field>
          </v-form>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!formValid" @click="login">
            Login
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-col>
  </v-row>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Login',
    components: {},
    props: {},
    data () {
      return {
        formValid: false,
        loginForm: {
          email: '',
          password: '',
        }
      };
    },
    computed: {
      ...mapGetters('user', {
        isAuthenticated: 'isAuthenticated'
      }),
    },
    methods: {
      ...mapActions('user', {
        authenticate: 'authenticate',
      }),
      login () {
        this.authenticate(this.loginForm);
      },

    },
    created () {
    },
    mounted () {
      if (this.isAuthenticated) {
        this.$router.push('/');
      }
    },
    watch: {
      isAuthenticated: {
        handler () {
          if (this.isAuthenticated) {
            this.$router.push('/').catch(() => {
            });
          }
        },
        immediate: true,
        deep: true,
      }
    }
  };
</script>

<style scoped>

</style>

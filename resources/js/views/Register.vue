<template>
  <v-row>
    <v-col cols="12" lg="4" md="6" offset-lg="4" offset-md="3" offset-sm="2" sm="8">

      <v-card>
        <v-toolbar color="primary" dark dense>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="formValid">
            <v-text-field
                v-model="registerForm.name"
                :rules="[v=>!!v|| 'Name is Required']"
                autofocus
                label="Name"
            ></v-text-field>
            <v-text-field
                v-model="registerForm.email"
                :rules="[v=>!!v|| 'Email is Required']"
                label="Email"
            ></v-text-field>
            <v-text-field
                v-model="registerForm.password"
                :rules="[v=>!!v|| 'Password is Required']"
                label="Password"
                type="password"

            ></v-text-field>
            <v-text-field
                v-model="registerForm.password_confirmation"
                :rules="[v=>!!v|| 'Password Confirmation is Required', v=>v==registerForm.password || 'Passwords do not match...']"
                label="Password Confirmation"
                type="password"
                @keyup.enter="create"
            ></v-text-field>
          </v-form>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              :disabled="!formValid"
              @click="create"
          >
            Create Account
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
        registerForm: {
          email: '',
          name: '',
          password: '',
          password_confirmation: '',
        },
      };
    },
    computed: {
      ...mapGetters('user', {
        isAuthenticated: 'isAuthenticated'
      }),
    },
    methods: {
      ...mapActions('user', {
        createAccount: 'create',
      }),
      create () {
        this.createAccount(this.registerForm);
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

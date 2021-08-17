<template>
  <div>
    <v-card flat outlined>
      <v-toolbar color="primary" dark dense>
        <v-toolbar-title>Home</v-toolbar-title>
      </v-toolbar>
      <v-card-text>Welcome, {{ userName }}.</v-card-text>
    </v-card>
  </div>

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Home',
    components: {},
    props: {},
    data () {
      return {};
    },
    computed: {
      ...mapState('user', {
        userName: state => state.name,
      }),
    },
    methods: {},
    created () {
    },
    mounted () {
    },
  };
</script>

<style scoped>

</style>

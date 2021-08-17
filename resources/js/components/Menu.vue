<template>
  <div class="lsvs-menu">
    <template v-for="(menuItem, idx) in menuItems">
      <template v-if="menuItem.link">
        <v-btn
            :key="idx"
            :to="menuItem.link"
            color="primary"
            text
        >
          <v-icon
              v-if="menuItem.icon"
              color="primary"
              left
              v-html="menuItem.icon"
          ></v-icon>
          {{ menuItem.title }}
        </v-btn>
      </template>

      <template v-if="menuItem.children && menuItem.children.length > 0">
        <v-menu
            bottom
            offset-y
            open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                :key="idx"
                color="primary"
                text
                v-on="on"
            >
              <v-icon
                  v-if="menuItem.icon"
                  color="primary"
                  left
                  v-html="menuItem.icon"
              ></v-icon>
              {{ menuItem.title }}
            </v-btn>

          </template>

          <v-list>
            <v-list-item
                v-for="(subMenuItem, subMenuItemIndex) in menuItem.children "
                :key="subMenuItemIndex"
                :to="subMenuItem.link"
            >
              <v-list-item-title>{{ subMenuItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </template>
    </template>
  </div>

</template>

<script>
  import menuItems from '@/menu';

  export default {
    name: 'Menu',
    components: {},
    props: {},
    data () {
      return {};
    },
    computed: {},
    methods: {},
    created () {
      this.menuItems = menuItems;
    },
    mounted () {
    },
  };
</script>

<style scoped>

</style>

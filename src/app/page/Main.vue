<template>
<v-app :dark="nightmode" :class="{'no-transition': opts.disableTransition}">
  <drawer :value="drawer"></drawer>
  <toolbar></toolbar>
  <v-content>
    <v-container>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-container>
  </v-content>
  <snackbar></snackbar>
</v-app>
</template>
<script>
import __ from '@/common/i18n'

import drawer from '@/app/component/main/Drawer'
import toolbar from '@/app/component/main/Toolbar'
import snackbar from '@/app/component/main/Snackbar'

import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      syncing: false,
      lastUpdated: NaN,
      uploadError: null,
    }
  },
  components: {
    drawer,
    toolbar,
    snackbar,
  },
  computed: {
    ...mapState(['drawer', 'nightmode', 'opts']),
  },
  created() {
    this.init()
  },
  methods: {
    __,
    ...mapActions(['loadOptions', 'checkToken', 'loadNightmode', 'loadDrawer', 'switchDrawer']),
    init() {
      this.loadNightmode()
      this.checkToken()
      this.loadDrawer()
      this.loadOptions()
    },
  }
}
</script>
<style>
.no-transition * {
  transition: none !important;
}
</style>

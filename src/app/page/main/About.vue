<template>
<div>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list>

          <v-list-tile avatar>
            <v-list-tile-avatar tile>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Richsync</v-list-tile-title>
              <v-list-tile-sub-title>
                <span>Version: {{ version }}</span>
              </v-list-tile-sub-title>

            </v-list-tile-content>

          </v-list-tile>

        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
import __ from '@/common/i18n'

export default {
  data() {
    return {
      version: '',
      update: '',
    }
  },
  created() {
    this.init()
  },
  methods: {
    __,
    init() {
      const manifest = chrome.runtime.getManifest()
      this.version = manifest.version
      chrome.runtime.getBackgroundPage(background => {
        this.update = background.update || ''
      })
    },
    reload() {
      chrome.runtime.reload()
    },
  }
}
</script>
<style lang="scss">
</style>

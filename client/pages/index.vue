<template>
  <section class="container">
    <div>
      <logo />
      <div>
      <div class="box">
        <h2 class="subtitle">TeamSpeak</h2>
        <p v-if="tsInfo !== null">
          Clients: {{ tsInfo.clientsOnline }}/{{ tsInfo.clientsMax }}
        </p>
        <p v-else>
          &nbsp;
        </p>
        <a href="ts3server://noob-box.net/" class="button">
          Verbinden
        </a>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return { tsInfo: null }
  },
  async mounted () {
    let response = await fetch('/api/teamspeak')
    let data = response.status === 200 ? response.json() : null
    this.$set(this, tsInfo, data)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  word-spacing: 5px;
}
</style>

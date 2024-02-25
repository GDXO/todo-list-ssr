<template>
  <div class="root">
    <div class="cover"></div>
    <PageHeader />
    <p>{{ count }}</p>
    <!-- <Todo></Todo> -->
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/layout/Header.vue'
import PageFooter from '@/layout/Footer.vue'

export default {
  name: 'mainPage',
  components: {
    PageHeader,
    PageFooter
  },
  mounted () {
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="stylus" scoped>
.root
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0

  .cover
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: #999
    opacity: .5
    z-index: -1
</style>

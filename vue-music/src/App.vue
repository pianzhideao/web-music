<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style scoped lang="stylus">
  @import "common/stylus/variable"
  #app
    color $color-theme
</style>

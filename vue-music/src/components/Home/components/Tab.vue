<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommend">
            <span class="tab-link">推荐</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/singer">
            <span class="tab-link">歌手</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/rank">
            <span class="tab-link">排行</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
            <span class="tab-link">搜素</span>
        </router-link>
        <div class="router">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeTab'
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .tab-item
        height:2.5rem
        line-height:2.5rem
        display inline-block
        width:24%
        text-align: center
        .tab-link
            padding-bottom: 5px
            color: $color-text-l
        &.router-link-active
            .tab-link
                color: $color-theme
                border-bottom: 2px solid $color-theme
</style>

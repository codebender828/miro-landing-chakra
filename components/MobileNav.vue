<template>
  <c-box v-bind="$attrs">
    <c-icon-button
      ref="btnRef"
      :icon="isOpen ? 'close' : 'bars'"
      variant="link"
      color="inherit"
      px="3"
      py="3"
      :_hover="{ color: 'miro.400' }"
      text-decor="none"
      aria-label="Open mobile navbar"
      @click="isOpen = !isOpen"
    />

    <c-drawer :is-open="isOpen" placement="left" :on-close="close">
      <c-drawer-overlay />
      <c-drawer-content position="relative">
        <c-drawer-body>
          <c-drawer-close-button position="absolute" />
          <nav-content />
        </c-drawer-body>
      </c-drawer-content>
    </c-drawer>
  </c-box>
</template>

<script>
export default {
  inheritAttrs: false,
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    close () {
      this.isOpen = false
    }
  }
}
</script>

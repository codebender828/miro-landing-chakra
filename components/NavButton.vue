<template>
  <c-button v-bind="{...$attrs, ...$props}">
    <slot />
  </c-button>
</template>

<script>
export default {
  name: 'NavButton',
  inheritAttrs: false
}
</script>

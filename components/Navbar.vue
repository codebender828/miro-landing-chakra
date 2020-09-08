<template>
  <c-flex
    pos="sticky"
    top="0"
    left="0"
    right="0"
    align="center"
    :px="[4, 4, 10]"
    py="4"
    bg="white"
    as="nav"
    z-index="sticky"
  >
    <logo />
    <c-flex w="full">
      <c-flex :d="['none', 'none', 'flex']" w="full">
        <nav-content is-inline />
        <c-stack is-inline spacing="5">
          <c-button variant="link" font-weight="regular" color="inherit" :_hover="{ color: 'miro.400' }" text-decor="none">
            Login
          </c-button>
          <c-button
            rounded="full"
            variant-color="miro"
            font-weight="regular"
            right-icon="arrow-forward"
          >
            Sign up free
          </c-button>
        </c-stack>
      </c-flex>
    </c-flex>
    <mobile-nav :d="['flex', 'flex', 'none']" ml="auto" />
  </c-flex>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

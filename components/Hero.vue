<template>
  <c-stack spacing="6" bg-image="url('/banner-desktop.png')" bg-size="1000px auto" bg-repeat="no-repeat" bg-pos="center">
    <c-flex pt="20" justify="center">
      <c-heading line-height="1" as="h1" font-size="3.8em" :max-w="['90%', '90%', '800px']" text-align="center">
        Where remote <br> teams get work done.
      </c-heading>
    </c-flex>
    <c-text :max-w="['70%', '70%', '400px']" mx="auto" text-align="center">
      The online collaborative whiteboard platform to
      bring teams together, anytime, anywhere.
    </c-text>
    <c-flex justify="center">
      <c-button
        as="a"
        href="#"
        right-icon="arrow-forward"
        :_hover="{ bg: 'miro.400', color: 'white'}"
        :_active="{ bg: 'miro.500', color: 'white'}"
        variant-color="yellow"
        rounded="full"
        size="lg"
      >
        Start a whiteboard
      </c-button>
    </c-flex>
    <c-flex :mt="-3" justify="center">
      <c-text color="gray.500" font-size="xs" text-align="center">
        3 boards and unlimited teammates for free
      </c-text>
    </c-flex>
  </c-stack>
</template>

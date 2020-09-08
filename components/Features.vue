<template>
  <c-grid mt="20" :max-w="['90%', '90%', '1000px']" mx="auto" :template-columns="['1fr', '1fr','1fr 250px']" gap="4">
    <c-image :src="require('@/assets/meetings_and_workshops.png')" rounded="lg" overflow="hidden" />
    <c-stack spacing="4">
      <c-pseudo-box
        :_hover="{ bg: 'miro.100' }"
        transition="all 0.2s ease-in"
        rounded="lg"
        cursor="pointer"
        p="4"
        bg="miro.50"
        color="miro.600"
      >
        <c-heading as="h3" font-size="md" mb="3">
          Meetings & Workshops
        </c-heading>
        <c-text font-size="xs">
          Run productive, engaging online remote meetings and workshops with your team.
        </c-text>
      </c-pseudo-box>
      <c-pseudo-box
        :_hover="{ bg: 'miro.100' }"
        transition="all 0.2s ease-in"
        rounded="lg"
        cursor="pointer"
        p="4"
        bg="miro.50"
        color="miro.600"
      >
        <c-heading as="h3" font-size="md" mb="3">
          Ideation & Brainstorming
        </c-heading>
        <c-text font-size="xs">
          Build and develop ideas with distributed teams as if you were in the same room, anywhere, anytime.
        </c-text>
      </c-pseudo-box>
      <c-pseudo-box
        :_hover="{ bg: 'miro.100' }"
        transition="all 0.2s ease-in"
        rounded="lg"
        cursor="pointer"
        p="4"
        bg="miro.50"
        color="miro.600"
      >
        <c-heading as="h3" font-size="md" mb="3">
          Research & Design
        </c-heading>
        <c-text font-size="xs">
          Co-create and align with cross-functional stakeholders on a collaborative, online whiteboard.
        </c-text>
      </c-pseudo-box>
      <c-pseudo-box
        :_hover="{ bg: 'miro.50' }"
        transition="all 0.2s ease-in"
        rounded="lg"
        cursor="pointer"
        p="4"
        color="miro.600"
        d="flex"
        align-items="center"
      >
        <c-icon size="20px" mr="4" name="play-circle" />
        <c-text font-size="md" font-weight="bold">
          Watch product demo
        </c-text>
      </c-pseudo-box>
    </c-stack>
  </c-grid>
</template>

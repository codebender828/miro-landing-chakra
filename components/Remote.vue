<template>
  <c-box as="section" py="10">
    <c-heading
      as="h3"
      mb="8"
      font-size="2xl"
      text-align="center"
      :max-w="['90%', '90%', '400px']"
      mx="auto"
    >
      Take advantage of
      our remote work resources.
      Read the guide.
    </c-heading>

    <c-grid :max-w="['90%', '90%', '1000px']" mx="auto" :template-columns="['1fr', '1fr', 'repeat(3, 1fr)']" gap="6">
      <c-flex
        bg="yellow.100"
        p="5"
        flex-dir="column"
        min-h="150px"
        rounded="lg"
        pos="relative"
      >
        <c-text font-weight="bold" max-w="75%" font-size="lg" mb="auto">
          The ultimate guide to remote work.
        </c-text>
        <c-link text-decoration="underline">
          Read the guide
          <c-icon name="arrow-forward" />
        </c-link>
        <c-icon
          pos="absolute"
          bottom="4"
          right="4"
          color="yellow.400"
          size="35px"
          name="hourglass"
        />
      </c-flex>
      <c-flex
        bg="yellow.100"
        p="5"
        flex-dir="column"
        min-h="150px"
        rounded="lg"
        pos="relative"
      >
        <c-text font-weight="bold" max-w="75%" font-size="lg" mb="auto">
          Meetings and workshops FAQ
        </c-text>
        <c-link text-decoration="underline">
          Visit help center
          <c-icon name="arrow-forward" />
        </c-link>
        <c-icon
          pos="absolute"
          bottom="4"
          right="4"
          color="yellow.400"
          size="35px"
          name="hands-helping"
        />
      </c-flex>
      <c-flex
        bg="yellow.100"
        p="5"
        flex-dir="column"
        min-h="150px"
        rounded="lg"
        pos="relative"
      >
        <c-text font-weight="bold" max-w="75%" font-size="lg" mb="auto">
          How-to webinars
        </c-text>
        <c-link text-decoration="underline">
          Register now
          <c-icon name="arrow-forward" />
        </c-link>
        <c-icon
          pos="absolute"
          bottom="4"
          right="4"
          color="yellow.400"
          size="35px"
          name="scroll"
        />
      </c-flex>
    </c-grid>
  </c-box>
</template>

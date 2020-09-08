<template>
  <c-stack v-bind="$attrs" spacing="5" :ml="[0, 0, 8]" mr="auto">
    <c-flex :d="['flex', 'flex', 'none']">
      <logo />
    </c-flex>
    <c-popover placement="top" trigger="hover">
      <c-popover-trigger>
        <c-button
          :mr="[0, 0, 5]"
          variant="link"
          font-weight="regular"
          color="inherit"
          :_hover="{ color: 'miro.400' }"
          text-decor="none"
          right-icon="arrow-down"
          :my="[5, 5, 0]"
        >
          Product
        </c-button>
      </c-popover-trigger>
      <c-popover-content z-index="popover" border="0" width="auto" px="2">
        <c-stack p="5" spacing="4" as="ul" list-style-type="none">
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Tour
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Online whiteboard
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Download Miro
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Integration & apps
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Templates
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            API, SDK & iframe
          </c-link>
        </c-stack>
      </c-popover-content>
    </c-popover>
    <c-popover placement="top" trigger="hover">
      <c-popover-trigger>
        <c-button
          :mr="[0, 0, 5]"
          variant="link"
          font-weight="regular"
          color="inherit"
          :_hover="{ color: 'miro.400' }"
          text-decor="none"
          right-icon="arrow-down"
          :mb="[5, 5, 0]"
        >
          Use cases
        </c-button>
      </c-popover-trigger>
      <c-popover-content z-index="popover" border="0" width="auto" px="2">
        <c-stack p="5" spacing="4" as="ul" list-style-type="none">
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Meetings and workshops
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Ideation and brainstorming
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Agile workflows
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Research and design
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Strategy and planning
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Product management
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Mind mapping
          </c-link>
        </c-stack>
      </c-popover-content>
    </c-popover>
    <c-popover placement="top" trigger="hover">
      <c-popover-trigger>
        <c-button
          :mr="[0, 0, 5]"
          variant="link"
          font-weight="regular"
          color="inherit"
          :_hover="{ color: 'miro.400' }"
          text-decor="none"
          right-icon="arrow-down"
          :mb="[5, 5, 0]"
        >
          Resources
        </c-button>
      </c-popover-trigger>
      <c-popover-content z-index="popover" border="0" width="auto" px="2">
        <c-stack p="5" spacing="4" as="ul" list-style-type="none">
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Templates
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            <span>Miroverse</span>
            <c-badge font-family="mono" variant="solid" variant-color="miro">
              NEW
            </c-badge>
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Agile workflows
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Research and design
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Strategy and planning
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Product management
          </c-link>
          <c-link href="#" :_hover="{ color: 'miro.400' }">
            Mind mapping
          </c-link>
        </c-stack>
      </c-popover-content>
    </c-popover>
    <c-button variant="link" font-weight="regular" color="inherit" :_hover="{ color: 'miro.400' }" text-decor="none">
      Pricing
    </c-button>
    <c-button variant="link" font-weight="regular" color="inherit" :_hover="{ color: 'miro.400' }" text-decor="none">
      Enterprise
    </c-button>
    <c-button variant="link" font-weight="regular" color="inherit" :_hover="{ color: 'miro.400' }" text-decor="none">
      Contact us
    </c-button>
  </c-stack>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

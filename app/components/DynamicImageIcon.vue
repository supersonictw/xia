<template>
  <img
    :alt="props.name"
    :src="resource"
    v-bind="props"
  >
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  class?: string;
}>();

type IconName = "Unknown";

const allIcons: Record<IconName, string> = {Unknown: ""};
const resource = allIcons[props.name as IconName];
</script>

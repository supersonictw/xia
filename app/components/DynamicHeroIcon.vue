<template>
  <UIcon
    :name="iconName"
    :class="props.class"
  />
</template>

<script setup lang="ts">
import {computed} from "vue"; // Import removed - added Vue import

const props = defineProps<{
  name: string;
  class?: string;
}>();

// Convert heroicon name like "BeakerIcon" to "i-heroicons-beaker"
const iconName = computed(() => {
  const name = props.name.replace(/Icon$/, ''); // Remove "Icon" suffix
  // Convert PascalCase to kebab-case
  const kebabCase = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return `i-heroicons-${kebabCase}`;
});
</script>

<template>
  <button
    :class="buttonClass"
    type="button"
  >
    <div v-if="props.icon">
      <dynamic-hero-icon
        v-if="isHeroIcon"
        :name="props.icon"
        class="rounded-full w-6 h-6 mr-4"
      />
      <dynamic-image-icon
        v-else
        :name="props.icon"
        class="rounded-full w-6 h-6 mr-4"
      />
    </div>
    <slot name="prepend" />
    <div class="text-left">
      <div :class="nameClass">
        {{ props.name }}
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  name: string;
  icon?: string;
  variant?: "mobile" | "normal";
}>();

const isHeroIcon = props.icon?.endsWith("Icon") ?? false;

const buttonClass = computed(() => {
  const base = [
    "flex",
    "items-center",
    "rounded-md",
    "hover:text-gray-700",
    "cursor-pointer",
  ];
  
  if (props.variant === "mobile") {
    return [
      "text-gray-900",
      "-m-3",
      "p-3",
      "w-full",
      ...base,
    ];
  }
  
  return [
    "h-8",
    "text-gray-500",
    "bg-white",
    "inline-flex",
    "text-base",
    "font-medium",
    "hover:text-gray-900",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:ring-indigo-500",
    ...base,
  ];
});

const nameClass = computed(() => ([
  "text-base",
  "font-medium",
]));
</script>

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
      <div class="text-base font-medium">
        {{ props.name }}
      </div>
      <div class="mt-1 text-sm">
        {{ props.description }}
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  name: string;
  description: string;
  icon?: string;
  variant?: "mobile" | "normal";
}>();

const isHeroIcon = props.icon?.endsWith("Icon") ?? false;

const buttonClass = computed(() => ([
  "-m-3",
  "p-3",
  "flex",
  "w-full",
  "items-center",
  "rounded-md",
  "text-gray-900",
  "hover:text-gray-700",
  "cursor-pointer",
]));
</script>

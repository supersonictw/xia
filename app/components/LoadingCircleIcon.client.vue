<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :class="props.class"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      class="opacity-75"
      fill="currentColor"
      d="M 3 11.958 C 3.205 6.522 7.226 2.994 11.995 2.993 L 11.954 1.007 C 5.327 1.007 1.002 5.322 1.002 11.949 L 3 11.958 Z M 5.285 17.992 C 3.993 16.533 2.997 13.906 3 11.957 L 1 11.948 C 1 14.99 1.927 17.208 3.792 19.322 L 5.285 17.992 Z"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  class: {
    type: String,
    required: false,
    default: () => "",
  },
});
</script>

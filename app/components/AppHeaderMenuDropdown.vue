<template>
  <div class="relative">
    <button
      aria-expanded="false"
      :class="buttonClass"
      type="button"
      @click="onClickDropdown"
    >
      <span>{{ props.name }}</span>
      <UIcon name="i-heroicons-chevron-down" class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" />
    </button>
    <div
      :class="dropdownContainerClass"
    >
      <div
        v-show="isDropdownOpened"
        class="rounded-lg shadow-lg overflow-hidden"
      >
        <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <app-header-menu-dropdown-item
            v-for="(child, index) in props.children"
            :key="index"
            :name="child.name"
            :description="child.description"
            :icon="child.icon"
            :variant="props.variant"
            @click="onClickItem(child)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, inject, watch, computed, type Ref} from "vue";

import type {
  MenuDropdownChild,
} from "../data/AppHeaderMenuData";

const props = defineProps<{
  name: string;
  children: MenuDropdownChild[];
  variant?: "mobile" | "normal";
}>();

const isDropdownOpened = ref(false);

const parentMenuState = inject<Ref<boolean>>("parent-menu-state")!;
watch(parentMenuState, (value) => {
  if (!value) {
    isDropdownOpened.value = false;
  }
});

const onClickDropdown = (): void => {
  isDropdownOpened.value = !isDropdownOpened.value;
  if (isDropdownOpened.value) {
    parentMenuState.value = true;
  }
};

const onClickItem = (item: MenuDropdownChild): void => {
  parentMenuState.value = false;
  item.onClick();
};

const buttonClass = computed(() => {
  const base = [
    "text-gray-500",
    "group",
    "bg-white",
    "rounded-md",
    "inline-flex",
    "items-center",
    "text-base",
    "font-medium",
    "hover:text-gray-900",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:ring-indigo-500",
    "cursor-pointer",
  ];
  
  if (props.variant === "mobile") {
    return [
      ...base,
      "w-full",
    ];
  }
  
  return [
    "h-8",
    ...base,
  ];
});

const dropdownContainerClass = computed(() => {
  const base = [
    "absolute",
    "z-10",
    "mt-3",
    "transform",
    "px-2",
    "w-screen",
    "max-w-md",
    "sm:px-0",
  ];
  
  if (props.variant === "mobile") {
    return [
      ...base,
      "-ml-7",
      "sm:-ml-4",
      "lg:ml-0",
      "lg:left-1/2",
      "lg:-translate-x-1/2",
    ];
  }
  
  return [
    ...base,
    "-ml-4",
    "lg:ml-0",
    "lg:left-1/2",
    "lg:-translate-x-1/2",
  ];
});
</script>

<template>
  <div class="app-header">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <nuxt-link to="/">
            <h1 class="flex-auto text-lg font-semibold text-gray-900 hidden sm:block">
              {{ title }}
            </h1>
            <p class="flex-auto text-md font-normal text-gray-500 hidden sm:block">
              {{ subtitle }}
            </p>
            <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
              {{ label }}
            </h1>
          </nuxt-link>
        </div>
        <app-header-normal />
        <button
          v-if="isMenuItemExist"
          class="-mr-2 -my-2 md:hidden bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer"
          type="button"
          aria-expanded="false"
          @click="onClickMobileMenuBtnOpen"
        >
          <span class="sr-only">Open menu</span>
          <UIcon name="i-heroicons-bars-4" class="h-6 w-6" />
        </button>
      </div>
    </div>
    <app-header-mobile
      v-show="isMobileMenuOpened"
      @close="onClickMobileMenuBtnClose"
    />
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, provide, type Ref} from "vue";

import {
  title,
  subtitle,
  label,
  isSaraEnabled,
  menuItems,
} from "../data/AppHeaderMenuData";

const isMobileMenuOpened = ref(false);

const parentMenuState: Ref<boolean> = ref(true);
provide("parent-menu-state", parentMenuState);

const isMenuItemExist = isSaraEnabled || menuItems.length;

const onClickMobileMenuBtnOpen = (): void => {
  isMobileMenuOpened.value = true;
  parentMenuState.value = true;
};

const onClickMobileMenuBtnClose = (): void => {
  isMobileMenuOpened.value = false;
  parentMenuState.value = false;
};

const onDocumentClick = (e: MouseEvent): void => {
  const target = e.target as HTMLElement;
  if (!document.querySelector(".app-header")?.contains(target)) {
    parentMenuState.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", onDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener("click", onDocumentClick);
});
</script>

<template>
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div
          class="flex items-center justify-between"
          @click="onClickMobileMenuClose"
        >
          <div>
            <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
              {{ label }}
            </h1>
          </div>
            <div class="-mr-2">
            <button
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer"
              type="button"
            >
              <span class="sr-only">Close menu</span>
              <UIcon name="i-heroicons-x-mark" class="h-6 w-6" />
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <div
              v-for="(item, index) in menuItems"
              :key="index"
            >
              <app-header-menu-dropdown
                v-if="item.type === 'dropdown'"
                :name="item.name"
                :children="item.children"
                variant="mobile"
              />
              <app-header-menu-item
                v-else
                :name="item.name"
                :icon="item.icon"
                variant="mobile"
                @click="onClickItem(item)"
              />
            </div>
            <app-header-menu-sara v-if="isSaraEnabled" variant="mobile" />
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {inject, watch, type Ref} from "vue";

import {
  label,
  isSaraEnabled,
  menuItems,
  type MenuFunctionItem,
} from "../data/AppHeaderMenuData";

const emit = defineEmits<{
  close: [];
}>();

const parentMenuState = inject<Ref<boolean>>("parent-menu-state")!;
watch(parentMenuState, (value) => {
  if (!value) {
    emit("close");
  }
});

const onClickMobileMenuClose = (): void => {
  emit("close");
};

const onClickItem = (item: MenuFunctionItem): void => {
  parentMenuState.value = false;
  item.onClick();
};
</script>

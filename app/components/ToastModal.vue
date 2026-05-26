<template>
  <button
    v-show="model"
    type="button"
    class="fixed right-2 lg:right-24 top-24 z-50 rounded-md px-4 py-2 text-white transition bg-amber-500 hover:bg-amber-600 animate-fade cursor-pointer"
    @click="onClickClose"
  >
    <div class="flex items-center space-x-2">
      <span>
        <UIcon name="i-heroicons-information-circle" class="h-5 w-5" />
      </span>
      <span class="font-bold">
        {{ model }}
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import {watch} from "vue";

let timer: ReturnType<typeof setTimeout> | null = null;

const model = defineModel<string>({
  default: "",
});

const onClickClose = (): void => {
  if (timer) {
    clearTimeout(timer);
  }
  model.value = "";
};

watch(model, () => {
  if (!model.value) return;
  timer = setTimeout(onClickClose, 3000);
});
</script>

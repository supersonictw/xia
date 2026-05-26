<template>
  <div>
    <div>
      <div class="mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
            <span class="block xl:inline">這裡是</span>
            <span class="block text-indigo-600 xl:inline xl:ml-2">Xia 系統</span>
            <span class="block xl:inline">
              <loading-circle-icon class="inline-block h-8 w-8 ml-3 animate-spin text-indigo-300" />
            </span>
          </h1>
          <p class="mt-3 text-base text-gray-500">
            Nuxt.js 4 + Vue.js 3 + Tailwind CSS，為了快速發展專案而生，請自行修改內容。
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <button
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer"
                @click="onClickHello">
                Hello!
              </button>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <nuxt-link
                :external="true"
                to="https://github.com/supersonictw/xia"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Xia GitHub
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-right">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
            <span class="block xl:inline">你是</span>
            <span class="block text-indigo-600 xl:inline">前端&#47;後端</span>
            <span class="block xl:inline">工程師嗎？</span>
          </h1>
          <p class="mt-3 text-base text-gray-500">
            沒有問題！ Xia 什麼端都能寫！
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
            <div class="rounded-md shadow">
              <nuxt-link
                :external="true"
                to="https://nuxt.com/docs/4.x/getting-started"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Documentation
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <toast-modal v-model="toastMessage" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const toastMessage = ref("");

const onClickHello = () => {
  toastMessage.value = "Hello!";
};
</script>

<template>
  <div class="mt-10 mx-auto py-10 max-w-7xl px-12">
    <div class="sm:text-center lg:text-left">
      <h1 class="text-4xl tracking-tight font-bold text-gray-900">
        <span class="block text-indigo-600 xl:inline md:mr-3">404</span>
        <span class="block xl:inline">頁面不存在</span>
      </h1>
      <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        您所請求的頁面不見了，或者是從來沒有存在過。
      </p>
      <div class="mt-5 sm:mt-16 sm:flex sm:justify-center lg:justify-start">
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <nuxt-link
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            to="/"
          >
            回首頁
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

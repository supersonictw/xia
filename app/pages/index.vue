<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-zinc-950 overflow-hidden font-sans">
    <!-- Hero Background Graphic -->
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"/>
      <div class="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"/>
    </div>

    <!-- Main Hero -->
    <div class="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div class="text-center space-y-8 py-12 md:py-20">
        <div class="inline-flex items-center justify-center p-3 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl ring-1 ring-zinc-200/50 dark:ring-zinc-800/50 animate-bounce">
          <img src="/logo.svg" alt="XIA logo" class="w-16 h-16 sm:w-20 sm:h-20" >
        </div>

        <h1 class="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
          XIA 雫
        </h1>

        <p class="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          A modern, beautiful LINE Web Client built for any platform. Stay connected with friends anytime, anywhere.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <template v-if="ready === 0">
            <UButton
              loading
              size="xl"
              color="primary"
              variant="solid"
              class="px-8 py-3.5 rounded-2xl shadow-lg shadow-emerald-500/20 font-semibold"
            >
              Loading System...
            </UButton>
          </template>
          <template v-else-if="ready > 0">
            <UButton
              to="/dashboard"
              size="xl"
              color="primary"
              variant="solid"
              icon="i-heroicons-squares-2x2"
              class="px-8 py-3.5 rounded-2xl shadow-lg shadow-indigo-500/20 font-semibold hover:scale-105 transition-transform"
            >
              Open Dashboard
            </UButton>
          </template>
          <template v-else>
            <UButton
              to="/login"
              size="xl"
              color="primary"
              variant="solid"
              icon="i-heroicons-arrow-right-end-on-rectangle"
              class="px-8 py-3.5 rounded-2xl shadow-lg shadow-emerald-500/20 font-semibold hover:scale-105 transition-transform"
            >
              Login to LINE
            </UButton>
          </template>

          <UButton
            to="https://github.com/supersonictw/xia"
            target="_blank"
            size="xl"
            color="neutral"
            variant="outline"
            icon="i-heroicons-code-bracket"
            class="px-8 py-3.5 rounded-2xl font-semibold border-zinc-300 dark:border-zinc-700"
          >
            GitHub Repository
          </UButton>
        </div>
      </div>

      <!-- Feature Grid / Details -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-200/50 dark:border-zinc-800/50">
        <!-- What is XIA Card -->
        <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl hover:shadow-xl transition-shadow duration-300">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-2 bg-emerald-500/10 rounded-xl text-emerald-500">
                <UIcon name="i-heroicons-information-circle" class="w-6 h-6" />
              </div>
              <h2 class="text-xl font-bold text-zinc-900 dark:text-white">What is XIA</h2>
            </div>
          </template>
          <div class="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              XIA is a lightweight web application that allows you to communicate on the LINE network. It is designed to run in any modern web browser without requiring heavy native client installations.
            </p>
            <div class="flex items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-950 rounded-2xl">
              <img src="/line_logo.png" alt="LINE logo" class="h-10 object-contain" >
            </div>
          </div>
        </UCard>

        <!-- Features Card -->
        <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl hover:shadow-xl transition-shadow duration-300">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-2 bg-indigo-500/10 rounded-xl text-indigo-500">
                <UIcon name="i-heroicons-sparkles" class="w-6 h-6" />
              </div>
              <h2 class="text-xl font-bold text-zinc-900 dark:text-white">Focused Features</h2>
            </div>
          </template>
          <div class="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              XIA implements only the essential chat functions, enabling direct messaging, group conversations, and image attachments.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-sm">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Modular ServiceWorker LongPolling connection</span>
              </li>
              <li class="flex items-center gap-2 text-sm">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Responsive interface with Nuxt UI components</span>
              </li>
              <li class="flex items-center gap-2 text-sm">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-emerald-500 shrink-0" />
                <span>IndexedDB offline caching for contacts and logs</span>
              </li>
            </ul>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useSystem} from '~/composables/useSystem.client';
import Constant from '~/client/data/const';

definePageMeta({
  title: 'Welcome to Xia',
});

const ready = ref(0);

onMounted(() => {
  if (!import.meta.client) return;

  const token = localStorage.getItem(Constant.LOCAL_STORAGE.ACCESS_KEY);
  if (!token) {
    ready.value = -1;
    return;
  }

  // Poll until system is ready
  const checkSystemStatus = () => {
    try {
      const system = useSystem();
      if (system.ready) {
        ready.value = 1;
      } else {
        setTimeout(checkSystemStatus, Constant.TIMEOUT.RETRY);
      }
    } catch (e) {
      console.warn('Initializing system check failed, retrying...', e);
      setTimeout(checkSystemStatus, Constant.TIMEOUT.RETRY);
    }
  };
  checkSystemStatus();
});
</script>

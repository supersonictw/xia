<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans overflow-hidden">
    <!-- Hero Background Graphic -->
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"/>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"/>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 sm:mx-auto sm:w-full sm:max-w-md px-4">
      <div class="mb-4">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-heroicons-arrow-left"
          size="sm"
          class="rounded-xl hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
          @click="goBack"
        >
          Back
        </UButton>
      </div>

      <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl overflow-hidden">
        <!-- Top Profile Section -->
        <div class="flex flex-col items-center text-center space-y-4 py-6 border-b border-zinc-150 dark:border-zinc-800">
          <UAvatar
            :src="system.profile.picturePath ? `${mediaURL}${system.profile.picturePath}` : '/logo.svg'"
            alt="Profile Avatar"
            size="3xl"
            class="ring-4 ring-emerald-500/20 shadow-md"
          />
          <div class="space-y-1">
            <h2 class="text-2xl font-bold text-zinc-900 dark:text-white">
              {{ system.profile.displayName || 'Loading...' }}
            </h2>
            <p class="text-xs font-semibold text-emerald-500 uppercase tracking-widest font-mono">
              LINE Web User
            </p>
          </div>
        </div>

        <!-- Status Message / Metadata -->
        <div class="py-6 space-y-4 text-left">
          <div class="space-y-1.5">
            <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider">Status Message</span>
            <div class="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200/30 dark:border-zinc-800/30 min-h-[80px]">
              <p class="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                {{ system.profile.statusMessage || 'No status message set.' }}
              </p>
            </div>
          </div>

          <div class="space-y-1">
            <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider">User ID Hash</span>
            <p class="text-xs font-mono text-zinc-500 truncate select-all" :title="system.profile.userIdHash">
              {{ system.profile.userIdHash || 'Unknown' }}
            </p>
          </div>
        </div>

        <!-- Action Controls -->
        <template #footer>
          <div class="flex items-center justify-around py-1">
            <!-- Create Dropdown -->
            <UDropdown :items="createItems" :popper="{ placement: 'top' }">
              <UButton
                color="neutral"
                variant="subtle"
                icon="i-heroicons-plus"
                class="rounded-xl px-5"
              >
                Create
              </UButton>
            </UDropdown>

            <!-- Settings Button -->
            <UButton
              to="/settings"
              color="primary"
              variant="solid"
              icon="i-heroicons-cog-6-tooth"
              class="rounded-xl px-5 shadow-sm"
            >
              Settings
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSystem} from '~/composables/useSystem.client';
import {useRouter} from 'vue-router';
import Constant from '~/client/data/const';

definePageMeta({
  title: 'Profile',
});

const system = useSystem();
const router = useRouter();

const mediaURL = `//${Constant.LINE.MEDIA.HOST}`;

const createItems = [
  [
    {
      label: 'Group',
      icon: 'i-heroicons-user-group',
      click: () => {
        router.push('/create/group');
      },
    },
  ],
];

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};
</script>

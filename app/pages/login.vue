<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans overflow-hidden">
    <!-- Hero Background Graphic -->
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"/>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"/>
    </div>

    <div class="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="text-center space-y-4">
        <div class="inline-flex items-center justify-center p-2.5 bg-white dark:bg-zinc-900 rounded-2xl shadow-md ring-1 ring-zinc-200/50 dark:ring-zinc-800/50">
          <img src="/logo.svg" alt="XIA logo" class="w-12 h-12" >
        </div>
        <h2 class="text-3xl font-extrabold text-zinc-900 dark:text-white">
          Sign in to XIA
        </h2>
        <p class="text-sm text-zinc-500 dark:text-zinc-400">
          Using your <a href="https://line.me" target="_blank" rel="noopener" class="text-emerald-500 hover:underline font-semibold">LINE</a> account credentials.
        </p>
      </div>
    </div>

    <div class="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
      <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl">
        <!-- Error/Status Alerts -->
        <div v-if="loginStatus" class="mb-6">
          <UAlert
            v-if="isPinCodeRequired"
            icon="i-heroicons-key"
            color="primary"
            variant="subtle"
            title="PIN Verification Required"
            class="rounded-2xl"
          >
            <template #description>
              <div class="space-y-3 mt-2">
                <p class="text-sm text-zinc-600 dark:text-zinc-300">
                  Please open your LINE app on your mobile device and enter this PIN code:
                </p>
                <div class="flex items-center justify-center p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-2xl">
                  <span class="text-3xl font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 animate-pulse">
                    {{ pinCode }}
                  </span>
                </div>
                <p class="text-xs text-zinc-400">
                  This code will expire in 2 minutes. Keep this browser window open.
                </p>
              </div>
            </template>
          </UAlert>

          <UAlert
            v-else
            icon="i-heroicons-information-circle"
            :color="loginStatus.toLowerCase().includes('failed') || loginStatus.toLowerCase().includes('error') ? 'error' : 'neutral'"
            variant="subtle"
            :title="loginStatus"
            class="rounded-2xl"
          />
        </div>

        <form class="space-y-6" @submit.prevent="loginSubmit">
          <UFormField label="Email address" name="email" required>
            <UInput
              v-model="user.identity"
              type="email"
              placeholder="name@example.com"
              icon="i-heroicons-envelope"
              size="lg"
              autocomplete="email"
              required
              class="w-full rounded-xl"
              :disabled="processing"
            />
          </UFormField>

          <UFormField label="Password" name="password" required>
            <UInput
              v-model="user.password"
              type="password"
              placeholder="••••••••"
              icon="i-heroicons-lock-closed"
              size="lg"
              autocomplete="current-password"
              required
              class="w-full rounded-xl"
              :disabled="processing"
            />
          </UFormField>

          <div class="pt-2">
            <UButton
              type="submit"
              size="lg"
              color="primary"
              variant="solid"
              block
              :loading="processing"
              class="rounded-2xl font-semibold shadow-lg shadow-indigo-500/20"
            >
              Sign In
            </UButton>
          </div>
        </form>

        <template #footer>
          <div class="flex justify-between items-center text-xs text-zinc-400 dark:text-zinc-500">
            <span>IP Address: <span class="font-mono">{{ user.ip_addr }}</span></span>
            <nuxt-link to="/" class="hover:underline flex items-center gap-1">
              <UIcon name="i-heroicons-arrow-left" /> Back to Home
            </nuxt-link>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, computed, onMounted} from 'vue';
import {useSystem} from '~/composables/useSystem.client';
import Constant from '~/client/data/const';
import ky from 'ky';

interface StarincIpResponse {
  data: {
    ip_addr: string;
  };
}

interface IpifyResponse {
  ip: string;
}

definePageMeta({
  title: 'Sign in to Xia',
});

const system = useSystem();

const user = reactive({
  ip_addr: 'Unknown',
  identity: '',
  password: '',
});

const processing = ref(false);

const loginStatus = computed(() => {
  return system.instances?.login?.status || '';
});

const isPinCodeRequired = computed(() => {
  return loginStatus.value.includes('PinCode');
});

const pinCode = computed(() => {
  const match = loginStatus.value.match(/PinCode with (\d+)/);
  return match ? match[1] : '';
});

const getUserIP = async (): Promise<string> => {
  try {
    const response = await ky.get('https://restapi.starinc.xyz/basic/ip').json<StarincIpResponse>();
    return response.data.ip_addr;
  } catch (e) {
    console.warn('Failed to retrieve client IP from starinc api, attempting second provider', e);
    try {
      const backupResponse = await ky.get('https://api.ipify.org?format=json').json<IpifyResponse>();
      return backupResponse.ip;
    } catch (e2) {
      console.error('Failed to retrieve client IP', e2);
      return 'Unknown';
    }
  }
};

const loginSubmit = async () => {
  if (processing.value) return;
  if (!user.identity || !user.password) {
    if (system.instances?.login) {
      system.instances.login.setStatus('Empty identity or password');
    }
    return;
  }

  processing.value = true;
  try {
    if (system.instances?.login) {
      system.instances.login.update({
        identity: user.identity,
        password: user.password,
        ip_addr: user.ip_addr,
      });

      const success = await system.instances.login.action();
      if (success === true) {
        // Redirect to dashboard on success
        navigateTo('/dashboard');
      }
    } else {
      console.error('Login controller not initialized');
    }
  } catch (e) {
    console.error('Error signing in', e);
  } finally {
    // Only set processing to false if we are not waiting for PIN confirmation
    if (!isPinCodeRequired.value) {
      processing.value = false;
    }
  }
};

onMounted(async () => {
  if (import.meta.client) {
    user.ip_addr = await getUserIP();

    // If already logged in, redirect to dashboard
    const token = localStorage.getItem(Constant.LOCAL_STORAGE.ACCESS_KEY);
    if (token) {
      navigateTo('/dashboard');
    }
  }
});
</script>

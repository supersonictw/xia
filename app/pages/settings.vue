<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans overflow-hidden">
    <!-- Hero Background Graphic -->
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"/>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"/>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 sm:mx-auto sm:w-full sm:max-w-lg px-4">
      <div class="mb-4">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-heroicons-arrow-left"
          size="sm"
          class="rounded-xl hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
          @click="goBack"
        >
          Back to Dashboard
        </UButton>
      </div>

      <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl overflow-hidden">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="p-2 bg-emerald-500/10 rounded-xl text-emerald-500">
              <UIcon name="i-heroicons-cog-8-tooth" class="w-6 h-6" />
            </div>
            <h2 class="text-xl font-bold text-zinc-900 dark:text-white">Settings</h2>
          </div>
        </template>

        <!-- Settings Tabbed Interface -->
        <UTabs :items="tabs" class="w-full">
          <!-- Profile Settings Panel -->
          <template #profile>
            <form class="space-y-6 pt-4" @submit.prevent="saveProfile">
              <div class="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200/30 dark:border-zinc-800/30">
                <UAvatar
                  :src="system.profile.picturePath ? `${mediaURL}${system.profile.picturePath}` : '/logo.svg'"
                  size="xl"
                  class="ring-2 ring-emerald-500/20"
                />
                <div class="text-left">
                  <p class="text-xs text-zinc-400 font-medium">Avatar Image</p>
                  <p class="text-xs text-zinc-500 mt-0.5">Managed directly from your LINE mobile app.</p>
                </div>
              </div>

              <UFormField label="Display Name" name="displayName" required>
                <UInput
                  v-model="profileForm.displayName"
                  type="text"
                  placeholder="Your Name"
                  size="lg"
                  required
                  :disabled="saving"
                  class="rounded-xl w-full"
                />
              </UFormField>

              <UFormField label="Status Message" name="statusMessage">
                <UTextarea
                  v-model="profileForm.statusMessage"
                  placeholder="Tell your friends what's new..."
                  size="lg"
                  :disabled="saving"
                  class="rounded-xl w-full"
                  :rows="3"
                />
              </UFormField>

              <div class="flex justify-end gap-3 pt-2">
                <UButton
                  type="submit"
                  size="md"
                  color="primary"
                  variant="solid"
                  :loading="saving"
                  class="rounded-xl font-semibold shadow-md shadow-emerald-500/10 px-6"
                >
                  Save Changes
                </UButton>
              </div>
            </form>
          </template>

          <!-- Notification Settings Panel -->
          <template #notifications>
            <div class="text-center py-12 space-y-3">
              <div class="inline-flex p-3 bg-zinc-150/50 dark:bg-zinc-950 rounded-2xl text-zinc-400">
                <UIcon name="i-heroicons-bell-slash" class="w-8 h-8" />
              </div>
              <h3 class="text-base font-bold text-zinc-800 dark:text-zinc-200">Unavailable</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
                Notification customizations are not yet implemented in the current version of XIA.
              </p>
            </div>
          </template>

          <!-- Preview Features Panel -->
          <template #preview>
            <div class="text-center py-12 space-y-3">
              <div class="inline-flex p-3 bg-zinc-150/50 dark:bg-zinc-950 rounded-2xl text-zinc-400">
                <UIcon name="i-heroicons-beaker" class="w-8 h-8" />
              </div>
              <h3 class="text-base font-bold text-zinc-800 dark:text-zinc-200">Unavailable</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
                Preview features control is currently disabled. Keep an eye on future updates!
              </p>
            </div>
          </template>
        </UTabs>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue';
import {useSystem} from '~/composables/useSystem.client';
import {useRouter} from 'vue-router';
import Constant from '~/client/data/const';

definePageMeta({
  title: 'Settings',
});

const system = useSystem();
const router = useRouter();

const mediaURL = `//${Constant.LINE.MEDIA.HOST}`;
const saving = ref(false);

const tabs = [
  {label: 'Profile', slot: 'profile'},
  {label: 'Notifications', slot: 'notifications'},
  {label: 'Preview Features', slot: 'preview'},
];

const profileForm = reactive({
  displayName: '',
  statusMessage: '',
});

const goBack = () => {
  router.push('/');
};

const saveProfile = async () => {
  if (saving.value) return;
  if (!profileForm.displayName.trim()) return;

  saving.value = true;
  try {
    const client = system.clients.query;
    if (client) {
      const profile = await client.getProfile();
      profile.displayName = profileForm.displayName.trim();
      profile.statusMessage = profileForm.statusMessage.trim();

      await client.updateProfile(Constant.THRIFT_DEFAULT_SEQ, profile);

      // Update local cache state immediately
      system.profile.displayName = profile.displayName;
      system.profile.statusMessage = profile.statusMessage;

      // Redirect to dashboard/profile
      router.push('/profile');
    } else {
      console.error('Thrift client query interface not found');
    }
  } catch (e) {
    console.error('Failed to update profile via LINE thrift api:', e);
  } finally {
    saving.value = false;
  }
};

const initForm = () => {
  if (system.ready) {
    profileForm.displayName = system.profile.displayName || '';
    profileForm.statusMessage = system.profile.statusMessage || '';
  } else {
    setTimeout(initForm, Constant.TIMEOUT.RETRY);
  }
};

onMounted(() => {
  if (import.meta.client) {
    initForm();
  }
});
</script>

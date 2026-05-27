<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans overflow-hidden">
    <!-- Hero Background Graphic -->
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"/>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"/>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 w-full">
      <div class="mb-4">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-heroicons-arrow-left"
          size="sm"
          class="rounded-xl hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
          @click="goBack"
        >
          Cancel
        </UButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <!-- Column 1: Details Form -->
        <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <template #header>
            <h2 class="text-xl font-bold text-zinc-900 dark:text-white">Create New Group</h2>
          </template>

          <div class="space-y-6 py-4">
            <!-- Group Image Input -->
            <div class="flex flex-col items-center space-y-3">
              <UAvatar
                :src="picturePreview || '/logo.svg'"
                size="3xl"
                class="ring-4 ring-emerald-500/20 shadow-md object-cover"
              />
              <UButton
                color="neutral"
                variant="subtle"
                icon="i-heroicons-camera"
                size="sm"
                class="rounded-xl"
                @click="triggerFileInput"
              >
                Upload Photo
              </UButton>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleFileChange"
              >
            </div>

            <!-- Group Name Form -->
            <UFormField label="Group Name" name="groupName" required>
              <UInput
                v-model="groupName"
                placeholder="E.g. Project Team"
                size="lg"
                class="rounded-xl w-full"
                required
              />
            </UFormField>

            <!-- Selection Count Info -->
            <div class="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 text-center">
              <span class="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {{ selectedMids.length }} Friends Selected
              </span>
            </div>
          </div>

          <template #footer>
            <div class="flex justify-end gap-3 py-1">
              <UButton
                color="primary"
                variant="solid"
                icon="i-heroicons-check"
                class="w-full rounded-xl py-2.5 font-bold shadow-md shadow-emerald-500/10"
                :loading="creating"
                :disabled="!groupName.trim() || selectedMids.length === 0"
                @click="createGroup"
              >
                Create Group
              </UButton>
            </div>
          </template>
        </UCard>

        <!-- Column 2: Friends Multi-Selector -->
        <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl flex flex-col">
          <template #header>
            <div class="space-y-4">
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white">Select Members</h3>
              <UInput
                v-model="searchQuery"
                placeholder="Search friends..."
                icon="i-heroicons-magnifying-glass"
                size="md"
                class="rounded-xl w-full"
              />
            </div>
          </template>

          <!-- List Scroll Container -->
          <div class="overflow-y-auto max-h-[380px] pr-1 space-y-2 py-2">
            <template v-if="filteredFriends.length === 0">
              <p class="text-center text-xs text-zinc-400 py-12">No friends found</p>
            </template>
            <template v-else>
              <button
                v-for="friend in filteredFriends"
                :key="friend.mid"
                type="button"
                :class="[
                  'flex items-center justify-between w-full p-2.5 rounded-2xl border transition-all duration-150',
                  isSelected(friend.mid)
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                    : 'bg-transparent border-transparent hover:bg-zinc-150/50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300'
                ]"
                @click="toggleSelection(friend.mid)"
              >
                <div class="flex items-center gap-3 text-left min-w-0">
                  <UAvatar
                    :src="friend.pictureStatus ? `${mediaURL}/${friend.pictureStatus}` : '/logo.svg'"
                    size="sm"
                  />
                  <div class="min-w-0">
                    <h4 class="text-xs font-bold truncate">
                      {{ friend.displayName }}
                    </h4>
                    <p class="text-[10px] text-zinc-400 truncate max-w-xs mt-0.5">
                      {{ friend.statusMessage }}
                    </p>
                  </div>
                </div>
                <UIcon
                  v-if="isSelected(friend.mid)"
                  name="i-heroicons-check-circle"
                  class="w-5 h-5 text-emerald-500 shrink-0"
                />
              </button>
            </template>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {useSystem} from '~/composables/useSystem.client';
import Constant from '~/client/data/const';
import hash from 'js-sha256';

interface Contact {
  mid: string;
  displayName: string;
  pictureStatus?: string | null;
  statusMessage?: string | null;
}

definePageMeta({
  title: 'Create Group',
});

const system = useSystem();
const router = useRouter();

const groupName = ref('');
const searchQuery = ref('');
const friends = ref<Contact[]>([]);
const selectedMids = ref<string[]>([]);
const creating = ref(false);

const fileInput = ref<HTMLInputElement | null>(null);
const picturePreview = ref<string | null>(null);
const pictureFile = ref<File | null>(null);

const mediaURL = `//${Constant.LINE.MEDIA.HOST}`;

const goBack = () => {
  router.push('/');
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    pictureFile.value = file;

    const reader = new FileReader();
    reader.onload = (event) => {
      picturePreview.value = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const toggleSelection = (mid: string) => {
  const idx = selectedMids.value.indexOf(mid);
  if (idx > -1) {
    selectedMids.value.splice(idx, 1);
  } else {
    selectedMids.value.push(mid);
  }
};

const isSelected = (mid: string) => {
  return selectedMids.value.includes(mid);
};

const filteredFriends = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  return friends.value.filter((friend) =>
    friend.displayName.toLowerCase().includes(query),
  );
});

const loadFriends = async () => {
  if (!system.ready || !system.instances?.idb?.user) return;
  const db = system.instances.idb.user;

  const temp: Contact[] = [];
  let cursor = await db.transaction(Constant.IDB.USER.CONTACT)
      .store.index('displayName')
      .openCursor();
  while (cursor) {
    temp.push(cursor.value as Contact);
    cursor = await cursor.continue();
  }
  friends.value = temp;
};

const uploadPicture = async (groupId: string) => {
  if (!pictureFile.value) return;

  const data = new FormData();
  data.append(
      'params',
      JSON.stringify({
        ver: '1.0',
        type: 'image',
        oid: groupId,
        name: pictureFile.value.name,
        size: pictureFile.value.size,
      }),
  );
  data.append('file', pictureFile.value);

  const uploadURL = mediaURL.startsWith('//') ? `https:${mediaURL}` : mediaURL;
  await fetch(`${uploadURL}/talk/g/upload.nhn`, {
    method: 'POST',
    headers: {
      'X-Line-Access': system.authToken || '',
      'X-Line-Application': Constant.LINE.APPLICATION_IDENTITY,
    },
    body: data,
  });
};

const createGroup = async () => {
  if (creating.value) return;
  if (!groupName.value.trim() || selectedMids.value.length === 0) return;

  creating.value = true;
  try {
    const client = system.clients.query;
    const group = await client.createGroup(
        Constant.THRIFT_DEFAULT_SEQ,
        groupName.value.trim(),
        selectedMids.value,
    );

    if (group) {
      if (pictureFile.value) {
        await uploadPicture(group.id);
      }

      // Register new group in system hash table immediately
      system.registerChatRoomIdHash(group.id);

      // Redirect to the chat room
      setTimeout(() => {
        router.push(`/chat/${hash.sha256(group.id)}`);
      }, Constant.TIMEOUT.WAIT);
    } else {
      console.error('Group creation call returned empty payload.');
    }
  } catch (err) {
    console.error('Failed to create new LINE group:', err);
  } finally {
    creating.value = false;
  }
};

const initPage = () => {
  if (system.ready) {
    loadFriends();
  } else {
    setTimeout(initPage, Constant.TIMEOUT.RETRY);
  }
};

onMounted(() => {
  if (import.meta.client) {
    initPage();
  }
});
</script>

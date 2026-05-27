<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-zinc-950 font-sans overflow-hidden">
    <!-- Hero Background Graphic -->
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"/>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"/>
    </div>

    <!-- Main Dashboard Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Loading State -->
      <div v-if="!system.ready" class="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 text-emerald-500 animate-spin" />
        <p class="text-zinc-500 dark:text-zinc-400 font-medium">Synchronizing with LINE services...</p>
      </div>

      <!-- Main UI -->
      <div v-else class="space-y-6">
        <!-- Top bar / User Profile Header -->
        <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-lg">
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <!-- Left: Profile info -->
            <nuxt-link to="/profile" class="flex items-center gap-4 hover:opacity-85 transition-opacity group">
              <UAvatar
                :src="system.profile.picturePath ? `${mediaURL}${system.profile.picturePath}` : '/logo.svg'"
                alt="My Profile"
                size="lg"
                class="ring-2 ring-emerald-500/20"
              />
              <div class="text-left">
                <h2 class="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {{ system.profile.displayName || 'Loading Name...' }}
                </h2>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-xs sm:max-w-md">
                  {{ system.profile.statusMessage || 'No status message' }}
                </p>
              </div>
            </nuxt-link>

            <!-- Right: Action Buttons -->
            <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
              <UButton
                to="/settings"
                color="neutral"
                variant="ghost"
                icon="i-heroicons-cog-6-tooth"
                size="sm"
                class="rounded-xl"
              >
                Settings
              </UButton>
              <UButton
                color="error"
                variant="subtle"
                icon="i-heroicons-arrow-right-end-on-rectangle"
                size="sm"
                class="rounded-xl font-semibold shadow-sm"
                @click="logout"
              >
                Logout
              </UButton>
            </div>
          </div>
        </UCard>

        <!-- Mobile UI Tab Switcher -->
        <div class="md:hidden flex rounded-2xl bg-zinc-200/50 dark:bg-zinc-800/50 p-1 border border-zinc-200/20 dark:border-zinc-800/20">
          <button
            :class="[
              'flex-1 py-2 text-sm font-semibold rounded-xl transition-all',
              activeMobileTab === 'chats'
                ? 'bg-white dark:bg-zinc-900 shadow-sm text-emerald-600 dark:text-emerald-400'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800'
            ]"
            @click="activeMobileTab = 'chats'"
          >
            Chats
          </button>
          <button
            :class="[
              'flex-1 py-2 text-sm font-semibold rounded-xl transition-all',
              activeMobileTab === 'contacts'
                ? 'bg-white dark:bg-zinc-900 shadow-sm text-emerald-600 dark:text-emerald-400'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800'
            ]"
            @click="activeMobileTab = 'contacts'"
          >
            Contacts
          </button>
        </div>

        <!-- Two Column Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

          <!-- Contacts / Groups List Panel -->
          <div
            :class="[
              'col-span-1 md:col-span-4 transition-all duration-300',
              activeMobileTab === 'contacts' ? 'block' : 'hidden md:block'
            ]"
          >
            <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-lg min-h-[500px]">
              <template #header>
                <div class="space-y-4">
                  <div class="flex justify-between items-center">
                    <h3 class="text-lg font-bold text-zinc-900 dark:text-white">Contacts & Groups</h3>
                    <UButton
                      to="/create/group"
                      color="primary"
                      variant="ghost"
                      icon="i-heroicons-plus-circle"
                      size="sm"
                      class="rounded-xl"
                    >
                      New Group
                    </UButton>
                  </div>

                  <!-- Mini Tabs for Users vs Groups -->
                  <div class="flex rounded-xl bg-zinc-100 dark:bg-zinc-950 p-1 border border-zinc-200/35 dark:border-zinc-800/35">
                    <button
                      :class="[
                        'flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all',
                        activeContactTab === 'contacts'
                          ? 'bg-white dark:bg-zinc-900 shadow-sm text-zinc-900 dark:text-white'
                          : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                      ]"
                      @click="activeContactTab = 'contacts'"
                    >
                      Friends
                    </button>
                    <button
                      :class="[
                        'flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all',
                        activeContactTab === 'groups'
                          ? 'bg-white dark:bg-zinc-900 shadow-sm text-zinc-900 dark:text-white'
                          : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                      ]"
                      @click="activeContactTab = 'groups'"
                    >
                      Groups
                    </button>
                  </div>

                  <!-- Filter / Search -->
                  <UInput
                    v-model="contactSearchQuery"
                    placeholder="Search by name..."
                    icon="i-heroicons-magnifying-glass"
                    size="md"
                    class="rounded-xl w-full"
                  />
                </div>
              </template>

              <!-- Contacts Scrollbox -->
              <div class="overflow-y-auto max-h-[400px] pr-1 space-y-2">
                <template v-if="filteredContacts.length === 0">
                  <p class="text-center text-xs text-zinc-400 py-8">No results found</p>
                </template>
                <template v-else>
                  <nuxt-link
                    v-for="item in filteredContacts"
                    :key="item.id"
                    :to="`/contact/${item.id}`"
                    class="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors duration-150 group"
                  >
                    <UAvatar
                      :src="item.pictureStatus ? `${mediaURL}/${item.pictureStatus}` : '/logo.svg'"
                      size="md"
                      class="ring-1 ring-zinc-200/50 dark:ring-zinc-800/50"
                    />
                    <div class="flex-1 min-w-0 text-left">
                      <h4 class="text-sm font-semibold text-zinc-900 dark:text-white truncate group-hover:text-emerald-500 transition-colors">
                        {{ item.displayName }}
                      </h4>
                      <p class="text-xs text-zinc-500 truncate mt-0.5">
                        {{ item.statusMessage }}
                      </p>
                    </div>
                  </nuxt-link>
                </template>
              </div>
            </UCard>
          </div>

          <!-- Chats Preview Panel -->
          <div
            :class="[
              'col-span-1 md:col-span-8 transition-all duration-300',
              activeMobileTab === 'chats' ? 'block' : 'hidden md:block'
            ]"
          >
            <UCard class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-lg min-h-[500px]">
              <template #header>
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-bold text-zinc-900 dark:text-white">Recent Chats</h3>
                  <UBadge color="primary" variant="subtle" class="rounded-full px-2.5">
                    {{ displayChats.length }} Chats
                  </UBadge>
                </div>
              </template>

              <!-- Chats List -->
              <div class="overflow-y-auto max-h-[500px] pr-1 space-y-3">
                <template v-if="displayChats.length === 0">
                  <div class="text-center py-20 space-y-3">
                    <div class="inline-flex p-3 bg-zinc-100 dark:bg-zinc-950 rounded-2xl text-zinc-400">
                      <UIcon name="i-heroicons-chat-bubble-left-right" class="w-8 h-8" />
                    </div>
                    <p class="text-zinc-500 dark:text-zinc-400 text-sm">No chat logs found yet.</p>
                    <p class="text-xs text-zinc-400">Try starting a chat from your contact list.</p>
                  </div>
                </template>
                <template v-else>
                  <nuxt-link
                    v-for="item in displayChats"
                    :key="item.id"
                    :to="`/chat/${item.id}`"
                    class="flex items-center justify-between gap-4 p-4 rounded-2xl border border-zinc-200/20 hover:border-zinc-200/55 dark:hover:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200 shadow-sm"
                  >
                    <div class="flex items-center gap-3.5 min-w-0 flex-1">
                      <UAvatar
                        :src="item.pictureStatus ? `${mediaURL}/${item.pictureStatus}` : '/logo.svg'"
                        size="lg"
                        class="ring-1 ring-zinc-200/30 dark:ring-zinc-800/30 shrink-0"
                      />
                      <div class="text-left min-w-0 flex-1">
                        <h4 class="text-base font-bold text-zinc-900 dark:text-white truncate">
                          {{ item.displayName }}
                        </h4>
                        <p class="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-1 leading-relaxed">
                          {{ item.lastMessage }}
                        </p>
                      </div>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="text-xs text-zinc-400 font-mono">
                        {{ timeToReadable(item.time) }}
                      </span>
                    </div>
                  </nuxt-link>
                </template>
              </div>
            </UCard>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted, onUnmounted} from 'vue';
import {useSystem} from '~/composables/useSystem.client';
import Constant from '~/client/data/const';
import hash from 'js-sha256';
import lineType from '~/client/protocol/line_types.js';
import type {Contact, Group, Message, ContactItem, PreviewItem} from '~/types/line';

definePageMeta({
  title: 'Dashboard',
});

const system = useSystem();

// Tab States
const activeMobileTab = ref('chats');
const activeContactTab = ref('contacts');

// UI Lists
const contactSearchQuery = ref('');
const contactUser = ref<ContactItem[]>([]);
const contactGroupJoined = ref<ContactItem[]>([]);
const contactGroupInvited = ref<ContactItem[]>([]);
const previewMessageBox = ref<Record<string, PreviewItem>>({});

const mediaURL = `//${Constant.LINE.MEDIA.HOST}`;

// Lifecycle Poller ID
let messagePollerId: ReturnType<typeof setInterval> | null = null;

const logout = async () => {
  await system.revoke();
};

const getContactInfo = async (message: Message): Promise<{ displayName: string; pictureStatus?: string | null } | null> => {
  if (!system.ready || !system.instances?.idb?.user) return null;
  const db = system.instances.idb.user;

  if (message.toType === lineType.MIDType.USER) {
    const targetId = message.from_ === system.profile.userId ? message.to : message.from_;
    const contactData = await db.get(Constant.IDB.USER.CONTACT, targetId) as Contact | undefined;
    if (!contactData) {
      return {displayName: 'Unknown', pictureStatus: null};
    }
    return contactData;
  } else if (message.toType === lineType.MIDType.GROUP) {
    const groupData = await db.get(Constant.IDB.USER.GROUP.JOINED, message.to) as Group | undefined;
    if (!groupData) {
      return {displayName: 'Unknown', pictureStatus: null};
    }
    return {
      displayName: groupData.name,
      pictureStatus: groupData.pictureStatus || null,
    };
  }
  return null;
};

const loadContactsFromDB = async () => {
  if (!system.ready || !system.instances?.idb?.user) return;
  const db = system.instances.idb.user;

  // Fetch Friends
  const tempFriends: ContactItem[] = [];
  let cursor = await db.transaction(Constant.IDB.USER.CONTACT)
      .store.index('displayName')
      .openCursor();
  while (cursor) {
    const val = cursor.value as Contact;
    tempFriends.push({
      id: hash.sha256(val.mid),
      mid: val.mid,
      displayName: val.displayName,
      statusMessage: val.statusMessage || undefined,
      pictureStatus: val.pictureStatus,
    });
    cursor = await cursor.continue();
  }
  contactUser.value = tempFriends;

  const layoutGroupStatus = (groupData: Group, invited = false) => {
    const layout = [];
    if (invited) layout.push(`${Constant.GROUP_INVITING_ICON}`);
    const membersCount = groupData.members ? groupData.members.length : 0;
    layout.push(`Members: ${membersCount}`);
    return layout.join(' ');
  };

  // Fetch Joined Groups
  const tempJoined: ContactItem[] = [];
  cursor = await db.transaction(Constant.IDB.USER.GROUP.JOINED)
      .store.index('displayName')
      .openCursor();
  while (cursor) {
    const val = cursor.value as Group;
    tempJoined.push({
      id: hash.sha256(val.id),
      groupId: val.id,
      displayName: val.name,
      statusMessage: layoutGroupStatus(val),
      pictureStatus: val.pictureStatus,
    });
    cursor = await cursor.continue();
  }
  contactGroupJoined.value = tempJoined;

  // Fetch Invited Groups
  const tempInvited: ContactItem[] = [];
  cursor = await db.transaction(Constant.IDB.USER.GROUP.INVITED)
      .store.index('displayName')
      .openCursor();
  while (cursor) {
    const val = cursor.value as Group;
    tempInvited.push({
      id: hash.sha256(val.id),
      groupId: val.id,
      displayName: val.name,
      statusMessage: layoutGroupStatus(val, true),
      pictureStatus: val.pictureStatus,
    });
    cursor = await cursor.continue();
  }
  contactGroupInvited.value = tempInvited;
};

const loadPreviewMessages = async () => {
  if (!system.ready || !system.instances?.idb?.user) return;
  const db = system.instances.idb.user;

  const tempBox: Record<string, PreviewItem> = {};
  let cursor = await db.transaction(Constant.IDB.USER.PREVIEW_MESSAGE_BOX).store.openCursor();
  while (cursor) {
    const msg = cursor.value as Message;
    const contactData = await getContactInfo(msg);
    const displayName = contactData ? (contactData.displayName || 'Unknown') : 'Unknown';
    const pictureStatus = contactData ? contactData.pictureStatus : null;
    const targetIdHash = hash.sha256(msg.target);

    let lastMessage = '';
    if (msg.contentType === lineType.ContentType.IMAGE) {
      lastMessage = '(Image)';
    } else if (msg.contentType === lineType.ContentType.STICKER) {
      lastMessage = '(Sticker)';
    } else {
      lastMessage = msg.text || '';
    }

    const timeVal = typeof msg.createdTime === 'object' && msg.createdTime && 'toNumber' in msg.createdTime && typeof msg.createdTime.toNumber === 'function' ?
      msg.createdTime.toNumber() :
      parseInt(msg.createdTime.toString(), 10);

    // Only update if message is newer
    const existing = tempBox[msg.target];
    if (!existing || timeVal > existing.time) {
      tempBox[msg.target] = {
        id: targetIdHash,
        target: msg.target,
        time: timeVal,
        displayName,
        pictureStatus,
        lastMessage,
      };
    }
    cursor = await cursor.continue();
  }
  previewMessageBox.value = tempBox;
};

// Computed Lists
const filteredContacts = computed(() => {
  const query = contactSearchQuery.value.trim().toLowerCase();

  if (activeContactTab.value === 'contacts') {
    return contactUser.value.filter((item) =>
      item.displayName.toLowerCase().includes(query),
    );
  } else {
    const allGroups = [...contactGroupJoined.value, ...contactGroupInvited.value];
    return allGroups.filter((item) =>
      item.displayName.toLowerCase().includes(query),
    );
  }
});

const displayChats = computed(() => {
  const chats = Object.values(previewMessageBox.value);
  chats.sort((a, b) => b.time - a.time);
  return chats;
});

const timeToReadable = (timeValue: number) => {
  const date = new Date(timeValue);
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  if (isToday) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
};

// Initialize Dashboard Data
const initializeDashboard = async () => {
  if (system.ready) {
    await loadContactsFromDB();
    await loadPreviewMessages();

    // Start periodic update check for previews safely
    if (messagePollerId) clearInterval(messagePollerId);
    messagePollerId = setInterval(loadPreviewMessages, 1000);
  } else {
    // Retry check
    setTimeout(initializeDashboard, Constant.TIMEOUT.RETRY);
  }
};

onMounted(() => {
  if (import.meta.client) {
    initializeDashboard();
  }
});

onUnmounted(() => {
  if (messagePollerId) {
    clearInterval(messagePollerId);
  }
});
</script>

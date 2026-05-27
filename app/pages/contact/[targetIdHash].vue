<template>
  <div class="relative min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans overflow-hidden">
    <!-- Hero Background Graphic -->
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"/>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"/>
    </div>

    <!-- Main Container -->
    <div class="relative z-10 sm:mx-auto sm:w-full sm:max-w-xl px-4">
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

      <!-- Loading State -->
      <div v-if="loading || !system.ready" class="min-h-[300px] flex flex-col items-center justify-center space-y-4">
        <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 text-emerald-500 animate-spin" />
        <p class="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Resolving profile details...</p>
      </div>

      <!-- Contact Card -->
      <UCard v-else class="rounded-3xl border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl overflow-hidden">
        <!-- Top Contact Info -->
        <div class="flex flex-col items-center text-center space-y-4 py-6 border-b border-zinc-150 dark:border-zinc-800">
          <UAvatar
            :src="pictureStatus ? `${mediaURL}/${pictureStatus}` : '/logo.svg'"
            :alt="displayName"
            size="3xl"
            class="ring-4 ring-emerald-500/20 shadow-md"
          />
          <div class="space-y-1">
            <h2 class="text-2xl font-bold text-zinc-900 dark:text-white">
              {{ displayName }}
            </h2>
            <UBadge
              :color="isGroup ? 'primary' : 'success'"
              variant="subtle"
              class="rounded-full px-2.5 uppercase font-mono tracking-wider text-[10px]"
            >
              {{ isGroup ? (groupInviting ? 'Group Invitation' : 'Group') : 'Friend' }}
            </UBadge>
          </div>
        </div>

        <!-- Details Box -->
        <div class="py-6 space-y-6 text-left">
          <!-- Status message for users -->
          <div v-if="!isGroup" class="space-y-1.5">
            <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider">Status Message</span>
            <div class="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200/30 dark:border-zinc-800/30 min-h-[60px]">
              <p class="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                {{ statusMessage || 'No status message set.' }}
              </p>
            </div>
          </div>

          <!-- Group Members List -->
          <div v-if="isGroup && members.length > 0" class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider">Group Members ({{ members.length }})</span>
            </div>
            <div class="max-h-[220px] overflow-y-auto pr-1 space-y-2 border border-zinc-150 dark:border-zinc-800/50 rounded-2xl p-2 bg-zinc-50 dark:bg-zinc-950">
              <div
                v-for="member in members"
                :key="member.mid"
                class="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <UAvatar
                  :src="member.pictureStatus ? `${mediaURL}/${member.pictureStatus}` : '/logo.svg'"
                  size="sm"
                />
                <div class="text-left min-w-0">
                  <h4 class="text-xs font-bold text-zinc-900 dark:text-white truncate">
                    {{ member.displayName }}
                  </h4>
                  <p v-if="member.statusMessage" class="text-[10px] text-zinc-400 truncate mt-0.5 max-w-xs">
                    {{ member.statusMessage }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Invitation Status Box -->
          <div v-if="groupInviting" class="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-start gap-3">
            <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 shrink-0 mt-0.5" />
            <div class="text-xs space-y-1">
              <p class="font-bold">Group Invitation Received</p>
              <p class="leading-relaxed text-amber-600/80 dark:text-amber-400/80">
                You have been invited to join this group. Accept the invitation to join the conversation, or decline to dismiss it.
              </p>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <template #footer>
          <div class="flex justify-center py-1.5 w-full">
            <template v-if="groupInviting">
              <div class="flex gap-4 w-full px-2">
                <UButton
                  color="error"
                  variant="subtle"
                  icon="i-heroicons-x-mark"
                  class="flex-1 rounded-xl py-2.5 font-bold shadow-sm"
                  :loading="replying"
                  @click="replyGroupInvitation(false)"
                >
                  Decline
                </UButton>
                <UButton
                  color="primary"
                  variant="solid"
                  icon="i-heroicons-check"
                  class="flex-1 rounded-xl py-2.5 font-bold shadow-md shadow-emerald-500/10"
                  :loading="replying"
                  @click="replyGroupInvitation(true)"
                >
                  Accept
                </UButton>
              </div>
            </template>
            <template v-else>
              <UButton
                color="primary"
                variant="solid"
                icon="i-heroicons-chat-bubble-left-right"
                class="w-full rounded-2xl py-3 font-bold shadow-md shadow-emerald-500/10"
                @click="enterChat"
              >
                Send Message
              </UButton>
            </template>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, computed, onMounted, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useSystem} from '~/composables/useSystem.client';
import Constant from '~/client/data/const';
import type {Contact, Group} from '~/types/line';

const system = useSystem();
const route = useRoute();
const router = useRouter();

const targetIdHash = route.params.targetIdHash as string;

const loading = ref(true);
const replying = ref(false);

const displayName = ref('Loading...');
const statusMessage = ref('');
const pictureStatus = ref<string | null>(null);
const isGroup = ref(false);
const groupInviting = ref(false);
const members = ref<Contact[]>([]);

const mediaURL = `//${Constant.LINE.MEDIA.HOST}`;

const targetId = computed(() => {
  if (!system.ready) return null;
  return system.chatRoomIdHash.get(targetIdHash) || null;
});

const goBack = () => {
  router.push('/dashboard');
};

const enterChat = () => {
  router.replace(`/chat/${targetIdHash}`);
};

const fetchProfile = async () => {
  if (!targetId.value || !system.instances?.idb?.user) {
    return;
  }

  loading.value = true;
  const db = system.instances.idb.user;

  try {
    if (targetId.value.startsWith('u')) {
      isGroup.value = false;
      const userInfo = await db.get(Constant.IDB.USER.CONTACT, targetId.value) as Contact | undefined;
      if (userInfo) {
        displayName.value = userInfo.displayName || 'Unknown Friend';
        statusMessage.value = userInfo.statusMessage || '';
        pictureStatus.value = userInfo.pictureStatus || null;
      }
    } else if (targetId.value.startsWith('c')) {
      isGroup.value = true;
      let groupInfo = await db.get(Constant.IDB.USER.GROUP.JOINED, targetId.value) as Group | undefined;
      if (!groupInfo) {
        groupInfo = await db.get(Constant.IDB.USER.GROUP.INVITED, targetId.value) as Group | undefined;
        groupInviting.value = true;
      } else {
        groupInviting.value = false;
      }

      if (groupInfo) {
        displayName.value = groupInfo.name || 'Unknown Group';
        pictureStatus.value = groupInfo.pictureStatus || null;
        members.value = groupInfo.members || [];
      }
    } else {
      router.replace('/dashboard');
    }
  } catch (err) {
    console.error('Failed to load contact/group details:', err);
  } finally {
    loading.value = false;
  }
};

const replyGroupInvitation = async (status: boolean) => {
  if (replying.value || !targetId.value) return;
  replying.value = true;

  try {
    const client = system.clients.query;
    if (status) {
      await client.acceptGroupInvitation(Constant.THRIFT_DEFAULT_SEQ, targetId.value);
      // Wait briefly for IDB to refresh before entering chat
      setTimeout(enterChat, 500);
    } else {
      await client.rejectGroupInvitation(Constant.THRIFT_DEFAULT_SEQ, targetId.value);
      router.replace('/dashboard');
    }
  } catch (err) {
    console.error('Failed responding to group invitation:', err);
  } finally {
    replying.value = false;
  }
};

// React to system.ready and targetId resolution
watch(
    targetId,
    (newVal) => {
      if (newVal) {
        fetchProfile();
      }
    },
    {immediate: true},
);

onMounted(() => {
  if (import.meta.client && system.ready && targetId.value) {
    fetchProfile();
  }
});
</script>

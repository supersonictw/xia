<template>
  <div class="relative h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col font-sans overflow-hidden">
    <!-- Hero Background Graphic -->
    <div class="absolute inset-0 z-0 opacity-15 dark:opacity-10 pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"/>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"/>
    </div>

    <!-- Chat View Container -->
    <div class="relative z-10 flex-1 flex flex-col h-full max-w-5xl w-full mx-auto bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border-x border-zinc-200/50 dark:border-zinc-800/50">

      <!-- Chat Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
        <div class="flex items-center gap-3">
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-heroicons-arrow-left"
            size="sm"
            class="rounded-xl"
            @click="goBack"
          />
          <UAvatar
            :src="chatRoomPicture ? `${mediaURL}/${chatRoomPicture}` : '/logo.svg'"
            size="md"
            class="ring-1 ring-zinc-200/30 dark:ring-zinc-800/30"
          />
          <div class="text-left min-w-0">
            <h2 class="text-base font-bold text-zinc-950 dark:text-white truncate">
              {{ chatRoomTitle }}
            </h2>
            <span class="text-[10px] text-zinc-400 font-medium">
              {{ chatRoomType === lineType.MIDType.GROUP ? 'Group Chat' : 'Direct Chat' }}
            </span>
          </div>
        </div>

        <div>
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-heroicons-information-circle"
            size="sm"
            class="rounded-xl"
            :to="`/contact/${targetIdHash}`"
          />
        </div>
      </div>

      <!-- Messages View Area -->
      <div
        id="msg-container"
        ref="msgContainer"
        class="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
      >
        <div v-if="!initialized" class="h-full flex flex-col items-center justify-center space-y-3">
          <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 text-emerald-500 animate-spin" />
          <p class="text-xs text-zinc-400 font-medium">Retrieving message history...</p>
        </div>

        <div v-else-if="messages.length === 0" class="h-full flex flex-col items-center justify-center text-center space-y-2">
          <div class="p-3 bg-zinc-100 dark:bg-zinc-950 rounded-2xl text-zinc-400">
            <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="w-8 h-8" />
          </div>
          <p class="text-sm font-semibold text-zinc-700 dark:text-zinc-300">No messages yet</p>
          <p class="text-xs text-zinc-500">Send a message to kick off the conversation.</p>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="(item, idx) in formattedMessages"
            :key="item.id || idx"
            :class="[
              'flex flex-col max-w-[75%] space-y-1',
              item.isSelf ? 'ml-auto items-end text-right' : 'mr-auto items-start text-left'
            ]"
          >
            <!-- Sender name (only for others in Group chats) -->
            <span
              v-if="!item.isSelf && chatRoomType === lineType.MIDType.GROUP"
              class="text-[10px] font-bold text-zinc-400 px-1"
            >
              {{ item.senderName }}
            </span>

            <div :class="['flex items-end gap-2', item.isSelf ? 'flex-row-reverse' : 'flex-row']">
              <!-- Avatar for others in group chats -->
              <UAvatar
                v-if="!item.isSelf && chatRoomType === lineType.MIDType.GROUP"
                :src="item.senderAvatar ? `${mediaURL}/${item.senderAvatar}` : '/logo.svg'"
                size="sm"
                class="ring-1 ring-zinc-200/20 dark:ring-zinc-800/20 mb-1"
              />

              <!-- Bubble body -->
              <div
                :class="[
                  'px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm break-all border',
                  item.isSelf
                    ? 'bg-emerald-500 border-emerald-600/20 text-white rounded-br-none'
                    : 'bg-white dark:bg-zinc-800 border-zinc-150 dark:border-zinc-800/50 text-zinc-900 dark:text-zinc-200 rounded-bl-none'
                ]"
              >
                <!-- Image Message -->
                <div v-if="item.type === lineType.ContentType.IMAGE" class="relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-950">
                  <img
                    v-if="mediaObjects[item.id]"
                    :src="mediaObjects[item.id]"
                    alt="Image attachment"
                    class="max-w-[240px] max-h-[300px] object-cover transition-opacity duration-200 group-hover:opacity-90"
                    @click="triggerLightbox(mediaObjects[item.id])"
                  >
                  <div v-else class="w-[200px] h-[150px] flex items-center justify-center">
                    <UIcon name="i-heroicons-arrow-path" class="w-6 h-6 text-zinc-400 animate-spin" />
                  </div>
                </div>

                <!-- Sticker Message -->
                <div v-else-if="item.type === lineType.ContentType.STICKER" class="overflow-hidden">
                  <img
                    v-if="mediaObjects[item.id]"
                    :src="mediaObjects[item.id]"
                    alt="Sticker"
                    class="max-w-[120px] max-h-[120px] object-contain"
                  >
                  <div v-else class="w-[80px] h-[80px] flex items-center justify-center">
                    <UIcon name="i-heroicons-arrow-path" class="w-5 h-5 text-zinc-400 animate-spin" />
                  </div>
                </div>

                <!-- Regular Text message -->
                <p v-else class="whitespace-pre-wrap break-words">{{ item.content }}</p>
              </div>

              <!-- Time display -->
              <span class="text-[9px] text-zinc-400 font-mono mb-1 shrink-0">
                {{ formatMsgTime(item.time) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- File Attachment Previews Drawer -->
      <div v-if="picturePreview" class="px-6 py-3 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center gap-3">
        <div class="relative shrink-0">
          <img
            :src="picturePreview"
            class="w-16 h-16 rounded-xl object-cover ring-2 ring-emerald-500/20"
          >
          <button
            class="absolute -top-1.5 -right-1.5 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-sm"
            @click="clearAttachment"
          >
            <UIcon name="i-heroicons-x-mark" class="w-3.5 h-3.5" />
          </button>
        </div>
        <div class="text-left">
          <p class="text-xs font-bold text-zinc-700 dark:text-zinc-300 truncate max-w-xs">
            {{ selectedFile?.name }}
          </p>
          <p class="text-[10px] text-zinc-400 mt-0.5">
            Ready to attach. Press send to deliver.
          </p>
        </div>
      </div>

      <!-- Input Actions Panel -->
      <div class="px-6 py-4 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center gap-3">
        <!-- Emoji Popover -->
        <UPopover>
          <template #default>
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-heroicons-face-smile"
              class="rounded-xl"
            />
          </template>
          <template #content>
            <div class="p-3 max-w-[280px] bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
              <div class="grid grid-cols-7 gap-1.5 overflow-y-auto max-h-[160px] p-0.5">
                <button
                  v-for="emoji in emojiSet"
                  :key="emoji"
                  type="button"
                  class="text-xl p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all active:scale-95"
                  @click="insertEmoji(emoji)"
                >
                  {{ emoji }}
                </button>
              </div>
            </div>
          </template>
        </UPopover>

        <!-- Attachment Selector Button -->
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-heroicons-paper-clip"
          class="rounded-xl"
          @click="triggerFileInput"
        />
        <input
          ref="fileInput"
          type="file"
          accept="image/*,video/mp4"
          class="hidden"
          @change="handleFileChange"
        >

        <!-- Growing Input area -->
        <textarea
          v-model="inputText"
          placeholder="Write a message..."
          rows="1"
          class="flex-1 resize-none bg-zinc-150/40 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500"
          @keydown.enter.exact.prevent="handleSend"
        />

        <!-- Send Button -->
        <UButton
          color="primary"
          variant="solid"
          icon="i-heroicons-paper-airplane"
          class="rounded-2xl shadow-md shadow-emerald-500/10 px-4 py-2.5 font-bold"
          :disabled="!inputText.trim() && !pictureFile"
          :loading="sending"
          @click="handleSend"
        />
      </div>

    </div>

    <!-- Image Lightbox Modal Overlay -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
      @click="closeLightbox"
    >
      <button
        class="absolute top-4 right-4 p-2 bg-zinc-900/50 hover:bg-zinc-800 text-white rounded-full transition-colors"
        @click.stop="closeLightbox"
      >
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6" />
      </button>
      <img
        :src="lightboxImage || ''"
        class="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
      >
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted, onUnmounted, watch, nextTick} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useSystem} from '~/composables/useSystem.client';
import Constant from '~/client/data/const';
import lineType from '~/client/protocol/line_types.js';
import type {Contact, Group, Message} from '~/types/line';

definePageMeta({
  title: 'Chat Room',
});

const system = useSystem();
const route = useRoute();
const router = useRouter();

const targetIdHash = route.params.targetIdHash as string;

// UI States
const initialized = ref(false);
const chatRoomTitle = ref('Unknown Room');
const chatRoomPicture = ref<string | null>(null);
const chatRoomType = ref(0);
const chatRoomInfo = ref<Contact | Group | null>(null);
const messages = ref<Message[]>([]);
const mediaObjects = ref<Record<string, string>>({});
const messageIdLastSeen = ref<string | null>(null);

const inputText = ref('');
const sending = ref(false);

const msgContainer = ref<HTMLDivElement | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const picturePreview = ref<string | null>(null);
const pictureFile = ref<File | null>(null);
const selectedFile = ref<File | null>(null);

// Lightbox
const lightboxOpen = ref(false);
const lightboxImage = ref<string | null>(null);

// Loop handle
let fetchLoopId: ReturnType<typeof setInterval> | null = null;

const mediaURL = `//${Constant.LINE.MEDIA.HOST}`;

const emojiSet = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰',
  '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥸', '🤩', '🥳',
  '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤',
  '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🫣', '🤭',
  '🫢', '🫡', '🤫', '🫠', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤟', '👌', '👋', '💪',
];

const targetId = computed(() => {
  if (!system.ready) return null;
  return system.chatRoomIdHash.get(targetIdHash) || null;
});

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
    selectedFile.value = file;

    const reader = new FileReader();
    reader.onload = (event) => {
      picturePreview.value = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

const clearAttachment = () => {
  pictureFile.value = null;
  selectedFile.value = null;
  picturePreview.value = null;
  if (fileInput.value) fileInput.value.value = '';
};

const insertEmoji = (emoji: string) => {
  inputText.value += emoji;
};

const triggerLightbox = (imgUrl: string | undefined) => {
  if (!imgUrl) return;
  lightboxImage.value = imgUrl;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  lightboxImage.value = null;
};

const scrollToBottom = async () => {
  await nextTick();
  if (msgContainer.value) {
    msgContainer.value.scrollTop = msgContainer.value.scrollHeight;
  }
};

const downloadImage = async (imageSource: string) => {
  const response = await fetch(imageSource, {
    method: 'GET',
    headers: {
      'Accept': 'image/jpeg',
      'X-Line-Access': system.authToken || '',
      'X-Line-Application': Constant.LINE.APPLICATION_IDENTITY,
    },
  });
  return await response.arrayBuffer();
};

const getStickerImageResource = async (messageId: string, contentMetadata: Record<string, string | number>) => {
  if (messageId in mediaObjects.value) return;
  if (!contentMetadata.STKPKGID || !contentMetadata.STKID) return;
  const stkVer = Number(contentMetadata.STKVER);
  const version =
    Math.floor(stkVer / 1000000) +
    '/' +
    Math.floor(stkVer / 1000) +
    '/' +
    (stkVer % 1000);
  const platform = Constant.LINE.STICKER.PLATFORM;
  const packageId = contentMetadata.STKPKGID.toString();
  const stickerId = contentMetadata.STKID.toString();
  const domain = Constant.LINE.STICKER.HOST;
  const path = `/products/${version}/${packageId}/${platform}/stickers/`;
  const stickerFileName = `${stickerId}.png`;
  const stickerURL = `https://${domain}${path}${stickerFileName}`;
  mediaObjects.value[messageId] = stickerURL;
};

const getImageResource = async (messageId: string) => {
  if (!messageId || messageId in mediaObjects.value) return;

  try {
    const imageURL = `${mediaURL}/os/m/${messageId}/preview`;
    const imageURLWithProto = imageURL.startsWith('//') ? `https:${imageURL}` : imageURL;
    const arrayBuffer = await downloadImage(imageURLWithProto);

    const bytes = new Uint8Array(arrayBuffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]!);
    }
    const imageB64 = 'data:image/jpeg;base64,' + window.btoa(binary);
    mediaObjects.value[messageId] = imageB64;
  } catch (err) {
    console.error('Failed to retrieve chat image resource:', err);
  }
};

const sendReadTag = (messageId: string) => {
  if (!targetId.value) return;
  system.clients.query.sendChatChecked(
      Constant.THRIFT_DEFAULT_SEQ,
      targetId.value,
      messageId,
  );
};

const fetchChatRoomInformation = async () => {
  if (!targetId.value || !system.instances?.idb?.user) return false;
  const db = system.instances.idb.user;

  if (targetId.value.startsWith('u')) {
    const info = await db.get(Constant.IDB.USER.CONTACT, targetId.value);
    if (info) {
      chatRoomInfo.value = info;
      chatRoomTitle.value = info.displayName || 'Direct Chat';
      chatRoomPicture.value = info.pictureStatus || null;
      chatRoomType.value = lineType.MIDType.USER;
      return true;
    }
  } else if (targetId.value.startsWith('c')) {
    const info = await db.get(Constant.IDB.USER.GROUP.JOINED, targetId.value);
    if (info) {
      chatRoomInfo.value = info;
      chatRoomTitle.value = info.name || 'Group Chat';
      chatRoomPicture.value = info.pictureStatus || null;
      chatRoomType.value = lineType.MIDType.GROUP;
      return true;
    }
  }
  return false;
};

const fetchDisplayMessage = async () => {
  if (!system.ready || !targetId.value || !system.instances?.idb?.user) return;
  const db = system.instances.idb.user;

  try {
    const temp: Message[] = [];
    let cursor = await db.transaction(Constant.IDB.USER.MESSAGE_BOX)
        .store.index('target')
        .openCursor(IDBKeyRange.only(targetId.value), 'prev');

    let lastSeenId: string | null = null;
    let autoScrollNeeded = false;

    while (cursor) {
      if (temp.length >= Constant.CHAT_DISPLAY_ROW_LIMIT) break;

      const msg = cursor.value as Message;
      if (!lastSeenId) {
        lastSeenId = msg.id;
      }

      // Load resources in background
      if (msg.contentType === lineType.ContentType.IMAGE) {
        getImageResource(msg.id);
      } else if (msg.contentType === lineType.ContentType.STICKER) {
        getStickerImageResource(msg.id, msg.contentMetadata as Record<string, string | number>);
      }

      temp.push(msg);
      cursor = await cursor.continue();
    }

    // Chronological order (oldest to newest)
    temp.reverse();

    // Check if new messages arrived
    if (lastSeenId && lastSeenId !== messageIdLastSeen.value) {
      messageIdLastSeen.value = lastSeenId;
      sendReadTag(lastSeenId);
      autoScrollNeeded = true;
    }

    messages.value = temp;

    if (!initialized.value) {
      initialized.value = true;
      scrollToBottom();
    } else if (autoScrollNeeded) {
      scrollToBottom();
    }
  } catch (err) {
    console.error('Failed fetching chat messages from IDB:', err);
  }
};

const getUserInfo = (userId: string) => {
  if (chatRoomType.value === lineType.MIDType.USER) {
    return chatRoomInfo.value as Contact;
  }
  if (chatRoomType.value === lineType.MIDType.GROUP && chatRoomInfo.value && 'members' in chatRoomInfo.value) {
    const found = (chatRoomInfo.value as Group).members.find((user: Contact) => user.mid === userId);
    return found || {displayName: 'Group Member', pictureStatus: null};
  }
  return {displayName: 'Unknown', pictureStatus: null};
};

const formattedMessages = computed(() => {
  return messages.value.map((message) => {
    let layoutType = lineType.ContentType.NONE;
    let layoutMessage = '';

    if (message.contentType === lineType.ContentType.IMAGE) {
      layoutType = lineType.ContentType.IMAGE;
    } else if (message.contentType === lineType.ContentType.STICKER) {
      layoutType = lineType.ContentType.STICKER;
    } else {
      layoutMessage = message.text || '[Couldn\'t display message on XIA]';
    }

    const isSelf = message.from_ === system.profile.userId;
    const sender = isSelf ? null : getUserInfo(message.from_);

    return {
      id: message.id,
      type: layoutType,
      origin: message.from_,
      isSelf,
      content: escapeHtml(layoutMessage).replace(/\n/g, '<br />'),
      time: message.createdTime,
      senderName: sender?.displayName || 'Member',
      senderAvatar: sender?.pictureStatus || null,
    };
  });
});

const escapeHtml = (text: string) => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m] || m);
};

const formatMsgTime = (createdTime: number | string | { toNumber?: () => number }) => {
  const timeVal = (typeof createdTime === 'object' && createdTime && 'toNumber' in createdTime && typeof createdTime.toNumber === 'function') ?
    createdTime.toNumber() :
    parseInt(createdTime.toString(), 10);
  const date = new Date(timeVal);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const checkFileTypeForSendMessage = (mime: string) => {
  switch (mime) {
    case 'image/png':
    case 'image/jpeg':
      return lineType.ContentType.IMAGE;
    case 'image/mpeg4':
    case 'video/mp4':
      return lineType.ContentType.VIDEO;
    default:
      return -1;
  }
};

const uploadMessageAttached = async (messageId: string, file: File) => {
  const mimeType = checkFileTypeForSendMessage(file.type);
  if (mimeType === -1) return;

  const data = new FormData();
  data.append(
      'params',
      JSON.stringify({
        ver: '1.0',
        oid: messageId,
        size: file.size,
        name: file.name,
        type: Object.keys(lineType.ContentType)
            .find((key) => lineType.ContentType[key] === mimeType)
            ?.toLowerCase(),
      }),
  );
  data.append('file', file);

  const uploadURL = mediaURL.startsWith('//') ? `https:${mediaURL}` : mediaURL;
  await fetch(`${uploadURL}/talk/m/upload.nhn`, {
    method: 'POST',
    headers: {
      'X-Line-Access': system.authToken || '',
      'X-Line-Application': Constant.LINE.APPLICATION_IDENTITY,
    },
    body: data,
  });
};

const handleSend = async () => {
  if (sending.value) return;

  const hasText = inputText.value.trim().length > 0;
  const hasFile = !!pictureFile.value;

  if (!hasText && !hasFile) return;

  sending.value = true;

  try {
    let messageObj: InstanceType<typeof lineType.Message> | null = null;

    if (hasFile && pictureFile.value) {
      const fileType = checkFileTypeForSendMessage(pictureFile.value.type);
      if (fileType !== -1) {
        messageObj = new lineType.Message({
          to: targetId.value,
          contentType: fileType,
          text: null,
          contentPreview: null,
          contentMetadata: {
            FILE_NAME: pictureFile.value.name,
            FILE_SIZE: pictureFile.value.size.toString(),
          },
        });
      }
    } else if (hasText) {
      messageObj = new lineType.Message({
        to: targetId.value,
        type: lineType.ContentType.NONE,
        text: inputText.value.trim(),
      });
    }

    if (!messageObj) return;

    const response = await system.clients.query.sendMessage(
        Constant.THRIFT_DEFAULT_SEQ,
        messageObj,
    );

    if (hasFile && pictureFile.value && response) {
      await uploadMessageAttached(response.id, pictureFile.value);
      clearAttachment();
    }

    inputText.value = '';
    scrollToBottom();
  } catch (err) {
    console.error('Failed to send LINE message:', err);
  } finally {
    sending.value = false;
  }
};

const startSyncPolling = () => {
  if (fetchLoopId) clearInterval(fetchLoopId);
  fetchLoopId = setInterval(fetchDisplayMessage, 1000);
};

const initChat = async () => {
  if (system.ready && targetId.value) {
    const success = await fetchChatRoomInformation();
    if (success) {
      await fetchDisplayMessage();
      startSyncPolling();
    }
  } else {
    setTimeout(initChat, Constant.TIMEOUT.RETRY);
  }
};

watch(
    targetId,
    (newVal) => {
      if (newVal) {
        initChat();
      }
    },
    {immediate: true},
);

onMounted(() => {
  if (import.meta.client && system.ready && targetId.value) {
    initChat();
  }
});

onUnmounted(() => {
  if (fetchLoopId) {
    clearInterval(fetchLoopId);
  }
});
</script>

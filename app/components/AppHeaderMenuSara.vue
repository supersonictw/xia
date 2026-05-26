<template>
  <app-header-menu-item
    v-if="profile === null"
    :name="loginText"
    :icon="loginIcon"
    :variant="props.variant"
    @click="onClick"
  />
  <app-header-menu-item
    v-else
    :name="nickname"
    :variant="props.variant"
    @click="onClick"
  >
    <template #prepend>
      <img
        :src="identicon"
        :alt="nickname"
        :class="avatarClass"
      >
    </template>
  </app-header-menu-item>
</template>

<script setup lang="ts">
import {computed} from "vue";

import {
  onClickSara,
} from "../data/AppHeaderMenuData";

const props = defineProps<{
  variant?: "mobile" | "normal";
}>();

const profile = useProfile();

const loginText = "登入";
const loginIcon = props.variant === "mobile" ? "ArrowRightOnRectangleIcon" : "";

const nickname = computed(() => {
  if (!profile) return "";
  return profile.nickname;
});

const identicon = computed(() => {
  if (!profile) return "";
  const {avatar_hash: avatarHash} = profile;
  return `https://api.gravatar.com/avatar/${avatarHash}?d=identicon`;
});

const isMobile = computed(() => props.variant === "mobile");

const avatarClass = computed(() => ({
  "rounded-full": true,
  "w-6": isMobile.value,
  "h-6": isMobile.value,
  "mr-4": isMobile.value,
  "w-8": !isMobile.value,
  "h-8": !isMobile.value,
  "mr-2": !isMobile.value,
}));

const onClick = (): void => {
  onClickSara(profile);
};
</script>

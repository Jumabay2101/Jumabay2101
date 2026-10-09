<script setup lang="ts">
import { profile } from '~/data/profile'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="wrap">
    <span>© {{ year }} {{ profile.name }}</span>
    <span class="mono">Built with Nuxt · Deployed on Vercel</span>
  </footer>
</template>

<style scoped>
footer { padding: 36px 16px 48px; color: var(--muted); font-size: 14px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--border); }
@media (min-width: 720px) { footer { padding-left: 32px; padding-right: 32px; } }
</style>

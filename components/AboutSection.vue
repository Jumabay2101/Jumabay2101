<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="about" class="block reveal">
    <div class="eyebrow">// about</div>
    <h2 class="h2">One engineer, the whole stack — <span class="grad">model to mobile.</span></h2>
    <div class="about">
      <div class="text">
        <p v-for="(p, i) in profile.about" :key="i" v-html="p" />
      </div>
      <div class="stats">
        <div v-for="s in profile.stats" :key="s.label" class="stat card">
          <b class="grad">{{ s.value }}</b>
          <span>{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { display: grid; gap: 36px; margin-top: 28px; }
@media (min-width: 920px) { .about { grid-template-columns: 1.35fr 1fr; } }
.text p { color: var(--muted); margin-bottom: 16px; font-size: 17px; }
.stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-content: start; }
.stat { padding: 20px; box-shadow: none; }
.stat b { display: block; font-size: 34px; letter-spacing: -.03em; font-weight: 800; line-height: 1.1; margin-bottom: 6px; }
.stat span { font-size: 13px; color: var(--muted); display: block; line-height: 1.45; }
</style>

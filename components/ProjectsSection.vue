<script setup lang="ts">
import { projects } from '~/data/profile'
</script>

<template>
  <section id="projects" class="block reveal">
    <div class="eyebrow">// projects</div>
    <h2 class="h2">Selected work</h2>
    <p class="sub">A few things I've designed, built and shipped.</p>

    <div class="grid">
      <article v-for="p in projects" :key="p.title" class="proj card">
        <div v-if="p.image" class="thumb"><img :src="p.image" :alt="p.title" loading="lazy"></div>
        <div class="body">
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
          <div class="tags"><span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span></div>
          <div v-if="p.github || p.live" class="links">
            <a v-if="p.live" :href="p.live" target="_blank" rel="noopener"><AppIcon name="external" />Live</a>
            <a v-if="p.github" :href="p.github" target="_blank" rel="noopener"><AppIcon name="github" />Code</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; gap: 16px; }
@media (min-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1040px) { .grid { grid-template-columns: repeat(3, 1fr); } }
.proj { overflow: hidden; display: flex; flex-direction: column; transition: transform .25s, border-color .25s; }
.proj:hover { transform: translateY(-3px); border-color: color-mix(in srgb, var(--accent) 55%, var(--border)); }
.thumb { aspect-ratio: 16 / 10; background: var(--surface-2); border-bottom: 1px solid var(--border); overflow: hidden; }
.thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.body { padding: 22px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
h3 { font-size: 18px; letter-spacing: -.01em; }
p { color: var(--muted); font-size: 15px; flex: 1; }
.links { display: flex; gap: 16px; font-size: 14px; font-weight: 600; }
.links a { display: inline-flex; align-items: center; gap: 6px; color: var(--accent); }
.links svg { width: 16px; height: 16px; }
</style>

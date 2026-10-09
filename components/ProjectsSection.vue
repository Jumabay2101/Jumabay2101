<script setup lang="ts">
import { projects } from '~/data/profile'
</script>

<template>
  <section id="projects" class="block reveal">
    <div class="eyebrow">// projects</div>
    <h2 class="h2">Things I've <span class="grad">built and shipped</span></h2>
    <p class="sub">Production platforms, AI models and tools — from database schema to deployed app.</p>

    <div class="grid">
      <article v-for="p in projects" :key="p.title" class="proj card" :class="{ featured: p.featured }">
        <div class="thumb">
          <img v-if="p.image" :src="p.image" :alt="`${p.title} screenshot`" loading="lazy">
          <div v-else class="cover" :style="{ '--c1': p.cover?.[0], '--c2': p.cover?.[1] }">
            <AppIcon :name="p.icon || 'sparkles'" />
            <span class="mono">{{ p.tags.slice(0, 3).join(' · ') }}</span>
          </div>
          <span v-if="p.live" class="live-badge"><i />Live</span>
        </div>
        <div class="body">
          <span class="kind mono">{{ p.kind }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.desc }}</p>
          <ul v-if="p.highlights">
            <li v-for="(h, i) in p.highlights" :key="i" v-html="h" />
          </ul>
          <div class="tags"><span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span></div>
          <div v-if="p.github || p.live" class="links">
            <a v-if="p.live" :href="p.live" target="_blank" rel="noopener"><AppIcon name="external" />Live demo</a>
            <a v-if="p.github" :href="p.github" target="_blank" rel="noopener"><AppIcon name="github" />Source</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; gap: 18px; }
@media (min-width: 760px) { .grid { grid-template-columns: repeat(2, 1fr); } }

.proj { overflow: hidden; display: flex; flex-direction: column; transition: transform .25s, border-color .25s; }
.proj:hover { transform: translateY(-3px); border-color: color-mix(in srgb, var(--accent) 55%, var(--border)); }

.thumb { position: relative; aspect-ratio: 16 / 9; background: var(--surface-2); border-bottom: 1px solid var(--border); overflow: hidden; }
.thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; transition: transform .6s ease; }
.proj:hover .thumb img { transform: scale(1.03); }

.cover {
  width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px;
  background:
    radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--c1) 55%, transparent), transparent 55%),
    radial-gradient(circle at 80% 80%, color-mix(in srgb, var(--c2) 55%, transparent), transparent 55%),
    #0b0f17;
  color: #fff;
}
.cover::before {
  content: ''; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
  background-size: 28px 28px;
}
.cover svg { width: 56px; height: 56px; position: relative; filter: drop-shadow(0 6px 20px rgba(0,0,0,.4)); }
.cover span { position: relative; font-size: 12px; opacity: .85; letter-spacing: .04em; }

.live-badge { position: absolute; top: 12px; left: 12px; display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 600; background: rgba(10, 13, 20, .78); color: #fff; backdrop-filter: blur(6px); }
.live-badge i { width: 7px; height: 7px; border-radius: 50%; background: #34d399; box-shadow: 0 0 0 3px rgba(52, 211, 153, .3); }

.body { padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
.kind { font-size: 12px; color: var(--accent); }
h3 { font-size: 20px; letter-spacing: -.015em; line-height: 1.25; }
p { color: var(--muted); font-size: 15px; }
ul { list-style: none; display: grid; gap: 8px; font-size: 14.5px; color: var(--muted); }
li { position: relative; padding-left: 18px; }
li::before { content: ''; position: absolute; left: 0; top: 9px; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
.tags { margin-top: auto; padding-top: 4px; }
.links { display: flex; gap: 18px; font-size: 14px; font-weight: 600; }
.links a { display: inline-flex; align-items: center; gap: 6px; color: var(--accent); }
.links a:hover { text-decoration: underline; }
.links svg { width: 16px; height: 16px; }

.featured { grid-column: 1 / -1; }
.featured .thumb { aspect-ratio: 9 / 4; }
.featured .body { padding: 28px; }
.featured h3 { font-size: 24px; }
@media (min-width: 960px) {
  .featured ul { grid-template-columns: 1fr 1fr; column-gap: 32px; }
}
</style>

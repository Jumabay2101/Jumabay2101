<script setup lang="ts">
import { skills } from '~/data/profile'
</script>

<template>
  <section id="skills" class="block reveal">
    <div class="eyebrow">// skills</div>
    <h2 class="h2">What I work with</h2>
    <p class="sub">A practical toolset, chosen for building products that are fast, maintainable and cheap to run.</p>

    <div class="grid">
      <article v-for="g in skills" :key="g.id" class="skill card" :class="{ featured: g.featured }">
        <div class="ic"><AppIcon :name="g.icon" /></div>
        <h3>{{ g.title }}</h3>
        <p class="blurb">{{ g.blurb }}</p>
        <ul>
          <li v-for="(pt, i) in g.points" :key="i" v-html="pt" />
        </ul>
        <div class="tags">
          <span v-for="t in g.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; gap: 16px; }
@media (min-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
.skill { padding: 26px; transition: border-color .25s, transform .25s; }
.skill:hover { border-color: color-mix(in srgb, var(--accent) 55%, var(--border)); transform: translateY(-3px); }
.ic { width: 46px; height: 46px; border-radius: 13px; display: grid; place-items: center; background: var(--accent-soft); color: var(--accent); margin-bottom: 16px; }
.ic svg { width: 22px; height: 22px; }
h3 { font-size: 19px; letter-spacing: -.01em; margin-bottom: 6px; }
.blurb { color: var(--muted); font-size: 15px; margin-bottom: 16px; }
ul { list-style: none; display: grid; gap: 9px; margin-bottom: 20px; font-size: 14.5px; color: var(--muted); }
li { position: relative; padding-left: 18px; }
li::before { content: ''; position: absolute; left: 0; top: 9px; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
.featured { grid-column: 1 / -1; background: radial-gradient(120% 120% at 0% 0%, var(--accent-soft), transparent 55%), radial-gradient(100% 100% at 100% 100%, var(--accent-2-soft), transparent 50%), var(--surface); }
@media (min-width: 720px) { .featured ul { grid-template-columns: 1fr 1fr; column-gap: 28px; } }
</style>

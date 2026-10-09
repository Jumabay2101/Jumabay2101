<script setup lang="ts">
import { services, workflow } from '~/data/profile'
</script>

<template>
  <section id="services" class="block reveal">
    <div class="eyebrow">// what I can build for you</div>
    <h2 class="h2">Typical projects I take on</h2>
    <p class="sub">I can own any of these end to end, or plug into your team and existing stack.</p>

    <div class="grid">
      <div v-for="(s, i) in services" :key="s.title" class="svc card">
        <span class="num mono">{{ String(i + 1).padStart(2, '0') }}</span>
        <div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </div>

    <h3 class="how">How I work</h3>
    <ol class="steps">
      <li v-for="(w, i) in workflow" :key="w.title">
        <span class="mono">step {{ i + 1 }}</span>
        <h4>{{ w.title }}</h4>
        <p>{{ w.desc }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.grid { display: grid; gap: 14px; }
@media (min-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1040px) { .grid { grid-template-columns: repeat(3, 1fr); } }
.svc { display: flex; gap: 16px; padding: 22px; box-shadow: none; transition: border-color .25s; }
.svc:hover { border-color: color-mix(in srgb, var(--accent) 55%, var(--border)); }
.num { color: var(--accent); font-size: 14px; padding-top: 2px; }
.svc h3 { font-size: 17px; margin-bottom: 6px; letter-spacing: -.01em; }
.svc p { color: var(--muted); font-size: 15px; }

.how { font-size: 22px; letter-spacing: -.02em; margin: 56px 0 18px; }
.steps { list-style: none; display: grid; gap: 14px; }
@media (min-width: 860px) { .steps { grid-template-columns: repeat(4, 1fr); } }
.steps li { padding: 20px 22px; border-left: 2px solid var(--accent); background: var(--surface); border-radius: 0 14px 14px 0; }
.steps span { font-size: 12px; color: var(--accent); text-transform: uppercase; letter-spacing: .08em; }
.steps h4 { font-size: 17px; margin: 4px 0 6px; }
.steps p { font-size: 14.5px; color: var(--muted); }
</style>

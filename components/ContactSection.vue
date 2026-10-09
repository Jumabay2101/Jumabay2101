<script setup lang="ts">
import { profile } from '~/data/profile'

const c = profile.contact
const channels = [
  { icon: 'mail', label: 'Email', value: c.email, href: `mailto:${c.email}` },
  { icon: 'call', label: 'Phone', value: c.phoneDisplay, href: `tel:${c.phone}` },
  { icon: 'github', label: 'GitHub', value: c.githubUser, href: c.github },
  { icon: 'instagram', label: 'Instagram', value: c.instagramUser, href: c.instagram },
]

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(c.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    window.location.href = `mailto:${c.email}`
  }
}
</script>

<template>
  <section id="contact" class="block reveal">
    <div class="box card">
      <div class="eyebrow">// contact</div>
      <h2 class="h2">Let's build something <span class="grad">together</span></h2>
      <p class="sub">I'm looking for a full-time role or freelance projects in backend, AI or full-stack development. Reach out — I usually reply within a day.</p>
      <div class="cta">
        <a class="btn btn-primary" :href="`mailto:${c.email}?subject=Job%20opportunity`"><AppIcon name="mail" />Email me</a>
        <button class="btn btn-ghost" @click="copyEmail">
          <AppIcon :name="copied ? 'check' : 'copy'" />{{ copied ? 'Copied!' : 'Copy email' }}
        </button>
      </div>
      <div class="channels">
        <a
          v-for="ch in channels" :key="ch.label" class="ch" :href="ch.href"
          :target="ch.href.startsWith('http') ? '_blank' : undefined" rel="noopener"
        >
          <AppIcon :name="ch.icon" />
          <div><small>{{ ch.label }}</small><b>{{ ch.value }}</b></div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section.block { border-top: none; }
.box { padding: 44px 20px; text-align: center; position: relative; overflow: hidden; }
@media (min-width: 720px) { .box { padding: 72px 48px; } }
.box::before { content: ''; position: absolute; left: 50%; top: -180px; width: 720px; height: 360px; transform: translateX(-50%); background: radial-gradient(closest-side, var(--accent-soft), transparent); pointer-events: none; }
.box > * { position: relative; }
.sub { margin: 0 auto 32px; }
.cta { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
.channels { display: grid; gap: 12px; margin-top: 40px; text-align: left; }
@media (min-width: 600px) { .channels { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1000px) { .channels { grid-template-columns: repeat(4, 1fr); } }
.ch { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 14px; border: 1px solid var(--border); background: var(--bg); min-width: 0; transition: border-color .2s; }
.ch:hover { border-color: var(--accent); }
.ch svg { width: 20px; height: 20px; color: var(--accent); flex: none; }
.ch div { min-width: 0; }
.ch small { display: block; font-size: 12px; color: var(--muted); }
.ch b { display: block; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
</style>

<script setup lang="ts">
import { profile } from '~/data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#ai-lab', label: 'AI Lab' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)
const theme = ref<'dark' | 'light'>('dark')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  try { localStorage.setItem('theme', theme.value) } catch {}
}

function onScroll() { scrolled.value = window.scrollY > 8 }

onMounted(() => {
  theme.value = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark'
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="{ scrolled, open }">
    <div class="wrap">
      <nav>
        <a href="#top" class="logo" @click="open = false">
          <span class="dot" />{{ profile.name }}
        </a>
        <div class="links">
          <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
          <a :href="profile.resume" target="_blank" rel="noopener" class="cv"><AppIcon name="download" />Resume</a>
        </div>
        <div class="right">
          <button class="icon-btn" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`" @click="toggleTheme">
            <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
          </button>
          <a class="btn btn-primary hire" href="#contact">Hire me</a>
          <button class="icon-btn burger" aria-label="Menu" :aria-expanded="open" @click="open = !open">
            <AppIcon :name="open ? 'close' : 'menu'" />
          </button>
        </div>
      </nav>
      <div v-if="open" class="mobile">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
        <a :href="profile.resume" target="_blank" rel="noopener" @click="open = false">Download resume (PDF)</a>
        <a class="btn btn-primary" href="#contact" @click="open = false">Hire me</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky; top: 0; z-index: 50;
  border-bottom: 1px solid transparent;
  transition: background-color .25s, border-color .25s;
}
header.scrolled, header.open {
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: var(--border);
}
nav { display: flex; align-items: center; justify-content: space-between; height: 68px; gap: 16px; }
.logo { font-weight: 800; letter-spacing: -.02em; display: flex; align-items: center; gap: 10px; white-space: nowrap; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); }
.links { display: none; gap: 30px; font-size: 14px; color: var(--muted); font-weight: 500; }
.links a { transition: color .2s; }
.links a:hover { color: var(--text); }
.links .cv { display: inline-flex; align-items: center; gap: 6px; color: var(--accent); }
.links .cv svg { width: 15px; height: 15px; }
.right { display: flex; gap: 10px; align-items: center; }
.icon-btn { width: 40px; height: 40px; border-radius: 11px; border: 1px solid var(--border); background: var(--surface); display: grid; place-items: center; }
.icon-btn svg { width: 18px; height: 18px; }
.hire { display: none; padding: 9px 16px; font-size: 14px; }
.mobile { display: flex; flex-direction: column; gap: 4px; padding: 8px 0 20px; }
.mobile a:not(.btn) { padding: 12px 4px; font-weight: 500; border-bottom: 1px solid var(--border); }
.mobile .btn { margin-top: 12px; justify-content: center; }
@media (min-width: 860px) {
  .links, .hire { display: flex; }
  .burger, .mobile { display: none; }
}
</style>

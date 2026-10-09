<script setup lang="ts">
import { profile } from '~/data/profile'

// Typewriter effect cycling through roles.
const typed = ref(profile.roles[0])
let timer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let i = 0
  let len = typed.value.length
  let deleting = true
  const tick = () => {
    const word = profile.roles[i]
    len += deleting ? -1 : 1
    typed.value = word.slice(0, len)
    let delay = deleting ? 35 : 70
    if (!deleting && len === word.length) { deleting = true; delay = 1800 }
    else if (deleting && len === 0) { deleting = false; i = (i + 1) % profile.roles.length; delay = 300 }
    timer = setTimeout(tick, delay)
  }
  timer = setTimeout(tick, 2200)
})
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section id="top" class="hero">
    <div class="bg" aria-hidden="true">
      <div class="grid-lines" />
      <div class="glow g1" />
      <div class="glow g2" />
    </div>

    <div class="wrap inner">
      <div class="copy">
        <span class="badge"><i />{{ profile.availability }}</span>
        <h1>
          Hi, I'm {{ profile.shortName }}.<br>
          <span class="grad">{{ profile.title }}</span>
        </h1>
        <p class="role mono" aria-live="polite">
          <span class="prompt">&gt;</span> {{ typed }}<span class="caret" />
        </p>
        <p class="lead">{{ profile.intro }}</p>
        <div class="cta">
          <a class="btn btn-primary" href="#contact"><AppIcon name="mail" />Get in touch</a>
          <a class="btn btn-ghost" href="#ai-lab"><AppIcon name="sparkles" />See what I build</a>
          <a class="btn btn-ghost icon-only" :href="profile.contact.github" target="_blank" rel="noopener" aria-label="GitHub"><AppIcon name="github" /></a>
        </div>
        <div class="facts">
          <span><AppIcon name="pin" />{{ profile.location }}</span>
          <span><AppIcon name="check" />Python · TypeScript · Dart</span>
        </div>
      </div>

      <div class="term card" aria-label="Code sample describing my skills">
        <div class="bar"><i /><i /><i /><span class="mono">atush.py</span></div>
<pre class="mono"><span class="k">from</span> fastapi <span class="k">import</span> FastAPI
<span class="k">from</span> engineer <span class="k">import</span> Atush

app = <span class="f">FastAPI</span>()
me  = <span class="f">Atush</span>()

me.backend  = [<span class="s">"Django"</span>, <span class="s">"FastAPI"</span>]
me.ai       = [<span class="s">"LLM"</span>, <span class="s">"RAG"</span>, <span class="s">"NLP"</span>,
               <span class="s">"STT"</span>, <span class="s">"TTS"</span>, <span class="s">"Vision"</span>,
               <span class="s">"Fine-tune"</span>, <span class="s">"Quantize"</span>]
me.frontend = [<span class="s">"Vue"</span>, <span class="s">"Nuxt"</span>]
me.mobile   = [<span class="s">"Flutter"</span>]
me.devops   = [<span class="s">"Docker"</span>, <span class="s">"Nginx"</span>, <span class="s">"Apache"</span>]

<span class="k">@app</span>.<span class="f">post</span>(<span class="s">"/hire"</span>)
<span class="k">async def</span> <span class="f">hire</span>(idea: Project):
    <span class="k">return await</span> me.<span class="f">ship</span>(idea)  <span class="c"># 🚀</span><span class="caret" /></pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; margin-top: -68px; padding-top: 68px; }
.bg { position: absolute; inset: 0; pointer-events: none; }
.grid-lines {
  position: absolute; inset: 0;
  background-image: linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 75%);
}
.glow { position: absolute; border-radius: 50%; filter: blur(80px); opacity: .55; animation: float 14s ease-in-out infinite alternate; }
.g1 { width: 420px; height: 420px; background: var(--accent-soft); top: -80px; left: -120px; }
.g2 { width: 480px; height: 480px; background: var(--accent-2-soft); bottom: -160px; right: -140px; animation-delay: -6s; }
@keyframes float { to { transform: translate(40px, 30px) scale(1.08); } }

.inner { position: relative; display: grid; gap: 48px; align-items: center; padding-top: 64px; padding-bottom: 72px; }
@media (min-width: 980px) { .inner { grid-template-columns: 1.1fr 1fr; padding-top: 110px; padding-bottom: 110px; } }
.copy { min-width: 0; }

.badge { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; padding: 6px 12px; border-radius: 999px; background: var(--accent-soft); color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent); }
.badge i { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 var(--accent); } 70% { box-shadow: 0 0 0 8px transparent; } 100% { box-shadow: 0 0 0 0 transparent; } }

h1 { font-size: clamp(40px, 6.6vw, 72px); line-height: 1.03; letter-spacing: -.04em; font-weight: 800; margin: 22px 0 16px; }
.role { font-size: clamp(15px, 2vw, 18px); color: var(--text); min-height: 1.6em; margin-bottom: 18px; }
.prompt { color: var(--accent); }
.caret { display: inline-block; width: .55em; height: 1.1em; margin-left: 2px; vertical-align: -.18em; background: var(--accent); animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
.lead { font-size: clamp(16px, 1.9vw, 18.5px); color: var(--muted); max-width: 580px; }
.cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
.icon-only { padding: 12px 14px; }
.facts { display: flex; flex-wrap: wrap; gap: 10px 24px; margin-top: 30px; font-size: 14px; color: var(--muted); }
.facts span { display: flex; align-items: center; gap: 7px; }
.facts svg { width: 16px; height: 16px; color: var(--accent); }

.term { background: var(--code-bg); color: #e2e8f0; overflow: hidden; min-width: 0; border-color: color-mix(in srgb, var(--border) 60%, #000); transform: perspective(1400px) rotateY(-4deg) rotateX(2deg); transition: transform .5s ease; }
.term:hover { transform: none; }
.bar { display: flex; align-items: center; gap: 7px; padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,.07); }
.bar i { width: 11px; height: 11px; border-radius: 50%; background: #ef4444; }
.bar i:nth-child(2) { background: #f59e0b; }
.bar i:nth-child(3) { background: #22c55e; }
.bar span { margin-left: 10px; font-size: 12px; color: #64748b; }
pre { padding: 18px 20px 22px; overflow-x: auto; font-size: 13px; line-height: 1.75; }
pre .caret { background: #34d399; }
.k { color: #c084fc; } .s { color: #86efac; } .f { color: #7dd3fc; } .c { color: #64748b; }
@media (max-width: 979px) { .term { transform: none; } }
</style>

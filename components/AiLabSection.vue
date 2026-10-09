<script setup lang="ts">
import { aiLab } from '~/data/profile'

const activeId = ref(aiLab[0].id)
const active = computed(() => aiLab.find((x) => x.id === activeId.value)!)
</script>

<template>
  <section id="ai-lab" class="block reveal">
    <div class="eyebrow">// ai lab</div>
    <h2 class="h2">AI I can put <span class="grad">into production</span></h2>
    <p class="sub">Pick a capability to see how I build it — the pipeline and a taste of the code behind the endpoint.</p>

    <div class="tabs" role="tablist" aria-label="AI capabilities">
      <button
        v-for="t in aiLab" :key="t.id"
        role="tab" :aria-selected="t.id === activeId"
        :class="{ on: t.id === activeId }"
        @click="activeId = t.id"
      >{{ t.label }}</button>
    </div>

    <Transition name="swap" mode="out-in">
      <div :key="active.id" class="panel card" role="tabpanel">
        <div class="info">
          <h3>{{ active.title }}</h3>
          <p>{{ active.desc }}</p>
          <ol class="pipe">
            <li v-for="(step, i) in active.pipeline" :key="step" :style="{ '--d': `${i * 0.35}s` }">
              <span class="n mono">{{ String(i + 1).padStart(2, '0') }}</span>{{ step }}
            </li>
          </ol>
        </div>
        <div class="code">
          <div class="bar"><i /><i /><i /><span class="mono">{{ active.id }}.py</span></div>
          <pre class="mono">{{ active.code }}</pre>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.tabs { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 18px; scrollbar-width: none; }
.tabs::-webkit-scrollbar { display: none; }
.tabs button { flex: none; padding: 9px 16px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); color: var(--muted); font-size: 14px; font-weight: 600; transition: all .2s; }
.tabs button:hover { color: var(--text); border-color: color-mix(in srgb, var(--accent) 50%, var(--border)); }
.tabs button.on { background: var(--accent); border-color: var(--accent); color: var(--on-accent); }

.panel { display: grid; gap: 0; overflow: hidden; }
@media (min-width: 940px) { .panel { grid-template-columns: 1fr 1.15fr; } }
.info { padding: 28px; min-width: 0; }
.info h3 { font-size: 22px; letter-spacing: -.02em; margin-bottom: 10px; }
.info > p { color: var(--muted); margin-bottom: 24px; }

.pipe { list-style: none; display: grid; gap: 0; position: relative; }
.pipe li { position: relative; display: flex; align-items: center; gap: 12px; padding: 10px 0 10px 0; font-weight: 500; font-size: 15px; }
.pipe li:not(:last-child)::after {
  content: ''; position: absolute; left: 17px; top: 42px; width: 2px; height: calc(100% - 32px);
  background: linear-gradient(var(--accent), var(--accent-2)); opacity: .35;
}
.n { flex: none; width: 36px; height: 32px; border-radius: 9px; display: grid; place-items: center; font-size: 12px; background: var(--accent-soft); color: var(--accent); border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent); animation: light 2.8s ease-in-out infinite; animation-delay: var(--d); }
@keyframes light { 0%, 60%, 100% { background: var(--accent-soft); color: var(--accent); } 15%, 30% { background: var(--accent); color: var(--on-accent); } }

.code { background: var(--code-bg); color: #e2e8f0; min-width: 0; display: flex; flex-direction: column; }
.bar { display: flex; align-items: center; gap: 7px; padding: 12px 14px; border-bottom: 1px solid rgba(255,255,255,.07); }
.bar i { width: 11px; height: 11px; border-radius: 50%; background: #ef4444; }
.bar i:nth-child(2) { background: #f59e0b; }
.bar i:nth-child(3) { background: #22c55e; }
.bar span { margin-left: 10px; font-size: 12px; color: #64748b; }
pre { padding: 20px; overflow-x: auto; font-size: 13px; line-height: 1.75; flex: 1; color: #cbd5e1; }

.swap-enter-active, .swap-leave-active { transition: opacity .2s ease, transform .2s ease; }
.swap-enter-from { opacity: 0; transform: translateY(6px); }
.swap-leave-to { opacity: 0; transform: translateY(-6px); }
</style>

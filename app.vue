<script setup lang="ts">
import { projects } from '~/data/profile'

// Fade sections in as they scroll into view.
onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    }),
    { threshold: 0.1 },
  )
  els.forEach((el) => io.observe(el))
})
</script>

<template>
  <div>
    <AppNav />
    <main>
      <HeroSection />
      <div class="wrap">
        <AboutSection />
        <SkillsSection />
        <AiLabSection />
        <ProjectsSection v-if="projects.length" />
        <ServicesSection />
        <ContactSection />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  eyebrow: String,
  image: String
})
</script>

<template>
  <section class="page-hero">
    <div class="hero-bg">
      <img :src="image" :alt="title">
    </div>
    <div class="container hero-content">
      <div class="s-eyebrow reveal in">{{ eyebrow }}</div>
      <h1 class="display reveal in d1" v-html="title"></h1>
      <p class="s-body reveal in d2 mt-2" v-if="subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  padding: 180px 0 100px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .25;
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, var(--ink) 0%, transparent 50%, var(--ink) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.display {
  font-size: clamp(3.5rem, 7vw, 6.5rem);
  line-height: 1.05;
  color: var(--cream);
}

:deep(.display em) {
  font-style: italic;
  color: var(--gold2);
}

.s-body {
  max-width: 600px;
  font-size: 1.1rem;
}

@media (max-width: 1100px) {
  .page-hero { padding: 140px 0 80px; min-height: 40vh; }
}
</style>

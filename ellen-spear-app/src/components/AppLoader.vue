<script setup>
import { ref, onMounted } from 'vue'

const isOut = ref(false)

onMounted(() => {
  setTimeout(() => {
    isOut.value = true
  }, 2200)
})
</script>

<template>
  <div id="loader" :class="{ 'out': isOut }">
    <div class="loader-text">
      <span class="loader-char">E</span>
      <span class="loader-char">L</span>
      <span class="loader-char">L</span>
      <span class="loader-char">E</span>
      <span class="loader-char">N</span>
      <span class="loader-char">&nbsp;</span>
      <span class="loader-char gold">S</span>
      <span class="loader-char gold">P</span>
      <span class="loader-char gold">E</span>
      <span class="loader-char gold">A</span>
      <span class="loader-char gold">R</span>
    </div>
    <div class="loader-line"></div>
  </div>
</template>

<style scoped>
#loader {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0;
  transition: opacity .8s, visibility .8s;
}

#loader.out {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.loader-text {
  font-family: var(--f-serif);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  letter-spacing: .2em;
  color: var(--cream);
  overflow: hidden;
  display: flex;
  gap: .3em;
}

.loader-char {
  display: inline-block;
  transform: translateY(110%);
  animation: liftIn .9s cubic-bezier(.16, 1, .3, 1) forwards;
}

.loader-char.gold {
  color: var(--gold2);
}

.loader-char:nth-child(1) { animation-delay: .05s; }
.loader-char:nth-child(2) { animation-delay: .1s; }
.loader-char:nth-child(3) { animation-delay: .15s; }
.loader-char:nth-child(4) { animation-delay: .20s; }
.loader-char:nth-child(5) { animation-delay: .25s; }
.loader-char:nth-child(6) { animation-delay: .30s; }
.loader-char:nth-child(7) { animation-delay: .35s; }
.loader-char:nth-child(8) { animation-delay: .40s; }
.loader-char:nth-child(9) { animation-delay: .45s; }
.loader-char:nth-child(10) { animation-delay: .50s; }
.loader-char:nth-child(11) { animation-delay: .55s; }

.loader-line {
  width: 1px;
  height: 0;
  background: var(--gold);
  margin-top: 28px;
  animation: growLine 1.6s .5s ease forwards;
}

@keyframes liftIn {
  to { transform: translateY(0); }
}

@keyframes growLine {
  to { height: 60px; }
}
</style>

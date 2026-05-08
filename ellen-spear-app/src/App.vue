<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppLoader from './components/AppLoader.vue'

const cursorX = ref(0)
const cursorY = ref(0)
const cursorRingX = ref(0)
const cursorRingY = ref(0)
const isHovering = ref(false)

const moveCursor = (e) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  
  // Smooth ring follow
  setTimeout(() => {
    cursorRingX.value = e.clientX
    cursorRingY.value = e.clientY
  }, 50)
}

const handleHover = (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
  window.addEventListener('mouseover', handleHover)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
  window.removeEventListener('mouseover', handleHover)
})
</script>

<template>
  <div class="app-wrapper">
    <AppLoader />
    
    <!-- CUSTOM CURSOR -->
    <div class="cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }">
      <div :class="['cursor-ring', { 'hover': isHovering }]" :style="{ left: (cursorRingX - cursorX) + 'px', top: (cursorRingY - cursorY) + 'px' }"></div>
      <div class="cursor-dot"></div>
    </div>

    <AppHeader />
    
    <main class="main-content">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* CURSOR */
.cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  top: 0;
  left: 0;
}

.cursor-ring {
  width: 32px;
  height: 32px;
  border: 1px solid var(--gold2);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: width .2s, height .2s, opacity .2s, border-color .2s;
}

.cursor-ring.hover {
  width: 56px;
  height: 56px;
  border-color: var(--gold3);
  background: rgba(184, 147, 58, 0.05);
}

.cursor-dot {
  width: 4px;
  height: 4px;
  background: var(--gold2);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

/* Page Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 1100px) {
  .cursor { display: none; }
}
</style>

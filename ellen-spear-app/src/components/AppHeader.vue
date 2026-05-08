<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['main-nav', { 'solid': isScrolled }]">
    <RouterLink to="/" class="nav-logo" @click="closeMobileMenu">
      <div class="nav-emblem"><span>ESG</span></div>
      <span class="nav-wordmark">Ellen&nbsp;<em>Spear</em>&nbsp;Group</span>
    </RouterLink>
    
    <ul class="nav-links">
      <li><RouterLink to="/" active-class="active">Home</RouterLink></li>
      <li><RouterLink to="/about" active-class="active">About</RouterLink></li>
      <li><RouterLink to="/services" active-class="active">Services</RouterLink></li>
      <li><RouterLink to="/business-profile" active-class="active">Business Profile</RouterLink></li>
      <li><RouterLink to="/careers" active-class="active">Careers</RouterLink></li>
      <li><RouterLink to="/contact" active-class="active">Contact</RouterLink></li>
    </ul>

    <div class="nav-right">
      <div class="nav-pulse-wrap">
        <div class="nav-pulse"></div>
        <span class="nav-live">Response Active</span>
      </div>
      <RouterLink to="/contact" class="nav-cta">Get Protected</RouterLink>
    </div>

    <div :class="['burger', { 'open': isMobileMenuOpen }]" @click="toggleMobileMenu">
      <span></span><span></span><span></span>
    </div>

    <!-- Mobile Nav Overlay -->
    <div :class="['mob-nav', { 'open': isMobileMenuOpen }]">
      <RouterLink to="/" @click="closeMobileMenu">Home</RouterLink>
      <RouterLink to="/about" @click="closeMobileMenu">About</RouterLink>
      <RouterLink to="/services" @click="closeMobileMenu">Services</RouterLink>
      <RouterLink to="/business-profile" @click="closeMobileMenu">Business Profile</RouterLink>
      <RouterLink to="/careers" @click="closeMobileMenu">Careers</RouterLink>
      <RouterLink to="/contact" @click="closeMobileMenu">Contact</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  padding: 0 60px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background .4s, border-color .4s;
  border-bottom: 1px solid transparent;
}

.main-nav.solid {
  background: rgba(13, 13, 14, .94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-color: var(--line);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.nav-emblem {
  width: 38px;
  height: 38px;
  border: 1px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-emblem span {
  font-family: var(--f-cond);
  font-size: .6rem;
  font-weight: 700;
  letter-spacing: .1em;
  color: var(--gold);
}

.nav-wordmark {
  font-family: var(--f-cond);
  font-size: .95rem;
  font-weight: 600;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--cream);
}

.nav-wordmark em {
  font-style: normal;
  color: var(--gold);
}

.nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
}

.nav-links a {
  font-family: var(--f-cond);
  font-size: .78rem;
  font-weight: 500;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--mist);
  transition: color .2s;
}

.nav-links a:hover, .nav-links a.active {
  color: var(--cream);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-pulse-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  animation: npulse 2s infinite;
}

@keyframes npulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, .5); }
  60% { box-shadow: 0 0 0 5px transparent; }
}

.nav-live {
  font-family: var(--f-cond);
  font-size: .68rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--fog);
}

.nav-cta {
  background: var(--gold);
  color: var(--ink);
  font-family: var(--f-cond);
  font-weight: 700;
  font-size: .75rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: 10px 22px;
  border-radius: var(--r);
  transition: background .2s, transform .15s;
  white-space: nowrap;
}

.nav-cta:hover {
  background: var(--gold2);
  transform: translateY(-1px);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  z-index: 501;
}

.burger span {
  width: 20px;
  height: 1px;
  background: var(--cream);
  transition: .3s;
}

.burger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

.mob-nav {
  position: fixed;
  inset: 0;
  z-index: 400;
  background: var(--ink);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  display: none;
}

.mob-nav.open {
  display: flex;
}

.mob-nav a {
  font-family: var(--f-serif);
  font-size: 2.8rem;
  font-weight: 300;
  color: var(--cream);
  opacity: .6;
  transition: opacity .2s, color .2s;
}

.mob-nav a:hover {
  opacity: 1;
  color: var(--gold2);
}

@media (max-width: 1100px) {
  .main-nav { padding: 0 32px; }
  .nav-links, .nav-right { display: none; }
  .burger { display: flex; }
}

@media (max-width: 680px) {
  .main-nav { padding: 0 24px; }
}
</style>

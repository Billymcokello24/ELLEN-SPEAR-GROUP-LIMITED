<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="home-page">
    <!-- HERO -->
    <section id="hero">
      <div class="hero-bg">
        <img src="../../public/cabing.png" alt="Nairobi Skyline Corporate Security">
      </div>
      <div class="hero-main">
        <div class="hero-eyebrow">
          <span class="hero-eyebrow-text">Africa's Premier Security & Intelligence Partner</span>
        </div>
        <h1 class="hero-h1">
          <span class="hl"><span class="hl-inner">Physical.</span></span>
          <span class="hl"><span class="hl-inner"><em>Digital.</em></span></span>
          <span class="hl"><span class="hl-inner">Absolute.</span></span>
        </h1>
        <p class="hero-sub">We engineer impenetrable security architectures for modern institutions, combining elite on-ground tactical units with advanced cyber-intelligence to secure Africa's most critical assets.</p>
        <div class="hero-actions">
          <RouterLink to="/services" class="btn-gold">
            Explore Services
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </RouterLink>
          <RouterLink to="/contact" class="btn-line">Request Consultation</RouterLink>
        </div>
      </div>
      <div class="hero-bottom">
        <div class="hero-stats">
          <div class="h-stat">
            <div class="h-stat-num">500+</div>
            <div class="h-stat-label">Clients Protected</div>
          </div>
          <div class="h-stat">
            <div class="h-stat-num">24/7</div>
            <div class="h-stat-label">Active Monitoring</div>
          </div>
          <div class="h-stat">
            <div class="h-stat-num">5min</div>
            <div class="h-stat-label">Avg. Response Time</div>
          </div>
          <div class="h-stat">
            <div class="h-stat-num">100%</div>
            <div class="h-stat-label">Satisfaction Rate</div>
          </div>
        </div>
        <div class="hero-scroller">
          <div class="hero-scroller-line"></div>
          <span class="hero-scroller-txt">Scroll</span>
        </div>
      </div>
    </section>

    <!-- TICKER -->
    <div class="ticker-wrap">
      <div class="ticker-track">
        <div class="t-item">On-Site Security Presence</div>
        <div class="t-item">Mobile Patrol Units</div>
        <div class="t-item">Cybersecurity & IT Protection</div>
        <div class="t-item">24/7 Alarm Response</div>
        <div class="t-item">Security Consultancy</div>
        <div class="t-item">VIP & Executive Protection</div>
        <div class="t-item">Risk & Threat Assessment</div>
        <div class="t-item">CCTV & Access Control</div>
        <div class="t-item">Crisis Management Planning</div>
        <!-- Duplicated for seamless loop -->
        <div class="t-item">On-Site Security Presence</div>
        <div class="t-item">Mobile Patrol Units</div>
        <div class="t-item">Cybersecurity & IT Protection</div>
        <div class="t-item">24/7 Alarm Response</div>
        <div class="t-item">Security Consultancy</div>
        <div class="t-item">VIP & Executive Protection</div>
        <div class="t-item">Risk & Threat Assessment</div>
        <div class="t-item">CCTV & Access Control</div>
        <div class="t-item">Crisis Management Planning</div>
      </div>
    </div>

    <!-- ABOUT PREVIEW -->
    <section id="about-preview" class="container">
      <div class="about-grid">
        <div class="about-left">
          <div class="s-eyebrow reveal">About Ellen Spear</div>
          <h2 class="display reveal d1">Where Security<br>Meets <em>Sophistication</em></h2>
          <p class="s-body reveal d2 mt-2">Ellen Spear Group is a premier security and technology solutions company dedicated to integrated protection for businesses, institutions, and individuals. We combine elite physical security with modern IT solutions to safeguard assets, people, and information.</p>
          <div class="mt-4 reveal d3">
            <RouterLink to="/about" class="btn-line">Learn More About Us</RouterLink>
          </div>
        </div>
        <div class="about-right reveal d2">
          <div class="a-corner tl"></div>
          <div class="a-corner br"></div>
          <div class="about-img-wrap">
            <img src="../../public/ellen-spear-logo.png" alt="ELLEN SPEAR GROUP LIMITED Command Centre">
          </div>
          <div class="about-float">
            <div class="about-float-num">100<sup style="font-size:1.1rem;color:var(--gold)">%</sup></div>
            <div class="about-float-label">Client Satisfaction<br>Guarantee</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES PREVIEW -->
    <section id="services-preview" class="bg-ink2">
      <div class="container">
        <div class="services-head mb-4">
          <div>
            <div class="s-eyebrow reveal">Our Services</div>
            <h2 class="display reveal d1">Integrated Protection.<br><em>Every Dimension.</em></h2>
          </div>
          <div class="reveal d2">
            <p class="s-quote">"Security is not a product — it is a process. We engineer that process end-to-end."</p>
          </div>
        </div>
        
        <div class="svcs reveal">
          <!-- IT Security -->
          <div class="svc">
            <div class="svc-topline"></div>
            <span class="svc-n">01</span>
            <div class="svc-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 class="svc-title">IT & Cyber Security</h3>
            <p class="svc-desc">Comprehensive digital protection combining deep audits, real-time network monitoring, and proactive threat neutralization.</p>
            <RouterLink to="/services/it-security" class="svc-link">Learn More <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></RouterLink>
          </div>
          <!-- Physical Security -->
          <div class="svc">
            <div class="svc-topline"></div>
            <span class="svc-n">02</span>
            <div class="svc-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
            </div>
            <h3 class="svc-title">Physical Security</h3>
            <p class="svc-desc">Elite trained personnel and advanced infrastructure ensuring complete on-ground protection for Africa's most demanding environments.</p>
            <RouterLink to="/services/physical-security" class="svc-link">Learn More <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></RouterLink>
          </div>
        </div>
        <div class="mt-4 text-center reveal d3">
          <RouterLink to="/services" class="btn-gold">View All Services</RouterLink>
        </div>
      </div>
    </section>

    <!-- ADVANTAGE PREVIEW -->
    <section id="advantage-preview" class="container">
      <div class="adv-grid">
        <div class="adv-left reveal">
          <div class="s-eyebrow">Our Advantage</div>
          <h2 class="display d1">Why Ellen Spear<br><em>Outperforms</em></h2>
          <p class="s-body d2 mt-2">The only firm in Africa delivering certified cybersecurity expertise alongside trained ground-force protection — fully integrated under one roof.</p>
          <div class="mt-4">
            <RouterLink to="/business-profile" class="btn-line">View Business Profile</RouterLink>
          </div>
        </div>
        <div class="adv-right reveal d2">
          <div class="adv-img">
            <img src="../../public/team.png" alt="Security professional">
            <div class="adv-img-over"></div>
            <div class="adv-img-quote">
              <blockquote>"Threats do not distinguish between physical and digital. Neither do we."</blockquote>
              <cite>— Ellen Spear Group</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* HERO */
#hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .3;
  animation: slowZoom 20s ease-in-out infinite alternate;
}

@keyframes slowZoom {
  from { transform: scale(1.02); }
  to { transform: scale(1.10) translateX(-1%); }
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(150deg, rgba(13, 13, 14, .95) 0%, rgba(13, 13, 14, .55) 60%, rgba(13, 13, 14, .88) 100%);
}

.hero-main {
  position: relative;
  z-index: 2;
  padding: 160px 80px 0;
  max-width: 1000px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 36px;
  opacity: 0;
  animation: fadeUp .8s .8s forwards;
}

.hero-eyebrow::before {
  content: '';
  width: 36px;
  height: 1px;
  background: var(--gold);
  flex-shrink: 0;
}

.hero-eyebrow-text {
  font-family: var(--f-cond);
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--gold);
}

.hero-h1 {
  font-family: var(--f-serif);
  font-size: clamp(3.5rem, 8.5vw, 8.5rem);
  font-weight: 300;
  line-height: .92;
  letter-spacing: -.02em;
}

.hero-h1 .hl {
  display: block;
  overflow: hidden;
}

.hero-h1 .hl-inner {
  display: block;
  transform: translateY(110%);
  animation: liftIn .95s cubic-bezier(.16, 1, .3, 1) forwards;
}

.hero-h1 .hl:nth-child(1) .hl-inner { animation-delay: .85s; }
.hero-h1 .hl:nth-child(2) .hl-inner { animation-delay: 1s; padding-left: clamp(1rem, 3vw, 4rem); }
.hero-h1 .hl:nth-child(3) .hl-inner { animation-delay: 1.15s; }

.hero-h1 em {
  font-style: italic;
  color: var(--gold2);
}

.hero-sub {
  max-width: 460px;
  font-size: 1.05rem;
  font-weight: 300;
  color: var(--fog);
  line-height: 1.8;
  margin-top: 40px;
  opacity: 0;
  animation: fadeUp .9s 1.3s forwards;
}

.hero-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 44px;
  opacity: 0;
  animation: fadeUp .8s 1.5s forwards;
  flex-wrap: wrap;
}

.hero-bottom {
  position: relative;
  z-index: 2;
  padding: 0 80px 56px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
}

.hero-stats {
  display: flex;
  gap: 0;
  opacity: 0;
  animation: fadeUp .8s 1.7s forwards;
  border-left: 1px solid var(--line);
}

.h-stat {
  padding: 0 40px;
  border-right: 1px solid var(--line);
}

.h-stat-num {
  font-family: var(--f-serif);
  font-size: 2.8rem;
  font-weight: 300;
  line-height: 1;
  color: var(--cream);
}

.h-stat-label {
  font-family: var(--f-cond);
  font-size: .65rem;
  font-weight: 600;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--mist);
  margin-top: 5px;
}

.hero-scroller {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0;
  animation: fadeUp .8s 1.9s forwards;
}

.hero-scroller-line {
  width: 1px;
  height: 52px;
  background: linear-gradient(to bottom, transparent, var(--gold));
  animation: scPulse 2.5s 2s infinite;
}

@keyframes scPulse {
  0%, 100% { opacity: .35; }
  50% { opacity: 1; }
}

.hero-scroller-txt {
  font-family: var(--f-cond);
  font-size: .6rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--mist);
  writing-mode: vertical-lr;
}

/* TICKER */
.ticker-wrap {
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 24px 0;
  background: var(--ink2);
}

.ticker-track {
  display: flex;
  white-space: nowrap;
  animation: tick 44s linear infinite;
}

.t-item {
  font-family: var(--f-cond);
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--mist);
  padding: 0 48px;
  display: inline-flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
}

.t-item::after {
  content: '✦';
  font-size: .45rem;
  color: var(--gold);
  opacity: .8;
}

@keyframes tick {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ABOUT PREVIEW */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.about-right {
  position: relative;
}

.about-img-wrap {
  position: relative;
  overflow: hidden;
  border-radius: var(--r);
}

.about-img-wrap img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  transition: transform .6s ease;
}

.about-img-wrap:hover img {
  transform: scale(1.03);
}

.a-corner {
  position: absolute;
  width: 56px;
  height: 56px;
  border-color: var(--gold);
  border-style: solid;
  border-width: 0;
}

.a-corner.tl { top: -10px; left: -10px; border-top-width: 1px; border-left-width: 1px; }
.a-corner.br { bottom: -10px; right: -10px; border-bottom-width: 1px; border-right-width: 1px; }

.about-float {
  position: absolute;
  bottom: -28px;
  right: -28px;
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 24px 28px;
  border-radius: var(--r);
  min-width: 190px;
}

.about-float-num {
  font-family: var(--f-serif);
  font-size: 3rem;
  font-weight: 300;
  color: var(--gold2);
  line-height: 1;
}

.about-float-label {
  font-family: var(--f-cond);
  font-size: .68rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--fog);
  margin-top: 6px;
  line-height: 1.5;
}

/* SERVICES PREVIEW */
.bg-ink2 { background: var(--ink2); }

.services-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: end;
}

.s-quote {
  font-family: var(--f-serif);
  font-size: 1.45rem;
  font-weight: 300;
  font-style: italic;
  color: var(--fog);
  line-height: 1.5;
  border-left: 2px solid var(--gold);
  padding-left: 24px;
}

.svcs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--r);
  overflow: hidden;
}

.svc {
  background: var(--ink2);
  padding: 52px 44px;
  position: relative;
  overflow: hidden;
  transition: background .3s;
}

.svc-topline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .5s ease;
}

.svc:hover { background: #181819; }
.svc:hover .svc-topline { transform: scaleX(1); }

.svc-n {
  font-family: var(--f-serif);
  font-size: 5.5rem;
  font-weight: 300;
  color: var(--line2);
  position: absolute;
  top: 20px;
  right: 32px;
  line-height: 1;
  transition: color .3s;
  pointer-events: none;
}

.svc:hover .svc-n { color: rgba(184, 147, 58, .12); }

.svc-icon {
  width: 54px;
  height: 54px;
  border: 1px solid var(--line2);
  border-radius: var(--r);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  transition: border-color .3s, background .3s;
}

.svc:hover .svc-icon { border-color: var(--gold); background: rgba(184, 147, 58, .07); }

.svc-icon svg { width: 24px; height: 24px; stroke: var(--gold); stroke-width: 1.5; fill: none; }

.svc-title {
  font-family: var(--f-serif);
  font-size: 1.9rem;
  font-weight: 300;
  color: var(--cream);
  line-height: 1.15;
  margin-bottom: 14px;
}

.svc-desc {
  font-size: .87rem;
  font-weight: 300;
  color: var(--fog);
  line-height: 1.78;
  margin-bottom: 24px;
}

.svc-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--f-cond);
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--mist);
  transition: color .2s;
}

.svc:hover .svc-link { color: var(--gold); }

.svc-link svg { stroke: currentColor; stroke-width: 2; fill: none; width: 14px; height: 14px; transition: transform .2s; }
.svc:hover .svc-link svg { transform: translate(3px, -3px); }

/* ADVANTAGE PREVIEW */
.adv-grid {
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 100px;
  align-items: center;
}

.adv-img {
  position: relative;
  overflow: hidden;
  border-radius: var(--r);
}

.adv-img img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  opacity: .55;
}

.adv-img-over {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13, 13, 14, .92) 0%, transparent 55%);
}

.adv-img-quote {
  position: absolute;
  bottom: 32px;
  left: 28px;
  right: 28px;
}

.adv-img-quote blockquote {
  font-family: var(--f-serif);
  font-size: 1.15rem;
  font-weight: 300;
  font-style: italic;
  color: var(--cream);
  line-height: 1.5;
}

.adv-img-quote cite {
  display: block;
  margin-top: 10px;
  font-family: var(--f-cond);
  font-size: .66rem;
  letter-spacing: .16em;
  color: var(--gold);
  font-style: normal;
  text-transform: uppercase;
}

.text-center { text-align: center; }

@media (max-width: 1100px) {
  .hero-main { padding: 130px 40px 0; }
  .hero-bottom { padding: 0 40px 44px; }
  .about-grid, .services-head, .adv-grid { grid-template-columns: 1fr; gap: 60px; }
  .about-right { max-width: 480px; }
}

@media (max-width: 680px) {
  .hero-main { padding: 120px 24px 0; }
  .hero-bottom { padding: 0 24px 36px; flex-direction: column; align-items: flex-start; gap: 28px; }
  .hero-stats { flex-direction: column; gap: 20px; border: none; }
  .h-stat { padding: 0; border: none; }
  .svcs { grid-template-columns: 1fr; }
}
</style>

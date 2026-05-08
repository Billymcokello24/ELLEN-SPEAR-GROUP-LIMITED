<script setup>
import { onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'

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
  <div class="services-page">
    <PageHero 
      eyebrow="Expertise & Capabilities"
      title="Integrated Protection.<br><em>Every Dimension.</em>"
      subtitle="From elite physical units to cutting-edge cybersecurity protocols, we provide end-to-end security architectures for Africa's most critical assets."
      image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&q=80"
    />

    <!-- SERVICES GRID SECTION -->
    <section id="services" class="container">
      <div class="services-head-row">
        <div class="s-eyebrow reveal">Core Service Offerings</div>
        <h2 class="display reveal d1">Tailored Solutions for <em>Total Security</em></h2>
      </div>

      <div class="svcs reveal mt-4">
        <!-- IT Security -->
        <div class="svc">
          <div class="svc-topline"></div>
          <span class="svc-n">01</span>
          <div class="svc-icon">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 class="svc-title">IT & Cyber Security</h3>
          <p class="svc-desc">Comprehensive digital protection combining deep audits, real-time network monitoring, and proactive threat neutralization.</p>
          <div class="svc-tags">
            <span class="svc-tag">Cyber Audits</span>
            <span class="svc-tag">Prevention</span>
            <span class="svc-tag">Data Integrity</span>
          </div>
          <RouterLink to="/services/it-security" class="svc-link">Explore Detail <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></RouterLink>
        </div>
        
        <!-- Physical Security -->
        <div class="svc">
          <div class="svc-topline"></div>
          <span class="svc-n">02</span>
          <div class="svc-icon">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
          </div>
          <h3 class="svc-title">Physical Security</h3>
          <p class="svc-desc">Elite trained personnel and advanced infrastructure ensuring complete on-ground protection for demanding environments.</p>
          <div class="svc-tags">
            <span class="svc-tag">Elite Guards</span>
            <span class="svc-tag">Access Control</span>
            <span class="svc-tag">Patrols</span>
          </div>
          <RouterLink to="/services/physical-security" class="svc-link">Explore Detail <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></RouterLink>
        </div>
        
        <!-- Alarm Response -->
        <div class="svc">
          <div class="svc-topline"></div>
          <span class="svc-n">03</span>
          <div class="svc-icon">
            <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </div>
          <h3 class="svc-title">Alarm & Response</h3>
          <p class="svc-desc">Swift emergency response backed by integrated alarm systems and 24/7 tactical monitoring units.</p>
          <div class="svc-tags">
            <span class="svc-tag">Installation</span>
            <span class="svc-tag">24/7 Watch</span>
            <span class="svc-tag">Tactical Units</span>
          </div>
          <RouterLink to="/services/alarm-response" class="svc-link">Explore Detail <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></RouterLink>
        </div>
        
        <!-- Consultancy -->
        <div class="svc">
          <div class="svc-topline"></div>
          <span class="svc-n">04</span>
          <div class="svc-icon">
            <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h3 class="svc-title">Security Consultancy</h3>
          <p class="svc-desc">Expert advisory services architecting bespoke security frameworks from risk management to crisis planning.</p>
          <div class="svc-tags">
            <span class="svc-tag">Risk Analysis</span>
            <span class="svc-tag">Architecture</span>
            <span class="svc-tag">Planning</span>
          </div>
          <RouterLink to="/services/security-consultancy" class="svc-link">Explore Detail <svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></RouterLink>
        </div>
      </div>
    </section>

    <!-- PERFORMANCE STATS SECTION -->
    <section id="stats" class="bg-ink2-full">
      <div class="container">
        <div class="proof-row">
          <div class="proof-cell reveal">
            <div class="proof-num">500+</div>
            <div class="proof-label">Clients Protected</div>
            <p class="proof-text">Institutional, corporate and residential deployments.</p>
          </div>
          <div class="proof-cell reveal d1">
            <div class="proof-num">24/7</div>
            <div class="proof-label">Operational Uptime</div>
            <p class="proof-text">Always active tactical command and response units.</p>
          </div>
          <div class="proof-cell reveal d2">
            <div class="proof-num">5 min</div>
            <div class="proof-label">Avg. Response Time</div>
            <p class="proof-text">Industry leading deployment speeds across the region.</p>
          </div>
          <div class="proof-cell reveal d3">
            <div class="proof-num">100%</div>
            <div class="proof-label">Client Loyalty</div>
            <p class="proof-text">Excellence in service delivery and risk mitigation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CALL TO ACTION -->
    <section class="services-cta container text-center">
      <div class="reveal">
        <h2 class="display">Custom <em>Security</em> Solutions</h2>
        <p class="s-body mt-2" style="margin: 20px auto">Every client has a unique threat profile. Let our experts design a protection architecture that fits your specific needs.</p>
        <div class="mt-4">
          <RouterLink to="/contact" class="btn-gold">Request a Bespoke Proposal</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-page { padding-top: 0; }

.services-head-row { margin-bottom: 60px; }

.svcs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.svc {
  background: var(--ink);
  padding: 60px 50px;
  position: relative;
  overflow: hidden;
  transition: background .4s;
}

.svc:hover { background: #0f0f10; }

.svc-topline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .6s cubic-bezier(.16, 1, .3, 1);
}

.svc:hover .svc-topline { transform: scaleX(1); }

.svc-n {
  font-family: var(--f-serif);
  font-size: 6rem;
  font-weight: 300;
  color: var(--line);
  position: absolute;
  top: 20px;
  right: 32px;
  line-height: 1;
  pointer-events: none;
  transition: color .4s;
}

.svc:hover .svc-n { color: rgba(184, 147, 58, 0.08); }

.svc-icon {
  width: 60px;
  height: 60px;
  border: 1px solid var(--line2);
  border-radius: var(--r);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  transition: all .3s;
}

.svc:hover .svc-icon { border-color: var(--gold); background: rgba(184, 147, 58, 0.05); }

.svc-icon svg { width: 28px; height: 28px; stroke: var(--gold); stroke-width: 1.5; fill: none; }

.svc-title {
  font-family: var(--f-serif);
  font-size: 2.1rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 16px;
}

.svc-desc {
  font-size: .95rem;
  color: var(--fog);
  line-height: 1.8;
  margin-bottom: 28px;
  max-width: 420px;
}

.svc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}

.svc-tag {
  font-family: var(--f-cond);
  font-size: .68rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--mist);
  padding: 6px 14px;
  border: 1px solid var(--line);
  border-radius: var(--r);
}

.svc-link {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--f-cond);
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--mist);
  transition: color .2s;
}

.svc:hover .svc-link { color: var(--gold); }
.svc-link svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 2; fill: none; transition: transform .3s; }
.svc:hover .svc-link svg { transform: translate(4px, -4px); }

/* PROOF */
.proof-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.proof-cell {
  padding: 80px 40px;
  text-align: center;
  border-right: 1px solid var(--line);
}

.proof-cell:last-child { border-right: none; }

.proof-num { font-family: var(--f-serif); font-size: 4rem; font-weight: 300; color: var(--gold2); line-height: 1; }
.proof-label { font-family: var(--f-cond); font-size: .72rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--cream); margin: 12px 0 8px; }
.proof-text { font-size: .82rem; color: var(--mist); line-height: 1.6; }

.text-center { text-align: center; }

@media (max-width: 1100px) {
  .svcs { grid-template-columns: 1fr; }
  .proof-row { grid-template-columns: repeat(2, 1fr); }
  .proof-cell { border-bottom: 1px solid var(--line); }
  .proof-cell:nth-child(even) { border-right: none; }
}

@media (max-width: 680px) {
  .proof-row { grid-template-columns: 1fr; }
  .proof-cell { border-right: none; }
}
</style>

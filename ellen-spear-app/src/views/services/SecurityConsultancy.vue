<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'
import { useSEO } from '../../composables/useSEO'

useSEO({
  title: 'Security Consultancy & Advisory',
  description: 'Expert security risk management and strategic planning. We architect bespoke protection frameworks for corporate, institutional, and private clients.',
  url: 'https://ellenspeargroup.com/services/security-consultancy'
})

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
  <div class="service-detail-page">
    <PageHero 
      eyebrow="Capabilities / 04"
      title="Security <em>Consultancy</em>"
      subtitle="Expert guidance to architect bespoke security frameworks tailored to your unique institutional threat landscape."
      image="/cabing.png"
    />

    <section class="container" style="padding-top: 0">
      <div class="back-link reveal">
        <RouterLink to="/services">&larr; Back to Services</RouterLink>
      </div>

      <div class="detail-grid mt-4">
        <div class="detail-main">
          <div class="s-eyebrow reveal">Overview</div>
          <h2 class="display reveal d1" style="font-size: 2.8rem; line-height: 1.1;">Strategic <em>Risk</em> Architecture</h2>
          <p class="s-body reveal d2 mt-2">Our consultancy division provides the strategic blueprint for your security posture. We analyze vulnerabilities from every angle — physical, digital, and operational — to design integrated solutions that ensure business continuity.</p>
          
          <div class="capabilities-grid mt-4">
            <div class="cap-item reveal d1">
              <div class="cap-n">01</div>
              <div class="cap-info">
                <h4>Threat Assessments</h4>
                <p>Comprehensive analysis to uncover vulnerabilities specific to your operations, location, and critical digital assets.</p>
              </div>
            </div>
            <div class="cap-item reveal d2">
              <div class="cap-n">02</div>
              <div class="cap-info">
                <h4>Architecture Design</h4>
                <p>Bespoke security frameworks that merge IT protocols with physical access controls and tactical deployment plans.</p>
              </div>
            </div>
            <div class="cap-item reveal d3">
              <div class="cap-n">03</div>
              <div class="cap-info">
                <h4>Crisis Management</h4>
                <p>Developing actionable protocols and training to ensure operational continuity during high-stress institutional emergencies.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-side reveal d2">
          <div class="side-box">
            <h4 class="side-title">Advisory Focus</h4>
            <ul class="side-list">
              <li><span>Approach</span><strong>Data-Driven</strong></li>
              <li><span>Compliance</span><strong>International</strong></li>
              <li><span>Continuity</span><strong>Priority One</strong></li>
              <li><span>Reporting</span><strong>Evidence Based</strong></li>
            </ul>
            <div class="side-cta mt-4">
              <RouterLink to="/contact" class="btn-gold" style="width: 100%; text-align: center; display: block;">Book Session</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ADVISORY DEPTH SECTION -->
    <section class="bg-ink2-full">
      <div class="container">
        <div class="tech-grid">
          <div class="tech-img reveal">
            <img src="/consult.png" alt="Security Consultancy Session">
            <div class="img-over"></div>
          </div>
          <div class="tech-content">
            <div class="s-eyebrow reveal">Methodology</div>
            <h2 class="display reveal d1" style="font-size: 2.2rem;">Expert <em>Institutional</em> Guidance</h2>
            <p class="s-body reveal d2 mt-2">Our consultants are veteran security specialists with backgrounds in tactical operations and cybersecurity. We don't just provide reports; we provide actionable intelligence.</p>
            <div class="tech-features mt-4">
              <div class="t-feat reveal d1">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Full Operational Risk Audits</span>
              </div>
              <div class="t-feat reveal d2">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Digital Infrastructure Compliance Audits</span>
              </div>
              <div class="t-feat reveal d3">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Crisis Response Tabletop Exercises</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-detail-page { padding-top: 0; }
.back-link a { font-family: var(--f-cond); font-size: .78rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--mist); transition: color .2s; }
.back-link a:hover { color: var(--gold); }
.detail-grid { display: grid; grid-template-columns: 7fr 3fr; gap: 100px; }
.capabilities-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
.cap-item { display: flex; gap: 24px; align-items: flex-start; }
.cap-n { font-family: var(--f-serif); font-size: 1rem; color: var(--gold); padding-top: 4px; }
.cap-info h4 { font-family: var(--f-serif); font-size: 1.5rem; font-weight: 300; color: var(--cream); margin-bottom: 8px; }
.cap-info p { font-size: .95rem; color: var(--fog); line-height: 1.7; }
.side-box { background: var(--surface); border: 1px solid var(--line); padding: 40px; border-radius: var(--r); position: sticky; top: 140px; }
.side-title { font-family: var(--f-cond); font-size: .8rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--cream); margin-bottom: 24px; border-bottom: 1px solid var(--line); padding-bottom: 12px; }
.side-list { list-style: none; display: flex; flex-direction: column; gap: 18px; }
.side-list li { display: flex; justify-content: space-between; align-items: center; font-size: .85rem; }
.side-list span { color: var(--mist); }
.side-list strong { color: var(--gold); font-weight: 500; }
.tech-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.tech-img { position: relative; overflow: hidden; border-radius: var(--r); }
.tech-img img { width: 100%; aspect-ratio: 16/9; object-fit: cover; opacity: .6; }
.img-over { position: absolute; inset: 0; background: linear-gradient(to right, var(--ink2) 0%, transparent 100%); }
.tech-features { display: flex; flex-direction: column; gap: 16px; }
.t-feat { display: flex; align-items: center; gap: 12px; }
.t-feat svg { width: 18px; height: 18px; stroke: var(--gold); stroke-width: 2; fill: none; }
.t-feat span { font-size: .93rem; color: var(--cream); }
@media (max-width: 1100px) { .detail-grid, .tech-grid { grid-template-columns: 1fr; gap: 60px; } .side-box { position: static; } }
</style>

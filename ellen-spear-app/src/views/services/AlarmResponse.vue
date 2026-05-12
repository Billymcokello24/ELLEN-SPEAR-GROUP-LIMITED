<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'

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
      eyebrow="Capabilities / 03"
      title="Alarm & <em>Rapid Response</em>"
      subtitle="Swift, round-the-clock emergency intervention backed by integrated alarm systems and 24/7 tactical monitoring."
      image="/truck.png"
    />

    <section class="container" style="padding-top: 0">
      <div class="back-link reveal">
        <RouterLink to="/services">&larr; Back to Services</RouterLink>
      </div>

      <div class="detail-grid mt-4">
        <div class="detail-main">
          <div class="s-eyebrow reveal">Overview</div>
          <h2 class="display reveal d1" style="font-size: 2.8rem; line-height: 1.1;">Instant <em>Intervention</em> Protocols</h2>
          <p class="s-body reveal d2 mt-2">Our rapid response division is the cornerstone of our immediate protection model. We utilize high-speed tactical vehicles and integrated monitoring technology to ensure a professional response within minutes of any security breach.</p>
          
          <div class="capabilities-grid mt-4">
            <div class="cap-item reveal d1">
              <div class="cap-n">01</div>
              <div class="cap-info">
                <h4>24/7 Monitoring</h4>
                <p>Advanced Command Centre tracking alarm signals and live CCTV feeds in real-time across the regional network.</p>
              </div>
            </div>
            <div class="cap-item reveal d2">
              <div class="cap-n">02</div>
              <div class="cap-info">
                <h4>Tactical Response</h4>
                <p>Highly trained rapid deployment units on standby at strategic regional nodes, equipped for immediate intervention.</p>
              </div>
            </div>
            <div class="cap-item reveal d3">
              <div class="cap-n">03</div>
              <div class="cap-info">
                <h4>Smart Integration</h4>
                <p>Bespoke alarm systems that interface directly with our tactical command protocols for zero-lag communication.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-side reveal d2">
          <div class="side-box">
            <h4 class="side-title">Response Metrics</h4>
            <ul class="side-list">
              <li><span>Avg Response</span><strong>5 - 8 Minutes</strong></li>
              <li><span>Availability</span><strong>24/7 / 365</strong></li>
              <li><span>Units</span><strong>Mobile Tactical</strong></li>
              <li><span>Support</span><strong>Command Centre</strong></li>
            </ul>
            <div class="side-cta mt-4">
              <RouterLink to="/contact" class="btn-gold" style="width: 100%; text-align: center; display: block;">Enquire Now</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MONITORING DEPTH SECTION -->
    <section class="bg-ink2-full">
      <div class="container">
        <div class="tech-grid">
          <div class="tech-img reveal">
            <img src="/truck.png" alt="Alarm Monitoring Operations">
            <div class="img-over"></div>
          </div>
          <div class="tech-content">
            <div class="s-eyebrow reveal">Technology</div>
            <h2 class="display reveal d1" style="font-size: 2.2rem;">Next-Gen <em>Alarm</em> Systems</h2>
            <p class="s-body reveal d2 mt-2">We provide and install state-of-the-art alarm hardware that integrates with your mobile devices and our central command. Complete control, total peace of mind.</p>
            <div class="tech-features mt-4">
              <div class="t-feat reveal d1">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Mobile App Integration & Real-time Alerts</span>
              </div>
              <div class="t-feat reveal d2">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Remote Armed/Disarmed Capabilities</span>
              </div>
              <div class="t-feat reveal d3">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Full Forensic Incident Reporting</span>
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

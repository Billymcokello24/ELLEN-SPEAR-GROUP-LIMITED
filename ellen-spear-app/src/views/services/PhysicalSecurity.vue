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
      eyebrow="Capabilities / 02"
      title="Physical <em>Security</em>"
      subtitle="Elite trained personnel and advanced tactical infrastructure ensuring complete on-ground protection for Africa's most demanding environments."
      image="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1800&q=80"
    />

    <section class="container" style="padding-top: 0">
      <div class="back-link reveal">
        <RouterLink to="/services">&larr; Back to Services</RouterLink>
      </div>

      <div class="detail-grid mt-4">
        <div class="detail-main">
          <div class="s-eyebrow reveal">Overview</div>
          <h2 class="display reveal d1" style="font-size: 2.8rem; line-height: 1.1;">Elite <em>Ground</em> Force</h2>
          <p class="s-body reveal d2 mt-2">Our physical security division sets the benchmark for professional protection. We deploy highly trained personnel equipped with advanced tactical gear and supported by real-time intelligence from our Command Centres.</p>
          
          <div class="capabilities-grid mt-4">
            <div class="cap-item reveal d1">
              <div class="cap-n">01</div>
              <div class="cap-info">
                <h4>Static Guarding</h4>
                <p>Professional on-site presence for corporate, industrial, and residential properties, managed with military precision.</p>
              </div>
            </div>
            <div class="cap-item reveal d2">
              <div class="cap-n">02</div>
              <div class="cap-info">
                <h4>Executive Protection</h4>
                <p>Bespoke VIP protection details for high-profile individuals and diplomats, ensuring safety through discrete tactical excellence.</p>
              </div>
            </div>
            <div class="cap-item reveal d3">
              <div class="cap-n">03</div>
              <div class="cap-info">
                <h4>Mobile Patrols</h4>
                <p>Scheduled and random tactical patrols to ensure perimeter integrity across large estates and industrial complexes.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-side reveal d2">
          <div class="side-box">
            <h4 class="side-title">Service Highlights</h4>
            <ul class="side-list">
              <li><span>Training</span><strong>Elite Tactical</strong></li>
              <li><span>Deployment</span><strong>Regional Wide</strong></li>
              <li><span>Command</span><strong>24/7 Support</strong></li>
              <li><span>Vetting</span><strong>Vigorously Audited</strong></li>
            </ul>
            <div class="side-cta mt-4">
              <RouterLink to="/contact" class="btn-gold" style="width: 100%; text-align: center; display: block;">Request Detail</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TACTICAL DEPTH SECTION -->
    <section class="bg-ink2-full">
      <div class="container">
        <div class="tech-grid">
          <div class="tech-img reveal">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Physical Security Operations">
            <div class="img-over"></div>
          </div>
          <div class="tech-content">
            <div class="s-eyebrow reveal">Infrastructure</div>
            <h2 class="display reveal d1" style="font-size: 2.2rem;">Advanced <em>Asset</em> Protection</h2>
            <p class="s-body reveal d2 mt-2">Our physical solutions integrate seamlessly with digital monitoring. From biometric access control to smart perimeter fencing, we build barriers that perform under pressure.</p>
            <div class="tech-features mt-4">
              <div class="t-feat reveal d1">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Biometric Access Control Systems</span>
              </div>
              <div class="t-feat reveal d2">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Smart Perimeter CCTV Integration</span>
              </div>
              <div class="t-feat reveal d3">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Rapid Tactical Response Support</span>
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

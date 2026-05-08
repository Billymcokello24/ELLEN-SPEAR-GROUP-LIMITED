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
  <div class="sector-detail-page">
    <PageHero 
      eyebrow="Sector 02"
      title="Government & <em>Public</em>"
      subtitle="Safeguarding public interest through robust protection of government facilities and critical public infrastructure."
      image="../../assets/images/sectors/government.png"
    />

    <section class="container" style="padding-top: 0">
      <div class="back-link reveal">
        <RouterLink to="/business-profile">&larr; Back to Sectors</RouterLink>
      </div>

      <div class="detail-grid mt-4">
        <div class="detail-main">
          <div class="s-eyebrow reveal">Public Safety</div>
          <h2 class="display reveal d1" style="font-size: 2.8rem; line-height: 1.1;">Institutional <em>Public</em> Security</h2>
          <p class="s-body reveal d2 mt-2">Government institutions require the highest levels of vetted security and operational discretion. We provide tailored solutions that meet the stringent requirements of public sector safety and asset protection.</p>
          
          <div class="capabilities-grid mt-4">
            <div class="cap-item reveal d1">
              <div class="cap-n">01</div>
              <div class="cap-info">
                <h4>Facility Guarding</h4>
                <p>Highly vetted on-site personnel for government offices, diplomatic missions, and public buildings.</p>
              </div>
            </div>
            <div class="cap-item reveal d2">
              <div class="cap-n">02</div>
              <div class="cap-info">
                <h4>Information Integrity</h4>
                <p>Specialized cybersecurity protocols to protect sensitive government data and communication networks.</p>
              </div>
            </div>
            <div class="cap-item reveal d3">
              <div class="cap-n">03</div>
              <div class="cap-info">
                <h4>Crisis Response</h4>
                <p>Strategic tactical planning and rapid response units for institutional emergency management.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-side reveal d2">
          <div class="side-box">
            <h4 class="side-title">Sector Focus</h4>
            <ul class="side-list">
              <li><span>Environment</span><span>Public Infrastructure</span></li>
              <li><span>Security Tier</span><strong>Sovereign Grade</strong></li>
              <li><span>Integration</span><strong>Managed Services</strong></li>
              <li><span>Vetting</span><strong>Strict Clearance</strong></li>
            </ul>
            <div class="side-cta mt-4">
              <RouterLink to="/contact" class="btn-gold" style="width: 100%; text-align: center; display: block;">Request Briefing</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sector-detail-page { padding-top: 0; }
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
@media (max-width: 1100px) { .detail-grid { grid-template-columns: 1fr; gap: 60px; } .side-box { position: static; } }
</style>

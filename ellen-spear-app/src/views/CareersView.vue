<script setup>
import { onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import { useSEO } from '../composables/useSEO'

useSEO({
  title: 'Join Our Team',
  description: 'Build a rewarding career with Ellen Spear Group. Explore opportunities in elite physical security, ICT engineering, and tactical operations.',
  url: 'https://ellenspeargroup.com/careers'
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
  <div class="careers-page">
    <PageHero 
      eyebrow="Join the Elite"
      title="Join Our <em>Elite</em><br>Security Force"
      subtitle="We are always looking for dedicated professionals to join our growing family. Build a rewarding career protecting Africa's most demanding environments."
      image="/consults.png"
    />

    <!-- BENEFITS SECTION -->
    <section id="benefits" class="container">
      <div class="careers-layout">
        <div class="careers-left">
          <div class="s-eyebrow reveal">Institutional Culture</div>
          <h2 class="display reveal d1">Why Work With <em>Us?</em></h2>
          <p class="s-body reveal d2 mt-2">At Ellen Spear Group, we value our employees as our greatest institutional asset. We provide an environment that fosters growth, innovation, and tactical excellence.</p>
        </div>
        <div class="benefits-grid">
          <div class="benefit reveal d1">
            <div class="benefit-n">01</div>
            <div class="benefit-body">
              <div class="benefit-title">Continuous Growth</div>
              <p class="benefit-text">We invest in our people through advanced tactical training, cybersecurity certifications, and clear paths for advancement.</p>
            </div>
          </div>
          <div class="benefit reveal d2">
            <div class="benefit-n">02</div>
            <div class="benefit-body">
              <div class="benefit-title">Inclusive Environment</div>
              <p class="benefit-text">Join a diverse, supportive, and collaborative institutional environment where every team member's expertise is valued.</p>
            </div>
          </div>
          <div class="benefit reveal d3">
            <div class="benefit-n">03</div>
            <div class="benefit-body">
              <div class="benefit-title">Premium Benefits</div>
              <p class="benefit-text">Comprehensive health coverage, competitive compensation packages, and performance-based tactical incentives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OPENINGS SECTION -->
    <section id="openings" class="bg-ink2-full">
      <div class="container">
        <div class="openings-head">
          <div class="s-eyebrow reveal" style="justify-content:center">Active Opportunities</div>
          <h2 class="display reveal d1">Current <em>Openings</em></h2>
        </div>
        <div class="no-vacancies reveal d1">
          <div class="nv-icon">
            <svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          </div>
          <p>Currently, there are no active vacancies.</p>
          <span class="nv-sub">Please check back later or submit a general application below.</span>
        </div>
      </div>
    </section>

    <!-- GENERAL APPLICATION SECTION -->
    <section id="general-app" class="container text-center">
      <div class="reveal">
        <div class="s-eyebrow" style="justify-content:center">Speculative Application</div>
        <h2 class="display d1">Don't See a <em>Perfect</em> Fit?</h2>
        <p class="s-body mt-2" style="margin: 20px auto">We are always scouting for top-tier talent. Send us your resume and we'll keep you in mind for future elite positions.</p>
        <div class="mt-4">
          <button class="btn-gold">Submit General Application</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.careers-page { padding-top: 0; }

/* BENEFITS */
.careers-layout {
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 100px;
  align-items: flex-start;
}

.benefits-grid {
  display: flex;
  flex-direction: column;
}

.benefit {
  padding: 36px 0;
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 24px;
}

.benefit:first-child { border-top: 1px solid var(--line); }

.benefit-n {
  font-family: var(--f-serif);
  font-size: 1.1rem;
  color: var(--gold);
  padding-top: 4px;
}

.benefit-title {
  font-family: var(--f-serif);
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 10px;
}

.benefit-text {
  font-size: .95rem;
  color: var(--fog);
  line-height: 1.8;
}

/* OPENINGS */
.openings-head { text-align: center; margin-bottom: 60px; }

.job-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.job-card {
  background: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--r);
  transition: border-color .3s, transform .3s;
}

.job-card:hover {
  border-color: var(--gold);
  transform: translateY(-4px);
}

.job-inner {
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 40px;
  align-items: center;
}

.job-meta {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.job-tag {
  font-family: var(--f-cond);
  font-size: .62rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--gold);
}

.job-type {
  font-family: var(--f-cond);
  font-size: .62rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--mist);
}

.job-title {
  font-family: var(--f-serif);
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 8px;
}

.job-loc {
  font-size: .85rem;
  color: var(--mist);
}

.job-desc p {
  font-size: .93rem;
  color: var(--fog);
  line-height: 1.7;
}

/* NO VACANCIES */
.no-vacancies {
  padding: 80px 40px;
  text-align: center;
  border: 1px dashed var(--line);
  border-radius: var(--r);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.nv-icon {
  width: 60px;
  height: 60px;
  background: var(--surface);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.nv-icon svg {
  width: 28px;
  height: 28px;
  stroke: var(--gold);
  stroke-width: 1.5;
  fill: none;
}

.no-vacancies p {
  font-family: var(--f-serif);
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--cream);
}

.nv-sub {
  font-size: .93rem;
  color: var(--mist);
}

.text-center { text-align: center; }

@media (max-width: 1200px) {
  .job-inner { grid-template-columns: 1fr 1fr; }
  .job-action { grid-column: span 2; }
}

@media (max-width: 1100px) {
  .careers-layout { grid-template-columns: 1fr; gap: 60px; }
}

@media (max-width: 768px) {
  .job-inner { grid-template-columns: 1fr; gap: 24px; }
  .job-action { grid-column: span 1; }
}
</style>

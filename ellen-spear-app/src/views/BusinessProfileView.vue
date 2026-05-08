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
  <div class="business-profile-page">
    <PageHero 
      eyebrow="Institutional Profile"
      title="Architecture of <em>Trust</em>"
      subtitle="The only firm in Africa delivering certified cybersecurity expertise alongside trained ground-force protection — fully integrated under one roof."
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
    />

    <!-- THE ADVANTAGE SECTION -->
    <section id="advantage" class="container">
      <div class="adv-grid">
        <div class="adv-sticky">
          <div class="adv-img reveal">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&q=80" alt="Security professional">
            <div class="adv-img-over"></div>
            <div class="adv-img-quote">
              <blockquote>"Threats do not distinguish between physical and digital. Neither do we."</blockquote>
              <cite>— Ellen Spear Group</cite>
            </div>
          </div>
        </div>
        <div class="adv-content">
          <div class="s-eyebrow reveal">Competitive Advantage</div>
          <h2 class="display reveal d1">Why Ellen Spear<br><em>Outperforms</em></h2>
          <div class="adv-list mt-4">
            <div class="adv-item reveal d1">
              <div class="adv-n">01</div>
              <div class="adv-body">
                <div class="adv-title">Hybrid IT + Physical Model</div>
                <p class="adv-text">The only firm in Africa delivering certified cybersecurity expertise alongside elite ground-force protection — fully integrated under one roof.</p>
              </div>
            </div>
            <div class="adv-item reveal d2">
              <div class="adv-n">02</div>
              <div class="adv-body">
                <div class="adv-title">24/7 Command Centre</div>
                <p class="adv-text">Our operations centre never sleeps. Rapid response units are always on standby, deployed within minutes, backed by real-time tactical intelligence.</p>
              </div>
            </div>
            <div class="adv-item reveal d3">
              <div class="adv-n">03</div>
              <div class="adv-body">
                <div class="adv-title">Vetted Personnel</div>
                <p class="adv-text">Every team member is rigorously vetted, trained, and certified. Our specialists hold internationally recognised credentials in both security and ICT.</p>
              </div>
            </div>
            <div class="adv-item reveal d4">
              <div class="adv-n">04</div>
              <div class="adv-body">
                <div class="adv-title">Tailored Architecture</div>
                <p class="adv-text">No template solutions. Every engagement begins with a deep risk assessment and culminates in a bespoke security architecture designed for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTORS SECTION -->
    <section id="sectors" class="bg-ink2-full">
      <div class="container">
        <div class="sectors-head">
          <div class="s-eyebrow reveal" style="justify-content:center">Specialized Sectors</div>
          <h2 class="display reveal d1">Protection Across<br><em>Critical Environments</em></h2>
        </div>
        <div class="mosaic reveal mt-4">
          <div class="mosaic-item">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80" alt="Corporate Security">
            <div class="mosaic-over">
              <div class="mosaic-tag">Corporate</div>
              <div class="mosaic-name">Financial & Commercial</div>
            </div>
          </div>
          <div class="mosaic-item">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80" alt="Government Security">
            <div class="mosaic-over">
              <div class="mosaic-tag">Public</div>
              <div class="mosaic-name">Government Institutions</div>
            </div>
          </div>
          <div class="mosaic-item">
            <img src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=700&q=80" alt="Residential Security">
            <div class="mosaic-over">
              <div class="mosaic-tag">Residential</div>
              <div class="mosaic-name">High-End Estates</div>
            </div>
          </div>
          <div class="mosaic-item">
            <img src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=700&q=80" alt="Industrial Security">
            <div class="mosaic-over">
              <div class="mosaic-tag">Industrial</div>
              <div class="mosaic-name">Manufacturing & Logistics</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STRATEGIC PARTNERS SECTION -->
    <section id="partners" class="container">
      <div class="partners-row">
        <div class="partners-head">
          <div class="s-eyebrow reveal">Our Network</div>
          <h2 class="display reveal d1">Strategic<br><em>Alliances</em></h2>
          <p class="s-body reveal d2 mt-2">Collaborating with regional leaders to deliver unparalleled operational excellence and digital innovation.</p>
        </div>
        <div class="partners-cards">
          <div class="partner-card reveal d1">
            <div class="partner-top">
              <div class="partner-ico">GE</div>
              <span class="partner-tag">Logistics & Enterprise</span>
            </div>
            <h3>Geodamil Enterprise Limited</h3>
            <p>Providing comprehensive enterprise solutions and logistical support across diverse operational terrains.</p>
          </div>
          <div class="partner-card reveal d2">
            <div class="partner-top">
              <div class="partner-ico">DWP</div>
              <span class="partner-tag">ICT & Digital</span>
            </div>
            <h3>Digital World Prodigy Limited</h3>
            <p>Strategic partner in advanced digital infrastructure and complex IT security integration projects.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.business-profile-page { padding-top: 0; }

/* ADVANTAGE */
.adv-grid {
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 100px;
  align-items: flex-start;
}

.adv-sticky {
  position: sticky;
  top: 140px;
}

.adv-img {
  position: relative;
  overflow: hidden;
  border-radius: var(--r);
}

.adv-img img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  opacity: .5;
}

.adv-img-over {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13, 13, 14, .95) 0%, transparent 60%);
}

.adv-img-quote {
  position: absolute;
  bottom: 32px;
  left: 28px;
  right: 28px;
}

.adv-img-quote blockquote {
  font-family: var(--f-serif);
  font-size: 1.25rem;
  font-weight: 300;
  font-style: italic;
  color: var(--cream);
  line-height: 1.6;
}

.adv-img-quote cite {
  display: block;
  margin-top: 12px;
  font-family: var(--f-cond);
  font-size: .68rem;
  letter-spacing: .16em;
  color: var(--gold);
  font-style: normal;
  text-transform: uppercase;
}

.adv-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.adv-item {
  padding: 36px 0;
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 24px;
}

.adv-item:first-child { border-top: 1px solid var(--line); }

.adv-n {
  font-family: var(--f-serif);
  font-size: 1.1rem;
  color: var(--gold);
  padding-top: 4px;
}

.adv-title {
  font-family: var(--f-serif);
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 10px;
}

.adv-text {
  font-size: .95rem;
  color: var(--fog);
  line-height: 1.8;
  max-width: 520px;
}

/* SECTORS */
.sectors-head { text-align: center; margin-bottom: 60px; }

.mosaic {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.mosaic-item {
  position: relative;
  height: 280px;
  overflow: hidden;
  background: var(--ink);
}

.mosaic-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .35;
  transition: transform .8s, opacity .4s;
}

.mosaic-item:hover img { transform: scale(1.08); opacity: .55; }

.mosaic-over {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  background: linear-gradient(to top, rgba(13, 13, 14, .9) 0%, transparent 60%);
}

.mosaic-tag {
  font-family: var(--f-cond);
  font-size: .65rem;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}

.mosaic-name {
  font-family: var(--f-serif);
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--cream);
  line-height: 1.2;
}

/* PARTNERS */
.partners-row {
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 100px;
  align-items: center;
}

.partner-card {
  padding: 44px;
  border: 1px solid var(--line);
  border-radius: var(--r);
  margin-bottom: 24px;
  transition: border-color .3s;
}

.partner-card:last-child { margin-bottom: 0; }
.partner-card:hover { border-color: var(--gold); }

.partner-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.partner-ico {
  font-family: var(--f-cond);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gold);
}

.partner-tag {
  font-family: var(--f-cond);
  font-size: .65rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--mist);
}

.partner-card h3 {
  font-family: var(--f-serif);
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 12px;
}

.partner-card p {
  font-size: .95rem;
  color: var(--fog);
  line-height: 1.7;
}

@media (max-width: 1100px) {
  .adv-grid, .partners-row { grid-template-columns: 1fr; gap: 60px; }
  .adv-sticky { position: static; }
  .mosaic { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 680px) {
  .mosaic { grid-template-columns: 1fr; }
}
</style>

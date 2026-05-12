<script setup>
import { ref, onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import { useSEO } from '../composables/useSEO'

useSEO({
  title: 'Our Mission & Vision',
  description: 'Learn about the mission, vision, and core values that drive Ellen Spear Group to deliver excellence in security and technology services.',
  url: 'https://ellenspeargroup.com/about'
})

const activeTab = ref('vision')

const setTab = (tab) => {
  activeTab.value = tab
}

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
  <div class="about-page">
    <PageHero 
      eyebrow="Establishment & Legacy"
      title="Where Security Meets <em>Sophistication</em>"
      subtitle="Ellen Spear Group is a premier security and technology solutions company dedicated to integrated protection for businesses, institutions, and individuals."
      image="/truck.png"
    />

    <!-- MISSION & VISION SECTION -->
    <section id="mission-vision" class="container">
      <div class="about-grid">
        <div class="about-left">
          <div class="s-eyebrow reveal">Core Institutional Pillars</div>
          <h2 class="display reveal d1">Our Foundation of <em>Excellence</em></h2>
          
          <div class="about-tabs reveal d2 mt-4">
            <div :class="['atab', { 'on': activeTab === 'vision' }]" @click="setTab('vision')">Vision</div>
            <div :class="['atab', { 'on': activeTab === 'mission' }]" @click="setTab('mission')">Mission</div>
            <div :class="['atab', { 'on': activeTab === 'values' }]" @click="setTab('values')">Values</div>
          </div>

          <div class="tab-contents">
            <div v-if="activeTab === 'vision'" class="atab-content reveal in">
              <p>To be the premier standard of absolute security and intelligence in Africa, pioneering unified defense frameworks for the modern era.</p>
            </div>
            <div v-if="activeTab === 'mission'" class="atab-content reveal in">
              <p>To provide uncompromising, integrated security solutions that empower institutions to operate safely and confidently in dynamic environments, bridging the gap between physical safety and digital resilience.</p>
            </div>
            <div v-if="activeTab === 'values'" class="atab-content reveal in">
              <div class="values-grid">
                <div class="val"><div class="val-diamond"></div><span>Integrity & Trust</span></div>
                <div class="val"><div class="val-diamond"></div><span>Vigilance</span></div>
                <div class="val"><div class="val-diamond"></div><span>Innovation</span></div>
                <div class="val"><div class="val-diamond"></div><span>Excellence</span></div>
              </div>
            </div>
          </div>
        </div>

        <div class="about-right reveal d2">
          <div class="a-corner tl"></div>
          <div class="a-corner br"></div>
          <div class="about-img-wrap">
            <img src="/consults.png" alt="Ellen Spear Group security gate and entry monitoring">
          </div>
          <div class="about-float">
            <div class="about-float-num">100<sup style="font-size:1.1rem;color:var(--gold)">%</sup></div>
            <div class="about-float-label">Client Satisfaction<br>Guarantee</div>
          </div>
        </div>
      </div>
    </section>

    <!-- METHODOLOGY SECTION -->
    <section id="methodology" class="bg-ink2-full">
      <div class="container">
        <div class="methodology-header">
          <div>
            <div class="s-eyebrow reveal">Our Methodology</div>
            <h2 class="display reveal d1">A Disciplined<br><em>Engagement Model</em></h2>
          </div>
          <p class="s-body reveal d2">A five-stage framework ensuring no vulnerability goes unaddressed and every solution is built precisely for your unique operational environment.</p>
        </div>
        <div class="process-steps reveal mt-4">
          <div class="pstep">
            <div class="pstep-circle">01</div>
            <div class="pstep-title">Consultation</div>
            <p class="pstep-desc">Deep-dive meeting to understand your specific security landscape and critical assets.</p>
          </div>
          <div class="pstep">
            <div class="pstep-circle">02</div>
            <div class="pstep-title">Risk Assessment</div>
            <p class="pstep-desc">Comprehensive audit of physical and digital vulnerabilities across your entire operations.</p>
          </div>
          <div class="pstep">
            <div class="pstep-circle">03</div>
            <div class="pstep-title">Solution Design</div>
            <p class="pstep-desc">Bespoke integrated security architecture crafted for your unique threat profile.</p>
          </div>
          <div class="pstep">
            <div class="pstep-circle">04</div>
            <div class="pstep-title">Deployment</div>
            <p class="pstep-desc">Swift, professional implementation with minimal disruption to your daily operations.</p>
          </div>
          <div class="pstep">
            <div class="pstep-circle">05</div>
            <div class="pstep-title">Support</div>
            <p class="pstep-desc">Continuous monitoring, reporting and optimization against evolving global threats.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CALL TO ACTION -->
    <section class="about-cta container text-center">
      <div class="reveal">
        <div class="s-eyebrow" style="justify-content:center">Ready to Secure Your Future?</div>
        <h2 class="display d1">Partner with the <em>Elite</em></h2>
        <div class="mt-4">
          <RouterLink to="/contact" class="btn-gold">Schedule a Consultation</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page { padding-top: 0; }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: flex-start;
}

.about-tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--line);
}

.atab {
  font-family: var(--f-cond);
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--mist);
  padding: 14px 28px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all .2s;
}

.atab.on {
  color: var(--cream);
  border-color: var(--gold);
}

.atab-content {
  padding: 32px 0 0;
}

.atab-content p {
  font-size: 1rem;
  font-weight: 300;
  color: var(--fog);
  line-height: 1.85;
  max-width: 520px;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.val {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border: 1px solid var(--line);
  border-radius: var(--r);
}

.val-diamond {
  width: 6px;
  height: 6px;
  background: var(--gold);
  transform: rotate(45deg);
}

.val span {
  font-family: var(--f-cond);
  font-size: .78rem;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--cream);
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
  height: 540px;
  object-fit: cover;
}

.a-corner {
  position: absolute;
  width: 60px;
  height: 60px;
  border-color: var(--gold);
  border-style: solid;
  border-width: 0;
}

.a-corner.tl { top: -12px; left: -12px; border-top-width: 1px; border-left-width: 1px; }
.a-corner.br { bottom: -12px; right: -12px; border-bottom-width: 1px; border-right-width: 1px; }

.about-float {
  position: absolute;
  bottom: -24px;
  right: -24px;
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 28px 32px;
  border-radius: var(--r);
}

.about-float-num {
  font-family: var(--f-serif);
  font-size: 3.2rem;
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
  margin-top: 8px;
}

/* METHODOLOGY */
.methodology-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 80px;
  align-items: flex-end;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
}

.pstep {
  display: flex;
  flex-direction: column;
}

.pstep-circle {
  width: 48px;
  height: 48px;
  border: 1px solid var(--line2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-serif);
  font-size: 1rem;
  color: var(--gold);
  margin-bottom: 24px;
  transition: all .3s;
}

.pstep:hover .pstep-circle {
  border-color: var(--gold);
  background: rgba(184, 147, 58, 0.05);
}

.pstep-title {
  font-family: var(--f-serif);
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 12px;
}

.pstep-desc {
  font-size: .88rem;
  color: var(--mist);
  line-height: 1.7;
}

.text-center { text-align: center; }

@media (max-width: 1100px) {
  .about-grid, .methodology-header { grid-template-columns: 1fr; gap: 60px; }
  .process-steps { grid-template-columns: repeat(2, 1fr); gap: 40px; }
}

@media (max-width: 680px) {
  .process-steps { grid-template-columns: 1fr; }
  .about-tabs { flex-wrap: wrap; }
  .atab { padding: 12px 18px; font-size: 0.7rem; }
  .about-img-wrap img { height: 320px; }
  .about-float { right: 0; bottom: -10px; padding: 20px; min-width: 160px; }
  .about-float-num { font-size: 2.5rem; }
}
</style>

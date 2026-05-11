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

    <!-- SECTORS SECTION - KENYAN IMAGES -->
    <section id="sectors" class="bg-ink2-full">
      <div class="container">
        <div class="sectors-head">
          <h2 class="display reveal" style="font-size: 3.5rem; text-align: center;">Protection Across</h2>
          <h2 class="display reveal d1" style="font-size: 3.5rem; text-align: center; color: var(--gold2); font-style: italic; margin-top: -10px;">Every Sector</h2>
          <p class="s-body reveal d2 mt-2" style="text-align: center; max-width: 600px; margin: 20px auto 0; font-size: .85rem; color: var(--mist);">From financial institutions to residential estates — bespoke security solutions across Kenya's most critical environments.</p>
        </div>
        <div class="mosaic reveal mt-4">
          <!-- Sector 01 -->
          <RouterLink to="/sectors/corporate-commercial" class="mosaic-item">
            <img src="../assets/images/sectors/corporate.png" alt="Corporate & Commercial Nairobi">
            <div class="mosaic-over">
              <div class="mosaic-tag">Sector 01</div>
              <div class="mosaic-name">Corporate & Commercial</div>
            </div>
          </RouterLink>
          <!-- Sector 02 -->
          <RouterLink to="/sectors/government-public" class="mosaic-item">
            <img src="../assets/images/sectors/government.png" alt="Government & Public Institutions Kenya">
            <div class="mosaic-over">
              <div class="mosaic-tag">Sector 02</div>
              <div class="mosaic-name">Government & Public Institutions</div>
            </div>
          </RouterLink>
          <!-- Sector 03 -->
          <RouterLink to="/sectors/residential-estates" class="mosaic-item">
            <img src="../assets/images/sectors/residential.png" alt="Residential Estates Karen Nairobi">
            <div class="mosaic-over">
              <div class="mosaic-tag">Sector 03</div>
              <div class="mosaic-name">Residential Estates</div>
            </div>
          </RouterLink>
          <!-- Sector 04 -->
          <RouterLink to="/sectors/industrial-manufacturing" class="mosaic-item">
            <img src="../assets/images/sectors/corporate.png" alt="Industrial & Manufacturing Kenya">
            <div class="mosaic-over">
              <div class="mosaic-tag">Sector 04</div>
              <div class="mosaic-name">Industrial & Manufacturing</div>
            </div>
          </RouterLink>
          <!-- Sector 05 -->
          <RouterLink to="/sectors/education-healthcare" class="mosaic-item">
            <img src="../assets/images/sectors/government.png" alt="Education & Healthcare Kenya">
            <div class="mosaic-over">
              <div class="mosaic-tag">Sector 05</div>
              <div class="mosaic-name">Education & Healthcare</div>
            </div>
          </RouterLink>
          <!-- Sector 06 -->
          <RouterLink to="/sectors/financial-banking" class="mosaic-item">
            <img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=700&q=80" alt="Financial Services & Banking Kenya">
            <div class="mosaic-over">
              <div class="mosaic-tag">Sector 06</div>
              <div class="mosaic-name">Financial Services & Banking</div>
            </div>
          </RouterLink>
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
    <!-- LEADERSHIP SECTION -->
    <section id="leadership" class="bg-ink2-full" style="padding: 100px 0;">
      <div class="container">
        <div class="leadership-head">
          <div class="s-eyebrow reveal" style="text-align: center;">The Management</div>
          <h2 class="display reveal d1" style="text-align: center;">Executive <em>Leadership</em></h2>
        </div>
        <div class="leadership-grid mt-5">
          <!-- William Ololo -->
          <div class="leader-card reveal d1">
            <div class="leader-img">
              <img src="../assets/images/management/william_ololo.jpg" alt="William Ololo" onerror="this.src='https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'">
            </div>
            <div class="leader-info">
              <h3>William Ololo</h3>
              <p class="leader-title">Director – Human Security Operations</p>
              <div class="leader-bio">
                <p>William Ololo is an accomplished security professional with over 30 years of experience in the security industry. He holds a Bachelor of Arts in Government and Public Administration from Moi University and has built a distinguished career in corporate security management, operations leadership, and strategic administration.</p>
                <p>He currently serves as a Director at Cotec Security Limited, formerly Bedrock Holdings Ltd, where he provides leadership in human security operations, organizational governance, and client security solutions.</p>
                <p>Beyond the security sector, William also serves as a Director at Siaya County Club, demonstrating his commitment to community leadership and institutional development.</p>
              </div>
            </div>
          </div>
          
          <!-- Eng. David Wasonga -->
          <div class="leader-card reveal d2">
            <div class="leader-img">
              <img src="../assets/images/management/david_wasonga.jpg" alt="Eng. David Wasonga" onerror="this.src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80'">
            </div>
            <div class="leader-info">
              <h3>Eng. David Wasonga</h3>
              <p class="leader-title">Director – ICT & Integrated Security Systems</p>
              <div class="leader-bio">
                <p>Eng. David Wasonga is an accomplished Electrical and ICT Engineer with extensive experience in technology integration, digital transformation, and ICT infrastructure management. He holds a Master of Science (MSc.) in Electrical and Communication Engineering from Masinde Muliro University of Science and Technology.</p>
                <p>He currently serves as the Regional ICT Manager at the ICT Authority, where he leads regional ICT initiatives, digital infrastructure deployment, systems integration, and technology governance.</p>
                <p>Eng. Wasonga is also a Director at Prodigy Constructions Limited, where he contributes strategic leadership in technology-driven infrastructure solutions.</p>
              </div>
            </div>
          </div>

          <!-- Philip Eddy Anayo -->
          <div class="leader-card reveal d3">
            <div class="leader-img">
              <img src="../assets/images/management/philip_anayo.jpg" alt="Philip Eddy Anayo" onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'">
            </div>
            <div class="leader-info">
              <h3>Philip Eddy Anayo</h3>
              <p class="leader-title">Director – Strategy, Corp. Affairs & Business Dev</p>
              <div class="leader-bio">
                <p>Philip Eddy Anayo is a seasoned entrepreneur and business leader with extensive experience in corporate leadership, public service, and organizational development. He currently serves as Director and CEO at Homeland Itoya Events.</p>
                <p>He also serves as a Non-Executive Member at the Kenya Rugby Union. Philip has previously served as the Member of County Assembly (MCA) for Milimani Ward in Kisumu County Assembly, where he played a key role in leadership, policy oversight, and community representation.</p>
                <p>With a diverse background spanning entrepreneurship, governance, and leadership, Philip brings strong expertise in business development, strategic partnerships, and corporate affairs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENTS SECTION -->
    <section id="clients" class="container" style="padding: 100px 0;">
      <div class="clients-head mb-5">
        <div class="s-eyebrow reveal" style="text-align: center;">Our Network</div>
        <h2 class="display reveal d1" style="text-align: center;">Trusted <em>Clients</em></h2>
        <p class="s-body reveal d2 mt-2" style="text-align: center; max-width: 600px; margin: 0 auto;">Providing premier security and intelligence solutions to leading institutions across the region.</p>
      </div>
      
      <div class="clients-grid">
        <div class="client-card reveal d1">
          <div class="client-logo">HIE</div>
          <h4>Homeland Itoya Events</h4>
        </div>
        <div class="client-card reveal d2">
          <div class="client-logo">EG</div>
          <h4>Elle Gardens</h4>
        </div>
        <div class="client-card reveal d3">
          <div class="client-logo">SCC</div>
          <h4>Siaya County Club</h4>
        </div>
        <div class="client-card reveal d4">
          <div class="client-logo">PCL</div>
          <h4>Prodigy Constructions Limited</h4>
        </div>
        <div class="client-card reveal d5">
          <div class="client-logo">LCL</div>
          <h4>Lala Cabs Limited</h4>
        </div>
        <div class="client-card reveal d6">
          <div class="client-logo">RH</div>
          <h4>Rockwell Hotel</h4>
        </div>
        <div class="client-card reveal d7">
          <div class="client-logo">CSL</div>
          <h4>Cotec Security Limited</h4>
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
.sectors-head { margin-bottom: 60px; }

.mosaic {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.mosaic-item {
  position: relative;
  height: 280px;
  overflow: hidden;
  display: block;
}

.mosaic-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .3;
  transition: transform .8s, opacity .4s;
}

.mosaic-item:hover img { transform: scale(1.08); opacity: .5; }

.mosaic-over {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  background: linear-gradient(to top, rgba(13, 13, 14, .95) 0%, rgba(13, 13, 14, .05) 70%);
}

.mosaic-tag {
  font-family: var(--f-cond);
  font-size: .6rem;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}

.mosaic-name {
  font-family: var(--f-serif);
  font-size: 1.4rem;
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

/* LEADERSHIP */
.leadership-head { margin-bottom: 50px; }
.leadership-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.leader-card {
  background: rgba(13, 13, 14, 0.4);
  border: 1px solid var(--line);
  border-radius: var(--r);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.leader-img {
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.leader-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.leader-card:hover .leader-img img {
  transform: scale(1.05);
}

.leader-info {
  padding: 30px;
  flex-grow: 1;
}

.leader-info h3 {
  font-family: var(--f-serif);
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 5px;
}

.leader-title {
  font-family: var(--f-cond);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
}

.leader-bio p {
  font-size: 0.9rem;
  color: var(--fog);
  line-height: 1.6;
  margin-bottom: 12px;
}

.leader-bio p:last-child {
  margin-bottom: 0;
}

/* CLIENTS */
.clients-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.client-card {
  background: rgba(13, 13, 14, 0.6);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 30px 20px;
  text-align: center;
  width: 200px;
  transition: border-color 0.3s, transform 0.3s;
}

.client-card:hover {
  border-color: var(--gold);
  transform: translateY(-5px);
}

.client-logo {
  width: 60px;
  height: 60px;
  margin: 0 auto 15px;
  border-radius: 50%;
  background: var(--ink2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-cond);
  font-weight: 700;
  color: var(--gold);
  font-size: 1.2rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.client-card h4 {
  font-family: var(--f-serif);
  font-size: 1rem;
  font-weight: 400;
  color: var(--mist);
  line-height: 1.4;
}

@media (max-width: 1100px) {
  .leadership-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .leadership-grid { grid-template-columns: 1fr; }
  .clients-grid { flex-direction: column; align-items: center; }
  .client-card { width: 100%; max-width: 300px; }
}
</style>

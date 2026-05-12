<script setup>
import { ref, onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'

const showClientModal = ref(false)
const selectedClient = ref(null)

const clients = [
  {
    id: 'homeland',
    name: 'Homeland Itoya Events',
    tag: 'Event Management',
    logoText: 'HIE',
    logoImg: '/homeland.png',
    brief: 'Homeland Itoya Events is a premier, full-service event management and supply company based in Kenya. The company handles a wide variety of events, ranging from intimate celebrations to state functions.'
  },
  {
    id: 'ellegardens',
    name: 'Elle Gardens',
    tag: 'Hospitality & Events',
    logoText: 'EG',
    logoImg: '/elle.jpg',
    brief: 'Elle Gardens is a highly regarded establishment in Kisumu, providing serene event hosting and lifestyle experiences.'
  },
  {
    id: 'siaya',
    name: 'Siaya County Club',
    tag: 'Hospitality',
    logoText: 'SCC',
    logoImg: '/images/clients/siaya.png',
    brief: 'Siaya County Club is a premier hospitality establishment located in Siaya, offering restaurant services, conference facilities, and accommodation for leisure and corporate stays.'
  },
  {
    id: 'prodigy',
    name: 'Prodigy Constructions Limited',
    tag: 'Infrastructure',
    logoText: 'PCL',
    logoImg: '/images/clients/prodigy.png',
    brief: 'Prodigy Constructions Limited is a prominent firm specializing in technology-driven infrastructure solutions and comprehensive building construction.'
  },
  {
    id: 'lala',
    name: 'Lala Cabs Limited',
    tag: 'Mobility & Logistics',
    logoText: 'LCL',
    logoImg: '/Lalacabs.jpeg',
    brief: 'Lala Cabs Limited is a Kenya-based mobility company providing car rental services, airport transfers, and corporate transportation across major cities.'
  },
  {
    id: 'rockwell',
    name: 'Rockwell Hotel',
    tag: 'Hospitality',
    logoText: 'RH',
    logoImg: '/Rockwell.jpeg',
    brief: 'Rockwell Hotel, situated in Kisumu, offers refined accommodation and hospitality services, prioritizing guest security and comfort.'
  },
  {
    id: 'cotec',
    name: 'Cotec Security Limited',
    tag: 'Integrated Security',
    logoText: 'CSL',
    logoImg: '/cotec.jpeg',
    brief: 'Cotec Security Limited provides integrated security solutions including manned guarding, electronic security systems, and security training across Kenya.'
  }
]

const services = [
  {
    number: '01',
    title: 'IT Security',
    image: '/team3.png',
    link: '/services/it-security',
    paragraphs: [
      'In an era where digital threats evolve by the hour, Ellen Spear Group delivers enterprise-grade cybersecurity solutions engineered to shield your most critical data assets. Our IT Security division conducts comprehensive cybersecurity audits and risk assessments to uncover vulnerabilities before malicious actors can exploit them.',
      'We deploy advanced network monitoring and intrusion prevention systems that operate around the clock, providing real-time visibility into your entire infrastructure. Our services also encompass robust data protection and backup solutions, endpoint and cloud security management, and tailored security awareness training programmes.'
    ]
  },
  {
    number: '02',
    title: 'Physical Security Services',
    image: '/team4.png',
    link: '/services/physical-security',
    paragraphs: [
      'Ellen Spear Group provides a full spectrum of physical security services through rigorously trained, highly vetted personnel. Our guards maintain a commanding on-site presence across corporate offices, residential estates, industrial facilities, and institutional campuses, delivering access control and perimeter security.',
      'We operate mobile patrol units that cover wide operational zones including businesses, estates, and government institutions. For high-profile clients, we offer dedicated VIP and executive protection services, ensuring personal safety with discretion, discipline, and tactical precision.'
    ]
  },
  {
    number: '03',
    title: 'Alarm & Rapid Response',
    image: '/truck.png',
    link: '/services/alarm-response',
    paragraphs: [
      'Our state-of-the-art Command Centre operates 24 hours a day, 7 days a week, providing continuous monitoring of alarm systems installed across client premises. When an alert is triggered, our strategically positioned rapid response units are dispatched immediately, ensuring crisis containment within minutes.',
      'We specialize in the professional installation and monitoring of alarm systems, seamless CCTV integration with alarm alerts for visual verification, and comprehensive incident reporting and resolution. Every event is logged and analyzed to ensure continuous improvement.'
    ]
  },
  {
    number: '04',
    title: 'Security Consultancy',
    image: '/consults.png',
    link: '/services/security-consultancy',
    paragraphs: [
      'Ellen Spear Group\'s consultancy division provides expert advisory services for organizations seeking to strengthen their overall security framework. We conduct thorough security risk and threat assessments that map your unique vulnerabilities, and then design and implement integrated security systems.',
      'Our consultants deliver compliance and regulatory guidance to ensure your operations meet all industry and government security standards. We also develop crisis management and contingency planning strategies, preparing your organization to respond decisively to any emergency scenario.'
    ]
  }
]

const operationsGallery = [
  {
    title: 'Trained Security Teams',
    image: '/team3.png',
    caption: 'Disciplined, visible teams ready for corporate, residential, and institutional environments.'
  },
  {
    title: 'Field Deployment Units',
    image: '/team4.png',
    caption: 'Coordinated on-site presence supported by access control and perimeter security procedures.'
  },
  {
    title: 'Rapid Response Fleet',
    image: '/images/truck.png',
    caption: 'Marked response vehicles connected to 24/7 monitoring and incident escalation protocols.'
  }
]

const openClientModal = (client) => {
  selectedClient.value = client
  showClientModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeClientModal = () => {
  showClientModal.value = false
  setTimeout(() => {
    selectedClient.value = null
    document.body.style.overflow = ''
  }, 300)
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
  <div class="business-profile-page">
    <PageHero 
      eyebrow="Institutional Profile"
      title="Integrated <em>Security</em> Solutions"
      subtitle="Ellen Spear Group is a premier security and technology firm providing comprehensive physical guarding, intelligent surveillance, and cutting-edge ICT infrastructure for leading institutions."
      image="/team3.png"
    >
      <template #actions>
        <a href="/Ellen_Spear_Group_Business_Profile.pdf" download class="btn-gold">
          Download Business Profile
          <svg style="width:18px;height:18px;margin-left:8px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4m4-10l5 5 5-5m-5 5V3"/></svg>
        </a>
      </template>
    </PageHero>

    <!-- SERVICES DETAIL SECTION -->
    <section id="services-detail" class="services-detail-section">
      <div class="container">
        <div class="services-detail-head">
          <div>
            <div class="s-eyebrow reveal">Our Services</div>
            <h2 class="display reveal d1">Security Coverage With<br><em>Operational Depth</em></h2>
          </div>
          <p class="s-body reveal d2">A hybrid model built for the modern threat environment: cyber protection, trained personnel, emergency response, and expert consultancy working as one system.</p>
        </div>

        <div class="service-detail-grid mt-5">
          <RouterLink
            v-for="(service, index) in services"
            :key="service.title"
            :to="service.link"
            class="service-detail-card reveal"
            :class="'d' + ((index % 4) + 1)"
          >
            <div class="service-detail-media">
              <img :src="service.image" :alt="service.title">
              <div class="service-detail-overlay">
                <span>View Details</span>
              </div>
            </div>
            <div class="service-detail-copy">
              <span class="service-detail-number">{{ service.number }}</span>
              <h3>{{ service.title }}</h3>
              <p v-for="p in service.paragraphs" :key="p" class="mt-2">{{ p }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- OPERATIONS IMAGERY -->
    <section id="operations-gallery" class="operations-gallery-section">
      <div class="container">
        <div class="gallery-head">
          <div class="s-eyebrow reveal">Operational Readiness</div>
          <h2 class="display reveal d1">People, Patrols<br><em>& Response Assets</em></h2>
        </div>
        <div class="operations-grid mt-4">
          <article
            v-for="(item, index) in operationsGallery"
            :key="item.title"
            class="operations-card reveal"
            :class="'d' + ((index % 3) + 1)"
          >
            <img :src="item.image" :alt="item.title">
            <div class="operations-card-copy">
              <h3>{{ item.title }}</h3>
              <p>{{ item.caption }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- THE ADVANTAGE SECTION -->
    <section id="advantage" class="container">
      <div class="adv-grid">
        <div class="adv-sticky">
          <div class="adv-img reveal">
            <img src="/consults.png" alt="Security professional">
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
                <p class="adv-text">A hybrid model that integrates IT security and physical security, giving clients one command structure for digital and ground-level protection.</p>
              </div>
            </div>
            <div class="adv-item reveal d2">
              <div class="adv-n">02</div>
              <div class="adv-body">
                <div class="adv-title">Certified Experts & Trained Guards</div>
                <p class="adv-text">A team of certified cybersecurity experts and trained guards, combining technical discipline with visible, dependable field presence.</p>
              </div>
            </div>
            <div class="adv-item reveal d3">
              <div class="adv-n">03</div>
              <div class="adv-body">
                <div class="adv-title">Rapid Response + 24/7 Monitoring</div>
                <p class="adv-text">Rapid response units backed by round-the-clock monitoring, alarm escalation, CCTV alert integration, and clear incident reporting.</p>
              </div>
            </div>
            <div class="adv-item reveal d4">
              <div class="adv-n">04</div>
              <div class="adv-body">
                <div class="adv-title">Customized Sector Solutions</div>
                <p class="adv-text">Customized solutions for government, corporate, residential, and industrial clients, shaped around each site’s real risk profile.</p>
              </div>
            </div>
            <div class="adv-item reveal d5">
              <div class="adv-n">05</div>
              <div class="adv-body">
                <div class="adv-title">Customer Trust</div>
                <p class="adv-text">A strong emphasis on customer satisfaction, transparent communication, and dependable service delivery.</p>
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
          <RouterLink to="/sectors/corporate-commercial" class="sector-icon-card">
            <div class="sic-icon">
              <svg viewBox="0 0 24 24"><path d="M4 22V2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v20"/><path d="M14 6h.01M10 6h.01M14 10h.01M10 10h.01M14 14h.01M10 14h.01M14 18h.01M10 18h.01"/></svg>
            </div>
            <div class="sic-tag">Sector 01</div>
            <div class="sic-name">Corporate & Commercial</div>
          </RouterLink>
          
          <!-- Sector 02 -->
          <RouterLink to="/sectors/government-public" class="sector-icon-card">
            <div class="sic-icon">
              <svg viewBox="0 0 24 24"><path d="M2 22h20M12 2L2 7l10 5 10-5-10-5zM6 12v6M10 12v6M14 12v6M18 12v6"/></svg>
            </div>
            <div class="sic-tag">Sector 02</div>
            <div class="sic-name">Government & Public Institutions</div>
          </RouterLink>
          
          <!-- Sector 03 -->
          <RouterLink to="/sectors/residential-estates" class="sector-icon-card">
            <div class="sic-icon">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>
            </div>
            <div class="sic-tag">Sector 03</div>
            <div class="sic-name">Residential Estates</div>
          </RouterLink>
          
          <!-- Sector 04 -->
          <RouterLink to="/sectors/industrial-manufacturing" class="sector-icon-card">
            <div class="sic-icon">
              <svg viewBox="0 0 24 24"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>
            </div>
            <div class="sic-tag">Sector 04</div>
            <div class="sic-name">Industrial & Manufacturing</div>
          </RouterLink>
          
          <!-- Sector 05 -->
          <RouterLink to="/sectors/education-healthcare" class="sector-icon-card">
            <div class="sic-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div class="sic-tag">Sector 05</div>
            <div class="sic-name">Education & Healthcare</div>
          </RouterLink>
          
          <!-- Sector 06 -->
          <RouterLink to="/sectors/financial-banking" class="sector-icon-card">
            <div class="sic-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            </div>
            <div class="sic-tag">Sector 06</div>
            <div class="sic-name">Financial Services & Banking</div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- REMOVED STRATEGIC PARTNERS SECTION TO COMBINE WITH CLIENTS -->
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
              <img src="/images/ololo.jpeg" alt="William Ololo" onerror="this.src='https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80'">
            </div>
            <div class="leader-info">
              <h3>William Ololo</h3>
              <p class="leader-title">CEO and Director – Human Security Operations</p>
              <div class="leader-bio">
                <p>William Ololo is an accomplished security professional with over 30 years of experience in the security industry. He currently serves as the CEO at Ellen Spear Group, where he provides strategic leadership and oversight in organizational operations and security management.</p>
              </div>
              <RouterLink to="/leadership/william-ololo" class="read-more-btn mt-3">Read More</RouterLink>
            </div>
          </div>
          
          <!-- Eng. David Wasonga -->
          <div class="leader-card reveal d2">
            <div class="leader-img">
              <img src="/images/David.jpeg" alt="Eng. David Wasonga" onerror="this.src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80'">
            </div>
            <div class="leader-info">
              <h3>Eng. David Wasonga</h3>
              <p class="leader-title">Director – ICT & Integrated Security Systems</p>
              <div class="leader-bio">
                <p>Eng. David Wasonga is an accomplished Electrical and ICT Engineer with extensive experience in technology integration, digital transformation, and ICT infrastructure management...</p>
              </div>
              <RouterLink to="/leadership/david-wasonga" class="read-more-btn mt-3">Read More</RouterLink>
            </div>
          </div>

          <!-- Philip Eddy Anayo -->
          <div class="leader-card reveal d3">
            <div class="leader-img">
              <img src="/images/william.png" alt="Philip Eddy Anayo" onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'">
            </div>
            <div class="leader-info">
              <h3>Philip Eddy Anayo</h3>
              <p class="leader-title">Director – Strategy, Corp. Affairs & Business Dev</p>
              <div class="leader-bio">
                <p>Philip Eddy Anayo is a seasoned entrepreneur and business leader with extensive experience in corporate leadership, public service, and organizational development...</p>
              </div>
              <RouterLink to="/leadership/philip-anayo" class="read-more-btn mt-3">Read More</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR NETWORK (COMBINED PARTNERS & CLIENTS) -->
    <section id="network" class="network-white-section" style="padding: 100px 0;">
      <div class="container">
        <div class="clients-head mb-5">
          <div class="s-eyebrow reveal" style="text-align: center; color: var(--ink);">Our Network</div>
          <h2 class="display reveal d1" style="text-align: center; color: var(--ink);">Strategic Alliances & <em style="color: var(--gold);">Clients</em></h2>
          <p class="s-body reveal d2 mt-2" style="text-align: center; max-width: 600px; margin: 0 auto; color: var(--ink);">Collaborating with regional leaders and providing premier security and intelligence solutions to leading institutions.</p>
        </div>
        
        <div class="clients-grid">
          <div 
            v-for="(client, index) in clients" 
            :key="client.id"
            class="partner-card light-card reveal" 
            :class="'d' + ((index % 4) + 1)"
            @click="openClientModal(client)"
            style="cursor: pointer;"
          >
            <div class="partner-top">
              <div class="client-logo-light" style="margin: 0;">
                <img v-if="client.logoImg" :src="client.logoImg" :alt="client.name" onerror="this.style.display='none'">
                <span v-else>{{ client.logoText }}</span>
              </div>
              <span class="partner-tag" style="margin-left: 15px;">{{ client.tag }}</span>
            </div>
            <h3>{{ client.name }}</h3>
            <p class="brief-text">{{ client.brief.substring(0, 100) }}...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CLIENT MODAL -->
    <div class="modal-overlay" v-if="showClientModal" @click.self="closeClientModal">
      <div class="client-modal">
        <button class="modal-close" @click="closeClientModal">&times;</button>
        <div class="modal-content" v-if="selectedClient">
          <div class="modal-header">
            <div class="modal-logo">
              <img v-if="selectedClient.logoImg" :src="selectedClient.logoImg" :alt="selectedClient.name" onerror="this.style.display='none'">
              <span v-else>{{ selectedClient.logoText }}</span>
            </div>
            <h3>{{ selectedClient.name }}</h3>
          </div>
          <div class="modal-body">
            <p>{{ selectedClient.brief }}</p>
          </div>
          <div class="modal-actions">
            <a v-if="selectedClient.logoImg" :href="selectedClient.logoImg" download class="btn-primary" style="display: inline-block;">Download Logo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.business-profile-page { padding-top: 0; }

/* SERVICES DETAIL */
.services-detail-section {
  padding: 110px 0;
  background: var(--white);
  color: var(--ink);
}

.services-detail-head,
.gallery-head {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: flex-end;
}

.services-detail-section .display,
.services-detail-section .s-body {
  color: var(--ink);
}

.service-detail-grid {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.service-detail-card:nth-child(even) {
  grid-template-columns: 1fr 42%;
}

.service-detail-card:nth-child(even) .service-detail-media {
  order: 2;
}

.service-detail-card {
  border: 1px solid #e5e1d6;
  background: #fff;
  display: grid;
  grid-template-columns: 42% 1fr;
  min-height: 380px;
  text-decoration: none;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
  overflow: hidden;
}

.service-detail-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

.service-detail-media {
  position: relative;
  overflow: hidden;
  background: var(--ink);
}

.service-detail-overlay {
  position: absolute;
  inset: 0;
  background: rgba(184, 147, 58, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
}

.service-detail-overlay span {
  font-family: var(--f-cond);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #fff;
  padding: 12px 24px;
  border: 1px solid #fff;
}

.service-detail-card:hover .service-detail-overlay {
  opacity: 1;
}

.service-detail-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.service-detail-card:hover .service-detail-media img {
  transform: scale(1.1);
}

.service-detail-copy {
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.service-detail-number {
  font-family: var(--f-cond);
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .18em;
  color: var(--gold);
  margin-bottom: 8px;
}

.service-detail-copy h3 {
  font-family: var(--f-serif);
  font-size: 1.85rem;
  font-weight: 300;
  color: var(--ink);
  margin-bottom: 20px;
  line-height: 1.2;
}

.service-detail-copy p {
  font-size: .95rem;
  line-height: 1.7;
  color: #555;
}

.service-detail-copy li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--gold);
  position: absolute;
  left: 0;
  top: .65em;
}

/* OPERATIONS GALLERY */
.operations-gallery-section {
  padding: 110px 0;
  background: var(--ink);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.operations-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1.2fr;
  gap: 24px;
}

.operations-card {
  position: relative;
  min-height: 420px;
  border: 1px solid var(--line);
  overflow: hidden;
  background: var(--ink2);
}

.operations-card img {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;
  opacity: .72;
  transition: transform .6s ease, opacity .3s ease;
}

.operations-card:hover img {
  transform: scale(1.04);
  opacity: .88;
}

@media (max-width: 900px) {
  .service-detail-card, .service-detail-card:nth-child(even) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  
  .service-detail-card:nth-child(even) .service-detail-media {
    order: 0;
  }

  .service-detail-media {
    height: 240px;
  }
  
  .service-detail-copy {
    padding: 30px 20px;
  }
  
  .service-detail-copy h3 {
    font-size: 1.5rem;
  }

  .operations-grid {
    grid-template-columns: 1fr;
  }
  
  .operations-card {
    min-height: 320px;
  }
  
  .operations-card img {
    min-height: 320px;
  }
}

.operations-card-copy {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 28px;
  z-index: 1;
}

.operations-card-copy h3 {
  font-family: var(--f-serif);
  font-size: 1.7rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 10px;
}

.operations-card-copy p {
  color: var(--fog);
  font-size: .94rem;
  line-height: 1.65;
}

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
  gap: 24px;
}

.sector-icon-card {
  background: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--r);
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  transition: border-color .3s, transform .3s;
  text-decoration: none;
}

.sector-icon-card:hover {
  border-color: var(--gold);
  transform: translateY(-5px);
}

.sic-icon {
  width: 54px;
  height: 54px;
  border: 1px solid var(--line2);
  border-radius: var(--r);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  background: var(--ink2);
  transition: border-color .3s, background .3s;
}

.sector-icon-card:hover .sic-icon {
  border-color: var(--gold);
  background: rgba(184, 147, 58, 0.07);
}

.sic-icon svg {
  width: 24px;
  height: 24px;
  stroke: var(--gold);
  stroke-width: 1.5;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sic-tag {
  font-family: var(--f-cond);
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .15em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.sic-name {
  font-family: var(--f-serif);
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--cream);
  line-height: 1.25;
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

.network-white-section {
  background: var(--white);
  color: var(--ink);
}

.light-card {
  background: transparent !important;
  border-color: #e5e7eb !important;
  color: var(--ink);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.light-card:hover {
  border-color: var(--gold) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}

.light-card h3 {
  color: var(--ink) !important;
  font-weight: 400;
}

.light-card p.brief-text {
  color: #4b5563 !important;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.client-logo-light {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-cond);
  font-weight: 700;
  color: var(--gold);
  font-size: 1.2rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  overflow: hidden;
  flex-shrink: 0;
}

.client-logo-light img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 1100px) {
  .adv-grid, .partners-row, .service-detail-grid { grid-template-columns: 1fr; gap: 60px; }
  .operations-grid { grid-template-columns: 1fr; }
  .services-detail-head, .gallery-head { flex-direction: column; align-items: flex-start; }
  .adv-sticky { position: static; }
  .mosaic { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 680px) {
  .mosaic { grid-template-columns: 1fr; }
  .service-detail-card { grid-template-columns: 1fr; }
  .service-detail-media { min-height: 240px; }
  .service-detail-copy { padding: 26px; }
  .operations-card, .operations-card img { min-height: 340px; }
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

/* NETWORK / CLIENTS */
.clients-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.client-logo {
  width: 60px;
  height: 60px;
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
  overflow: hidden;
  flex-shrink: 0;
}



@media (max-width: 1100px) {
  .leadership-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .leadership-grid { grid-template-columns: 1fr; }
  .clients-grid { grid-template-columns: 1fr; }
}

/* MODAL */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.client-modal {
  background: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--r);
  width: 100%;
  max-width: 500px;
  position: relative;
  padding: 40px;
  animation: modalIn 0.3s ease;
}

@keyframes modalIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: var(--mist);
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s;
}

.modal-close:hover {
  color: var(--gold);
}

.modal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;
  border-bottom: 1px solid var(--line);
  padding-bottom: 25px;
}

.modal-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--ink2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-cond);
  font-weight: 700;
  color: var(--gold);
  font-size: 1.5rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
  margin-bottom: 15px;
  overflow: hidden;
}

.modal-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-header h3 {
  font-family: var(--f-serif);
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--cream);
}

.modal-body p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--fog);
  text-align: center;
  margin-bottom: 30px;
}

.modal-actions {
  text-align: center;
}

.read-more-btn {
  display: inline-block;
  font-family: var(--f-cond);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  text-decoration: none;
  border: 1px solid var(--gold);
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  background: var(--gold);
  color: var(--ink);
}

.client-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.client-card {
  cursor: pointer;
}
</style>

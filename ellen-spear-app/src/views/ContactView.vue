<script setup>
import { onMounted } from 'vue'
import PageHero from '../components/PageHero.vue'
import { useSEO } from '../composables/useSEO'

useSEO({
  title: 'Contact Us',
  description: 'Reach out to Ellen Spear Group for 24/7 security support, corporate consultations, and threat assessments in Nairobi, Kenya.',
  url: 'https://ellenspeargroup.com/contact'
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
  <div class="contact-page">
    <PageHero 
      eyebrow="Confidential Engagement"
      title="Let's Protect<br>What <em>Matters</em>"
      subtitle="Reach out for a confidential consultation, threat assessment, or immediate operational support."
      image="/cabing.png"
    />

    <!-- CONTACT FORM & INFO SECTION -->
    <section id="contact" class="container">
      <div class="contact-grid">
        <div class="contact-left">
          <div class="s-eyebrow reveal">Direct Channels</div>
          <h2 class="display reveal d1">Operational <em>Support</em></h2>
          <p class="s-body reveal d2 mt-2">Our team is available 24/7 to address your security concerns. Reach out via our direct lines or use the secure form.</p>
          
          <div class="contact-channels reveal d3 mt-4">
            <div class="channel">
              <div class="ch-ico">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="ch-body">
                <span class="ch-label">Phone Support</span>
                <div class="ch-val">0722747607</div>
              </div>
            </div>
            <div class="channel">
              <div class="ch-ico">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="ch-body">
                <span class="ch-label">Email Inquiry</span>
                <div class="ch-val">info@ellenspear.com</div>
              </div>
            </div>
            <div class="channel">
              <div class="ch-ico">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="ch-body">
                <span class="ch-label">Headquarters</span>
                <div class="ch-val">Lavingtone, King'ara Road, Nairobi, Kenya</div>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-right reveal d2">
          <div class="form-panel">
            <h3 class="form-title">Secure Consultation <em>Form</em></h3>
            <form class="contact-form mt-3">
              <div class="f-row">
                <div class="fg">
                  <label>Full Name</label>
                  <input type="text" placeholder="Institutional or Personal Name">
                </div>
                <div class="fg">
                  <label>Email Address</label>
                  <input type="email" placeholder="email@address.com">
                </div>
              </div>
              <div class="fg mt-3">
                <label>Security Service of Interest</label>
                <select>
                  <option>Integrated Protection Suite</option>
                  <option>Cyber Security Audit</option>
                  <option>Physical Tactical Detail</option>
                  <option>Consultancy & Risk Planning</option>
                </select>
              </div>
              <div class="fg mt-3">
                <label>Message / Operational Requirements</label>
                <textarea placeholder="Describe your specific security needs..."></textarea>
              </div>
              <button type="submit" class="f-btn mt-4">
                Initiate Contact
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- EMERGENCY CTA SECTION -->
    <section id="emergency" class="bg-ink2-full text-center">
      <div class="container">
        <div class="reveal">
          <div class="s-eyebrow" style="justify-content:center">24/7 Tactical Support</div>
          <h2 class="display d1">Immediate <em>Crisis</em> Response</h2>
          <p class="s-body mt-2" style="margin: 20px auto">For active threats or emergency tactical deployment, bypass the form and call our command centre directly.</p>
          <div class="mt-4">
            <a href="tel:0722747607" class="btn-gold">Emergency Line: 0722747607</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page { padding-top: 0; }

.contact-grid {
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 120px;
  align-items: flex-start;
}

.channel {
  padding: 24px 0;
  border-bottom: 1px solid var(--line);
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.channel:first-child { border-top: 1px solid var(--line); }

.ch-ico {
  width: 44px;
  height: 44px;
  border: 1px solid var(--line2);
  border-radius: var(--r);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s;
}

.channel:hover .ch-ico { border-color: var(--gold); background: rgba(184, 147, 58, 0.05); }

.ch-ico svg { width: 18px; height: 18px; stroke: var(--gold); stroke-width: 1.5; fill: none; }

.ch-label {
  font-family: var(--f-cond);
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--mist);
  display: block;
  margin-bottom: 4px;
}

.ch-val {
  font-size: 1.05rem;
  font-weight: 300;
  color: var(--cream);
}

/* FORM PANEL */
.form-panel {
  padding: 60px;
  border: 1px solid var(--line);
  border-radius: var(--r);
  background: var(--ink);
}

.form-title {
  font-family: var(--f-serif);
  font-size: 2.2rem;
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 10px;
}

.form-title em { font-style: italic; color: var(--gold2); }

.contact-form { display: flex; flex-direction: column; }
.f-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.fg { display: flex; flex-direction: column; gap: 10px; }

label {
  font-family: var(--f-cond);
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--mist);
}

input, select, textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line2);
  padding: 12px 0;
  color: var(--white);
  font-family: var(--f-sans);
  font-size: 1rem;
  font-weight: 300;
  outline: none;
  transition: border-color .3s;
}

input:focus, select:focus, textarea:focus { border-color: var(--gold); }

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23b8933a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m3 5 3 3 3-3'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 24px;
}

select option { 
  background: #1a1a1b; 
  color: var(--white);
  padding: 10px;
}

textarea { min-height: 120px; resize: vertical; }

.f-btn {
  background: transparent;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-family: var(--f-cond);
  font-weight: 700;
  font-size: .85rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: 16px 40px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all .3s;
  width: fit-content;
}

.f-btn:hover { background: var(--gold); color: var(--ink); }
.f-btn svg { width: 16px; height: 16px; stroke: currentColor; stroke-width: 2; fill: none; transition: transform .3s; }
.f-btn:hover svg { transform: translateX(6px); }

.text-center { text-align: center; }

@media (max-width: 1100px) {
  .contact-grid { grid-template-columns: 1fr; gap: 80px; }
  .form-panel { padding: 40px; }
}

@media (max-width: 680px) {
  .f-row { grid-template-columns: 1fr; }
}
</style>

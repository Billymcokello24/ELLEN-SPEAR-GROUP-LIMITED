<template>
  <footer class="footer">
    <div class="container">
      <div class="foot-top">
        <div class="foot-brand">
          <RouterLink to="/" class="foot-brand-logo">
            <img src="/ellen-spear-logo.png" alt="Ellen Spear Group Logo" class="footer-logo-img">
            <span class="nav-wordmark">Ellen&nbsp;<em>Spear</em>&nbsp;Group</span>
          </RouterLink>
          <p>Integrated protection for businesses, institutions, and individuals. Safeguarding Africa's most demanding environments.</p>
        </div>
        
        <div class="foot-col">
          <h6>Company</h6>
          <ul>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/business-profile">Business Profile</RouterLink></li>
            <li><a href="/Ellen_Spear_Group_Business_Profile.pdf" download style="color:var(--gold)">Download Profile (PDF)</a></li>
            <li><RouterLink to="/careers">Careers</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        
        <div class="foot-col">
          <h6>Services</h6>
          <ul>
            <li><RouterLink to="/services/it-security">IT & Cyber Security</RouterLink></li>
            <li><RouterLink to="/services/physical-security">Physical Security</RouterLink></li>
            <li><RouterLink to="/services/alarm-response">Alarm Response</RouterLink></li>
            <li><RouterLink to="/services/security-consultancy">Consultancy</RouterLink></li>
          </ul>
        </div>
        
        <div class="foot-col">
          <h6>Connect</h6>
          <ul>
            <li><a href="mailto:info@ellenspear.com">info@ellenspear.com</a></li>
            <li><a href="tel:+254715822350">+254 715 822350</a></li>
            <li>Purple Tower Building, Shimo la Tewa Road, 13th floor, Nairobi</li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div class="foot-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Ellen Spear Group. All Rights Reserved.</p>
        <p>Managed by <span>ESG Operations Centre</span></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink2);
  border-top: 1px solid var(--line);
  padding: 64px 0 36px;
  margin-top: 240px;
}

.foot-top {
  display: grid;
  grid-template-columns: 2.2fr 1fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 28px;
}

.footer-logo-img {
  width: 90px;
  height: auto;
  filter: brightness(1.1);
  display: block;
}

.foot-brand-logo {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-decoration: none;
  background: transparent !important;
}

.nav-emblem {
  width: 38px;
  height: 38px;
  border: 1px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-emblem span {
  font-family: var(--f-cond);
  font-size: .6rem;
  font-weight: 700;
  letter-spacing: .1em;
  color: var(--gold);
}

.nav-wordmark {
  font-family: var(--f-cond);
  font-size: .95rem;
  font-weight: 600;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--cream);
}

.nav-wordmark em {
  font-style: normal;
  color: var(--gold);
}

.foot-brand p {
  color: #aaa;
  margin-top: 24px;
  max-width: 320px;
  line-height: 1.6;
  font-size: .85rem;
}

.foot-col h6 {
  color: #fff;
  font-family: var(--f-cond);
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.foot-col ul {
  list-style: none;
  padding: 0;
}

.foot-col ul li {
  margin-bottom: 14px;
}

.foot-col ul li a {
  color: #888;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color .3s;
}

.foot-col ul li a:hover {
  color: var(--gold);
}

.foot-bottom {
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
}

.foot-bottom span {
  color: var(--gold);
  font-weight: 500;
}

@media (max-width: 1100px) {
  .foot-top { grid-template-columns: 1fr 1fr; gap: 40px; }
}

@media (max-width: 680px) {
  .foot-top { grid-template-columns: 1fr; }
  .foot-bottom { flex-direction: column; gap: 8px; text-align: center; }
}
</style>

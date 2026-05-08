<template>
  <footer class="footer">
    <div class="container">
      <div class="foot-top">
        <div class="foot-brand">
          <RouterLink to="/" class="foot-brand-logo">
            <div class="nav-emblem"><span>ESG</span></div>
            <span class="nav-wordmark">Ellen&nbsp;<em>Spear</em>&nbsp;Group</span>
          </RouterLink>
          <p>Integrated protection for businesses, institutions, and individuals. Safeguarding Africa's most demanding environments.</p>
        </div>
        
        <div class="foot-col">
          <h6>Company</h6>
          <ul>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/business-profile">Business Profile</RouterLink></li>
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
            <li><a href="tel:+254700000000">+254 700 000 000</a></li>
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
}

.foot-top {
  display: grid;
  grid-template-columns: 2.2fr 1fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 28px;
}

.foot-brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
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
  font-size: .85rem;
  font-weight: 300;
  color: var(--mist);
  line-height: 1.75;
  max-width: 280px;
}

.foot-col h6 {
  font-family: var(--f-cond);
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--cream);
  margin-bottom: 20px;
}

.foot-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.foot-col a {
  font-size: .85rem;
  font-weight: 300;
  color: var(--mist);
  transition: color .2s;
}

.foot-col a:hover {
  color: var(--gold2);
}

.foot-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.foot-bottom p {
  font-size: .76rem;
  font-weight: 300;
  color: var(--mist);
}

.foot-bottom span {
  color: var(--gold);
}

@media (max-width: 1100px) {
  .foot-top { grid-template-columns: 1fr 1fr; gap: 40px; }
}

@media (max-width: 680px) {
  .foot-top { grid-template-columns: 1fr; }
  .foot-bottom { flex-direction: column; gap: 8px; text-align: center; }
}
</style>

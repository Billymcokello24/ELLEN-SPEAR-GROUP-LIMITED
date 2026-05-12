<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="profile-page bg-ink-full" style="padding-top: 0;">
    <PageHero 
      eyebrow="Executive Leadership"
      title="William <em>Ololo</em>"
      subtitle="Director – Human Security Operations"
      image="/cabing.png"
    />
    
    <div class="container pt-5 pb-5">
      <div class="profile-header mb-5">
        <RouterLink to="/business-profile" class="back-link">
          &larr; Back to Business Profile
        </RouterLink>
      </div>
      
      <div class="profile-grid">
        <div class="profile-image">
          <img src="/images/ololo.jpeg" alt="William Ololo">
        </div>
        
        <div class="profile-content">
          <div class="s-eyebrow">Professional Bio</div>
          
          <div class="profile-bio mt-4">
            <p>William Ololo is an accomplished security professional with over 30 years of experience in the security industry. He holds a Bachelor of Arts in Government and Public Administration from Moi University and has built a distinguished career in corporate security management, operations leadership, and strategic administration.</p>
            
            <p>He currently serves as a Director at Cotec Security Limited, formerly Bedrock Holdings Ltd, where he provides leadership in human security operations, organizational governance, and client security solutions. His extensive industry knowledge has enabled him to successfully oversee security deployments, operational planning, and stakeholder engagement across diverse sectors.</p>
            
            <p>Beyond the security sector, William also serves as a Director at Siaya County Club, demonstrating his commitment to community leadership and institutional development. His strong leadership, integrity, and wealth of experience continue to play a vital role in strengthening the company’s mission of delivering reliable and professional security services.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  min-height: 100vh;
}

.back-link {
  font-family: var(--f-cond);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  color: var(--gold);
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.3s;
}

.back-link:hover {
  opacity: 0.7;
}

.profile-grid {
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 60px;
  align-items: flex-start;
}

.profile-image {
  border-radius: var(--r);
  overflow: hidden;
  border: 1px solid var(--line);
}

.profile-image img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  display: block;
}

.profile-title {
  display: none; /* removed because it is now in the hero */
}

.profile-bio p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--fog);
  margin-bottom: 20px;
}

@media (max-width: 992px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }
  
  .profile-image img {
    aspect-ratio: 16/9;
  }
}
</style>

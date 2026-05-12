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
      title="Philip Eddy <em>Anayo</em>"
      subtitle="Director – Strategy, Corporate Affairs & Business Development"
      image="/probox.png"
    />
    
    <div class="container pt-5 pb-5">
      <div class="profile-header mb-5">
        <RouterLink to="/business-profile" class="back-link">
          &larr; Back to Business Profile
        </RouterLink>
      </div>
      
      <div class="profile-grid">
        <div class="profile-image">
          <img src="/images/william.png" alt="Philip Eddy Anayo">
        </div>
        
        <div class="profile-content">
          <div class="s-eyebrow">Professional Bio</div>
          
          <div class="profile-bio mt-4">
            <p>Philip Eddy Anayo is a seasoned entrepreneur and business leader with extensive experience in corporate leadership, public service, and organizational development. He currently serves as Director and CEO at Homeland Itoya Events, where he oversees strategic growth, business operations, and stakeholder relations.</p>
            
            <p>He also serves as a Non-Executive Member at the Kenya Rugby Union, contributing to governance and strategic development within the sports sector. Philip has previously served as the Member of County Assembly (MCA) for Milimani Ward in Kisumu County Assembly, where he played a key role in leadership, policy oversight, and community representation.</p>
            
            <p>With a diverse background spanning entrepreneurship, governance, and leadership, Philip brings strong expertise in business development, strategic partnerships, and corporate affairs. His dynamic leadership approach and commitment to excellence continue to support the company’s growth and long-term vision.</p>
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

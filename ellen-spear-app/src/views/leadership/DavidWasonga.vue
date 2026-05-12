<script setup>
import { onMounted } from 'vue'
import PageHero from '../../components/PageHero.vue'
import { useSEO } from '../../composables/useSEO'

useSEO({
  title: 'Eng. David Wasonga - Director of ICT',
  description: 'Eng. David Wasonga is the Director of ICT & Integrated Security Systems at Ellen Spear Group, leading technical innovation and digital defense.',
  url: 'https://ellenspeargroup.com/leadership/david-wasonga'
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="profile-page bg-ink-full" style="padding-top: 0;">
    <PageHero 
      eyebrow="Executive Leadership"
      title="Eng. David <em>Wasonga</em>"
      subtitle="Director – ICT & Integrated Security Systems"
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
          <img src="/images/David.jpeg" alt="Eng. David Wasonga">
        </div>
        
        <div class="profile-content">
          <div class="s-eyebrow">Professional Bio</div>
          
          <div class="profile-bio mt-4">
            <p>Eng. David Wasonga is an accomplished Electrical and ICT Engineer with extensive experience in technology integration, digital transformation, and ICT infrastructure management. He holds a Master of Science (MSc.) in Electrical and Communication Engineering from Masinde Muliro University of Science and Technology.</p>
            
            <p>He currently serves as the Regional ICT Manager at the ICT Authority, a position he has held since 2019, where he leads regional ICT initiatives, digital infrastructure deployment, systems integration, and technology governance. His expertise spans ICT infrastructure, integrated security systems, networking, surveillance technologies, and enterprise systems management.</p>
            
            <p>Eng. Wasonga is also a Director at Prodigy Constructions Limited, where he contributes strategic leadership in technology-driven infrastructure solutions. With a strong background in engineering and ICT leadership, he brings innovation, technical excellence, and strategic vision to the company’s integrated security and technology solutions.</p>
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

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/business-profile',
      name: 'business-profile',
      component: () => import('../views/BusinessProfileView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/services/it-security',
      name: 'it-security',
      component: () => import('../views/services/ITSecurity.vue')
    },
    {
      path: '/services/physical-security',
      name: 'physical-security',
      component: () => import('../views/services/PhysicalSecurity.vue')
    },
    {
      path: '/services/alarm-response',
      name: 'alarm-response',
      component: () => import('../views/services/AlarmResponse.vue')
    },
    {
      path: '/services/security-consultancy',
      name: 'security-consultancy',
      component: () => import('../views/services/SecurityConsultancy.vue')
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('../views/CareersView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    // LEADERSHIP
    {
      path: '/leadership/william-ololo',
      name: 'leadership-william',
      component: () => import('../views/leadership/WilliamOlolo.vue')
    },
    {
      path: '/leadership/david-wasonga',
      name: 'leadership-david',
      component: () => import('../views/leadership/DavidWasonga.vue')
    },
    {
      path: '/leadership/philip-anayo',
      name: 'leadership-philip',
      component: () => import('../views/leadership/PhilipAnayo.vue')
    },
    // SECTORS
    {
      path: '/sectors/corporate-commercial',
      name: 'sector-corporate',
      component: () => import('../views/sectors/CorporateCommercial.vue')
    },
    {
      path: '/sectors/government-public',
      name: 'sector-government',
      component: () => import('../views/sectors/GovernmentPublic.vue')
    },
    {
      path: '/sectors/residential-estates',
      name: 'sector-residential',
      component: () => import('../views/sectors/ResidentialEstates.vue')
    },
    {
      path: '/sectors/industrial-manufacturing',
      name: 'sector-industrial',
      component: () => import('../views/sectors/IndustrialManufacturing.vue')
    },
    {
      path: '/sectors/education-healthcare',
      name: 'sector-education',
      component: () => import('../views/sectors/EducationHealthcare.vue')
    },
    {
      path: '/sectors/financial-banking',
      name: 'sector-financial',
      component: () => import('../views/sectors/FinancialBanking.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

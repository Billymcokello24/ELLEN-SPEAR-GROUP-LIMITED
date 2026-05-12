import { onMounted } from 'vue'

export function useSEO({ title, description, image, url }) {
  onMounted(() => {
    // Update Title
    if (title) {
      document.title = `${title} | Ellen Spear Group`
    }

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description)
    }

    // Update Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle && title) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc && description) ogDesc.setAttribute('content', description)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl && url) ogUrl.setAttribute('content', url)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage && image) ogImage.setAttribute('content', image)
  })
}

/** Public links only — no email, phone or private data. */
export const GITHUB_URL = 'https://github.com/rafaelgraffo'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/rafaelgraffo'

/** Display-only labels derived from the public URLs above (single source). */
export const GITHUB_DISPLAY = GITHUB_URL.replace(/^https?:\/\//, '').replace(/^www\./, '')
export const LINKEDIN_DISPLAY = LINKEDIN_URL.replace(/^https?:\/\//, '').replace(/^www\./, '')

/** Uses Vite's BASE_URL so the image works both at "/" and under a sub-path. */
export const PROFILE_IMAGE = `${import.meta.env.BASE_URL}rafael-cardoso.jpg`

<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="nav-logo">
            <img src="./public/logo.jpg" alt="DJ RONN" class="nav-logo-image">
          </div>
          <div class="nav-links">
            <a href="#about">ABOUT</a>
            <a href="#gallery">GALLERY</a>
            <a href="#services">SERVICES</a>
            <a href="#booking" class="nav-cta">BOOK NOW</a>
          </div>
          <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-menu" @click="closeMobileMenu">
        <div class="mobile-menu-overlay" @click="closeMobileMenu"></div>
        <div class="mobile-menu-content" @click.stop>
          <div class="mobile-menu-header">
            <div class="mobile-menu-logo">RONN</div>
            <button class="mobile-menu-close" @click="closeMobileMenu">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <nav class="mobile-menu-nav">
            <a href="#about" @click="closeMobileMenu" class="mobile-menu-link">
              <span class="link-number">01</span>
              <span class="link-text">ABOUT</span>
            </a>
            <a href="#gallery" @click="closeMobileMenu" class="mobile-menu-link">
              <span class="link-number">02</span>
              <span class="link-text">GALLERY</span>
            </a>
            <a href="#services" @click="closeMobileMenu" class="mobile-menu-link">
              <span class="link-number">03</span>
              <span class="link-text">SERVICES</span>
            </a>
            <a href="#booking" @click="closeMobileMenu" class="mobile-menu-link">
              <span class="link-number">04</span>
              <span class="link-text">BOOK NOW</span>
            </a>
          </nav>
          <div class="mobile-menu-footer">
            <div class="mobile-menu-contact">
              <span class="contact-label">EMAIL</span>
              <span class="contact-value">Ron.architactofsound@gmail.com</span>
            </div>
            <div class="mobile-menu-social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="SoundCloud">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L3 14M5 10L5 16M7 8L7 18M9 6L9 20M11 7L11 19M13 9L13 17M15 8L15 18M17 7L17 19M19 9L19 17M21 11L21 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Spotify">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 9C9 8 15 8 17 9M7 12C9 11 15 11 17 12M9 15C10 14.5 14 14.5 15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Cover Section -->
    <section class="cover-section">
      <div class="container">
        <div class="cover-content">
          <div class="cover-hero">
            <img src="/main-img-min-1.jpg" alt="DJ RONN Cover" class="cover-image">
            <div class="cover-overlay">
              <div class="architect-badge">
                <span class="architect-text">Architect of Sound</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
            <div class="container">
              <div class="about-grid">
                <div class="about-image">
                  <div class="image-wrapper">
                    <img src="/ronn.jpg" alt="DJ RONN">
                    <div class="image-overlay"></div>
                  </div>
                </div>
                <div class="about-content">
                  <span class="label">ABOUT</span>
                  <h2>DESIGNING SOUND IS DESIGNING EMOTION</h2>
                  <p>With a background in architecture and a passion for sonic design, Ronn creates soundscapes that fuse structure, emotion, and energy. Each set is crafted like a blueprint — layered, balanced, and built to move both mind and body.</p>
                  <p>Ronn has performed in some of the world's most design-forward venues across Paris, Dubai, Beirut, and Cyprus, delivering performances that merge aesthetic precision with magnetic rhythm. His music celebrates retro-modern fusion, combining elements of 80s synthwave, deep electronic grooves, and architectural sound design that elevates every space.</p>
                  <div class="stats">
                    <div class="stat">
                      <span class="stat-number">200+</span>
                      <span class="stat-label">Events</span>
                    </div>
                    <div class="stat">
                      <span class="stat-number">5+</span>
                      <span class="stat-label">Years</span>
                    </div>
                    <div class="stat">
                      <span class="stat-number">25K+</span>
                      <span class="stat-label">Happy Guests</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    <!-- Gallery Section -->
    <section class="gallery" id="gallery">
      <div class="container">
        <span class="label center">GALLERY</span>
        <h2 class="section-title">IN ACTION</h2>
        <div class="gallery-grid">
          <div class="gallery-item large gallery-video">
            <iframe
              ref="galleryVideo"
              src="https://www.youtube.com/embed/utf8Y_Jipy0"
              title="RONN Performance"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="gallery-youtube"
            ></iframe>
          </div>
          <div class="gallery-item">
            <img src="/gallery-2.jpg" alt="Sound Equipment">
            <div class="gallery-overlay">
              <span class="gallery-label">STUDIO SETUP</span>
            </div>
          </div>
          <div class="gallery-item gallery-video">
            <iframe
              src="https://www.youtube.com/embed/YYpswmKpD3g"
              title="RONN Performance"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="gallery-youtube"
            ></iframe>
          </div>
          <!-- <div class="gallery-item">
            <img src="/IMG-20251106-WA0051.jpg" alt="DJ Setup">
            <div class="gallery-overlay">
              <span class="gallery-label">CLUB NIGHT</span>
            </div>
          </div> -->
          <div class="gallery-item">
            <img src="/IMG-20251106-WA0052.jpg" alt="Studio">
            <div class="gallery-overlay">
              <span class="gallery-label">PRODUCTION</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/WhatsApp Image 2025-11-06 at 22.16.47_0c139c20.jpg" alt="Event Setup">
            <div class="gallery-overlay">
              <span class="gallery-label">EVENT SETUP</span>
            </div>
          </div>
          <!-- <div class="gallery-item">
            <img src="/WhatsApp Image 2025-11-06 at 22.16.47_1d2c8334.jpg" alt="Performance">
            <div class="gallery-overlay">
              <span class="gallery-label">PERFORMANCE</span>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="cover-section">
      <div class="container">
        <div class="cover-content">
          <div class="cover-bottom">
            <div class="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/icSEvMGsyPU?si=RV5Gg0IgrnQDus4v"
                title="DJ RONN Performance"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="cover-video"
              ></iframe>
            </div>
            <!-- <div class="cover-bottom-image">
              <img src="/dj.jpg" alt="DJ Performance" class="bottom-image">
            </div> -->
            <div class="cover-bottom-text">
              <h2>Minimalism a dialogue <br> between space and human emotion <br> by Ronn Architect of Sound</h2>
              <p>Ronn talks about exploring the philosophy of minimalism as a profound form of design and self-expression, discussing how creating spaces with intentionality can liberate the human spirit and foster mindfulness through simplicity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <!-- <span class="label center">EXPERIENCE</span> -->
        <h2 class="section-title">EXPERIENCE</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-number">01</div>
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2"/>
                <path d="M19.07 4.93C17.38 3.24 15.09 2.25 12.62 2.05L11.99 2V5L12.62 4.95C14.45 5.1 16.13 5.81 17.48 7.17C18.84 8.52 19.55 10.2 19.7 12.03L19.75 12.7H22.75L22.7 12.03C22.5 9.56 21.51 7.27 19.82 5.58L19.07 4.93Z" fill="currentColor"/>
                <path d="M19.07 19.07C17.38 20.76 15.09 21.75 12.62 21.95L11.99 22V19L12.62 19.05C14.45 18.9 16.13 18.19 17.48 16.83C18.84 15.48 19.55 13.8 19.7 11.97L19.75 11.3H22.75L22.7 11.97C22.5 14.44 21.51 16.73 19.82 18.42L19.07 19.07Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Club Events</h3>
            <p>High-energy sets that keep the dance floor alive all night long with cutting-edge sound design</p>
          </div>
          <div class="service-card">
            <div class="service-number">02</div>
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Private Events</h3>
            <p>Weddings, corporate events, and exclusive parties tailored to your unique vision and atmosphere</p>
          </div>
          <div class="service-card">
            <div class="service-number">03</div>
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18V5L21 12L9 19V18Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M3 18V5L15 12L3 19V18Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Music Production</h3>
            <p>Custom tracks, remixes, and sound design crafted with precision and artistic excellence</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Thumbnails Section -->
    <section class="thumbnails-section">
      <div class="container">
        <div class="thumbnails-grid">
          <div class="thumbnail-item">
            <img src="/thumnail-1.jpg" alt="DJ Performance">
            <div class="gallery-overlay">
              <span class="gallery-label">PERFORMANCE</span>
            </div>
          </div>
          <div class="thumbnail-item">
            <img src="/thumnail-2.jpg" alt="DJ RONN">
            <div class="gallery-overlay">
              <span class="gallery-label">RONN</span>
            </div>
          </div>
          <div class="thumbnail-item">
            <img src="/thumnail-3.jpg" alt="DJ Setup">
            <div class="gallery-overlay">
              <span class="gallery-label">LIVE SET</span>
            </div>
          </div>
          <div class="thumbnail-item">
            <img src="/thumnail-4.jpg" alt="Club Night">
            <div class="gallery-overlay">
              <span class="gallery-label">CLUB NIGHT</span>
            </div>
          </div>
          <div class="thumbnail-item">
            <img src="/thumnail-5.jpg" alt="Production">
            <div class="gallery-overlay">
              <span class="gallery-label">PRODUCTION</span>
            </div>
          </div>
          <div class="thumbnail-item">
            <img src="/thumnail-6.jpg" alt="Event Setup">
            <div class="gallery-overlay">
              <span class="gallery-label">EVENT SETUP</span>
            </div>
          </div>
          <div class="thumbnail-item">
            <img src="/thumnail-7.jpg" alt="Performance">
            <div class="gallery-overlay">
              <span class="gallery-label">PERFORMANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Form Section -->
    <section class="booking" id="booking">
      <div class="container">
        <div class="booking-content">
          <div class="booking-info">
            <span class="label">CONTACT</span>
            <h2>BOOK DJ RONN</h2>
            <p>Ready to elevate your event? Let's create an unforgettable experience together. Fill out the form and I'll get back to you within 24 hours.</p>
            <div class="contact-details">
              <div class="detail-item">
                <div class="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.23 13.47 11.61 13.59 12 13.59C12.39 13.59 12.77 13.47 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span class="detail-label">EMAIL</span>
                  <span class="detail-value">Ron.architactofsound@gmail.com</span>
                </div>
              </div>
              <div class="detail-item">
                <div class="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span class="detail-label">PHONE</span>
                  <span class="detail-value">+1 (555) 123-4567</span>
                </div>
              </div>
              <div class="detail-item">
                <div class="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 22C12 22 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div>
                  <span class="detail-label">LOCATION</span>
                  <span class="detail-value">Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>
          <form class="booking-form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <input
                  v-model="formData.firstName"
                  type="text"
                  placeholder="First Name"
                  required
                >
              </div>
              <div class="form-group">
                <input
                  v-model="formData.lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                >
              </div>
            </div>
            <div class="form-group">
              <input
                v-model="formData.email"
                type="email"
                placeholder="Email Address"
                required
              >
            </div>
            <div class="form-group">
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="Phone Number"
                required
              >
            </div>
            <div class="form-row">
              <div class="form-group">
                <input
                  v-model="formData.eventDate"
                  type="date"
                  placeholder="Event Date"
                  required
                >
              </div>
              <div class="form-group">
                <select v-model="formData.eventType" required>
                  <option value="" disabled selected>Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="club">Club Event</option>
                  <option value="festival">Festival</option>
                  <option value="private">Private Party</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <input
                v-model="formData.location"
                type="text"
                placeholder="Event Location"
                required
              >
            </div>
            <div class="form-group">
              <textarea
                v-model="formData.message"
                placeholder="Tell me about your event..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'SENDING...' : 'SEND BOOKING REQUEST' }}
            </button>
            <p v-if="submitMessage" class="submit-message" :class="{ error: submitError }">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>
        <!-- Hero Section -->
    <!-- <section class="hero">
      <div class="hero-background">
        <div class="grid-overlay"></div>
        <div class="light-beam light-beam-1"></div>
        <div class="light-beam light-beam-2"></div>
      </div>
      <div class="hero-content">
        <div class="logo-container">
          <div class="logo-image-wrapper">
            <img src="/logo.jpg" alt="DJ RONN Logo" class="hero-logo-image">
          </div>
          <p class="tagline">ARCHITECT OF SOUND</p>
          <p class="hero-description">Where precision meets passion, creating unforgettable sonic experiences</p>
          <div class="hero-buttons">
            <a href="#booking" class="btn btn-primary">BOOK NOW</a>
            <a href="#about" class="btn btn-secondary">LEARN MORE</a>
          </div>
        </div>
        <div class="scroll-indicator">
          <span>SCROLL</span>
          <div class="line"></div>
        </div>
      </div>
    </section> -->


    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/logo.jpg" alt="DJ RONN" class="footer-logo-image">
            <p>Architect of Sound</p>
          </div>
          <div class="footer-social">
            <a href="https://www.instagram.com/ronn.architectofsound?igsh=aGN1OWlrbjRlcWQ4" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://on.soundcloud.com/vzayWw24sUARaROvxO" class="social-link" aria-label="SoundCloud">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L3 14M5 10L5 16M7 8L7 18M9 6L9 20M11 7L11 19M13 9L13 17M15 8L15 18M17 7L17 19M19 9L19 17M21 11L21 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
            <!-- <a href="#" class="social-link" aria-label="Spotify">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M7 9C9 8 15 8 17 9M7 12C9 11 15 11 17 12M9 15C10 14.5 14 14.5 15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a> -->
            <a href="https://youtube.com/shorts/YYpswmKpD3g?si=URqmaxMroT0WWoRM" class="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M10 9L15 12L10 15V9Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 DJ RONN. All rights reserved. Designed with precision.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  location: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitError = ref(false)
const mobileMenuOpen = ref(false)
const galleryVideo = ref(null)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  submitError.value = false

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    submitMessage.value = 'Booking request sent successfully! I\'ll get back to you within 24 hours.'
    submitError.value = false

    // Reset form
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      location: '',
      message: ''
    }
  } catch (error) {
    submitMessage.value = 'Something went wrong. Please try again.'
    submitError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  background: #000;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  overflow-x: hidden;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.nav-logo {
  display: flex;
  align-items: center;
}

.nav-logo-image {
  height: 50px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;
}

.nav-logo-image:hover {
  opacity: 0.8;
}

.nav-links {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.nav-links a {
  color: #999;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #fff;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-cta {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  color: #000 !important;
  border-radius: 4px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.nav-cta::after {
  display: none;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  position: relative;
}

.mobile-menu-btn span {
  width: 25px;
  height: 2px;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
}

.mobile-menu-content {
  position: relative;
  width: min(400px, 85vw);
  height: 100%;
  background: #0a0a0a;
  border-left: 1px solid rgba(0, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: -10px 0 50px rgba(0, 255, 255, 0.1);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-menu-logo {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 0.5rem;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-menu-close {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-close:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: #00ffff;
  transform: rotate(90deg);
}

.mobile-menu-close svg {
  width: 24px;
  height: 24px;
}

.mobile-menu-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-menu-link {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.mobile-menu-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #00ffff, #ff00ff);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.mobile-menu-link:hover {
  background: rgba(0, 255, 255, 0.05);
  transform: translateX(10px);
}

.mobile-menu-link:hover::before {
  transform: scaleY(1);
}

.link-number {
  font-size: 0.75rem;
  color: #666;
  font-weight: 700;
  letter-spacing: 0.1rem;
  min-width: 30px;
}

.link-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  transition: all 0.3s ease;
}

.mobile-menu-link:hover .link-text {
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-menu-footer {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-menu-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.contact-label {
  font-size: 0.7rem;
  color: #666;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-weight: 600;
}

.contact-value {
  font-size: 1rem;
  color: #fff;
}

.mobile-menu-social {
  display: flex;
  gap: 1rem;
}

.mobile-menu-social a {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #999;
  transition: all 0.3s ease;
}

.mobile-menu-social a:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: #00ffff;
  color: #00ffff;
  transform: translateY(-3px);
}

.mobile-menu-social svg {
  width: 20px;
  height: 20px;
}

/* Mobile Menu Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active .mobile-menu-content,
.mobile-menu-leave-active .mobile-menu-content {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu-content,
.mobile-menu-leave-to .mobile-menu-content {
  transform: translateX(100%);
}

.mobile-menu-enter-active .mobile-menu-link {
  animation: slideInLinks 0.5s ease forwards;
}

.mobile-menu-link:nth-child(1) { animation-delay: 0.1s; }
.mobile-menu-link:nth-child(2) { animation-delay: 0.15s; }
.mobile-menu-link:nth-child(3) { animation-delay: 0.2s; }
.mobile-menu-link:nth-child(4) { animation-delay: 0.25s; }

@keyframes slideInLinks {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Labels */
.label {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.2rem;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 600;
}

.label.center {
  display: block;
  text-align: center;
}

/* Cover Section */
.cover-section {
  padding: clamp(4rem, 8vw, 6rem) 0 clamp(2rem, 4vw, 4rem);
  background: #000;
  position: relative;
}

.cover-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.cover-hero {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 10px 40px rgba(0, 255, 255, 0.1);
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cover-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  object-fit: cover;
}

.cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
  display: flex;
  align-items: flex-end;
  padding: 4rem;
}

.cover-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
}

.architect-badge {
  position: relative;
  padding: 0;
  background: transparent;
  border: none;
  display: inline-block;
}

.architect-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: clamp(2rem, 4vw, 4rem);
  color: #fff;
  letter-spacing: 0.05em;
  text-transform: capitalize;
}

.cover-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.cover-bottom .video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56%; /* 4:3 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.3),
              0 0 100px rgba(255, 0, 255, 0.2),
              inset 0 0 0 1px rgba(0, 255, 255, 0.1);
}

/* .cover-bottom .video-wrapper iframe {
} */

.cover-bottom-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
}

.bottom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-bottom-text {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
}

.cover-bottom-text h2 {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0;
  text-align: left;
}

.cover-bottom-text p {
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  color: #999;
  line-height: 1.7;
  text-align: left;
  margin: 0;
  max-width: 90%;
}

/* Hero Section */
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: #000;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

.light-beam {
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00ffff, transparent);
  opacity: 0.3;
  animation: beamMove 8s ease-in-out infinite;
}

.light-beam-1 {
  left: 30%;
  animation-delay: 0s;
}

.light-beam-2 {
  right: 30%;
  background: linear-gradient(180deg, transparent, #ff00ff, transparent);
  animation-delay: 2s;
}

@keyframes beamMove {
  0%, 100% { transform: translateX(0) scaleY(0.5); opacity: 0.2; }
  50% { transform: translateX(50px) scaleY(1); opacity: 0.4; }
}

.hero::before {
  content: '';
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
  top: -400px;
  right: -400px;
  animation: pulse 8s ease-in-out infinite;
}

.hero::after {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, transparent 70%);
  bottom: -300px;
  left: -300px;
  animation: pulse 10s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.6; }
}

.hero-content {
  text-align: center;
  z-index: 2;
  max-width: 1000px;
  padding: 0 2rem;
}

.logo-container {
  margin-bottom: 4rem;
}

.logo-image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.hero-logo-image {
  width: 200px;
  height: auto;
  object-fit: contain;
}

.logo {
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 900;
  letter-spacing: clamp(0.5rem, 2vw, 1.5rem);
  margin-bottom: 1.5rem;
  color: #fff;
  animation: logoGlow 4s ease-in-out infinite;
  position: relative;
}

.logo::after {
  content: 'RONN';
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  z-index: -1;
  filter: blur(30px);
  opacity: 0.5;
}

@keyframes logoGlow {
  0%, 100% { filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.4)); }
  50% { filter: drop-shadow(0 0 60px rgba(255, 0, 255, 0.6)); }
}

.tagline {
  font-size: clamp(1rem, 2.5vw, 1.75rem);
  letter-spacing: clamp(0.3rem, 1vw, 0.7rem);
  color: #fff;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  color: #fff;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto 3rem;
  font-weight: 500;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border: 2px solid transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  color: #000;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 255, 255, 0.4);
}

.btn-secondary {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.btn-secondary:hover {
  border-color: #00ffff;
  background: rgba(0, 255, 255, 0.1);
  transform: translateY(-3px);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #555;
  font-size: 0.7rem;
  letter-spacing: 0.2rem;
  margin-top: 4rem;
}

.line {
  width: 1px;
  height: 80px;
  background: linear-gradient(to bottom, #555, transparent);
  animation: scrollLine 2.5s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(15px); }
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* About Section */
.about {
  padding: clamp(3rem, 8vw, 6rem) 0;
  background: #0a0a0a;
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.02));
  pointer-events: none;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  opacity: 0.3;
  filter: blur(20px);
  z-index: -1;
}

.image-wrapper img {
  width: 100%;
  height: 700px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  pointer-events: none;
}

.about-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.about-content p {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.9;
  color: #999;
  margin-bottom: 1.5rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.stat-number {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-weight: 600;
}

/* Gallery Section */
.gallery {
  padding: clamp(3rem, 8vw, 6rem) 0;
  background: #000;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: clamp(0.2rem, 1vw, 0.8rem);
  line-height: 1.2;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 1;
  background: #0a0a0a;
}

.gallery-item.large {
  grid-row: span 2;
  aspect-ratio: auto;
  min-height: 400px;
}

.gallery-video {
  cursor: default;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-youtube {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  pointer-events: auto;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover img {
  transform: scale(1.15);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.4), rgba(255, 0, 255, 0.4));
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-label {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fff;
  text-transform: uppercase;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-label {
  transform: translateY(0);
}

/* Services Section */
.services {
  padding: clamp(3rem, 8vw, 6rem) 0;
  background: #0a0a0a;
  position: relative;
}

.services::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  padding: 3rem 2rem;
  background: #111;
  border: 1px solid #222;
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #00ffff, #ff00ff);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.service-card:hover {
  border-color: transparent;
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.2);
  background: #1a1a1a;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-number {
  font-size: 0.75rem;
  color: #666;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

.service-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 2rem;
  color: #666;
  transition: all 0.4s ease;
}

.service-card:hover .service-icon {
  color: #00ffff;
  transform: scale(1.1);
}

.service-icon svg {
  width: 100%;
  height: 100%;
}

.service-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.service-card p {
  color: #999;
  line-height: 1.7;
  font-size: 0.95rem;
}

/* Booking Section */
.booking {
  padding: clamp(3rem, 8vw, 6rem) 0;
  background: #000;
  position: relative;
}

.booking::before {
  content: '';
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.booking-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  position: relative;
}

.booking-info h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

.booking-info > p {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: #999;
  line-height: 1.9;
  margin-bottom: 4rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.detail-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 8px;
  flex-shrink: 0;
  color: #00ffff;
}

.detail-icon svg {
  width: 24px;
  height: 24px;
}

.detail-item > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-label {
  font-size: 0.75rem;
  color: #666;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-weight: 600;
}

.detail-value {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 500;
}

/* Form Styles */
.booking-form {
  background: #0a0a0a;
  padding: 3.5rem;
  border: 1px solid #222;
  border-radius: 12px;
  position: relative;
}

.booking-form::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1));
  border-radius: 12px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.booking-form:hover::before {
  opacity: 1;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1.2rem 1.5rem;
  background: #111;
  border: 1px solid #222;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00ffff;
  background: #1a1a1a;
  box-shadow: 0 0 0 4px rgba(0, 255, 255, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
  line-height: 1.6;
}

.form-group select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23999' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.5rem center;
  padding-right: 3rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #666;
}

.submit-btn {
  width: 100%;
  padding: 1.4rem 2rem;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 255, 255, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1.2rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: 8px;
  text-align: center;
  color: #0f0;
  font-size: 0.95rem;
}

.submit-message.error {
  background: rgba(255, 0, 0, 0.1);
  border-color: rgba(255, 0, 0, 0.3);
  color: #f00;
}

/* Thumbnails Section */
.thumbnails-section {
  padding: clamp(3rem, 8vw, 6rem) 0;
  background: #000;
}

.thumbnails-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.thumbnail-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 1;
  background: #0a0a0a;
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.thumbnail-item:hover img {
  transform: scale(1.15);
}

.thumbnail-item:hover .gallery-overlay {
  opacity: 1;
}

.thumbnail-item .gallery-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  color: #fff;
  text-transform: uppercase;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.thumbnail-item:hover .gallery-label {
  transform: translateY(0);
}

/* Footer */
.footer {
  padding: 5rem 0 2.5rem;
  background: #0a0a0a;
  border-top: 1px solid #222;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

.footer-logo-image {
  width: 120px;
  height: auto;
  object-fit: contain;
}

.footer-logo p {
  color: #666;
  font-size: 0.9rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  border: 1px solid #222;
  border-radius: 8px;
  color: #999;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link svg {
  width: 24px;
  height: 24px;
}

.social-link:hover {
  color: #00ffff;
  border-color: #00ffff;
  background: rgba(0, 255, 255, 0.05);
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2.5rem;
  border-top: 1px solid #222;
}

.footer-bottom p {
  color: #666;
  font-size: 0.85rem;
  letter-spacing: 0.05rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .nav-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .booking-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .cover-section {
    padding: 3rem 0 2rem;
  }

  .cover-content {
    gap: 1.5rem;
  }

  .cover-hero {
    aspect-ratio: 16/10;
  }

  .cover-overlay {
    padding: 2rem 1.5rem;
  }

  .architect-badge {
    padding: 0;
  }

  .architect-text {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }

  .cover-title {
    font-size: 2.5rem;
  }

  .cover-bottom {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: stretch;
  }

  .cover-bottom .video-wrapper {
    padding-bottom: 100%; /* Square aspect ratio on mobile */
  }

  .cover-bottom-image {
    aspect-ratio: 1/1;
  }

  .cover-bottom-text {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .cover-bottom-text h2 {
    font-size: 1rem;
    line-height: 1.3;
    text-align: center;
  }

  .cover-bottom-text p {
    font-size: 0.85rem;
    line-height: 1.5;
    max-width: 100%;
  }

  .hero {
    padding-top: 60px;
    align-items: flex-start;
    padding-top: 120px;
  }

  .hero-content {
    margin-top: 0;
  }

  .hero-logo-image {
    width: 150px;
    height: auto;
  }

  .logo {
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }

  .tagline {
    font-size: 1rem;
    letter-spacing: 0.3rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
  }

  .section-title {
    font-size: 2rem;
    letter-spacing: 0.3rem;
    margin-bottom: 2rem;
  }

  .about-content h2 {
    font-size: 1.8rem;
  }

  .image-wrapper img {
    height: 500px;
  }

  .stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .gallery-item.large {
    grid-row: span 1;
    aspect-ratio: 1;
  }

  .gallery-item.large.gallery-video {
    aspect-ratio: 9/16;
    max-height: 600px;
    height: auto;
  }

  .gallery-youtube {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 400px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 2.5rem 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .booking-form {
    padding: 2rem;
  }

  .booking-info h2 {
    font-size: 2rem;
  }

  .thumbnails-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .thumbnail-item .gallery-label {
    font-size: 0.65rem;
    letter-spacing: 0.1rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-logo {
    align-items: center;
  }

  .footer-logo-image {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .stats {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .detail-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>

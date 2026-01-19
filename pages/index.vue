<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="nav-logo">
            <img src="/logo.jpg" alt="DJ RONN" class="nav-logo-image" />
          </div>
          <div class="nav-links">
            <NuxtLink to="/about">ABOUT</NuxtLink>
            <NuxtLink to="/music">MUSIC</NuxtLink>
            <NuxtLink to="/services">SERVICES</NuxtLink>
            <NuxtLink to="/contact" class="nav-cta">BOOK NOW</NuxtLink>
          </div>
          <button
            class="mobile-menu-btn"
            @click="toggleMobileMenu"
            :class="{ active: mobileMenuOpen }"
            aria-label="Toggle mobile menu"
            aria-expanded="false"
          >
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
            <button
              class="mobile-menu-close"
              @click="closeMobileMenu"
              aria-label="Close mobile menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <nav class="mobile-menu-nav">
            <NuxtLink to="/about" @click="closeMobileMenu" class="mobile-menu-link">
              <span class="link-number">01</span>
              <span class="link-text">ABOUT</span>
            </NuxtLink>
            <NuxtLink to="/music" @click="closeMobileMenu" class="mobile-menu-link">
              <span class="link-number">02</span>
              <span class="link-text">MUSIC</span>
            </NuxtLink>
            <NuxtLink to="/services" @click="closeMobileMenu" class="mobile-menu-link">
              <span class="link-number">03</span>
              <span class="link-text">SERVICES</span>
            </NuxtLink>
            <NuxtLink to="/contact" @click="closeMobileMenu" class="mobile-menu-link">
              <span class="link-number">04</span>
              <span class="link-text">BOOK NOW</span>
            </NuxtLink>
          </nav>
          <div class="mobile-menu-footer">
            <div class="mobile-menu-contact">
              <span class="contact-label">EMAIL</span>
              <a
                href="mailto:Ronn@ronnarchitectofsound.com"
                class="contact-value"
                >Ronn@ronnarchitectofsound.com</a
              >
            </div>
            <div class="mobile-menu-social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                  <path d="m16 11.37-.5.42m.5-.42L16 12l.5-.63M16 12L8 12m8-6v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <main>
      <!-- Hero Section -->
      <section class="cover-section">
        <div class="container">
          <div class="cover-content">
            <div class="cover-hero">
              <img
                src="/main-img-min.jpg"
                alt="DJ RONN - Professional DJ and Architect of Sound"
                class="cover-image"
              />
              <div class="cover-overlay">
                <div class="architect-badge">
                  <span class="architect-text">Architect of Sound</span>
                </div>
                <h1 class="cover-title">DJ RONN</h1>
                <p class="cover-subtitle">
                  Professional DJ services for clubs, private events, and special occasions
                </p>
                <div class="cover-buttons">
                  <NuxtLink to="/contact" class="btn-primary">Book Now</NuxtLink>
                  <NuxtLink to="/music" class="btn-secondary">Listen to Sets</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Preview -->
      <section class="services-preview">
        <div class="container">
          <span class="label center">WHAT I OFFER</span>
          <h2 class="section-title">DJ Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🎧</div>
              <h3>Club DJ</h3>
              <p>High-energy sets for nightclubs and party venues</p>
              <NuxtLink to="/club-dj" class="service-link">Learn More →</NuxtLink>
            </div>
            <div class="service-card">
              <div class="service-icon">💒</div>
              <h3>Private Events</h3>
              <p>Weddings, corporate events, and private parties</p>
              <NuxtLink to="/private-events" class="service-link">Learn More →</NuxtLink>
            </div>
            <div class="service-card">
              <div class="service-icon">🌍</div>
              <h3>Dubai Events</h3>
              <p>Premium DJ services across Dubai</p>
              <NuxtLink to="/dj-dubai" class="service-link">Learn More →</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Video Showcase Section -->
      <section class="video-showcase">
        <div class="container">
          <span class="label center">FEATURED</span>
          <h2 class="section-title">VIDEO SHOWCASE</h2>
          <div class="video-grid">
            <div class="video-box" @click="openVideoModal('J89z6C_ym64', 'Club Night Mix')">
              <div class="video-thumbnail">
                <img :src="`https://img.youtube.com/vi/J89z6C_ym64/maxresdefault.jpg`" alt="Club Night Mix" />
                <div class="play-button-shorts">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 0, 0, 0.9)" />
                    <path d="M24 18L42 30L24 42V18Z" fill="white" />
                  </svg>
                </div>
                <div class="shorts-badge">Shorts</div>
                <div class="video-info">
                  <h3>Club Night Mix</h3>
                  <p>Live Performance</p>
                </div>
              </div>
            </div>
            <div class="video-box" @click="openVideoModal('YOUR_VIDEO_ID_2', 'Wedding Reception')">
              <div class="video-thumbnail">
                <img :src="`https://img.youtube.com/vi/YOUR_VIDEO_ID_2/maxresdefault.jpg`" alt="Wedding Reception" />
                <div class="play-button-shorts">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 0, 0, 0.9)" />
                    <path d="M24 18L42 30L24 42V18Z" fill="white" />
                  </svg>
                </div>
                <div class="shorts-badge">Shorts</div>
                <div class="video-info">
                  <h3>Wedding Reception</h3>
                  <p>Special Event</p>
                </div>
              </div>
            </div>
            <div class="video-box" @click="openVideoModal('YOUR_VIDEO_ID_3', 'Studio Session')">
              <div class="video-thumbnail">
                <img :src="`https://img.youtube.com/vi/YOUR_VIDEO_ID_3/maxresdefault.jpg`" alt="Studio Session" />
                <div class="play-button-shorts">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 0, 0, 0.9)" />
                    <path d="M24 18L42 30L24 42V18Z" fill="white" />
                  </svg>
                </div>
                <div class="shorts-badge">Shorts</div>
                <div class="video-info">
                  <h3>Studio Session</h3>
                  <p>Behind The Scenes</p>
                </div>
              </div>
            </div>
            <div class="video-box" @click="openVideoModal('YOUR_VIDEO_ID_4', 'Corporate Event')">
              <div class="video-thumbnail">
                <img :src="`https://img.youtube.com/vi/YOUR_VIDEO_ID_4/maxresdefault.jpg`" alt="Corporate Event" />
                <div class="play-button-shorts">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 0, 0, 0.9)" />
                    <path d="M24 18L42 30L24 42V18Z" fill="white" />
                  </svg>
                </div>
                <div class="shorts-badge">Shorts</div>
                <div class="video-info">
                  <h3>Corporate Event</h3>
                  <p>Professional Setup</p>
                </div>
              </div>
            </div>
            <div class="video-box" @click="openVideoModal('YOUR_VIDEO_ID_5', 'DJ Tutorial')">
              <div class="video-thumbnail">
                <img :src="`https://img.youtube.com/vi/YOUR_VIDEO_ID_5/maxresdefault.jpg`" alt="DJ Tutorial" />
                <div class="play-button-shorts">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 0, 0, 0.9)" />
                    <path d="M24 18L42 30L24 42V18Z" fill="white" />
                  </svg>
                </div>
                <div class="shorts-badge">Shorts</div>
                <div class="video-info">
                  <h3>DJ Tutorial</h3>
                  <p>Educational Content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Book Your Event?</h2>
            <p>Get in touch to discuss your event needs and receive a custom quote</p>
            <div class="cta-buttons">
              <NuxtLink to="/contact" class="btn-primary">Book Now</NuxtLink>
              <a href="https://wa.me/9613746927" class="btn-secondary">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Video Modal Popup -->
    <div v-if="showVideoModal" class="video-modal" @click="closeVideoModal">
      <div class="video-modal-content" @click.stop>
        <button class="video-modal-close" @click="closeVideoModal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="video-modal-player">
          <iframe
            v-if="currentVideo.id"
            :src="`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`"
            :title="currentVideo.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/logo.jpg" alt="DJ RONN" class="footer-logo-image" />
            <p>Architect of Sound</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Services</h4>
              <ul>
                <li><NuxtLink to="/club-dj">Club DJ</NuxtLink></li>
                <li><NuxtLink to="/private-events">Private Events</NuxtLink></li>
                <li><NuxtLink to="/dj-dubai">DJ in Dubai</NuxtLink></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><NuxtLink to="/music">Music & Sets</NuxtLink></li>
                <li><NuxtLink to="/press-kit">Press Kit</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
              </ul>
            </div>
            <div class="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:Ronn@ronnarchitectofsound.com">Email</a></li>
                <li><a href="https://wa.me/9613746927">WhatsApp</a></li>
                <li><NuxtLink to="/contact">Book Now</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; 2025 DJ RONN. All rights reserved. Designed with TellGngr Marketing.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

// SEO Meta Tags
useSeoMeta({
  title: 'DJ RONN - Professional DJ Services | Architect of Sound',
  ogTitle: 'DJ RONN - Professional DJ Services | Architect of Sound',
  description: 'Professional DJ services for clubs, private events, weddings, and corporate events. Based in Dubai and Beirut. Book DJ RONN for your next event.',
  ogDescription: 'Professional DJ services for clubs, private events, weddings, and corporate events. Based in Dubai and Beirut. Book DJ RONN for your next event.',
  keywords: 'DJ Dubai, DJ Beirut, wedding DJ, club DJ, private event DJ, professional DJ services, corporate event DJ',
  ogImage: '/main-img-min.jpg',
  twitterCard: 'summary_large_image',
})

// Reactive state
const mobileMenuOpen = ref(false);
const showVideoModal = ref(false);
const currentVideo = ref({ id: '', title: '' });

// Function to detect mobile device
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768;
};

// Function to open video modal or redirect to app
const openVideoModal = (videoId, title) => {
  if (isMobileDevice()) {
    // On mobile, redirect to YouTube app or mobile site
    const youtubeAppUrl = `youtube://shorts/${videoId}`;
    const youtubeMobileUrl = `https://youtube.com/shorts/${videoId}`;

    // Try to open YouTube app first, fallback to mobile web
    window.location.href = youtubeAppUrl;
    setTimeout(() => {
      window.open(youtubeMobileUrl, '_blank');
    }, 500);
  } else {
    // On desktop, show popup modal
    currentVideo.value = { id: videoId, title: title };
    showVideoModal.value = true;
    document.body.style.overflow = 'hidden';
  }
};

// Function to close video modal
const closeVideoModal = () => {
  showVideoModal.value = false;
  currentVideo.value = { id: '', title: '' };
  document.body.style.overflow = '';
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = "";
};
</script>

<style>
/* Import shared styles */
@import '~/assets/styles/main.css';
</style>
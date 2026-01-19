<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="nav-logo">
          <NuxtLink to="/">
            <img src="/logo.jpg" alt="DJ RONN" class="nav-logo-image" />
          </NuxtLink>
        </div>
        <div class="nav-links">
          <NuxtLink to="/about">ABOUT</NuxtLink>
          <NuxtLink to="/#gallery">GALLERY</NuxtLink>
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
          <NuxtLink to="/#gallery" @click="closeMobileMenu" class="mobile-menu-link">
            <span class="link-number">02</span>
            <span class="link-text">GALLERY</span>
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
</template>

<script setup>
const mobileMenuOpen = ref(false);

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
<template>
  <div class="page-container">
    <NavBar />
    
    <main>
      <!-- Hero Section -->
      <section class="page-hero">
        <div class="container">
          <div class="hero-content">
            <span class="breadcrumb">
              <NuxtLink to="/">Home</NuxtLink> / About
            </span>
            <h1 class="page-title">About DJ RONN</h1>
            <p class="page-subtitle">
              Architect of Sound - Blending structure, emotion, and energy to create unforgettable musical experiences
            </p>
          </div>
        </div>
      </section>

      <!-- About Content -->
      <section class="content-section">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>The Architect of Sound</h2>
              <p>
                DJ RONN combines a unique background in architecture with a passion for electronic music, 
                creating structured yet emotional soundscapes that resonate with diverse audiences. 
                Based between Dubai and Beirut, RONN brings a multicultural approach to DJ entertainment.
              </p>
              
              <h2>Musical Journey</h2>
              <p>
                With years of experience performing at premium venues across the Middle East, 
                DJ RONN specializes in reading crowds and adapting music styles to create the perfect atmosphere 
                for any event. From intimate private gatherings to high-energy club nights, every performance 
                is carefully crafted to match the audience and occasion.
              </p>

              <h2>Professional Approach</h2>
              <p>
                The architectural background brings a unique perspective to DJ performance - 
                understanding space, acoustics, and how music flows through different environments. 
                This technical knowledge combined with musical intuition creates performances that 
                are both professional and emotionally engaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready to Experience the Architecture of Sound?</h2>
          <p>Let's create the perfect musical atmosphere for your event</p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="btn-primary">Book Now</NuxtLink>
            <a href="https://wa.me/9613746927" class="btn-secondary">WhatsApp</a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'About DJ RONN - Architect of Sound | Professional DJ Background',
  ogTitle: 'About DJ RONN - Architect of Sound | Professional DJ Background',
  description: 'Learn about DJ RONN\'s background as the Architect of Sound. Professional DJ with architectural expertise, specializing in electronic music and multicultural events.',
  ogDescription: 'Learn about DJ RONN\'s background as the Architect of Sound. Professional DJ with architectural expertise, specializing in electronic music and multicultural events.',
  keywords: 'DJ RONN biography, Architect of Sound, professional DJ background, electronic music DJ, Dubai DJ, Beirut DJ',
  ogImage: '/main-img-min.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text h2 {
  color: #00ffff;
  margin: 2rem 0 1rem 0;
  font-size: 2rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 2rem;
}
</style>
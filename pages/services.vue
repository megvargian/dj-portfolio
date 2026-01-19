<template>
  <div class="page-container">
    <NavBar />

    <main>
      <!-- Hero Section -->
      <section class="page-hero">
        <div class="container">
          <div class="hero-content">
            <span class="breadcrumb">
              <NuxtLink to="/">Home</NuxtLink> / Services
            </span>
            <h1 class="page-title">DJ Services</h1>
            <p class="page-subtitle">
              Professional DJ entertainment for all types of events and celebrations
            </p>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="content-section">
        <div class="container">
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🎧</div>
              <h3>Club DJ Services</h3>
              <p>High-energy electronic music for nightclubs, bars, and party venues. Specializing in house, techno, and commercial hits.</p>
              <ul class="service-features">
                <li>2-8 hour sets</li>
                <li>Professional equipment</li>
                <li>Crowd reading expertise</li>
                <li>Multiple music genres</li>
              </ul>
              <NuxtLink to="/club-dj" class="service-link">Learn More →</NuxtLink>
            </div>

            <div class="service-card">
              <div class="service-icon">💒</div>
              <h3>Private Events</h3>
              <p>Weddings, corporate events, birthdays, and special celebrations with customized music curation.</p>
              <ul class="service-features">
                <li>Event planning consultation</li>
                <li>Custom playlists</li>
                <li>Professional coordination</li>
                <li>All event phases covered</li>
              </ul>
              <NuxtLink to="/private-events" class="service-link">Learn More →</NuxtLink>
            </div>

            <div class="service-card">
              <div class="service-icon">🌍</div>
              <h3>Dubai Events</h3>
              <p>Premium DJ services across Dubai and UAE with multicultural music expertise for international audiences.</p>
              <ul class="service-features">
                <li>Luxury venue experience</li>
                <li>Multicultural music library</li>
                <li>UAE travel ready</li>
                <li>Professional presentation</li>
              </ul>
              <NuxtLink to="/dj-dubai" class="service-link">Learn More →</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready to Book Your Event?</h2>
          <p>Get in touch to discuss your event needs and receive a custom quote</p>
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
  title: 'DJ Services - Club, Private Events, Dubai | DJ RONN',
  ogTitle: 'DJ Services - Club, Private Events, Dubai | DJ RONN',
  description: 'Professional DJ services for clubs, private events, weddings, and corporate events. Serving Dubai, Beirut, and international locations with premium entertainment.',
  ogDescription: 'Professional DJ services for clubs, private events, weddings, and corporate events. Serving Dubai, Beirut, and international locations with premium entertainment.',
  keywords: 'DJ services, club DJ, wedding DJ, private event DJ, corporate DJ, Dubai DJ services, professional entertainment',
  ogImage: '/main-img-min.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.service-card {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
  text-align: center;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #00ffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
}

.service-features li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li:before {
  content: "✓";
  color: #00ffff;
  position: absolute;
  left: 0;
}

.service-link {
  display: inline-block;
  color: #00ffff;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  transition: color 0.3s ease;
}

.service-link:hover {
  color: #ff00ff;
}
</style>
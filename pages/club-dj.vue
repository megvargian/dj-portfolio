<template>
  <div class="page-container">
    <NavBar />

    <main>
      <!-- Hero Section -->
      <section class="page-hero">
        <div class="container">
          <div class="hero-content">
            <span class="breadcrumb">
              <NuxtLink to="/">Home</NuxtLink> / Club DJ
            </span>
            <h1 class="page-title">Professional Club DJ Services</h1>
            <p class="page-subtitle">
              High-energy sets and professional mixing for nightclubs, bars, and party venues
            </p>
            <div class="hero-buttons">
              <NuxtLink to="/contact" class="btn-primary">Book Club Gig</NuxtLink>
            </div>
          </div>
          <div class="hero-image">
            <img src="/main-img-min.jpg" alt="DJ RONN performing at a nightclub" />
          </div>
        </div>
      </section>

      <!-- Club DJ Services -->
      <section class="content-section">
        <div class="container">
          <h2>What You Get with DJ RONN Club Services</h2>

          <div class="services-grid">
            <div class="service-item">
              <div class="service-icon">🎵</div>
              <h3>Genre Expertise</h3>
              <p>Electronic, House, Techno, Hip-Hop, Commercial hits, and crowd favorites</p>
            </div>
            <div class="service-item">
              <div class="service-icon">🔊</div>
              <h3>Professional Equipment</h3>
              <p>Pioneer DJ controllers, professional mixing boards, and high-quality sound systems</p>
            </div>
            <div class="service-item">
              <div class="service-icon">⚡</div>
              <h3>Energy Management</h3>
              <p>Reading the crowd and building energy throughout the night</p>
            </div>
            <div class="service-item">
              <div class="service-icon">🌙</div>
              <h3>Extended Sets</h3>
              <p>2-8 hour sets depending on venue needs and event schedule</p>
            </div>
          </div>

          <h2>Music Styles & Genres</h2>
          <div class="genre-list">
            <div class="genre-category">
              <h3>Electronic & Dance</h3>
              <ul>
                <li>Deep House</li>
                <li>Progressive House</li>
                <li>Tech House</li>
                <li>Techno</li>
                <li>Trance</li>
              </ul>
            </div>
            <div class="genre-category">
              <h3>Commercial & Pop</h3>
              <ul>
                <li>Top 40 Hits</li>
                <li>Hip-Hop</li>
                <li>R&B</li>
                <li>Pop Remixes</li>
                <li>Latin Hits</li>
              </ul>
            </div>
            <div class="genre-category">
              <h3>Regional Favorites</h3>
              <ul>
                <li>Middle Eastern Electronic</li>
                <li>Arabic Pop Remixes</li>
                <li>Lebanese Hits</li>
                <li>International Club Anthems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Equipment & Technical -->
      <section class="tech-section">
        <div class="container">
          <h2>Equipment & Technical Setup</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <h3>DJ Controllers</h3>
              <p>Pioneer DJ CDJ-3000, DJM-900NXS2, and backup systems for seamless performance</p>
            </div>
            <div class="tech-item">
              <h3>Sound System</h3>
              <p>Professional PA systems, subwoofers, and monitors for optimal club sound</p>
            </div>
            <div class="tech-item">
              <h3>Lighting Integration</h3>
              <p>Coordination with venue lighting systems for synchronized audio-visual experience</p>
            </div>
            <div class="tech-item">
              <h3>Backup Systems</h3>
              <p>Redundant equipment setup to ensure uninterrupted performance</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3>How long can you play for club events?</h3>
              <p>I can perform sets ranging from 2-8 hours depending on your venue's needs. Most club gigs are 4-6 hours with breaks as needed.</p>
            </div>
            <div class="faq-item">
              <h3>Do you bring your own equipment?</h3>
              <p>Yes, I bring professional DJ controllers and can coordinate with your venue's sound system. I also carry backup equipment for reliability.</p>
            </div>
            <div class="faq-item">
              <h3>Can you read the crowd and adjust music accordingly?</h3>
              <p>Absolutely. Reading the crowd is essential for club DJing. I adapt the music style, energy level, and track selection based on the audience response.</p>
            </div>
            <div class="faq-item">
              <h3>What's your experience with different venue types?</h3>
              <p>I've performed at nightclubs, rooftop bars, beach clubs, and underground venues. Each requires different approaches to sound and energy management.</p>
            </div>
            <div class="faq-item">
              <h3>How far in advance should we book?</h3>
              <p>For club events, I recommend booking 2-4 weeks in advance, especially for weekend slots. Popular dates fill up quickly.</p>
            </div>
            <div class="faq-item">
              <h3>Do you take requests during the set?</h3>
              <p>I'm open to requests that fit the vibe and energy of the moment. I'll work crowd favorites into the set when appropriate.</p>
            </div>
            <div class="faq-item">
              <h3>What's included in your club DJ package?</h3>
              <p>Professional mixing, DJ controllers, coordination with venue sound team, music library access, and crowd energy management throughout the event.</p>
            </div>
            <div class="faq-item">
              <h3>Can you work with resident DJs or other performers?</h3>
              <p>Yes, I'm experienced in coordinating with resident DJs, opening acts, and other performers to create a cohesive night of entertainment.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready to Book Your Club Event?</h2>
          <p>Get professional DJ services that will keep your dance floor packed all night</p>
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
  title: 'Club DJ Services - Professional Nightclub DJ | DJ RONN',
  ogTitle: 'Club DJ Services - Professional Nightclub DJ | DJ RONN',
  description: 'Professional club DJ services for nightclubs, bars, and party venues. High-energy electronic music, house, techno, and commercial hits. Book DJ RONN for your club event.',
  ogDescription: 'Professional club DJ services for nightclubs, bars, and party venues. High-energy electronic music, house, techno, and commercial hits. Book DJ RONN for your club event.',
  keywords: 'club DJ, nightclub DJ, electronic music DJ, house music DJ, techno DJ, commercial DJ, Dubai club DJ, Beirut club DJ',
  ogImage: '/club-dj-hero.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.page-hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
}

.hero-content {
  max-width: 600px;
}

.breadcrumb {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
}

.breadcrumb a {
  color: #00ffff;
  text-decoration: none;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #999;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.service-item {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
}

.service-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.genre-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.genre-category {
  background: #111;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
}

.genre-category ul {
  list-style: none;
  padding: 0;
}

.genre-category li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
}

.tech-section {
  background: #0a0a0a;
  padding: 4rem 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tech-item {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
}

.faq-section {
  padding: 4rem 0;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 2rem;
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
}

.faq-item h3 {
  color: #00ffff;
  margin-bottom: 1rem;
}
</style>
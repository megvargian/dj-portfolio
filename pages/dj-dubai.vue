<template>
  <div class="page-container">
    <NavBar />

    <main>
      <!-- Hero Section -->
      <section class="page-hero dubai-hero">
        <div class="container">
          <div class="hero-content">
            <span class="breadcrumb">
              <NuxtLink to="/">Home</NuxtLink> / DJ in Dubai
            </span>
            <h1 class="page-title">Professional DJ Services in Dubai</h1>
            <p class="page-subtitle">
              Premium DJ entertainment for Dubai's luxury venues, hotels, and private events across the Emirates
            </p>
            <div class="hero-buttons">
              <NuxtLink to="/contact" class="btn-primary">Book Dubai Event</NuxtLink>
              <a href="https://wa.me/9613746927" class="btn-secondary">WhatsApp</a>
            </div>
          </div>
          <div class="hero-image">
            <img style="width: 100%;" src="/main-img-min.jpg" alt="DJ RONN performing in Dubai with city skyline background" />
          </div>
        </div>
      </section>

      <!-- Dubai Services -->
      <section class="content-section">
        <div class="container">
          <h2>DJ Services Across Dubai & UAE</h2>

          <div class="dubai-services-grid">
            <div class="service-area">
              <div class="area-icon">🏙️</div>
              <h3>Downtown Dubai</h3>
              <p>Luxury hotels, rooftop venues, and premium event spaces in the heart of Dubai</p>
              <ul class="venue-types">
                <li>Burj Khalifa area venues</li>
                <li>Downtown hotels & resorts</li>
                <li>High-end restaurants & lounges</li>
                <li>Corporate headquarters events</li>
              </ul>
            </div>

            <div class="service-area">
              <div class="area-icon">🏖️</div>
              <h3>Dubai Marina & JBR</h3>
              <p>Beachfront venues, yacht parties, and Marina waterfront locations</p>
              <ul class="venue-types">
                <li>Beach clubs & resorts</li>
                <li>Marina yacht events</li>
                <li>Waterfront restaurants</li>
                <li>JBR beachfront venues</li>
              </ul>
            </div>

            <div class="service-area">
              <div class="area-icon">🌴</div>
              <h3>Palm Jumeirah</h3>
              <p>Exclusive resort venues and luxury private events on the iconic Palm island</p>
              <ul class="venue-types">
                <li>Atlantis & resort venues</li>
                <li>Private villa parties</li>
                <li>Luxury beachfront events</li>
                <li>High-end wedding venues</li>
              </ul>
            </div>

            <div class="service-area">
              <div class="area-icon">🏜️</div>
              <h3>Desert & Outdoor Venues</h3>
              <p>Desert safari events, outdoor celebrations, and unique Dubai experiences</p>
              <ul class="venue-types">
                <li>Desert safari events</li>
                <li>Outdoor wedding venues</li>
                <li>Corporate retreat locations</li>
                <li>Unique experience venues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Event Types in Dubai -->
      <section class="dubai-events-section">
        <div class="container">
          <h2>Types of Events I DJ in Dubai</h2>

          <div class="event-categories">
            <div class="event-category">
              <h3>🌟 Luxury Weddings</h3>
              <p>Multicultural weddings in Dubai's premier venues with customized music for diverse guest lists</p>
              <div class="event-details">
                <strong>Popular Venues:</strong> Five-star hotels, beachfront resorts, desert venues
                <br><strong>Specialties:</strong> International music, Arabic hits, Bollywood, Western favorites
              </div>
            </div>

            <div class="event-category">
              <h3>🏢 Corporate Events</h3>
              <p>Professional entertainment for Dubai's thriving business community and international corporations</p>
              <div class="event-details">
                <strong>Event Types:</strong> Product launches, gala dinners, company parties, networking events
                <br><strong>Experience:</strong> Multinational audiences, professional presentation
              </div>
            </div>

            <div class="event-category">
              <h3>🎉 Private Celebrations</h3>
              <p>Exclusive private parties for Dubai's affluent residents and expatriate community</p>
              <div class="event-details">
                <strong>Occasions:</strong> Birthday parties, anniversaries, cultural celebrations
                <br><strong>Approach:</strong> Tailored to cultural preferences and guest demographics
              </div>
            </div>

            <div class="event-category">
              <h3>🏨 Hotel & Venue Events</h3>
              <p>Regular performances at Dubai's luxury hotels, restaurants, and entertainment venues</p>
              <div class="event-details">
                <strong>Settings:</strong> Hotel lounges, rooftop bars, restaurant events, club nights
                <br><strong>Focus:</strong> Atmosphere creation, brand alignment, guest experience
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Music Styles for Dubai -->
      <section class="music-styles-section">
        <div class="container">
          <h2>Music Styles Popular in Dubai</h2>
          <p class="section-intro">Dubai's diverse international community requires a versatile music approach</p>

          <div class="music-grid">
            <div class="music-category">
              <h3>🎵 International House & Electronic</h3>
              <ul>
                <li>Deep House & Progressive House</li>
                <li>Tech House & Minimal Techno</li>
                <li>International Electronic Hits</li>
                <li>Lounge & Chillout</li>
              </ul>
            </div>

            <div class="music-category">
              <h3>🌍 Middle Eastern & Arabic</h3>
              <ul>
                <li>Modern Arabic Pop & Remixes</li>
                <li>Lebanese & Khaleeji Hits</li>
                <li>Traditional Arabic Fusion</li>
                <li>Regional Chart Toppers</li>
              </ul>
            </div>

            <div class="music-category">
              <h3>🎬 Bollywood & Indian</h3>
              <ul>
                <li>Latest Bollywood Hits</li>
                <li>Classic Bollywood Remixes</li>
                <li>Regional Indian Music</li>
                <li>Fusion & Contemporary</li>
              </ul>
            </div>

            <div class="music-category">
              <h3>🔥 International Hits</h3>
              <ul>
                <li>Top 40 & Commercial Pop</li>
                <li>Hip-Hop & R&B</li>
                <li>Latin & Reggaeton</li>
                <li>International Dance Music</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Dubai-Specific Services -->
      <section class="dubai-specifics">
        <div class="container">
          <h2>Why Choose DJ RONN for Your Dubai Event</h2>

          <div class="advantages-grid">
            <div class="advantage">
              <div class="advantage-icon">🎯</div>
              <h3>Local Expertise</h3>
              <p>Deep understanding of Dubai's diverse cultural landscape and venue requirements</p>
            </div>

            <div class="advantage">
              <div class="advantage-icon">🚗</div>
              <h3>UAE Travel Ready</h3>
              <p>Fully equipped for events across Dubai, Abu Dhabi, Sharjah, and other Emirates</p>
            </div>

            <div class="advantage">
              <div class="advantage-icon">🎼</div>
              <h3>Multicultural Music Library</h3>
              <p>Extensive collection catering to Dubai's international community</p>
            </div>

            <div class="advantage">
              <div class="advantage-icon">🏆</div>
              <h3>Luxury Venue Experience</h3>
              <p>Proven track record with Dubai's premium hotels, resorts, and event spaces</p>
            </div>

            <div class="advantage">
              <div class="advantage-icon">🔧</div>
              <h3>Professional Equipment</h3>
              <p>High-end sound systems suitable for any venue size or type</p>
            </div>

            <div class="advantage">
              <div class="advantage-icon">🤝</div>
              <h3>Vendor Network</h3>
              <p>Established relationships with Dubai event planners, venues, and suppliers</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <h2>Dubai DJ Services FAQ</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3>Do you have experience with Dubai's luxury venues?</h3>
              <p>Yes, I have extensive experience performing at Dubai's top-tier hotels, resorts, and premium event venues. I understand the high standards and professional requirements expected in Dubai's luxury hospitality sector.</p>
            </div>

            <div class="faq-item">
              <h3>Can you cater to Dubai's diverse international audience?</h3>
              <p>Absolutely. Dubai's multicultural environment requires versatility in music selection. I have extensive libraries of Arabic, Indian, Western, and international music to cater to diverse audiences at the same event.</p>
            </div>

            <div class="faq-item">
              <h3>Do you travel to other Emirates besides Dubai?</h3>
              <p>Yes, I provide DJ services across the UAE including Abu Dhabi, Sharjah, Ajman, and other Emirates. Travel fees may apply depending on the location and distance.</p>
            </div>

            <div class="faq-item">
              <h3>What's your experience with cultural sensitivity in Dubai?</h3>
              <p>I have deep respect for local customs and cultural sensitivities. I work with event organizers to ensure music selection and performance style align with cultural expectations and venue guidelines.</p>
            </div>

            <div class="faq-item">
              <h3>Do you work with wedding planners and event companies in Dubai?</h3>
              <p>Yes, I regularly collaborate with Dubai's top wedding planners, event management companies, and venue coordinators. I can provide references and have established working relationships throughout the industry.</p>
            </div>

            <div class="faq-item">
              <h3>What are your rates for Dubai events?</h3>
              <p>Rates vary based on event type, duration, venue location, and specific requirements. Dubai events typically start from AED 3,000 for private events and AED 2,000 for shorter performances. Contact me for a customized quote.</p>
            </div>

            <div class="faq-item">
              <h3>How far in advance should I book for Dubai events?</h3>
              <p>For peak seasons (October to April) and major holidays, booking 6-8 weeks in advance is recommended. Wedding season and New Year's Eve require even earlier booking due to high demand.</p>
            </div>

            <div class="faq-item">
              <h3>Do you provide bilingual announcements in English and Arabic?</h3>
              <p>While I'm comfortable with basic Arabic phrases and announcements, for extensive bilingual MC services, I can coordinate with professional Arabic-English MCs to ensure seamless communication.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section dubai-cta">
        <div class="container">
          <h2>Ready to Elevate Your Dubai Event?</h2>
          <p>Let's create an unforgettable musical experience for your Dubai celebration</p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="btn-primary">Get Dubai Quote</NuxtLink>
            <a href="https://wa.me/9613746927" class="btn-secondary">WhatsApp Now</a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Professional DJ Services in Dubai, UAE - Luxury Events | DJ RONN',
  ogTitle: 'Professional DJ Services in Dubai, UAE - Luxury Events | DJ RONN',
  description: 'Premium DJ services in Dubai for luxury weddings, corporate events, and private parties. Multicultural music expertise for Dubai\'s international community. Book DJ RONN.',
  ogDescription: 'Premium DJ services in Dubai for luxury weddings, corporate events, and private parties. Multicultural music expertise for Dubai\'s international community. Book DJ RONN.',
  keywords: 'DJ Dubai, Dubai wedding DJ, corporate event DJ Dubai, luxury event DJ UAE, Dubai Marina DJ, Downtown Dubai DJ, Palm Jumeirah DJ, Arabic DJ Dubai',
  ogImage: '/dubai-skyline-dj.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.dubai-hero {
  background: linear-gradient(135deg, #000 0%, #1a1a1a 50%, #2a1a00 100%);
}

.dubai-services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.service-area {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
  position: relative;
}

.area-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.venue-types {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.venue-types li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
  position: relative;
  padding-left: 1.5rem;
}

.venue-types li:before {
  content: "📍";
  position: absolute;
  left: 0;
}

.dubai-events-section {
  background: #0a0a0a;
  padding: 4rem 0;
}

.event-categories {
  display: grid;
  gap: 2rem;
}

.event-category {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
}

.event-category h3 {
  color: #00ffff;
  margin-bottom: 1rem;
}

.event-details {
  margin-top: 1rem;
  padding: 1rem;
  background: #0a0a0a;
  border-radius: 8px;
  font-size: 0.9rem;
  line-height: 1.6;
}

.music-styles-section {
  padding: 4rem 0;
}

.section-intro {
  text-align: center;
  color: #999;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.music-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.music-category {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
}

.music-category h3 {
  color: #00ffff;
  margin-bottom: 1.5rem;
}

.music-category ul {
  list-style: none;
  padding: 0;
}

.music-category li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
  position: relative;
  padding-left: 1.5rem;
}

.music-category li:before {
  content: "♫";
  color: #00ffff;
  position: absolute;
  left: 0;
}

.dubai-specifics {
  background: #0a0a0a;
  padding: 4rem 0;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.advantage {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
  text-align: center;
}

.advantage-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.dubai-cta {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a1a00 100%);
}
</style>
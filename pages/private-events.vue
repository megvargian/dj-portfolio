<template>
  <div class="page-container">
    <NavBar />

    <main>
      <!-- Hero Section -->
      <section class="page-hero">
        <div class="container">
          <div class="hero-content">
            <span class="breadcrumb">
              <NuxtLink to="/">Home</NuxtLink> / Private Events
            </span>
            <h1 class="page-title">DJ for Private Events</h1>
            <p class="page-subtitle">
              Creating the perfect atmosphere for weddings, corporate events, birthdays, and special celebrations
            </p>
            <div class="hero-buttons">
              <NuxtLink to="/contact" class="btn-primary">Get Quote</NuxtLink>
              <a href="https://wa.me/9613746927" class="btn-secondary">WhatsApp</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="/main-img-min.jpg" alt="DJ RONN at a private wedding event" />
          </div>
        </div>
      </section>

      <!-- Event Types -->
      <section class="content-section">
        <div class="container">
          <h2>Private Event Types I Specialize In</h2>

          <div class="event-types-grid">
            <div class="event-type">
              <div class="event-icon">💒</div>
              <h3>Weddings</h3>
              <p>From ceremony background music to reception dancing, creating magical moments for your special day</p>
              <ul class="event-features">
                <li>Ceremony processional & recessional</li>
                <li>Cocktail hour background music</li>
                <li>Dinner service ambiance</li>
                <li>First dance & special moments</li>
                <li>Reception dancing until late</li>
              </ul>
            </div>

            <div class="event-type">
              <div class="event-icon">🏢</div>
              <h3>Corporate Events</h3>
              <p>Professional entertainment for company parties, product launches, and corporate celebrations</p>
              <ul class="event-features">
                <li>Welcome & networking music</li>
                <li>Presentation support</li>
                <li>Award ceremony accompaniment</li>
                <li>After-party entertainment</li>
                <li>Custom branding integration</li>
              </ul>
            </div>

            <div class="event-type">
              <div class="event-icon">🎂</div>
              <h3>Birthday Parties</h3>
              <p>Age-appropriate music and energy for milestone birthdays and celebration parties</p>
              <ul class="event-features">
                <li>Custom playlist creation</li>
                <li>Age-appropriate music selection</li>
                <li>Interactive entertainment</li>
                <li>Special moment highlighting</li>
                <li>Guest request accommodation</li>
              </ul>
            </div>

            <div class="event-type">
              <div class="event-icon">🎉</div>
              <h3>Special Celebrations</h3>
              <p>Anniversaries, graduations, holiday parties, and other milestone celebrations</p>
              <ul class="event-features">
                <li>Theme-appropriate music</li>
                <li>Cultural music integration</li>
                <li>Multi-generational appeal</li>
                <li>Flexible timeline adaptation</li>
                <li>Seamless transitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Details -->
      <section class="service-details">
        <div class="container">
          <h2>What's Included in Private Event Packages</h2>

          <div class="package-grid">
            <div class="package-item">
              <h3>Music & Entertainment</h3>
              <ul>
                <li>Pre-event consultation & planning</li>
                <li>Custom playlist creation</li>
                <li>Professional mixing & transitions</li>
                <li>Microphone for announcements</li>
                <li>Music for all event phases</li>
                <li>Guest request handling</li>
              </ul>
            </div>

            <div class="package-item">
              <h3>Equipment & Setup</h3>
              <ul>
                <li>Professional DJ setup</li>
                <li>High-quality sound system</li>
                <li>Wireless microphones</li>
                <li>Lighting coordination</li>
                <li>Backup equipment</li>
                <li>Setup & breakdown service</li>
              </ul>
            </div>

            <div class="package-item">
              <h3>Event Coordination</h3>
              <ul>
                <li>Timeline coordination</li>
                <li>Vendor communication</li>
                <li>Event flow management</li>
                <li>Special moment cues</li>
                <li>Flexible adaptation</li>
                <li>Professional presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Info -->
      <section class="pricing-section">
        <div class="container">
          <h2>Private Event Investment</h2>
          <div class="pricing-grid">
            <div class="pricing-card">
              <h3>Essential Package</h3>
              <div class="price">Starting from $800</div>
              <p class="duration">Up to 4 hours</p>
              <ul class="package-features">
                <li>Professional DJ setup</li>
                <li>Basic sound system</li>
                <li>Music for all event phases</li>
                <li>One wireless microphone</li>
                <li>Setup & breakdown</li>
              </ul>
              <NuxtLink to="/contact" class="package-cta">Get Quote</NuxtLink>
            </div>

            <div class="pricing-card featured">
              <h3>Premium Package</h3>
              <div class="price">Starting from $1,200</div>
              <p class="duration">Up to 6 hours</p>
              <ul class="package-features">
                <li>Enhanced sound system</li>
                <li>Multiple microphones</li>
                <li>Basic lighting effects</li>
                <li>Extended music library</li>
                <li>Event coordination</li>
                <li>Special moment cues</li>
              </ul>
              <NuxtLink to="/contact" class="package-cta">Get Quote</NuxtLink>
            </div>

            <div class="pricing-card">
              <h3>Luxury Package</h3>
              <div class="price">Starting from $1,800</div>
              <p class="duration">Up to 8 hours</p>
              <ul class="package-features">
                <li>Premium sound & lighting</li>
                <li>Full event coordination</li>
                <li>Multiple venue areas</li>
                <li>Custom music curation</li>
                <li>Vendor coordination</li>
                <li>Dedicated event planning</li>
              </ul>
              <NuxtLink to="/contact" class="package-cta">Get Quote</NuxtLink>
            </div>
          </div>
          <p class="pricing-note">
            *Prices vary based on event size, duration, location, and specific requirements. Travel fees may apply for events outside Dubai/Beirut areas.
          </p>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <h2>Private Event DJ FAQ</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3>How far in advance should I book for my event?</h3>
              <p>For weddings and major events, I recommend booking 3-6 months in advance. Corporate events and parties can often be booked 4-8 weeks ahead, but earlier booking ensures better availability.</p>
            </div>

            <div class="faq-item">
              <h3>Do you provide a contract and insurance?</h3>
              <p>Yes, all bookings include a detailed contract outlining services, timeline, and expectations. I carry professional liability insurance for all events.</p>
            </div>

            <div class="faq-item">
              <h3>Can you work with our wedding planner or event coordinator?</h3>
              <p>Absolutely! I regularly collaborate with event planners, wedding coordinators, and venue teams to ensure seamless event execution.</p>
            </div>

            <div class="faq-item">
              <h3>What happens if there's a technical issue during the event?</h3>
              <p>I bring backup equipment for all critical components and have contingency plans for technical issues. Your event music will continue uninterrupted.</p>
            </div>

            <div class="faq-item">
              <h3>Can you accommodate special music requests or cultural requirements?</h3>
              <p>Yes, I work with you to create custom playlists that reflect your preferences, cultural background, and guest demographics. I have extensive libraries of international music.</p>
            </div>

            <div class="faq-item">
              <h3>Do you provide MC services or announcements?</h3>
              <p>I can handle basic announcements and event transitions. For extensive MC work, I can coordinate with your chosen MC or recommend professional partners.</p>
            </div>

            <div class="faq-item">
              <h3>What's your policy on guest requests during the event?</h3>
              <p>I welcome appropriate guest requests that fit the event atmosphere and your pre-approved guidelines. We'll discuss request policies during our planning session.</p>
            </div>

            <div class="faq-item">
              <h3>Can you provide music for both indoor and outdoor portions of an event?</h3>
              <p>Yes, I can set up for multiple areas or provide portable solutions for ceremony/cocktail hour and reception in different locations.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="testimonials-section">
        <div class="container">
          <h2>What Clients Say</h2>
          <div class="testimonials-grid">
            <div class="testimonial">
              <p>"DJ RONN made our wedding absolutely perfect. He read the crowd brilliantly and kept everyone dancing until the very end!"</p>
              <cite>- Sarah & Ahmed, Wedding Reception</cite>
            </div>
            <div class="testimonial">
              <p>"Professional, reliable, and great music selection. Our corporate event was a huge success thanks to RONN."</p>
              <cite>- Michelle R., Corporate Event Manager</cite>
            </div>
            <div class="testimonial">
              <p>"Exceeded all expectations for our anniversary party. The music was perfect for all ages and the service was flawless."</p>
              <cite>- The Johnson Family, 25th Anniversary</cite>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <h2>Ready to Make Your Event Unforgettable?</h2>
          <p>Let's discuss your event vision and create the perfect musical experience</p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="btn-primary">Get Custom Quote</NuxtLink>
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
  title: 'Private Event DJ Services - Weddings, Corporate Events | DJ RONN',
  ogTitle: 'Private Event DJ Services - Weddings, Corporate Events | DJ RONN',
  description: 'Professional DJ services for private events, weddings, corporate parties, birthdays and special celebrations. Custom music curation and event coordination in Dubai and Beirut.',
  ogDescription: 'Professional DJ services for private events, weddings, corporate parties, birthdays and special celebrations. Custom music curation and event coordination in Dubai and Beirut.',
  keywords: 'wedding DJ, private event DJ, corporate event DJ, birthday party DJ, Dubai wedding DJ, Beirut wedding DJ, event entertainment',
  ogImage: '/private-events-hero.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.event-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.event-type {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
}

.event-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.event-features {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.event-features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
  position: relative;
  padding-left: 1.5rem;
}

.event-features li:before {
  content: "✓";
  color: #00ffff;
  position: absolute;
  left: 0;
}

.service-details {
  background: #0a0a0a;
  padding: 4rem 0;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.package-item {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
}

.package-item ul {
  list-style: none;
  padding: 0;
}

.package-item li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
  position: relative;
  padding-left: 1.5rem;
}

.package-item li:before {
  content: "•";
  color: #00ffff;
  position: absolute;
  left: 0;
}

.pricing-section {
  padding: 4rem 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.pricing-card {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
  text-align: center;
  position: relative;
}

.pricing-card.featured {
  border-color: #00ffff;
  transform: scale(1.05);
}

.pricing-card .price {
  font-size: 2rem;
  color: #00ffff;
  font-weight: bold;
  margin: 1rem 0;
}

.duration {
  color: #999;
  margin-bottom: 2rem;
}

.package-features {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: left;
}

.package-features li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.package-features li:before {
  content: "✓";
  color: #00ffff;
  position: absolute;
  left: 0;
}

.package-cta {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #00ffff;
  color: #000;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.package-cta:hover {
  background: #ff00ff;
  transform: translateY(-2px);
}

.pricing-note {
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  margin-top: 2rem;
}

.testimonials-section {
  background: #0a0a0a;
  padding: 4rem 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial {
  padding: 2rem;
  background: #111;
  border-radius: 12px;
  border: 1px solid #333;
  position: relative;
}

.testimonial p {
  font-style: italic;
  margin-bottom: 1rem;
}

.testimonial cite {
  color: #00ffff;
  font-size: 0.9rem;
}
</style>
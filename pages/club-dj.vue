<template>
  <div class="page-container">
    <NavBar />

    <main>
      <!-- Hero Section -->
      <section class="page-hero centered-hero">
        <div class="container">
          <span class="breadcrumb">
            <NuxtLink to="/">Home</NuxtLink> / Club DJ
          </span>
          <h1 class="page-title">Club DJ Around The World</h1>
          <p class="page-subtitle">
            High-energy club sets across Dubai, Yerevan, Beirut, Paris, Milano & Cyprus
          </p>
        </div>
      </section>

      <!-- City Albums -->
      <section class="city-albums-section">
        <div class="container">
          <div class="city-grid">
            <div
              v-for="city in cities"
              :key="city.slug"
              :id="city.slug"
              class="city-box"
              @click="openAlbum(city)"
            >
              <img :src="city.cover" :alt="`DJ RONN in ${city.name}`" class="city-cover" />
              <div class="city-overlay">
                <h3 class="city-name">{{ city.name }}</h3>
                <span class="city-view">View Album</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Album Swiper Modal -->
      <Transition name="fade">
        <div v-if="activeCity" class="album-modal" @click.self="closeAlbum">
          <button class="album-close" @click="closeAlbum" aria-label="Close album">×</button>
          <div class="album-swiper" @touchstart="onTouchStart" @touchend="onTouchEnd">
            <button class="swiper-arrow left" @click="prevImage" aria-label="Previous image">‹</button>
            <img :src="activeCity.images[currentIndex]" :alt="`${activeCity.name} photo ${currentIndex + 1}`" class="swiper-image" />
            <button class="swiper-arrow right" @click="nextImage" aria-label="Next image">›</button>
          </div>
          <div class="swiper-dots">
            <span
              v-for="(img, i) in activeCity.images"
              :key="i"
              class="swiper-dot"
              :class="{ active: i === currentIndex }"
              @click="currentIndex = i"
            ></span>
          </div>
          <div class="swiper-title">{{ activeCity.name }} — {{ currentIndex + 1 }} / {{ activeCity.images.length }}</div>
        </div>
      </Transition>

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
const cities = [
  {
    name: "Dubai",
    slug: "dubai",
    cover: "/event-1.jpg",
    images: ["/event-1.jpg", "/gallery-2.jpg", "/event-1.jpg", "/thumnail-1.jpg"],
  },
  {
    name: "Yerevan",
    slug: "yerevan",
    cover: "/yerevan-1.png",
    images: ["/yerevan-1.png", "/thumnail-2.jpg", "/ronn-1.jpg", "/event-2.jpg"],
  },
  {
    name: "Beirut",
    slug: "beirut",
    cover: "/gallery-6.jpg",
    images: ["/gallery-6.jpg", "/thumnail-3.jpg", "/dj.jpg", "/thumnail-4.jpg"],
  },
  {
    name: "Paris",
    slug: "paris",
    cover: "/thumnail-5.jpg",
    images: ["/thumnail-5.jpg", "/IMG-20251106-WA0050.jpg", "/ronn.jpg", "/thumnail-6.jpg"],
  },
  {
    name: "Milano",
    slug: "milano",
    cover: "/milano-2.png",
    images: ["/milano-2.png", "/gallery-5.jpg", "/main-img-min-1.jpg", "/gallery-2.jpg"],
  },
  {
    name: "Cyprus",
    slug: "cyprus",
    cover: "/cyprus-1.png",
    images: ["/cyprus-1.png", "/event-1.jpg", "/gallery-5.jpg", "/thumnail-1.jpg"],
  },
];

const activeCity = ref(null);
const currentIndex = ref(0);
let touchStartX = 0;

const openAlbum = (city) => {
  activeCity.value = city;
  currentIndex.value = 0;
  document.body.style.overflow = "hidden";
};

const closeAlbum = () => {
  activeCity.value = null;
  document.body.style.overflow = "";
};

const nextImage = () => {
  if (!activeCity.value) return;
  currentIndex.value = (currentIndex.value + 1) % activeCity.value.images.length;
};

const prevImage = () => {
  if (!activeCity.value) return;
  currentIndex.value =
    (currentIndex.value - 1 + activeCity.value.images.length) % activeCity.value.images.length;
};

const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const onTouchEnd = (e) => {
  const delta = e.changedTouches[0].screenX - touchStartX;
  if (delta > 50) prevImage();
  else if (delta < -50) nextImage();
};

const onKeydown = (e) => {
  if (!activeCity.value) return;
  if (e.key === "Escape") closeAlbum();
  else if (e.key === "ArrowRight") nextImage();
  else if (e.key === "ArrowLeft") prevImage();
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));

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

.centered-hero .container {
  max-width: 800px;
  text-align: center;
}

.centered-hero .page-title,
.centered-hero .page-subtitle {
  margin-left: auto;
  margin-right: auto;
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

/* City Albums */
.city-albums-section {
  padding: 2rem 0 4rem;
}

.city-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.city-box {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #333;
}

.city-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.city-box:hover .city-cover {
  transform: scale(1.08);
}

.city-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.75) 100%);
}

.city-name {
  font-size: clamp(1.3rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: 0.1rem;
}

.city-view {
  font-size: 0.85rem;
  color: #00ffff;
  letter-spacing: 0.1rem;
  border: 1px solid #00ffff;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.city-box:hover .city-view {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 640px) {
  .city-grid {
    grid-template-columns: 1fr;
  }
}

/* Album Swiper Modal */
.album-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.album-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
}

.album-close:hover {
  border-color: #00ffff;
  color: #00ffff;
}

.album-swiper {
  position: relative;
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-image {
  max-width: 100%;
  max-height: 70vh;
  border-radius: 12px;
  object-fit: contain;
  user-select: none;
}

.swiper-arrow {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  flex-shrink: 0;
  margin: 0 1rem;
}

.swiper-arrow:hover {
  border-color: #00ffff;
  color: #00ffff;
}

.swiper-dots {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.swiper-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.swiper-dot.active {
  background: #00ffff;
}

.swiper-title {
  margin-top: 1rem;
  color: #999;
  letter-spacing: 0.1rem;
  font-size: 0.9rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .swiper-arrow {
    width: 38px;
    height: 38px;
    font-size: 1.4rem;
    margin: 0 0.5rem;
  }
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
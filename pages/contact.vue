<template>
  <div class="page-container">
    <NavBar />
    
    <main>
      <!-- Hero Section -->
      <section class="page-hero">
        <div class="container">
          <div class="hero-content">
            <span class="breadcrumb">
              <NuxtLink to="/">Home</NuxtLink> / Contact
            </span>
            <h1 class="page-title">Book DJ RONN</h1>
            <p class="page-subtitle">
              Ready to make your event unforgettable? Get in touch to discuss your needs and receive a custom quote.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="content-section">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form-container">
              <h2>Get Your Custom Quote</h2>
              <form @submit.prevent="handleSubmit" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      v-model="formData.firstName" 
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      v-model="formData.lastName" 
                      required
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="formData.email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="formData.phone" 
                      required
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="eventDate">Event Date</label>
                    <input 
                      type="date" 
                      id="eventDate" 
                      v-model="formData.eventDate"
                    />
                  </div>
                  <div class="form-group">
                    <label for="eventType">Event Type</label>
                    <select id="eventType" v-model="formData.eventType">
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="club">Club Event</option>
                      <option value="private">Private Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="location">Event Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    v-model="formData.location" 
                    placeholder="City, venue name, or address"
                  />
                </div>

                <div class="form-group">
                  <label for="message">Event Details *</label>
                  <textarea 
                    id="message" 
                    v-model="formData.message" 
                    rows="5" 
                    placeholder="Tell me about your event - guest count, duration, music preferences, special requests..."
                    required
                  ></textarea>
                </div>

                <div class="form-actions">
                  <button 
                    type="submit" 
                    class="btn-primary" 
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </button>
                  <button 
                    type="button" 
                    @click="sendViaWhatsApp" 
                    class="btn-secondary"
                  >
                    Send via WhatsApp
                  </button>
                </div>

                <div v-if="submitMessage" class="form-message" :class="{ error: submitError }">
                  {{ submitMessage }}
                </div>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="contact-info">
              <h2>Get in Touch</h2>
              
              <div class="contact-method">
                <h3>📧 Email</h3>
                <a href="mailto:Ronn@ronnarchitectofsound.com">
                  Ronn@ronnarchitectofsound.com
                </a>
              </div>

              <div class="contact-method">
                <h3>📱 WhatsApp</h3>
                <a href="https://wa.me/9613746927">+961 3 746 927</a>
                <p class="method-note">Fastest response time</p>
              </div>

              <div class="contact-method">
                <h3>📍 Service Areas</h3>
                <ul class="service-areas">
                  <li>Dubai, UAE</li>
                  <li>Beirut, Lebanon</li>
                  <li>Regional travel available</li>
                  <li>International bookings welcome</li>
                </ul>
              </div>

              <div class="contact-method">
                <h3>⏰ Response Time</h3>
                <p>Typically within 24 hours</p>
                <p class="method-note">WhatsApp messages answered fastest</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";

useSeoMeta({
  title: 'Contact DJ RONN - Book Your Event | Get Custom Quote',
  ogTitle: 'Contact DJ RONN - Book Your Event | Get Custom Quote',
  description: 'Book DJ RONN for your event. Get a custom quote for weddings, corporate events, club nights, and private parties. Contact via email or WhatsApp.',
  ogDescription: 'Book DJ RONN for your event. Get a custom quote for weddings, corporate events, club nights, and private parties. Contact via email or WhatsApp.',
  keywords: 'book DJ RONN, DJ booking, event quote, contact DJ, wedding DJ booking, corporate event DJ, Dubai DJ booking',
  ogImage: '/main-img-min.jpg',
  twitterCard: 'summary_large_image',
})

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  eventDate: "",
  eventType: "",
  location: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");
const submitError = ref(false);

const sendViaWhatsApp = () => {
  // Validate required fields
  if (
    !formData.value.firstName ||
    !formData.value.lastName ||
    !formData.value.phone ||
    !formData.value.message
  ) {
    submitMessage.value =
      "Please fill in all required fields (Name, Phone, Message)";
    submitError.value = true;
    return;
  }

  // Format the message
  const whatsappMessage = `*New Booking Request*

*Name:* ${formData.value.firstName} ${formData.value.lastName}
*Email:* ${formData.value.email || "Not provided"}
*Phone:* ${formData.value.phone}
*Event Date:* ${formData.value.eventDate || "Not specified"}
*Event Type:* ${formData.value.eventType || "Not specified"}
*Location:* ${formData.value.location || "Not specified"}

*Message:*
${formData.value.message}`;

  // Your WhatsApp number (include country code without + or spaces)
  const whatsappNumber = "9613746927";

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Open WhatsApp
  window.open(whatsappUrl, "_blank");

  // Show success message
  submitMessage.value =
    "Opening WhatsApp... Please send the message to complete your booking request.";
  submitError.value = false;
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";
  submitError.value = false;

  try {
    // Send email using Formspree
    const response = await fetch("https://formspree.io/f/xanyndok", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${formData.value.firstName} ${formData.value.lastName}`,
        email: formData.value.email,
        phone: formData.value.phone,
        eventDate: formData.value.eventDate,
        eventType: formData.value.eventType,
        location: formData.value.location,
        message: formData.value.message,
      }),
    });

    if (response.ok) {
      submitMessage.value =
        "Thank you for your message! I'll get back to you within 24 hours.";
      submitError.value = false;
      // Reset form
      formData.value = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        location: "",
        message: "",
      };
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    submitMessage.value =
      "There was an error sending your message. Please try WhatsApp or email directly.";
    submitError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin: 3rem 0;
}

.contact-form-container h2,
.contact-info h2 {
  color: #00ffff;
  margin-bottom: 2rem;
}

.contact-form {
  background: #111;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ccc;
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  background: #222;
  border: 1px solid #444;
  border-radius: 6px;
  color: #fff;
  font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00ffff;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.form-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 6px;
  background: #0f4f3c;
  border: 1px solid #10b981;
  color: #10b981;
}

.form-message.error {
  background: #4f1f1f;
  border-color: #ef4444;
  color: #ef4444;
}

.contact-info {
  background: #111;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
  height: fit-content;
}

.contact-method {
  margin-bottom: 2rem;
}

.contact-method h3 {
  color: #00ffff;
  margin-bottom: 0.5rem;
}

.contact-method a {
  color: #fff;
  text-decoration: none;
}

.contact-method a:hover {
  color: #00ffff;
}

.method-note {
  font-size: 0.9rem;
  color: #999;
  margin-top: 0.25rem;
}

.service-areas {
  list-style: none;
  padding: 0;
}

.service-areas li {
  padding: 0.25rem 0;
  color: #ccc;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
  }
}
</style>
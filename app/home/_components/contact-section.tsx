"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Hello, my name is ${formData.name}. \n ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "254700000000";

    // Redirect to WhatsApp with the message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Reset form
    setFormData({ name: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-[#F8F8FF] text-[#02343B]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about vaccinations or need support? Message us
            directly on WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-[#04A699] p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-600">+254 708 546 502</p>
                  <p className="text-gray-600">+254 700 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#04A699] p-3 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-gray-600">
                    support@vaccinationtracker.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#04A699] p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-gray-600">123 Health Avenue</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#04A699] p-3 rounded-full flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp Support</h4>
                  <p className="text-gray-600">Fast responses</p>
                  <p className="text-gray-600">Available 9am - 5pm EAT</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#04A699] mx-auto mb-2" />
                <p className="font-semibold">Interactive Map</p>
                <p className="text-sm text-gray-600">
                  Location would be displayed here
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#04A699] p-2 rounded-full">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Message Us on WhatsApp</h3>
              </div>

              <p className="text-gray-600 mb-6">
                Send us a message directly through WhatsApp. We typically
                respond within a few hours during business days.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04A699] focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you with vaccination tracking?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04A699] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#04A699] hover:bg-[#038C7F] text-white py-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Open WhatsApp
                </button>
              </form>

              <div className="mt-6 p-4 bg-[#04A699] bg-opacity-10 rounded-lg border border-[#04A699] border-opacity-20">
                <p className="text-sm text-[#02343B]">
                  <strong>Note:</strong> Clicking the button will open WhatsApp
                  with your message ready to send. You'll need to select a
                  contact to send it to our support team.
                </p>
              </div>
            </div>

            {/* Additional Support Options */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-[#04A699] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-sm text-gray-600">
                  Chat with our support team in real-time
                </p>
                <button className="mt-4 text-[#04A699] font-semibold text-sm hover:underline">
                  Start Chat
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-[#04A699] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Emergency Support</h4>
                <p className="text-sm text-gray-600">
                  24/7 emergency support line for urgent issues
                </p>
                <button className="mt-4 text-[#04A699] font-semibold text-sm hover:underline">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

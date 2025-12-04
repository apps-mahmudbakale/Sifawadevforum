import { useState } from 'react';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-blue-100">info@sifawadevforum.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-blue-100">+234 703 136 9585</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-blue-100">
                      Zakat and Waqf Secretariat<br />
                      OPP. Fatima College of Nursing Sciences,<br />
                      Sifawa
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-4 text-lg">Follow Us</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors duration-200"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors duration-200"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 hover:bg-white/30 rounded-lg p-3 transition-colors duration-200"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-in slide-in-from-right duration-700">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-xl p-4 animate-in fade-in duration-200">
                  <p className="text-green-800 font-semibold text-center">
                    Thank you! We'll get back to you soon.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <Send size={20} />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

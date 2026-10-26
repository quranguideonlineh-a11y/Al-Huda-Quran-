import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, ChevronDown, Send, CheckCircle2, MapPin, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    courseInterest: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the 3-Day Free Trial work?',
      a: 'The free trial is 100% free with no credit card or financial information required. You simply fill out the trial form, choose your preferred class timings and teacher gender, and attend 3 live 1-on-1 sessions. If you are pleased with the teacher and curriculum, you can proceed to regular classes.',
    },
    {
      q: 'Can sisters and young girls request dedicated female teachers?',
      a: 'Yes, absolutely. We have a distinguished team of certified female Quran scholars and Hafidhat from Al-Azhar and Medina. We provide complete privacy and comfort for sisters, mothers, and daughters.',
    },
    {
      q: 'What software or equipment do we need for classes?',
      a: 'You only need a stable internet connection and a laptop, tablet (iPad), or smartphone. Classes are held via Zoom or Google Meet. Our teachers share the digital Mushaf screen and use interactive pointers.',
    },
    {
      q: 'What if my child or I miss a class or need to reschedule?',
      a: 'We understand family schedules can be busy. If you inform us at least 2 hours prior to the scheduled class time, we will gladly arrange a makeup class at a convenient alternate slot without any extra charge.',
    },
    {
      q: 'At what age can children start learning at Al Huda?',
      a: 'Children can start as early as 4 to 5 years old with our specialized Noorani Qaida for Kids. Our early-childhood certified teachers use interactive visual aids, phonics games, and short sessions to keep young minds engaged.',
    },
    {
      q: 'Will my child receive an official completion certificate?',
      a: 'Yes! Upon finishing each course (Noorani Qaida, Tajweed Mastery, or Hifz portions), students take an oral exam evaluated by our senior academic committee and receive an official Al Huda Quran Academy Certificate of Completion.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) return;
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Assalamu Alaikum! I would like to inquire about Quran classes at Al Huda Quran Academy.`
  );
  const whatsappUrl = `https://wa.me/447392601955?text=${whatsappMessage}`;
  const mailtoUrl = `mailto:quranguideonlineh@gmail.com?subject=Inquiry%20-%20Al%20Huda%20Quran%20Academy&body=Assalamu%20Alaikum,%0A%0AI%20am%20interested%20in%20enrolling%20in%20classes%20with%20Al%20Huda%20Quran%20Academy.`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#047857] mb-2 uppercase tracking-wider">
            <span>Get in Touch Anytime</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Contact Al Huda Quran Academy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Our admissions team is available 24/7 across all global timezones. Contact us via WhatsApp, email, or send us a message below.
          </p>
        </div>

        {/* 2-Column Split: Contact Channels & Form on Left, FAQs on Right */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Instant WhatsApp/Email Quick Action + Contact Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#064e3b]">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    +44 7392 601955 (Instant Reply)
                  </div>
                </div>
              </a>

              {/* Email Button */}
              <a
                href={mailtoUrl}
                className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#064e3b] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#064e3b]">
                    Send Direct Email
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate max-w-[150px]">
                    quranguideonlineh@gmail.com
                  </div>
                </div>
              </a>
            </div>

            {/* Message Form */}
            <div className="bg-[#fafaf8] border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                We respond within 30 minutes during standard hours.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                  <div className="w-12 h-12 bg-[#064e3b] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Jazakum Allahu Khairan! Message Received
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    Our academic coordinator will reach out to you via WhatsApp / Email at <strong>{formData.whatsapp || formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#064e3b] underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Brother Tariq"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+44 7123 456789"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Country / City
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United Kingdom, USA"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can help you or your children..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#064e3b] bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-[#064e3b] hover:bg-[#047857] rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions Accordion */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Everything you need to know about starting your Quran journey with Al Huda Academy.
            </p>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#064e3b] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#064e3b]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

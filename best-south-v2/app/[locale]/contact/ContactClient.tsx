'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactClient() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('form.success'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen py-section-padding">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-12">
          <h1 className="font-h1 text-h1 text-center text-navy mb-6">{t('title')}</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form liên hệ */}
          <div className="bg-white p-8 border border-border-light shadow-lg">
            <div className="mb-8">
              <span className="text-primary font-label-caps tracking-widest block mb-4">{t('form.label')}</span>
              <h2 className="font-h2 text-h2 text-navy mb-6">{t('form.title')}</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-label-caps text-outline mb-2">{t('form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-label-caps text-outline mb-2">{t('form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-label-caps text-outline mb-2">{t('form.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-label-caps text-outline mb-2">{t('form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 font-label-caps text-lg hover:bg-primary-container transition-all uppercase"
              >
                {t('form.submit')}
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-8">
            <div className="bg-surface-gray p-8 border border-border-light">
              <h2 className="font-h2 text-h2 text-navy mb-8">{t('info.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary mt-1">location_on</span>
                  <div>
                    <h3 className="font-h3 text-h3 text-navy mb-2">{t('info.address.title')}</h3>
                    <p className="font-body-md text-on-surface-variant">{t('info.address.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary mt-1">phone</span>
                  <div>
                    <h3 className="font-h3 text-h3 text-navy mb-2">{t('info.phone.title')}</h3>
                    <p className="font-body-md text-on-surface-variant">{t('info.phone.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary mt-1">email</span>
                  <div>
                    <h3 className="font-h3 text-h3 text-navy mb-2">{t('info.email.title')}</h3>
                    <p className="font-body-md text-on-surface-variant">{t('info.email.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary mt-1">schedule</span>
                  <div>
                    <h3 className="font-h3 text-h3 text-navy mb-2">{t('info.hours.title')}</h3>
                    <p className="font-body-md text-on-surface-variant">{t('info.hours.value')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-surface-container h-80 border border-border-light flex items-center justify-center shadow-lg">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-primary mb-4">map</span>
                <h3 className="font-h3 text-h3 text-navy mb-2">{t('map.title')}</h3>
                <p className="font-body-md text-on-surface-variant">{t('map.placeholder')}</p>
              </div>
            </div>

            {/* Quick contact */}
            <div className="bg-primary text-white p-8 text-center">
              <h3 className="font-h3 text-h3 mb-4">{t('quick.title')}</h3>
              <p className="font-body-md text-primary-fixed mb-6">{t('quick.description')}</p>
              <a href="tel:+842812345678" className="bg-white text-primary px-8 py-3 font-label-caps hover:bg-primary-fixed hover:text-white transition-all uppercase inline-block">
                {t('quick.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-accent mb-2">CONTACT</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-text-main">
            お問い合わせ
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:py-16">
        <div className="max-w-2xl mx-auto">
          {/* 電話案内 */}
          <div className="bg-bg-secondary p-6 rounded-sm mb-8 text-center">
            <p className="text-sm text-text-main mb-2">お急ぎの方はお電話でお問い合わせください</p>
            <a
              href={`tel:${siteConfig.phoneGeneral.replace(/-/g, '')}`}
              className="font-serif text-2xl text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              {siteConfig.phoneGeneral}
            </a>
            <p className="text-xs text-text-sub mt-1">受付時間 10:00〜19:00（日祝休診）</p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-primary-light rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">&#x2713;</span>
              </div>
              <h2 className="font-serif text-xl font-semibold text-text-main mb-2">
                送信完了
              </h2>
              <p className="text-sm text-text-sub">
                お問い合わせいただきありがとうございます。
                <br />
                2営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-main mb-1">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full border border-border-main rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="kana" className="block text-sm font-medium text-text-main mb-1">
                  フリガナ <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="kana"
                  required
                  className="w-full border border-border-main rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="ヤマダ タロウ"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full border border-border-main rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-1">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border border-border-main rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="090-XXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-text-main mb-1">
                  お問い合わせ種別 <span className="text-red-400">*</span>
                </label>
                <select
                  id="category"
                  required
                  className="w-full border border-border-main rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="counseling">カウンセリング予約</option>
                  <option value="treatment">施術に関するご質問</option>
                  <option value="price">料金に関するご質問</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-main mb-1">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full border border-border-main rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors resize-vertical"
                  placeholder="ご質問・ご相談内容をご記入ください"
                />
              </div>

              <div>
                <label className="flex items-start gap-2 text-sm text-text-sub">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    <a href="/privacy" className="text-primary hover:text-primary-dark underline">
                      プライバシーポリシー
                    </a>
                    に同意の上、送信してください
                  </span>
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-12 py-3 bg-cta text-white rounded-md text-sm font-medium hover:bg-cta-hover transition-colors"
                >
                  送信する
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-8">
          <Breadcrumb items={[{ label: 'お問い合わせ' }]} />
        </div>
      </div>
    </>
  );
}

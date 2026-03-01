import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'LifePortPlus 문의하기 페이지',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto my-10">
      <header className="mb-8 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-sm text-gray-500">We would love to hear from you!</p>
      </header>

      <div className="text-gray-700 leading-relaxed space-y-6">
        <p>
          If you have any questions, feedback, or business inquiries, please feel free to reach out to us. We aim to respond to all inquiries within 2-3 business days.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Contact Information</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="font-semibold w-24">Email:</span>
              <a href="mailto:contact@lifeportplus.com" className="text-blue-600 hover:underline">contact@lifeportplus.com</a>
            </li>
            <li className="flex items-center">
              <span className="font-semibold w-24">Website:</span>
              <a href="https://lifeportplus.com" className="text-blue-600 hover:underline">lifeportplus.com</a>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          * Please note that we do not accept guest post requests or paid link placements at this time.
        </p>
      </div>
    </article>
  );
}

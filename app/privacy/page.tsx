import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy (개인정보처리방침)',
  description: 'LifePortPlus 개인정보처리방침 및 애드센스 쿠키 정책 안내',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto my-10">
      <header className="mb-8 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy (개인정보처리방침)</h1>
        <p className="text-sm text-gray-500">Effective Date: March 1, 2026</p>
      </header>

      <div className="text-gray-700 leading-relaxed space-y-6">
        <p>
          Welcome to LifePortPlus (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">1. Information We Collect</h2>
        <p>
          We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">2. Third-Party Advertisers and Google AdSense</h2>
        <p>
          We use third-party advertising companies to serve ads when you visit our Website. These companies may use information about your visits to our Website and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Google, as a third-party vendor, uses cookies to serve ads on our site.</li>
          <li>Google&apos;s use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet.</li>
          <li>Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-6">3. Cookies and Web Beacons</h2>
        <p>
          Like any other website, LifePortPlus uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">4. Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us using the <a href="/contact" className="text-blue-600 hover:underline">Contact form</a>.
        </p>
      </div>
    </article>
  );
}

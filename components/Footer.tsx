import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} LifePortPlus (lifeportplus.com). All rights reserved.</p>
        </div>
        
        <nav>
          <ul className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                개인정보 처리방침
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-gray-900 transition-colors">
                이용약관
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-gray-900 transition-colors">
                쿠키 정책
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-right">
          <p>문의: tlsfkaus0711@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

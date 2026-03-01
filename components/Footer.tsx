import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} LifePortPlus. All rights reserved.</p>
        </div>
        
        <nav>
          <ul className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <li>
              <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

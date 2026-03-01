'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HeaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-gray-900 tracking-tighter">
          LOGO
        </Link>
        <nav className="flex h-full">
          <ul className="flex space-x-8 h-full">
            <li className="h-full flex items-center">
              <Link 
                href="/" 
                className={`h-full flex items-center border-b-2 px-2 transition-colors ${
                  pathname === '/' ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                연금가이드
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link 
                href="/sub1?content=1" 
                className={`h-full flex items-center border-b-2 px-2 transition-colors ${
                  isActive('/sub1') ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                은퇴전략
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link 
                href="/sub2" 
                className={`h-full flex items-center border-b-2 px-2 transition-colors ${
                  isActive('/sub2') ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                상품비교
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link 
                href="/qna" 
                className={`h-full flex items-center border-b-2 px-2 transition-colors ${
                  isActive('/qna') ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                QnA
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 z-50"></header>}>
      <HeaderContent />
    </Suspense>
  );
}

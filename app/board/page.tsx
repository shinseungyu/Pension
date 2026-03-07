import posts from '@/data/posts.json'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '연금저축 및 노후 준비 게시판 | 2026 연금추천사이트',
  description: '연금저축펀드, IRP, ETF 투자 전략 등 든든한 은퇴 준비를 위한 정보를 나눕니다.',
  alternates: { canonical: '/board' },
}

interface Post {
  id: number
  title: string
  date: string
  category: string
  summary: string
  content: string
  tags: string[]
}

interface Props {
  searchParams: Promise<{ id?: string }>
}

export default async function BoardPage({ searchParams }: Props) {
  const { id } = await searchParams
  const allPosts: Post[] = posts as Post[]

  if (id) {
    const post = allPosts.find((p) => p.id === Number(id))

    if (!post) {
      return (
        <main className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="text-gray-500 mb-4">게시글을 찾을 수 없습니다.</p>
          <Link href="/board" className="text-blue-600 font-medium hover:underline">← 목록으로</Link>
        </main>
      )
    }

    return (
      <main className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Link href="/board" className="mb-8 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          ← 목록으로 돌아가기
        </Link>

        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <div className="mb-4">
            <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
              {post.category}
            </span>
          </div>
          <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl leading-snug">
            {post.title}
          </h1>
          <div className="mb-8 flex flex-wrap gap-4 border-b border-gray-100 pb-6 text-sm text-gray-500">
            <span>📅 {post.date}</span>
            <span>🏷️ {post.tags.join(', ')}</span>
          </div>

          <div className="prose prose-gray max-w-none text-base leading-loose text-gray-800">
            {post.content.split('\n').map((line, i) => (
              line.trim() === ''
                ? <br key={i} />
                : <p key={i} className="mb-2">{line}</p>
            ))}
          </div>
        </article>

        <section className="mt-16">
          <h2 className="mb-6 text-lg font-bold text-gray-900">연금 및 노후 준비, 이런 글도 읽어보세요!</h2>
          <div className="flex flex-col gap-3">
            {allPosts.filter(p => p.id !== post.id).map(p => (
              <Link key={p.id} href={`/board?id=${p.id}`} className="block rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:bg-gray-50">
                <span className="mb-1 inline-block text-xs font-semibold text-blue-600">{p.category}</span>
                <p className="text-base font-semibold text-gray-900">{p.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-16">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            연금 및 투자 정보 게시판
          </h1>
          <p className="mx-auto max-w-xl text-gray-500 leading-relaxed text-pretty">
            든든한 은퇴 준비를 위한 연금저축 펀드, IRP, 그리고 각종 절세 및 투자 전략을 공유합니다.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-6">
          {allPosts.map((post) => (
            <Link key={post.id} href={`/board?id=${post.id}`} className="group flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md sm:flex-row sm:items-start">
              <div className="flex-1">
                <div className="mb-3 flex items-center justify-between sm:justify-start sm:gap-4">
                  <span className="inline-flex rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-2">
                  {post.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

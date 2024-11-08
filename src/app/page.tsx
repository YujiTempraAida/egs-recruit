// page.tsx

'use client'

import Image from 'next/image'
import { useState } from 'react'
import './globals.css'

interface Achievement {
  title: string
  url?: string
  isYouTube: boolean
  imgSrc?: string
}

interface Achievements {
  Smash: Achievement[]
  Works: Achievement[]
  Miscs: Achievement[]
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<keyof Achievements>('Works')

  // 実績セクションのプレースホルダーリンクや画像
  const achievements : Achievements = {
    Smash: [
      { title: '篝火/配信制作', url: 'https://www.youtube.com/embed/i8ZnkVelisM', isYouTube: true },
    ],
    Works: [
      { title: 'LEGENDUS/配信制作', url: 'https://www.youtube.com/embed/57jfsN4qeFM', isYouTube: true },
      { title: '超flat-CS/配信制作', url: 'https://www.youtube.com/embed/Rw7_LlmNZ9k', isYouTube: true }
    ],
    Miscs: [
      { title: 'ワークショップ', imgSrc: '/haishinchu.png', isYouTube: false }
    ]
  }

  return (
    <main style={{ color: '#F2F2F2', textAlign: 'center', backgroundColor: '#191923', paddingBottom: '2rem' }}>
      {/* Hero Section */}
      <section className="py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'AzeretSemiMono', color: '#FFB94B' }}>
          I WANT YOU FOR EGS
        </h1>
        <div className="flex justify-center">
          <Image src="/Icon_white_fill_t.png" alt="EGS Logo" width={200} height={200} />
        </div>
        <p className="text-lg mt-8" style={{ fontFamily: 'NotoSansCJKjp', color: '#F2F2F2' }}>
          技術とスマブラ愛が交差する場所で、新しい挑戦に飛び込もう！
        </p>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'AzeretSemiMono', color: '#FFB94B' }}>実績</h2>
        
        {/* Tabs for Categories */}
        <div className="flex justify-center space-x-4 mb-8">
          {['Smash', 'Works', 'Miscs'].map(category => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category as keyof Achievements)}
              style={{
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                borderBottom: selectedCategory === category ? '3px solid #FFB94B' : '3px solid transparent',
                color: selectedCategory === category ? '#FFB94B' : '#F2F2F2',
                fontFamily: 'NotoSansCJKjp',
              }}
            >
              {category}
            </div>
          ))}
        </div>
        
        {/* Achievements Display */}
        <div>
          {achievements[selectedCategory].map((item, index) => (
            <div key={index} className="mb-4">
              {item.isYouTube ? (
                <iframe
                  width="100%"
                  height="315"
                  src={item.url}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '8px', border: '1px solid #FFB94B' }}
                ></iframe>
              ) : (
                <div className="flex justify-center">
                  <Image
                    src={item.imgSrc || '/haishinchu.png'}  // デフォルト画像として /haishinchu.png を指定
                    alt={item.title}
                    width={600}
                    height={400}
                    style={{ borderRadius: '8px', border: '1px solid #FFB94B' }}
                  />
                </div>
              )}
              <p style={{ fontFamily: 'NotoSansCJKjp', color: '#F2F2F2', marginTop: '0.5rem' }}>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal Candidate Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'AzeretSemiMono', color: '#FFB94B' }}>求める人物像</h2>
        <ul className="list-disc list-inside mx-auto" style={{ maxWidth: '600px', fontFamily: 'NotoSansCJKjp', color: '#F2F2F2' }}>
          <li>ライブ配信やスマブラが大好きな人</li>
          <li>コミュニティの成長に貢献したい人</li>
          <li>新しい技術や学びを楽しめる人</li>
        </ul>
      </section>

      {/* Interview Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'AzeretSemiMono', color: '#FFB94B' }}>先輩からのメッセージ</h2>
        <div className="flex justify-center mb-4">
          <Image src="/20240930-ub-35.webp" alt="先輩からのメッセージ画像" width={400} height={300} style={{ borderRadius: '8px' }} />
        </div>
        <p className="mb-4" style={{ fontFamily: 'NotoSansCJKjp', color: '#F2F2F2' }}>
          「EGSでの経験は、ライブ配信の技術だけでなく、現場でのコミュニケーション力も鍛えられるよ！ぜひ一緒に成長しよう！」
        </p>
        <p style={{ fontFamily: 'NotoSansCJKjp', color: '#FFB94B' }}>– 先輩A</p>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'AzeretSemiMono', color: '#FFB94B' }}>一緒にEGSを盛り上げよう！</h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScQ_jCiT2Yzu3nifCXrRLEhuZbGUFpwV56wiHejyIEmsQ6XYA/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full text-lg"
          style={{
            fontFamily: 'NotoSansCJKjp',
            backgroundColor: '#FFB94B',
            color: '#191923',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          応募する
        </a>
      </section>
    </main>
  )
}

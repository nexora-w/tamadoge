"use client";

import '@/styles/mixins.scss'
import '@/styles/globals.scss'
import '@/styles/shared.scss'
import Script from 'next/script'
import { ReduxProvider } from '@/store/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='page'>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
      <Script defer={false} src='/SmoothScroll.min.js' />
      <Script defer={false} src='/librariesInit.js' />
      <link rel="icon" href="/favicon.png" />
      <title>Tamadoge | Software Engineer</title>
      <meta name="title" content="Tamadoge | Software Engineer" />
      <meta name="keywords" content="frontend development, web developer, HTML, CSS, JavaScript, React, Vue.js, responsive design, web applications, Git, TypeScript, Sass, Nuxt.js, Next.js, user experience, portfolio showcase" />
      <meta name="description" content="
      Explore the portfolio of Tamadoge, a passionate Software Engineer 
      Versatile Software Engineer with over 7 years of experience in full-stack development. Passionate about crafting real-world solutions using clean code, modern frameworks, and decentralized architecture."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="Tamadoge | Software Engineer" />
      <meta property="og:description" content="
      Explore the portfolio of Tamadoge, a passionate front-end web developer 
      Versatile Software Engineer with over 7 years of experience in full-stack development. Passionate about crafting real-world solutions using clean code, modern frameworks, and decentralized architecture." 
      />
      <meta property="og:image" content="/seoImage.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Tamadoge | Software Engineer" />
      <meta property="twitter:description" content="
      Explore the portfolio of Tamadoge, a passionate front-end web developer 
      Versatile Software Engineer with over 7 years of experience in full-stack development. Passionate about crafting real-world solutions using clean code, modern frameworks, and decentralized architecture." 
      />
      <meta property="twitter:image" content="/seoImage.png" />
    </html>
  )
}
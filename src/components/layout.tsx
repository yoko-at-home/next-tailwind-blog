import Head from 'next/head';
import type { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

const name = 'Kotaro';
export const siteTitle = 'Tailwind練習中';

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header />

      <main className='flex-1 bg-gray-200 dark:bg-gray-700 p-20'>
        {/* {name} */}
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

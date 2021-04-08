import Head from 'next/head';
import { Layout, siteTitle } from '../components/layout';
import FeatureSection from '../components/featureSection';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <h1 className='font-mono text-xl code'>
          Welcome to <span className='text-purple-700'>Nextjs</span>,{' '}
          <span className='text-indigo-700'>TailwindCSS</span> and{' '}
          <span className='text-gray-700'>TypeScript</span>
        </h1>
      </main>
      <section className=''>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
        <img
          style={{
            borderRadius: '5px',
            margin: '20px',
            boxShadow: '3px 3px 5px 1px rgba(0, 0, 0, 0.6)',
          }}
          src='https://source.unsplash.com/random/800x700'
          alt=''
        />
      </section>
      <FeatureSection />
    </Layout>
  );
}

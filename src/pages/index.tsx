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
        <div
          style={{
            position: 'relative',
            width: '80vw',
            height: 0,
            paddingTop: '75%',
            margin: '0 auto 5rem',
          }}
        >
          <div
            style={{
              background:
                'url(https://source.unsplash.com/random/800x700) center center / cover no-repeat',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              margin: '3rem auto',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          ></div>
        </div>
      </section>
      <FeatureSection />
    </Layout>
  );
}

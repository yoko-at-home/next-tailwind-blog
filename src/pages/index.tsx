import Head from 'next/head';
import { Layout, siteTitle } from '../components/layout';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
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
      </section>
            <section className='md:container md:mx-auto mt-4'>
        <h2 className='text-3xl'>Blog</h2>
        <ul className='m-5 auto'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='text-lg' key={id}>
              <Link href={`/posts/${id}`}>
                <a className='text-lg mt-5'>{title}</a>
              </Link>
              <br />
              <small className='pb-5'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import Head from 'next/head';
import { Layout, siteTitle } from '../components/layout';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

function blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='md:container md:mx-auto'>
        <p className='text-lg text-gray-500'>KotaもNext.jsに入門しました。</p>
      </section>
      <section className='md:container md:mx-auto mt-4'>
        <h2 className='animate-bounce text-3xl text-yellow-400 hover:text-green-500 hover:translate-x-6'>
          ✨ Blog ✨
        </h2>
        <ul className='m-5 auto'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='text-lg' key={id}>
              <Link href={`/posts/${id}`}>
                <a className='text-2xl mt-5 text-indigo-500 hover:text-pink-400 hover:translate-x-8'>
                  {title}
                </a>
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

export default blog;

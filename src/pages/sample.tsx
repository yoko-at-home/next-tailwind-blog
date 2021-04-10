import { Layout } from '../components/layout';
function sample() {
  return (
    <Layout>
      <section className='md:container md:mx-auto mt-4'>
        <h2 className='text-3xl text-yellow-400 hover:text-green-500'>
          Sample
        </h2>
        <div style={{ textAlign: 'left' }}>
          <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
          <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
            <img
              style={{
                borderRadius: '5px',
                margin: '20px',
                boxShadow: '3px 3px 5px 1px rgba(0, 0, 0, 0.6)',
              }}
              src='https://source.unsplash.com/random/500x400'
              alt=''
            />
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default sample;

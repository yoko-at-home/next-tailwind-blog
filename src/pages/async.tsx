import { Layout } from '../components/layout';
function async() {
  return (
    <Layout>
      <h2>title</h2>
      <div className='grid gap-x-8 gap-y-4 grid-cols-3'>
        <div className='vacation-card'>
          <img
            className='vacation-card-image'
            src='https://source.unsplash.com/random/300x400'
            alt='Beach in Cancun'
          />
          <div className='vacation-card-info'>
            <div>
              <div className='vacation-card-eyebrow'>Private Villa</div>
              <div className='vacation-card-title'>
                <a href='/vacations/cancun'>
                  Relaxing All-Inclusive Resort in Cancun
                </a>
              </div>
              <div className='vacation-card-price'>$299 USD per night</div>
            </div>
          </div>
        </div>
        <div className='vacation-card'>
          <img
            className='vacation-card-image'
            src='https://source.unsplash.com/random/400x400'
            alt='Beach in Cancun'
          />
          <div className='vacation-card-info'>
            <div>
              <div className='vacation-card-eyebrow'>Private Villa</div>
              <div className='vacation-card-title'>
                <a href='/vacations/cancun'>
                  Relaxing All-Inclusive Resort in Cancun
                </a>
              </div>
              <div className='vacation-card-price'>$299 USD per night</div>
            </div>
          </div>
        </div>
        <div className='vacation-card'>
          <img
            className='vacation-card-image'
            src='https://source.unsplash.com/random/500x400'
            alt='Beach in Cancun'
          />
          <div className='vacation-card-info'>
            <div>
              <div className='vacation-card-eyebrow'>Private Villa</div>
              <div className='vacation-card-title'>
                <a href='/vacations/cancun'>
                  Relaxing All-Inclusive Resort in Cancun
                </a>
              </div>
              <div className='vacation-card-price'>$299 USD per night</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default async;

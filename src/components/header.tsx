import Link from 'next/link';
import { useTheme } from 'next-themes';

const items = [
  { href: '/', label: 'Home' },
  { href: '/async', label: '非同期' },
  { href: '/sample', label: 'サンプル' },
  { href: '/blog', label: 'ブログ' },
];

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <header
      className='bg-cover bg-center shadow-2xl'
      style={{
        backgroundImage: 'url(/images/profile.jpg)',
        height: '50vh',
      }}
    >
      <div className=''>
        <button className='text-gray-900 dark:text-white bg-white p-3  mr-5 dark:bg-gray-800 outline-black hover:bg-red-300'>
          nextjs + tailwind
        </button>
        <button
          className='text-white dark:text-gray-900 bg-gray-800 dark:bg-white p-3 outline-black hover:bg-red-300'
          onClick={handleClick}
        >
          Change Theme
        </button>
        <nav>
          {items.map(({ href, label }) => {
            return (
              <Link key={href} href={href}>
                <a
                  style={{
                    display: 'inline-block',
                    padding: 10,
                    margin: 5,
                    outline: 'none',
                    textShadow:
                      'rgba(245, 245, 238, 0.767) 0px 24px 25px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                  }}
                  className='text-gray-800 dark:text-gray-100 hover:text-red-400'
                >
                  {label}
                </a>
              </Link>
            );
          })}
        </nav>
        <div className='inline-flex mt-10 static'>
          <div className='whitespace-nowrap ease-linear delay-1000 duration-1000 transition-colors text-green-400 text-opacity-90 text-3xl hover:text-yellow-400  absolute top-30 left-10'>
            Welcome to
          </div>
          <div className='animate-pulse h-5 w-5 mr-3 duration-700 transition-colors text-green-400 text-opacity-90 text-2xl mt-10 absolute top-20 left-20'>
            ❤
          </div>
          <div className='animate-spin text-2xl absolute top-13 left-40'>
            ✨
          </div>
          <div className='animate-spin text-2xl absolute top-14 left-42'>
            ✨
          </div>
          <div className='animate-spin text-2xl absolute top-60 left-90'>
            ✨
          </div>
          <div
            className='delay-1000 duration-1000 transition-colors font-semibold uppercase text-opacity-70 text-5xl tablet:text-3 tablet:text-center absolute top-60 right-35 text-indigo-500 hover:text-yellow-400'
            style={{
              boxShadow:
                'rgba(235, 231, 10, 0.25) 0px 24px 25px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              outline: '1px solid',
              // borderRadius:'5px'
            }}
          >
            kotaro's wolrd
          </div>
        </div>
      </div>
    </header>
  );
};

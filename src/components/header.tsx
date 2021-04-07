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
      className='bg-cover bg-center'
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
                    padding: 12,
                    outline: 'none',
                  }}
                  className='animate-pulse text-gray-800 dark:text-gray-100 hover:text-red-400'
                >
                  {label}
                </a>
              </Link>
            );
          })}
        </nav>
        <div className='inline-flex mt-10 static absolute top-20 left-20'>
          <div className='whitespace-nowrap animate-ping ease-linear delay-1000 duration-1000 transition-colors text-green-400 text-opacity-90 text-3xl hover:text-yellow-400  absolute top-30 right-15'>
            Welcome to
          </div>
          <div className='animate-pulse h-5 w-5 mr-3 duration-700 transition-colors text-green-400 text-opacity-90 text-2xl mt-10 absolute top-20 left-20'>
            ❤
          </div>
          <div className='animate-pulse h-5 w-5 mr-3 duration-700 transition-colors text-green-400 text-opacity-90 text-4xl mt-10 absolute top-20 left-20'>
            ✨
          </div>
          <div className='animate-pulse h-4 w-4 mr-3 transition-colors text-green-400 text-opacity-90 text-3xl mt-10 absolute top-18 left-18 '>
            ❤
          </div>
          <div className='animate-pulse h-4 w-4 mr-3 transition-colors text-green-400 text-opacity-90 text-4xl mt-10 absolute top-18 left-18'>
            ✨
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
          <div className='whitespace-nowrap animate-bounce delay-1000 duration-1000 transition-colors text-blue-500 text-opacity-70 text-7xl absolute top-60 right-15 hover:text-yellow-400'>
            kotaro's wolrd
          </div>
        </div>
      </div>
    </header>
  );
};

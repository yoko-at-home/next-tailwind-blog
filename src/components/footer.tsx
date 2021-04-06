export const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-800 text-center leading-10'>
      <small className='text-gray-800 dark:text-white' lang='en'>
        @ {new Date().getFullYear()}{' '}
        <a
          color='inherit'
          href='https://twitter.com/yokoiwasaki6'
          target='_blank'
          rel='noopener noreferrer'
        >
          yoko
        </a>
      </small>
    </footer>
  );
};

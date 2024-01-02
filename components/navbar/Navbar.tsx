import { GithubIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <nav className='absolute flex flex-wrap items-center justify-between w-full h-16 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
      <div className='px-10'>Codesnap</div>
      <ul className='flex items-center px-10'>
        <Link href={'https://twitter.com/iamsatish4564'} target='_blank'>
          <Button
            variant={'link'}
            className='text-accent-foreground hover:text-primary'
          >
            <TwitterIcon />
          </Button>
        </Link>
        <Link href={'https://github.com/satishkumarsajjan'} target='_blank'>
          <Button
            variant={'link'}
            className='text-accent-foreground hover:text-primary'
          >
            <GithubIcon />
          </Button>
        </Link>
      </ul>
    </nav>
  );
};

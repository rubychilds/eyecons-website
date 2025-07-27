import Image from 'next/image';
import Link from 'next/link';

import { EyeLinkedin } from '@/lib/eyecons';

export default function Navigation() {
  return (
    <nav className='bg-transparent py-4'>
      <div className='layout flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image
              src='/Eyecons.png'
              alt='Eyecons Logo'
              width={154}
              height={53}
              priority
              className='cursor-pointer'
            />
          </Link>
        </div>

        <div className='flex items-center space-x-6'>
          <Link href='/about' className='text-gray-700 hover:text-gray-900'>
            About
          </Link>
          <Link
            href='mailto:ruby.childs1@gmail.com'
            className='text-gray-700 hover:text-gray-900'
          >
            Contact
          </Link>
          <Link
            href='https://www.linkedin.com/in/rubychilds1'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-gray-900'
          >
            <EyeLinkedin size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

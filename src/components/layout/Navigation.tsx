import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Navigation() {
  return (
    <nav className='bg-white py-4'>
      <div className='layout flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src='/Eyecons.png'
            alt='Eyecons Logo'
            width={100}
            height={100}
            priority
          />
        </div>

        <div className='flex items-center space-x-6'>
          <Link
            href='https://rubychilds.com/about'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-gray-900'
          >
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
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

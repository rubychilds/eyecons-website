import * as React from 'react';

// import UnstyledLink from '@/components/links/UnstyledLink';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

// export default function Header() {
//   return (
//     <header className='sticky top-0 z-50 bg-white'>
//       <div className='layout flex h-14 items-center justify-between'>
//         <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
//           Home
//         </UnstyledLink>
//         <nav>
//           <ul className='flex items-center justify-between space-x-4'>
//             {links.map(({ href, label }) => (
//               <li key={`${href}${label}`}>
//                 <UnstyledLink href={href} className='hover:text-gray-600'>
//                   {label}
//                 </UnstyledLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }
function Logo(props) {
  return (
    <svg viewBox='0 0 880 166' fill='none' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='m78.091 0 5.967 5.676c15.038 14.306 35.323 23.067 57.663 23.067.356 0 .711-.002 1.065-.006l6.363-.08 1.988 6.072a102.026 102.026 0 0 1 5.045 31.782c0 47.391-32.269 87.19-75.928 98.477l-2.163.559-2.163-.559C32.27 153.701 0 113.902 0 66.511c0-11.085 1.769-21.772 5.045-31.782l1.988-6.072 6.363.08c.354.004.71.006 1.065.006 22.34 0 42.625-8.761 57.664-23.067L78.09 0ZM19.846 46.033a84.814 84.814 0 0 0-2.492 20.478c0 38.459 25.662 70.919 60.737 81.006 35.075-10.087 60.738-42.547 60.738-81.006 0-7.071-.866-13.93-2.493-20.478-22.009-1.16-42.166-9.387-58.245-22.453-16.079 13.066-36.235 21.293-58.245 22.453Z'
        fill='#8B5CF6'
      />
      <path
        d='M275.081 58.045c-10.205 0-18.126 3.828-22.696 10.718V29.564h-19.65v107.184h19.65V95.406c0-13.321 7.159-18.987 16.756-18.987 8.835 0 15.08 5.36 15.08 15.772v44.557h19.65V89.741c0-20.365-12.643-31.696-28.79-31.696Zm59.125 48.539h57.426c.457-2.603.762-5.206.762-8.116 0-22.508-15.994-40.423-38.538-40.423-23.916 0-40.214 17.609-40.214 40.423 0 22.815 16.146 40.424 41.737 40.424 14.623 0 26.048-5.972 33.207-16.384l-15.842-9.187c-3.351 4.441-9.444 7.656-17.06 7.656-10.359 0-18.737-4.287-21.478-14.393Zm-.305-15.312c2.285-9.8 9.444-15.465 19.955-15.465 8.225 0 16.451 4.44 18.888 15.465h-38.843Zm88.817-17.915V60.188h-19.65v76.56h19.65v-36.595c0-16.078 12.948-20.671 23.153-19.446v-22.05c-9.596 0-19.193 4.288-23.153 14.7Zm65.027 65.535c22.392 0 40.366-17.609 40.366-40.424 0-22.814-17.974-40.423-40.366-40.423s-40.214 17.609-40.214 40.423c0 22.815 17.822 40.424 40.214 40.424Zm0-19.293c-11.577 0-20.564-8.728-20.564-21.13 0-12.403 8.987-21.131 20.564-21.131 11.729 0 20.716 8.728 20.716 21.13 0 12.403-8.987 21.131-20.716 21.131Zm60.892-68.598c6.702 0 12.186-5.512 12.186-12.096 0-6.584-5.484-12.25-12.186-12.25-6.55 0-12.034 5.666-12.034 12.25a12.255 12.255 0 0 0 3.561 8.517 12.126 12.126 0 0 0 8.473 3.58Zm-9.749 85.747h19.65v-76.56h-19.65v76.56Zm70.842 2.144c14.928 0 27.876-7.962 34.426-19.905l-17.06-9.8c-3.047 6.278-9.597 10.106-17.518 10.106-11.729 0-20.412-8.728-20.412-20.825 0-12.25 8.683-20.977 20.412-20.977 7.769 0 14.319 3.981 17.365 10.26l16.908-9.954c-6.245-11.79-19.193-19.752-34.121-19.752-23.153 0-40.214 17.609-40.214 40.423 0 22.815 17.061 40.424 40.214 40.424Zm76.833 0c22.391 0 40.366-17.609 40.366-40.424 0-22.814-17.975-40.423-40.366-40.423-22.392 0-40.214 17.609-40.214 40.423 0 22.815 17.822 40.424 40.214 40.424Zm0-19.293c-11.577 0-20.564-8.728-20.564-21.13 0-12.403 8.987-21.131 20.564-21.131 11.729 0 20.716 8.728 20.716 21.13 0 12.403-8.987 21.131-20.716 21.131Zm93.49-61.554c-10.206 0-18.127 3.828-22.697 10.718v-8.575h-19.65v76.56h19.65V95.406c0-13.321 7.159-18.987 16.756-18.987 8.835 0 15.08 5.36 15.08 15.772v44.557h19.65V89.741c0-20.365-12.643-31.696-28.789-31.696ZM840.7 81.93c0-4.134 3.96-6.277 8.835-6.277 5.636 0 9.901 2.909 12.186 7.809l16.756-9.188c-5.941-10.565-16.604-16.23-28.942-16.23-15.69 0-28.942 8.728-28.942 24.346 0 26.949 39.3 20.824 39.3 32.002 0 4.44-4.265 6.584-10.51 6.584-7.617 0-12.796-3.675-14.928-9.953l-17.061 9.647c5.484 11.79 16.756 18.221 31.989 18.221 16.298 0 30.617-7.962 30.617-24.499 0-28.174-39.3-21.13-39.3-32.462Z'
        fill='#0F172A'
      />
    </svg>
  );
}

// function Container({ className, ...props }) {
//   return (
//     <div
//       className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
//       {...props}
//     />
//   );
// }

// export default function Header() {
//   return (
//     <header className='relative overflow-hidden bg-slate-50 pt-6'>
//       {/* <Image
//         src={require('@/images/beams.jpg')}
//         alt=''
//         className='absolute bottom-0 left-1/2 ml-[-639px] w-[1278px] max-w-none'
//         priority
//         unoptimized
//       /> */}
//       <div className='absolute inset-0 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)]' />
//       <Container className='relative'>
//         <div className='relative z-10 flex items-center justify-between'>
//           <div className='flex items-center gap-4'>
//             <Logo className='h-7' />
//             <Menu as='div' className='relative'>
//               <Menu.Button
//                 aria-label='Version'
//                 className='flex items-center rounded-full border border-slate-700/10 bg-slate-100 py-1.5 pl-2.5 pr-3 text-xs font-semibold text-slate-500 transition hover:border-slate-700/20'
//               >
//                 v2.0.0
//                 <svg viewBox='0 0 6 3' className='ml-2 w-1.5 overflow-visible'>
//                   <path
//                     d='M0 0L3 3L6 0'
//                     fill='none'
//                     stroke='currentColor'
//                     strokeWidth='1.5'
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                   />
//                 </svg>
//               </Menu.Button>
//               <Menu.Items className='absolute top-full mt-1 w-40 rounded-lg bg-white py-2 text-sm font-semibold leading-6 text-slate-700 shadow ring-1 ring-slate-900/5'>
//                 <Menu.Item disabled>
//                   <span className='flex items-center justify-between px-3 py-1 text-violet-500'>
//                     v2.0.0
//                     <svg
//                       viewBox='0 0 24 24'
//                       fill='none'
//                       aria-hidden='true'
//                       className='h-6 w-6'
//                     >
//                       <path
//                         d='m7.75 12.75 2.25 2.5 6.25-6.5'
//                         stroke='currentColor'
//                         strokeWidth='2'
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                       />
//                     </svg>
//                   </span>
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <Link
//                       href='https://v1.heroicons.com'
//                       className={clsx(
//                         'block px-3 py-1',
//                         active && 'bg-slate-50 text-slate-900'
//                       )}
//                     >
//                       v1.0.6
//                     </Link>
//                   )}
//                 </Menu.Item>
//               </Menu.Items>
//             </Menu>
//           </div>
//           <ShareButton>
//             Share<span className='sr-only sm:not-sr-only'> on Twitter</span>
//           </ShareButton>
//         </div>
//         <div className='flex justify-center text-center lg:pt-5 lg:pb-7 lg:text-left'>
//           <div className='flex max-w-[37rem] flex-col py-16 lg:pt-12 lg:pb-11'>
//             <h1 className='mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl'>
//               Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
//             </h1>
//             <div className='order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start'>
//               <p>{`${icons1.length} icons`}</p>
//               <svg
//                 viewBox='0 0 2 2'
//                 aria-hidden='true'
//                 className='w-0.5 fill-current'
//               >
//                 <circle cx='1' cy='1' r='1' />
//               </svg>
//               <p>MIT license</p>
//               <svg
//                 viewBox='0 0 2 2'
//                 aria-hidden='true'
//                 className='w-0.5 fill-current'
//               >
//                 <circle cx='1' cy='1' r='1' />
//               </svg>
//               <p>React &amp; Vue libraries</p>
//             </div>
//             <div className='mt-10 flex justify-center gap-8 lg:justify-start'>
//               <Button href='https://github.com/tailwindlabs/heroicons'>
//                 <svg
//                   viewBox='0 0 24 24'
//                   aria-hidden='true'
//                   className='h-6 w-6 fill-slate-900'
//                 >
//                   <path
//                     fillRule='evenodd'
//                     clipRule='evenodd'
//                     d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z'
//                   />
//                 </svg>
//                 Documentation
//               </Button>
//               <Button href='https://www.figma.com/community/file/1143911270904274171'>
//                 <svg
//                   viewBox='0 0 24 24'
//                   strokeWidth='.895'
//                   aria-hidden='true'
//                   className='h-6 w-6'
//                 >
//                   <path
//                     d='M11.554 4v-.447H8.738a2.553 2.553 0 1 0 0 5.105H11.554V4Z'
//                     fill='#DF5A33'
//                     stroke='#DF5A33'
//                   />
//                   <path
//                     d='M11.554 9.895v-.448H8.738a2.553 2.553 0 0 0 0 5.106H11.554V9.895Z'
//                     fill='#985CF7'
//                     stroke='#985CF7'
//                   />
//                   <path
//                     d='M11.554 15.79v-.448H8.738a2.553 2.553 0 0 0 0 5.105h.132a2.684 2.684 0 0 0 2.684-2.684V15.79Z'
//                     fill='#5ECC89'
//                     stroke='#5ECC89'
//                   />
//                   <path
//                     d='M15.262 9.447a2.553 2.553 0 1 1 0 5.106h-.263a2.553 2.553 0 0 1 0-5.106h.263Z'
//                     fill='#57B9F8'
//                     stroke='#57B9F8'
//                   />
//                   <path
//                     d='M12.446 4v-.447H15.262a2.553 2.553 0 1 1 0 5.105H12.446V4Z'
//                     fill='#EE7A69'
//                     stroke='#EE7A69'
//                   />
//                 </svg>
//                 Get Figma File
//               </Button>
//             </div>
//           </div>
//           <div className='hidden lg:flex lg:flex-auto lg:justify-center'>
//             {/* <Illustration /> */}
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// }

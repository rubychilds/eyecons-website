import * as React from 'react';

// import { HiArrowLeft } from 'react-icons/hi';
import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// import { ChevronUp } from '@/icons/eyecons/Icons';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const renderIcons = (
  icons: any[],
  setSelected: { (value: any): void; (arg0: any): void }
) => {
  return icons.map((icon, i) => {
    return (
      <div
        key={`${icon.name}-${i}`}
        className='mr-8 flex flex-col items-center'
      >
        {/* <IconButton variant='light' icon={} /> */}
        <div
          onClick={() => {
            setSelected(icon);
          }}
          className={clsxm(
            'cursor-pointer',
            'inline-flex items-center justify-center rounded font-medium',
            'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
            'shadow-sm',
            'transition-colors duration-75',
            'min-h-[68px] min-w-[68px] p-1 md:p-2',
            'bg-white text-gray-700',
            'border border-gray-300',
            'hover:bg-gray-100 hover:text-dark',
            'active:bg-white/80 disabled:bg-gray-200'
          )}
        >
          <span
            dangerouslySetInnerHTML={{ __html: icon.svg }}
            className={clsxm('')}
          />
        </div>
        <div className='mt-4 mb-8 text-center text-xs '>
          {capitalizeSplitString(icon.name)}
        </div>
      </div>
    );
  });
};

// From Heroicons.com
function importIcons(r, attrs) {
  return r
    .keys()
    .filter((fileName) => fileName.startsWith('./'))
    .map((fileName) => {
      const name = fileName.slice(2).replace(/\.svg$/, '');
      return {
        name,
        // tags: tags[name] ?? [],
        svg: r(fileName).default.replace('>', ` ${attrs}>`),
      };
    });
}

const icons = importIcons(
  //@ts-ignore
  require.context(`../icons/eyecons`, false, /\.svg$/),
  'class="w-5 h-5"'
);

function Container({ className, ...props }) {
  return (
    <div
      className={clsxm('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
}

function capitalizeSplitString(str) {
  const splitStr = str.split('_');
  const capitalizedStr = splitStr.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedStr.join(' ');
}

function DownloadSVGButton({ filename, svgContent }) {
  const handleDownload = () => {
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Button variant='primary' onClick={handleDownload}>
      Download SVG
    </Button>
  );
}

const SearchBar = () => {
  const searchBarRef = React.useRef<any>();
  const searchInputRef = React.useRef<any>();
  const [query, setSearchQuery] = React.useState('');

  const searchIcon = icons.find((i) => i.name === 'magnifying_glass');
  return (
    <div
      ref={searchBarRef}
      className='pointer-events-none sticky top-0 z-50 -mb-10 overflow-hidden pb-10 sm:-mb-11 sm:pb-11 md:-mb-12 md:pb-12'
    >
      <div className='relative'>
        <div className='pointer-events-auto relative bg-white pb-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)] sm:pb-0 '>
          <Container className='flex flex-col sm:flex-row sm:items-center'>
            <div className='relative flex-auto '>
              <input
                ref={searchInputRef}
                type='search'
                value={query}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label='Search'
                placeholder='Search'
                className='block w-full appearance-none rounded-lg border-0 bg-transparent py-6 pr-4 pl-9 text-base text-slate-900 transition placeholder:text-slate-400 focus:outline-none sm:text-[0.8125rem] sm:leading-6 [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none'
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: searchIcon.svg
                    .replace(
                      'w-5',
                      'pointer-events-none absolute inset-y-0 left-0 h-full w-6 fill-slate-500 transition'
                    )
                    .replace('h-5', 'h-6'),
                  // .replace('fill="none"', 'fill="currentColor"'),
                }}
                className={clsxm(
                  'pointer-events-none absolute inset-y-0 left-0 h-full w-6 fill-slate-500 transition'
                )}
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [selected, setSelected] = React.useState(icons[0]);
  const [color, setColor] = React.useState('#000000');

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout h flex min-h-screen flex-col'>
            <h1 className='mt-4 text-5xl'>Simple and Beautiful Icons.</h1>
            <p className='mt-6 text-4xl text-gray-800'>
              A library of 15x15 icons extending the Radix icon library with
              over 150+ new icons.
            </p>
            <SearchBar />
            <div className='relative flex'>
              <div className='grid w-full max-w-[800px] grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-x-6 gap-y-4 pt-10 pb-16 sm:pt-11 md:pt-12'>
                {renderIcons(icons, setSelected)}
              </div>
              {selected && (
                <div className='sticky top-12 mt-12 flex max-h-[500px] min-w-[275px] flex-col items-center rounded border border-gray-300 p-6'>
                  <div
                    className={clsxm(
                      'inline-flex items-center justify-center rounded font-medium',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
                      'shadow-sm',
                      'transition-colors duration-75',
                      'min-h-[228px] min-w-[228px]',
                      'bg-white text-gray-700',
                      'border border-gray-300',
                      'hover:bg-gray-100 hover:text-dark',
                      'active:bg-white/80 disabled:bg-gray-200'
                    )}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: selected.svg
                          .replace('w-5', 'w-12')
                          .replace('h-5', 'h-12')
                          .replace('currentColor', color),
                      }}
                      className={clsxm('h-12 w-12')}
                    />
                  </div>
                  <div className='my-6 font-bold'>
                    {capitalizeSplitString(selected.name)}
                  </div>
                  <div>
                    <div>
                      <input
                        type='color'
                        id='color'
                        name='color'
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                      />
                    </div>
                  </div>
                  <div className='mt-6'>
                    <DownloadSVGButton
                      filename={selected.name}
                      svgContent={selected.svg}
                    ></DownloadSVGButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

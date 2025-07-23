import * as EyeconsLibrary from 'eyecons-library';
import { matchSorter } from 'match-sorter';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import clsxm from '@/lib/clsxm';

import { tags } from '@/data/tags';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

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
  query,
  setSelected: { (value: any): void; (arg0: any): void }
) => {
  const filteredIcons = query
    ? matchSorter(icons, query.replace(/\s+/, '_'), { keys: ['name', 'tags'] })
    : icons;

  return filteredIcons.map((icon, i) => {
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
            'inline-flex items-center justify-center rounded-[10px] font-medium',
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
        <div className='mb-8 mt-4 text-center text-xs '>
          {capitalizeSplitString(icon.name)}
        </div>
      </div>
    );
  });
};

// Create icons array from eyecons-library
const icons = Object.keys(EyeconsLibrary).map((iconName) => {
  const tagData = tags[iconName];
  const IconComponent = (EyeconsLibrary as any)[iconName];

  // Create SVG string from component
  const svgString = renderToStaticMarkup(
    React.createElement(IconComponent, { className: 'w-5 h-5' })
  );

  return {
    tags: tagData?.tags ?? [],
    new: tagData?.new ?? false,
    name: iconName,
    svg: svgString,
  };
});

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

function CopyBox({ text }) {
  const [copySuccess, setCopySuccess] = React.useState(false);
  const copyIcon = icons.find((i) => i.name === 'Copy');

  function handleCopyClick() {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  }

  return (
    <pre className='copy-box w-full overflow-hidden bg-transparent px-2 py-2'>
      <div className='text break-all'>{text}</div>
      <button className='copy-button' onClick={handleCopyClick}>
        {copyIcon && (
          <span
            dangerouslySetInnerHTML={{ __html: copyIcon.svg }}
            className='inline-block'
          />
        )}
      </button>
      {copySuccess && <div className='copy-success'>Copied to clipboard!</div>}
    </pre>
  );
}

const SearchBar = ({ setQuery, query }) => {
  const searchBarRef = React.useRef<any>();
  const searchInputRef = React.useRef<any>();

  const searchIcon = icons.find((i) => i.name === 'Magnifying_Glass');
  return (
    <div
      ref={searchBarRef}
      className='pointer-events-none sticky top-0 z-50 -mb-10 mt-20 overflow-hidden pb-10 sm:-mb-11 sm:pb-11 md:-mb-12 md:pb-12'
    >
      <div className='relative'>
        <div className='pointer-events-auto relative bg-white pb-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)] sm:pb-0 '>
          <div className='layout flex flex-col sm:flex-row sm:items-center'>
            <div className='relative flex-auto '>
              <input
                ref={searchInputRef}
                type='search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label='Search'
                placeholder='Search'
                className='block w-full appearance-none rounded-[10px] border-0 bg-transparent py-6 pl-10 pr-4 text-2xl text-slate-900 outline-none placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-0 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none'
              />
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    searchIcon?.svg
                      ?.replace('width="15"', 'width="20"')
                      ?.replace('height="15"', 'height="20"')
                      ?.replace('fill="black"', 'fill="currentColor"') || '',
                }}
                className={clsxm(
                  'pointer-events-none absolute inset-y-0 left-0 flex h-full w-8 items-center justify-center text-slate-400'
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [selected, setSelected] = React.useState(icons[0]);
  const [color, setColor] = React.useState('#000000');
  const [query, setSearchQuery] = React.useState('');

  const figmaIcon = icons.find((i) => i.name === 'Figma_Logo');
  const githubIcon = icons.find((i) => i.name === 'GitHub_Logo');

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout h flex min-h-screen flex-col'>
            <h1 className='mt-20 text-5xl'>Simple and Beautiful Icons.</h1>
            <p className='mt-20 text-4xl text-gray-800'>
              A library of 15x15 icons extending the Radix icon library with
              over 150+ new icons.
            </p>
            <div className='mt-12 flex gap-4'>
              <a
                href='https://www.figma.com/community/file/1526760064955383920'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-3 rounded-lg bg-black px-4 py-2 text-lg font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
              >
                {figmaIcon && (
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        figmaIcon.svg
                          ?.replace('width="15"', 'width="20"')
                          ?.replace('height="15"', 'height="20"')
                          ?.replace('fill="black"', 'fill="currentColor"') ||
                        '',
                    }}
                  />
                )}
                View in Figma
              </a>
              <a
                href='https://github.com/rubychilds/eyecons'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-white px-4 py-2 text-lg font-medium text-black transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
              >
                {githubIcon && (
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        githubIcon.svg
                          ?.replace('width="15"', 'width="20"')
                          ?.replace('height="15"', 'height="20"')
                          ?.replace('fill="black"', 'fill="currentColor"') ||
                        '',
                    }}
                  />
                )}
                View on GitHub
              </a>
            </div>
            <SearchBar setQuery={setSearchQuery} query={query} />
            <div className='relative flex'>
              <div className='grid w-full max-w-[800px] grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-x-6 gap-y-4 pb-16 pt-10 sm:pt-11 md:pt-12'>
                {renderIcons(icons, query, setSelected)}
              </div>
              {selected && (
                <div className='sticky top-12 mt-12 flex max-h-[540px] min-w-[275px] flex-col items-center rounded-[10px] border border-gray-300 p-6'>
                  <div
                    className={clsxm(
                      'inline-flex items-center justify-center rounded-[10px] font-medium',
                      'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
                      'shadow-sm',
                      'transition-colors duration-75',
                      'min-h-[228px] min-w-[228px]',
                      'bg-white text-gray-700',
                      'border border-gray-300',
                      'hover:bg-gray-100 hover:text-dark',
                      'active:bg-white/80 disabled:bg-gray-200',
                      'mb-6'
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
                  <div className='mb-6 w-full break-words text-center font-bold'>
                    {capitalizeSplitString(selected.name)}
                  </div>
                  <div className='mb-6 w-full'>
                    <div className='flex items-center gap-3 rounded-[10px] bg-[#F7F7F7] p-3'>
                      <span className='flex-shrink-0 text-sm font-medium text-gray-700'>
                        Color
                      </span>
                      <input
                        type='color'
                        id='color'
                        name='color'
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                        className='h-8 w-8 flex-shrink-0 cursor-pointer rounded-[10px] border-none'
                      />
                      <span className='flex-shrink-0 font-mono text-sm text-gray-600'>
                        {color.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className='mb-6 w-full'>
                    <div className='rounded-[10px] bg-[#F7F7F7] p-3'>
                      <CopyBox text='Test' />
                    </div>
                  </div>
                  <div className='w-full'>
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

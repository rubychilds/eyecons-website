import * as EyeconsLibrary from 'eyecons-library';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function AboutPage() {
  // Get GitHub icon
  const githubIcon = React.useMemo(() => {
    const IconComponent = (EyeconsLibrary as any)['GitHub_Logo'];
    if (!IconComponent) return null;

    const svgString = renderToStaticMarkup(
      React.createElement(IconComponent, { className: 'w-5 h-5' })
    );

    return {
      svg: svgString,
    };
  }, []);

  return (
    <Layout>
      <Seo templateTitle='About' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col py-20'>
            <div className='mx-auto max-w-4xl'>
              <h1 className='mb-8 text-5xl font-bold'>About Eyecons</h1>

              <div className='prose prose-lg max-w-none'>
                <p className='text-xl text-gray-700'>
                  Eyecons is a collection of 15×15 pixel-perfect icons designed
                  to seamlessly extend the Radix icon library, adding over 450
                  new icons to cover a broader range of use cases.
                </p>

                <p className='mt-12 text-lg text-gray-600'>
                  Created by Ruby out of a genuine love for Radix and a need for
                  more variety, Eyecons brings consistent, thoughtful additions
                  to help designers and developers fill in the gaps with
                  confidence and clarity.
                </p>

                <h2 className='mb-6 mt-12 text-3xl font-bold'>Key Features</h2>

                <div className='grid gap-6 md:grid-cols-2'>
                  <div className='rounded-lg border border-gray-200 p-6'>
                    <h3 className='mb-3 text-xl font-semibold'>
                      🎨 450+ Beautiful Icons
                    </h3>
                    <p className='text-gray-600'>
                      Carefully designed 15x15 pixel icons
                    </p>
                  </div>

                  <div className='rounded-lg border border-gray-200 p-6'>
                    <h3 className='mb-3 text-xl font-semibold'>
                      🔍 Smart Search
                    </h3>
                    <p className='text-gray-600'>
                      Instantly find icons with intelligent search
                    </p>
                  </div>

                  <div className='rounded-lg border border-gray-200 p-6'>
                    <h3 className='mb-3 text-xl font-semibold'>
                      🎨 Color Customization
                    </h3>
                    <p className='text-gray-600'>
                      Real-time color picker for icon customization
                    </p>
                  </div>

                  <div className='rounded-lg border border-gray-200 p-6'>
                    <h3 className='mb-3 text-xl font-semibold'>
                      📱 Responsive Design
                    </h3>
                    <p className='text-gray-600'>
                      Works perfectly on all devices
                    </p>
                  </div>

                  <div className='rounded-lg border border-gray-200 p-6'>
                    <h3 className='mb-3 text-xl font-semibold'>
                      ⚡ Fast Performance
                    </h3>
                    <p className='text-gray-600'>
                      Optimized for speed and accessibility
                    </p>
                  </div>

                  <div className='rounded-lg border border-gray-200 p-6'>
                    <h3 className='mb-3 text-xl font-semibold'>
                      📦 Easy Downloads
                    </h3>
                    <p className='text-gray-600'>One-click SVG downloads</p>
                  </div>
                </div>

                <h2 className='mb-6 mt-12 text-3xl font-bold'>Installation</h2>

                <p className='mb-4'>
                  You can install the Eyecons library in your React projects
                  using npm or yarn:
                </p>

                <div className='mb-6 rounded-lg bg-gray-100 p-4'>
                  <h3 className='mb-2 font-semibold'>npm</h3>
                  <code className='rounded bg-gray-200 px-2 py-1 font-mono text-sm'>
                    npm install eyecons-library
                  </code>
                </div>

                <div className='mb-6 rounded-lg bg-gray-100 p-4'>
                  <h3 className='mb-2 font-semibold'>yarn</h3>
                  <code className='rounded bg-gray-200 px-2 py-1 font-mono text-sm'>
                    yarn add eyecons-library
                  </code>
                </div>

                <h3 className='mb-4 text-2xl font-semibold'>Usage</h3>

                <div className='mb-8 rounded-lg bg-gray-100 p-4'>
                  <pre className='text-sm'>
                    <code>{`import { Plus, ArrowRight, Heart } from 'eyecons-library';

function MyComponent() {
  return (
    <div>
      <Plus className='h-5 w-5' />
      <ArrowRight className='h-5 w-5' />
      <Heart className='h-5 w-5' />
    </div>
  );
}`}</code>
                  </pre>
                </div>

                <h2 className='mb-6 mt-12 text-3xl font-bold'>
                  Icon Categories
                </h2>

                <p className='mb-6'>
                  Our icons cover a wide range of categories:
                </p>

                <ul className='grid gap-3 md:grid-cols-2'>
                  <li className='rounded-lg bg-gray-50 p-3'>
                    <strong>UI/UX Elements</strong> - Common interface
                    components
                  </li>
                  <li className='rounded-lg bg-gray-50 p-3'>
                    <strong>Navigation</strong> - Directional and menu icons
                  </li>
                  <li className='rounded-lg bg-gray-50 p-3'>
                    <strong>Communication</strong> - Social media and messaging
                    icons
                  </li>
                  <li className='rounded-lg bg-gray-50 p-3'>
                    <strong>Business</strong> - Professional and corporate icons
                  </li>
                  <li className='rounded-lg bg-gray-50 p-3'>
                    <strong>Technology</strong> - Development and tech-related
                    icons
                  </li>
                  <li className='rounded-lg bg-gray-50 p-3'>
                    <strong>Design</strong> - Creative and artistic icons
                  </li>
                </ul>

                <h2 className='mb-6 mt-12 text-3xl font-bold'>Built With</h2>

                <div className='grid gap-4 md:grid-cols-3'>
                  <div className='rounded-lg bg-gray-50 p-4 text-center'>
                    <strong>Next.js 14</strong>
                    <p className='text-sm text-gray-600'>
                      React framework for production
                    </p>
                  </div>
                  <div className='rounded-lg bg-gray-50 p-4 text-center'>
                    <strong>React 18</strong>
                    <p className='text-sm text-gray-600'>
                      JavaScript library for building user interfaces
                    </p>
                  </div>
                  <div className='rounded-lg bg-gray-50 p-4 text-center'>
                    <strong>TypeScript</strong>
                    <p className='text-sm text-gray-600'>
                      Type safety and better developer experience
                    </p>
                  </div>
                  <div className='rounded-lg bg-gray-50 p-4 text-center'>
                    <strong>Tailwind CSS 3</strong>
                    <p className='text-sm text-gray-600'>
                      Utility-first CSS framework
                    </p>
                  </div>
                  <div className='rounded-lg bg-gray-50 p-4 text-center'>
                    <strong>GT-Flexa Font</strong>
                    <p className='text-sm text-gray-600'>
                      Custom typography for headers
                    </p>
                  </div>
                  <div className='rounded-lg bg-gray-50 p-4 text-center'>
                    <strong>Match Sorter</strong>
                    <p className='text-sm text-gray-600'>
                      Intelligent search functionality
                    </p>
                  </div>
                </div>

                <h2 className='mb-6 mt-12 text-3xl font-bold'>
                  Want to Contribute?
                </h2>

                <p className='mb-6'>
                  We'd love your help making Eyecons even more useful. If you
                  have ideas for new icons or want to contribute your own
                  designs, feel free to share! Whether it's a missing symbol or
                  a unique use case, your input helps the library grow and stay
                  relevant to everyone's needs.
                </p>

                <div className='mb-8 grid gap-4 md:grid-cols-2'>
                  <div className='rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4'>
                    <strong className='text-blue-800'>Add New Icons</strong>
                    <p className='text-blue-700'>
                      Submit SVG icons following our design guidelines
                    </p>
                  </div>

                  <div className='rounded-lg border-l-4 border-green-500 bg-green-50 p-4'>
                    <strong className='text-green-800'>Improve Search</strong>
                    <p className='text-green-700'>
                      Enhance tagging and categorization
                    </p>
                  </div>

                  <div className='rounded-lg border-l-4 border-red-500 bg-red-50 p-4'>
                    <strong className='text-red-800'>Fix Bugs</strong>
                    <p className='text-red-700'>Report and fix issues</p>
                  </div>

                  <div className='rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4'>
                    <strong className='text-purple-800'>Documentation</strong>
                    <p className='text-purple-700'>Help improve our docs</p>
                  </div>
                </div>

                <div className='mt-8 flex justify-center'>
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
                              ?.replace(
                                'fill="black"',
                                'fill="currentColor"'
                              ) || '',
                        }}
                      />
                    )}
                    View on GitHub
                  </a>
                </div>

                <h2 className='mb-6 mt-12 text-3xl font-bold'>
                  About the Author
                </h2>

                <div className='rounded-lg bg-gray-50 p-6'>
                  <h3 className='mb-3 text-xl font-semibold'>Ruby Childs</h3>
                  <p className='mb-4 text-gray-600'>
                    Created by Ruby out of a genuine love for Radix and a need
                    for more variety in the icon ecosystem.
                  </p>
                  <div className='flex gap-4'>
                    <a
                      href='https://rubychilds.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      Website: rubychilds.com
                    </a>
                    <a
                      href='https://twitter.com/rubychilds'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      Twitter: @rubychilds
                    </a>
                    <a
                      href='https://github.com/rubychilds'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      GitHub: @rubychilds
                    </a>
                  </div>
                </div>

                <h2 className='mb-6 mt-12 text-3xl font-bold'>
                  Acknowledgments
                </h2>

                <ul className='space-y-2'>
                  <li>
                    • Built on the foundation of{' '}
                    <a
                      href='https://icons.radix-ui.com/'
                      className='text-blue-600 hover:text-blue-800'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Radix Icons
                    </a>
                  </li>
                  <li>• Inspired by the open-source design community</li>
                  <li>• Thanks to all contributors and users</li>
                </ul>

                <div className='mb-16 mt-16 text-center'>
                  <p className='text-gray-600'>
                    Made with ❤️ by{' '}
                    <a
                      href='https://rubychilds.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      Ruby Childs
                    </a>
                  </p>
                  <p className='text-sm text-gray-500'>
                    © 2025 Eyecons. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

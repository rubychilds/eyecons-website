import Head from 'next/head';
import { useRouter } from 'next/router';

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: 'Eyecons - the icon library by Ruby',
  siteName: 'Eyecons - the icon library by Ruby',
  description:
    'A beautiful collection of 150+ simple icons extending the Radix icon library. Created by Ruby.',
  keywords: 'icons, design',
  author: 'Ruby Childs',
  twitterHandle: '@rubychilds',
  locale: 'en_US',
  imageAlt:
    'Eyecons - A beautiful collection of 150+ simple icons extending the Radix icon library',
  imageWidth: 1230,
  imageHeight: 600,
  imageType: 'image/png',
  tags: ['icons', 'design', 'UI', 'frontend'],
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://eyecons.vercel.app',
  type: 'website',
  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: 'https://eyecons.vercel.app/opengraph-home.png',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: meta.siteName,
    description: meta.description,
    url: `${meta.url}${router.asPath}`,
    author: {
      '@type': 'Person',
      name: meta.author,
    },
    applicationCategory: 'DesignApplication',
    keywords: meta.keywords,
    operatingSystem: 'Web Browser',
    applicationSubCategory: 'Icon Library',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta name='author' content={meta.author} />

      {/* Additional Meta Tags */}
      <meta name='generator' content='Next.js' />
      <meta name='application-name' content='Eyecons' />
      <meta name='apple-mobile-web-app-title' content='Eyecons' />
      <meta name='format-detection' content='telephone=no' />

      {/* Performance & Loading */}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />

      {/* Mobile Optimization */}
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />

      {/* Security Headers */}
      <meta httpEquiv='X-Content-Type-Options' content='nosniff' />
      <meta httpEquiv='X-Frame-Options' content='DENY' />
      <meta httpEquiv='X-XSS-Protection' content='1; mode=block' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:locale' content={meta.locale} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      <meta property='og:image:alt' content={meta.imageAlt} />
      <meta property='og:image:width' content={meta.imageWidth.toString()} />
      <meta property='og:image:height' content={meta.imageHeight.toString()} />
      <meta property='og:image:type' content={meta.imageType} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={meta.twitterHandle} />
      <meta name='twitter:creator' content={meta.twitterHandle} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta name='author' property='article:author' content={meta.author} />
          {meta.tags?.map((tag) => (
            <meta key={tag} property='article:tag' content={tag} />
          ))}
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />

      {/* JSON-LD Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}

// !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
// ! then replace the whole /public/favicon folder and favicon.ico
const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];

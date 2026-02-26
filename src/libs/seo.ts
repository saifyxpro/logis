import type { Metadata } from 'next';

const defaultConfig = {
  defaultTitle: 'Logis Dubai | Sustainable Reverse Logistics',
  titleTemplate: '%s | Logis Dubai',
  description: 'Transforming reverse logistics into a sustainable competitive advantage. Global liquidation, circular economy solutions, and brand protection.',
  canonical: 'https://www.logisdubai.com',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.logisdubai.com',
    siteName: 'Logis Dubai',
    images: [
      {
        url: 'https://www.logisdubai.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Logis Dubai - Sustainable Logistics',
      },
    ],
  },
  twitter: {
    handle: '@logisdubai',
    site: '@logisdubai',
    cardType: 'summary_large_image',
  },
};

export const constructMetadata = ({
  title,
  description = defaultConfig.description,
  image = defaultConfig.openGraph.images[0].url,
  icons = '/logos/favicon.png',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata => {
  return {
    title: title ? {
        template: defaultConfig.titleTemplate,
        default: title, // Use title as default if provided, else fallback in template logic is tricky with Next.js types, simpler to use absolute if needed or rely on template
        absolute: title // If a title is provided here, Next.js usually uses it as the page title. Using 'absolute' overrides the template from layout.
    } : defaultConfig.defaultTitle,
    description,
    openGraph: {
      ...defaultConfig.openGraph,
      title: title ? `${title} | Logis Dubai` : defaultConfig.defaultTitle,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      ...defaultConfig.twitter,
      title: title ? `${title} | Logis Dubai` : defaultConfig.defaultTitle,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(defaultConfig.canonical),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
};

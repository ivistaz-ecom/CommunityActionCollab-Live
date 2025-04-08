import "./globals.css";
import Script from "next/script";

// Create organization schema using the exact format provided
const organizationSchema = {
  "@context": "https://schema.org/",
  "@type": "Organization",
  "name": "Community Action Collab",
  "url": "https://communityactioncollab.org",
  "logo": "https://communityactioncollab.org/images/cac_favicon-150x150.png",
  "sameAs": [
    "https://twitter.com/CommunityAction",
    "https://www.linkedin.com/company/community-action-collab",
    "https://www.facebook.com/CommunityActionCollab"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  }
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://communityactioncollab.org'),
  title: {
    default: 'Community Action Collab',
    template: '%s | Community Action Collab'
  },
  description: 'Community Action Collab - A dynamic humanitarian emergency platform',
  keywords: ['community action', 'humanitarian', 'emergency platform', 'social impact'],
  authors: [{ name: 'Community Action Collab' }],
  creator: 'Community Action Collab',
  publisher: 'Community Action Collab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/cac_favicon-150x150.png',
    shortcut: '/images/cac_favicon-150x150.png',
    apple: '/images/cac_favicon-150x150.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Community Action Collab',
    images: [{
      url: '/images/action_banner.jpeg',
      width: 1200,
      height: 630,
      alt: 'Community Action Collab',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CommunityAction',
    creator: '@CommunityAction',
    images: ['/images/action_banner.jpeg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'application/ld+json': JSON.stringify(organizationSchema),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
        <link rel="icon" href="/images/cac_favicon-150x150.png" />
      </head>
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" />
        
        {/* Start Google Analytics Manager */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-83TXM54R30`}
        />

        <Script strategy="afterInteractive" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-83TXM54R30');
        `}
        </Script>
        {/* End Google Analytics Manager */}

        {/* Google Tag Manager */}
        <Script id="google-tag-manager-start" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5HR9LGG');
        `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HR9LGG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager */}
      </body>
    </html>
  );
}

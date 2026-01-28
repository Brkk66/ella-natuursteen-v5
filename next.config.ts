import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // SEO Redirects: oude URLs → nieuwe URLs (301 permanent)
  async redirects() {
    return [
      // Product categorie redirects
      {
        source: '/product-categorie/keukenbladen',
        destination: '/producten/keukenbladen',
        permanent: true,
      },
      {
        source: '/product-categorie/vensterbanken',
        destination: '/producten/vensterbanken',
        permanent: true,
      },
      {
        source: '/product-categorie/wastafels',
        destination: '/producten/wastafels',
        permanent: true,
      },
      {
        source: '/product-categorie/openhaarden',
        destination: '/producten/openhaarden',
        permanent: true,
      },
      {
        source: '/product-categorie/raamdorpels',
        destination: '/producten/raamdorpels',
        permanent: true,
      },
      {
        source: '/product-categorie/tafelbladen',
        destination: '/producten/tafelbladen',
        permanent: true,
      },
      {
        source: '/product-categorie/spoelbakken',
        destination: '/producten/spoelbakken',
        permanent: true,
      },
      {
        source: '/product-categorie/kranen',
        destination: '/producten/kranen',
        permanent: true,
      },
      {
        source: '/product-categorie/accessoires',
        destination: '/producten/accessoires',
        permanent: true,
      },
      {
        source: '/product-categorie/bbq-blad',
        destination: '/producten/bbq-blad',
        permanent: true,
      },
      // Tegels redirects
      {
        source: '/tegels/vintage-tegels',
        destination: '/tegels/vintage',
        permanent: true,
      },
      {
        source: '/tegels/natuursteen-tegels',
        destination: '/tegels/natuursteen',
        permanent: true,
      },
      // Trailing slash varianten
      {
        source: '/product-categorie/:slug/',
        destination: '/producten/:slug',
        permanent: true,
      },
      {
        source: '/tegels/:slug/',
        destination: '/tegels/:slug',
        permanent: true,
      },
      {
        source: '/materialen/:slug/',
        destination: '/materialen/:slug',
        permanent: true,
      },
      {
        source: '/over-ons/',
        destination: '/over-ons',
        permanent: true,
      },
      {
        source: '/bouwsector/',
        destination: '/bouwsector',
        permanent: true,
      },
      {
        source: '/aanbiedingen/',
        destination: '/aanbiedingen',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/offerte-aanvragen',
        destination: '/offerte',
        permanent: true,
      },
      // Keuken redirect
      {
        source: '/keuken',
        destination: '/keukens',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import React from 'react';
import classNames from 'classnames';
import { Inter, Poppins } from 'next/font/google';
import PropTypes from 'prop-types';

import Footer from '@/Layouts/Footer';
import Header from '@/Layouts/Header';

import './globals.scss';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: false,
});

const inter = Inter({
  variable: '--font-inter',
  preload: false,
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Trang website bán hàng." />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <title>Nguyên Store</title>
      </head>

      <body className={classNames(poppins.variable, inter.variable)}>
        <Header />
        <div className="min-h-[50vh]"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node,
};
RootLayout.defaultProps = {
  children: null,
};

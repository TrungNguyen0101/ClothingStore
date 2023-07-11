import './globals.scss';
import { Inter, Poppins } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${poppins.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

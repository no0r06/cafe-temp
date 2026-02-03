
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = "Zen Garden Korean Cafe" }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Experience tranquility and authentic Korean flavors at Zen Garden Cafe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

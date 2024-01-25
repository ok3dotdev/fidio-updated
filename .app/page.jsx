import Header from '@/app/ui/layout/Header';
import Hero from '@/app/ui/Hero';
import Footer from '@/app/ui/layout/Footer';
import { Landing } from './ui/Landing';

export default function Page() {
  return (
    <main className='relative w-full'>
      <Header />
      <Hero />
      <Landing />
      <Footer />
    </main>
  );
}

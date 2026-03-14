import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { Capabilities } from '@/components/Capabilities';
import { PrivateClients } from '@/components/PrivateClients';
import { Contacts } from '@/components/Contacts';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Process />
      <Capabilities />
      <PrivateClients />
      <Contacts />
    </main>
  );
}

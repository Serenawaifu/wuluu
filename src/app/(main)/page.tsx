import HeroSection from '@/components/sections/Hero';
import AnimeShowcase from '@/components/sections/Showcase';
import CMSIntegration from '@/components/sections/CMSIntegration';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      
      <SectionWrapper>
        <AnimeShowcase />
      </SectionWrapper>

      <SectionWrapper>
        <CMSIntegration />
      </SectionWrapper>
    </main>
  );
}

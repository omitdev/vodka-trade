import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Hero from "@/components/Hero";
import SectionEdge from "@/components/SectionEdge";
import SectionIntegrations from "@/components/SectionIntegrations";
import SectionLaunchpads from "@/components/SectionLaunchpads";
import SectionToolkit from "@/components/SectionToolkit";

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <Hero />
      <SectionEdge />
      <SectionToolkit />
      <SectionIntegrations />
      <SectionLaunchpads />
      <Footer />
    </main>
  );
}

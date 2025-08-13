import Header from "@/components/header";
import ExecutiveSummary from "@/components/executive-summary";
import Certifications from "@/components/certifications";
import Achievements from "@/components/achievements";
import Competencies from "@/components/competencies";
import Projects from "@/components/projects";
import TechnologyStack from "@/components/technology-stack";
import EmploymentTimeline from "@/components/employment-timeline";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-source bg-neutral text-text-dark">
      <Header />
      <ExecutiveSummary />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Certifications />
        <Achievements />
        <Competencies />
        <Projects />
        <TechnologyStack />
        <EmploymentTimeline />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

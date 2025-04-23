import Image from "next/image";
import { Hero } from "@/components/hero";
import { Case } from "@/components/case";
import { Feature } from "@/components/features";
import { Footer } from "@/components/footer";
import { Blog } from "@/components/blog";
import { FAQ } from "@/components/faq";

export default function Home() {
  return(
    <div>
      <Hero />
      <Feature />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}

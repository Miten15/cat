import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed
            aliquam dictum sapien, id sagittis augue malesuada eu.
          </p>
          <p className="mb-4">
            Donec vel mauris quam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis
            fermentum sem, ac viverra ante luctus vel.
          </p>
          <p className="mb-4">
            Donec vel mauris quam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis
            fermentum sem, ac viverra ante luctus vel.
          </p>
          {/* Add more paragraphs or content as needed */}
        </div>
      </section>

      {/* You can add more sections here */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          {/* Add service details or other content */}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          {/* Add contact form or contact information */}
        </div>
      </section>
    </main>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BQC",
  description: "Learn more about our company, mission, and team.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We are dedicated to providing innovative solutions for agricultural needs,
            helping farmers optimize their operations and increase productivity.
          </p>
        </section>

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Founded in [Year], BQC has been at the forefront of agricultural technology,
                developing tools and systems that address the unique challenges faced by
                modern farmers.
              </p>
              <p>
                Through our dedication to innovation and sustainability, we've helped
                hundreds of agricultural businesses transform their operations and achieve
                greater efficiency and profitability.
              </p>
            </div>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              [Company Image Placeholder]
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              [Mission Image Placeholder]
            </div>
            <div>
              <p className="mb-4">
                Our mission is to empower agricultural businesses with data-driven insights
                and advanced technologies that promote sustainable practices and maximize yields.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-2">Our Values</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sustainability in all agricultural practices</li>
                <li>Innovation that solves real-world problems</li>
                <li>Partnership with farmers and agricultural communities</li>
                <li>Excellence in product quality and customer service</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((member) => (
              <div key={member} className="border rounded-lg p-6">
                <div className="bg-muted rounded-full w-24 h-24 mx-auto mb-4"></div>
                <h3 className="text-lg font-medium text-center">Team Member {member}</h3>
                <p className="text-muted-foreground text-center">Position</p>
                <p className="mt-4 text-sm">
                  Brief description about the team member's experience and role in the company.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

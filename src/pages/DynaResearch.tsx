import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import React from "react";

const DynaResearch = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>
          How Monster Laundry Scaled Laundromat Operation with DYNA | DYNA
          Robotics
        </title>
        <meta
          name="description"
          content="Monster Laundry deployed DYNA's robotic foundation model to scale their laundromat operations, increasing throughput and productivity."
        />
      </Helmet>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-24">
        {/* Main Title */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-normal mb-6 leading-tight text-center text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            How Monster Laundry Scaled Laundromat Operation with DYNA
          </h1>
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-none mb-12">
          <p
            className="md:text-3xl text-lg text-center leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            "We nicknamed our DYNA robot 'Sophy Swiftfold.' The deployment was
            incredibly fast. Sophy adapts and learns how to fold to our
            customers' specific needs, meeting our highest standards. With Sophy
            handling the repetitive work, our team can focus on complex
            operations and ensure the best customer experience."
          </p>
          <p
            className="text-base text-center leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Craig & Michelle, Co-Owners, Monster Laundry
          </p>

          {/* Customer Testimonial Video */}
          <div className="mb-16">
            <video
              className="w-full h-auto rounded-lg"
              controls
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="/videos/monster.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* About Monster Laundry */}
        <section className="mb-16">
          <h2
            className="text-2xl font-medium mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            About Monster Laundry
          </h2>
          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Founded in Sacramento, Monster Laundry is a full-service operator
            serving residential and commercial clients with a modern, fully
            attended facility. Known for standardized procedures, clean
            presentation, and reliable turnaround, the company has built a
            strong regional brand while expanding rapidly into pickup and
            delivery.
          </p>
          <p
            className="text-lg leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            In less than two years, Monster Laundry achieved a 3.7× increase in
            drop-off and delivery volume. While this momentum drove an 8.7×
            growth in revenue, the team eventually hit a critical operational
            constraint: folding speed.
          </p>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2
            className="text-2xl font-medium mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            The Challenge: The Folding Bottleneck
          </h2>
          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Folding remained the most labor-intensive bottleneck in the
            facility, limiting overall throughput even with a highly trained
            staff.
          </p>
          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Monster Laundry processes over 1,600 lbs of laundry per week, much
            of which consists of commercial orders for gyms, yoga studios, and
            medical offices. These clients require close attention to detail and
            consistent processing. A typical commercial order might contain 200
            towels that must be cleaned, folded, and packed within 24 hours.
          </p>
          <p
            className="text-lg leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            The team faced a clear challenge: increase folding capacity without
            expanding headcount or compromising the "perfect fold" standard.
          </p>
          <ul
            className="space-y-3 list-disc list-inside mb-12 ml-8 text-lg text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            <li>
              <span className="font-medium">Labor Limits:</span> Before
              deploying DYNA, Monster Laundry had 4 shifts per day with 1
              Laundry Center Attendant per shift. While washing and drying takes
              under 60 minutes and requires minimal attention, folding demands
              the attendant's undivided focus, capping same-day capacity.
            </li>
            <li>
              <span className="font-medium">Space & Cost Constraints:</span>{" "}
              Traditional automated folding systems cost over $300,000 and
              require 100+ square feet of floor space—making them unrealistic
              for a neighborhood laundromat like Monster.
            </li>
          </ul>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2
            className="text-2xl font-medium mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            The Solution: Deploying Sophy Swiftfold
          </h2>
          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Monster partnered with DYNA to deploy the world's production-ready
            robot for laundromats, known internally as Sophy Swiftfold (kudos to
            Michelle!).
          </p>
          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Leveraging DYNA's Robotic Foundation Model (RFM), "Sophy" was able
            to learn Monster's specific folding preferences of each customer and
            achieve consistent high-performance using only a small amount of
            customized data. Unlike traditional automation, Sophy didn't require
            a facility remodel.
          </p>
          <ul
            className="space-y-3 list-disc list-inside mb-12 ml-8 text-lg text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            <li>
              <span className="font-medium">Seamless Integration:</span> Within
              days, Sophy became part of the daily workflow. Attendants simply
              transfer a finished load to the robot and move on to the next
              task, retrieving perfectly folded stacks minutes later.
            </li>
            <li>
              <span className="font-medium">Continuous Learning:</span> "Sophy
              fits right into our SOPs. It keeps learning and gets faster and
              faster over time," says Craig.
            </li>
            <li>
              <span className="font-medium">Accessible ROI:</span> DYNA's
              Robots-as-a-Service (RaaS) subscription model allowed Monster to
              deploy advanced robotics without significant upfront capital,
              lowering the barrier to entry for operational optimization.
            </li>
          </ul>
        </section>

        {/* Key Impact */}
        <section className="mb-16">
          <h2
            className="text-2xl font-medium mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Key Impact
          </h2>
          <ul
            className="space-y-3 list-disc list-inside mb-12 ml-8 text-lg text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            <li>
              <span className="font-medium">
                Increased Throughput & Productivity:
              </span>{" "}
              Monster's attendants process more loads per shift, improving
              overall capacity without adding over 25% Laundry Center Attendant
              for all commercial accounts serviced.
            </li>
            <li>
              <span className="font-medium">
                Scalability & Cost Efficiency:
              </span>{" "}
              With no significant CapEx requirement, DYNA allows Monster to
              scale operations instantly. The system acts as an on-demand labor
              multiplier, eliminating the costs and risks associated with hiring
              and turnover for repetitive tasks.
            </li>
            <li>
              <span className="font-medium">Rapid Learning & Reliability:</span>{" "}
              Powered by DYNA's real-world data training loop, the system
              improves continuously. Over the first few weeks, folding accuracy
              and recovery speed improved significantly to over 70% human speed,
              ensuring steady output across shifts and fabric types.
            </li>
            <li>
              <span className="font-medium">Quality & Consistency:</span> Sophy
              consistently matches Monster's signature fold standard, ensuring
              commercial clients receive the exact presentation they expect,
              every time.
            </li>
            <li>
              <span className="font-medium">
                Employee Engagement & Customer Delight:
              </span>{" "}
              By removing the monotony of folding, attendants can focus on
              high-value tasks like order preparation and customer service.
              Additionally, the presence of cutting-edge robotics has driven a
              15% increase in store traffic.
            </li>
          </ul>
        </section>

        {/* Looking Ahead */}
        <section className="mb-16">
          <h2
            className="text-2xl font-medium mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Looking Ahead
          </h2>
          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Monster Laundry plans to expand into additional sites, with DYNA
            systems slated as standard equipment for high-volume locations. The
            owners view general-purpose robots not just as a tool, but as a core
            investment that extends human capability and safeguards quality as
            their business scales.
          </p>
          <p
            className="text-lg leading-relaxed text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            With DYNA, Monster Laundry runs faster, smarter, and more
            consistently—turning their biggest bottleneck into a reliable engine
            for growth.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DynaResearch;

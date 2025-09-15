import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import React from "react";

const BlogStory = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Dyna Robotics Closes $120M Series A | DYNA Robotics</title>
        <meta
          name="description"
          content="DYNA Robotics announces $120M Series A funding and shares insights on scaling robotic foundation models for the physical world."
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
            Dyna Robotics Closes $120M Series A: How We Think About Scaling
            Robotic Foundation Models
          </h1>
        </div>

        {/* Introduction */}
        <div className="max-w-none mb-12">
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            I'm thrilled to announce that DYNA has{" "}
            <a
              href="https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              raised $120 million in new funding
            </a>{" "}
            just as DYNA turned one year old. We are honored to be backed by a
            group of world-class partners, including Robostrategy, CRV, and
            First Round Capital, with participation from NVIDIA Ventures, Amazon
            Innovation Fund, Salesforce Ventures, Samsung Next, LG Technology
            Ventures and amongst others.
          </p>

          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            This is my second time building an AI-powered hardware company, and
            I'll admit it sounds a little crazy to do it again (and I did say
            that{" "}
            <a
              href="https://techcrunch.com/2021/10/19/instacart-acquires-caper-ai-a-smart-cart-and-instant-checkout-startup-for-350m-as-it-moves-deeper-into-physical-retail-tech/"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caper
            </a>{" "}
            would be my last hardware company). After all, what could be tougher
            than mixing the headaches of hardware scalability with the research
            intensity of frontier foundation models?
          </p>

          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Yet I've never been more energized, because this moment in history
            feels truly singular. The convergence of AI breakthroughs,
            accelerating hardware progress, and the urgency of real-world labor
            challenges has created a once-in-a-generation opportunity. Unlocking
            physical agents is the last frontier to creating unlimited abundance
            for humanity.
          </p>

          <p
            className="text-xl leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            The challenge of this last frontier has drawn world-class talent,
            each with their own philosophy, from humanoids to world models and
            everything in between. With so much entropy and no consensus on the
            right path, it is easy to get lost in the noise.
          </p>

          <p
            className="text-xl leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            This is why first principles matter: they anchor decisions in what
            does not change and serve as the compass through complexity. Robot
            development cycles are unforgiving because one wrong call can ripple
            into months of wasted data, while a misguided research direction can
            set back years of progress. First principles are not just
            philosophy; they are survival.
          </p>

          <p
            className="text-xl leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            While embodied AI companies are grounded in research, the model
            itself isn't the ultimate product—the robots are. So for once, we're
            not talking about research or research principles, but about the
            first principles guiding us in building a world-class robotics
            business, which is something strangely absent from the conversation
            in our industry today.
          </p>

          {/* Image */}
          <div className="mb-16">
            <img
              src="/lovable-uploads/dyna-robot.jpg"
              alt="DYNA Robot"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* DYNA's First Principles */}
        <section className="mb-16">
          <h2
            className="text-3xl font-medium mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            DYNA's First Principles
          </h2>

          {/* Principle 1 */}
          <h3
            className="text-2xl font-medium mb-4 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Principle 1: Physical AGI requires Generalization AND Performance
          </h3>
          <p
            className="text-xl leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Generalist models can't commercialize and specialist models can't
            scale. LLMs benefit from the flexibility of language, where words
            don't need to be exact, but VLAs demand physical precision, where
            every action must be precise.
          </p>
          <p
            className="text-xl leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Our approach goes broad through research and data to drive
            generalization, and deep through commercialization to push for
            performance. Our commercial deployments don't rely on singular
            specialist policies; they are generalist models. Both breadth and
            depth are required to reach Physical AGI.
          </p>

          {/* Principle 2 */}
          <h3
            className="text-2xl font-medium mb-4 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Principle 2: Distribution is King.
          </h3>
          <p
            className="text-xl leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Most people assume the winner in AI is whoever has the best model.
            But if you have watched SOTA leaderboards, you know they reshuffle
            weekly. OpenAI may only be on top part of the time, yet they are
            still considered the king because distribution beats scoreboards.
          </p>
          <p
            className="text-xl leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            In robotics, many think solving embodied GPT-3 is the finish line.
            In reality, it is just the starting gun. Robots cannot be shipped
            overnight on a webpage, and even a perfect model tomorrow would
            still leave the hard part: productionizing. The company that masters
            distribution will win. That is why at DYNA we focus on deployment.
            It jump-starts distribution, forces us to harden research where
            theory meets reality, shows us what customers actually care about,
            and spins up the best flywheel of all: real production data.
          </p>

          {/* Principle 3 */}
          <h3
            className="text-2xl font-medium mb-4 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Principle 3: ROI is Product-Market Fit.
          </h3>
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Solving the model DOES NOT equate to product-market fit for embodied
            AI. Our customers never ask us about success rates. Their sole
            concern is ROI. For a robotics foundation model company to thrive,
            every research endeavor must answer a fundamental question: how does
            our research translate to business outcomes?
          </p>
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            ROI is value over cost. Value comes from throughput and quality ,
            which in the physical world depend on the entire robot stack, not
            just the model. That's why "model-only" companies struggle: meeting
            real-world requirements demands end-to-end control across data,
            inference, control, and hardware. DYNA-1 has already reached 60% of
            human throughput at a stringent{" "}
            <a
              href="https://www.dyna.co/dyna-1/research"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              quality
            </a>{" "}
            bar, a milestone unmatched today. On the cost side, total ownership
            including hardware, durability, maintenance, and downtime must stay
            below thresholds like $50k, or humans remain cheaper. These are
            engineering challenges at scale, which is why we built for them from
            day one.
          </p>
          <p
            className="text-xl leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            <span className="font-medium">Scalable ROI</span> is the ultimate
            goal, as one-off ROI is meaningless. This demands generalization,
            which we categorize into four layers: environment generalization,
            SKU generalization, embodied reasoning, and task generalization.
          </p>

          {/* Principle 4 */}
          <h3
            className="text-2xl font-medium mb-4 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Principle 4: Effortless Data, Enduring Quality.
          </h3>
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            The key obstacle to achieving the performance and generalization
            needed for sustained ROI is scaling the right kind of data.
          </p>
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Embodied AI lags far behind language and multimodal models for a
            simple reason: there isn't enough data, and unlike text on the
            internet, we have to generate it ourselves. This makes data the
            highest-entropy battleground in robotics, and unlike model
            architectures, which can be tweaked or scrapped, the wrong data
            strategy can sink the whole ship. Two things we care about the most:
          </p>
          <ul
            className="space-y-3 list-none list-inside mb-6 text-xl text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            <li>
              <span className="font-medium">Quality:</span> success rate alone
              is not enough. In our deployments, success is table stakes; true
              quality means data that improves generalization, consistency,
              throughput, and robustness. That is why DYNA-1 was built with a
              reward model that optimizes beyond "did it succeed" to include
              robustness and speed. Using a reward model to distill quality is
              critical, because it is the only scalable way to measure and
              improve across millions of actions.
            </li>
            <li>
              <span className="font-medium">Ease of curation:</span> a million
              hours of brute-force data may look good in a pitch deck, but the
              real breakthrough is the ability to effortlessly generate 10,000
              hours of high-quality data every day. Understanding what quality
              truly means, then scaling it aggressively and efficiently. We
              won't talk about our strategy here, but it is surprising that many
              companies don't have a coherent thesis here.
            </li>
          </ul>

          {/* Principle 5 */}
          <h3
            className="text-2xl font-medium mb-4 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Principle 5: Iteration Speed Wins the Race
          </h3>
          <p
            className="text-xl leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            In embodied AI, there's often debate about which research path or
            architecture will ultimately succeed. However, in a high-entropy
            environment, the only way to discover the truth is to move swiftly.
            Iteration reveals what works.
          </p>
          <p
            className="text-xl leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Our focus has been on developing infrastructure that enables rapid
            training, evaluation, and deployment, at both the architectural and
            data levels. At DYNA, we run hundreds of model variants weekly
            across offline and online evals. Over time, this compounding cycle
            of rapid iteration, evaluation, and deployment becomes our ultimate
            competitive advantage.
          </p>

          {/* Founders Image */}
          <div className="mb-16">
            <img
              src="/lovable-uploads/founders.jpg"
              alt="DYNA Founders"
              className="w-full h-full rounded-lg"
            />
          </div>
        </section>

        {/* What Next */}
        <section className="mb-16">
          <h2
            className="text-3xl font-normal mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            What Next
          </h2>

          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            This $120 million will accelerate three critical areas of our
            mission:
          </p>

          <ul
            className="space-y-3 list-disc list-inside mb-12 ml-8 text-xl text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            <li>
              <span className="font-medium">Building a World-Class Team:</span>{" "}
              We're attracting top researchers and engineers who want to build
              the foundational intelligence for the physical world and see their
              work make a real impact in production environments.
            </li>
            <li>
              <span className="font-medium">Infrastructure expansion:</span>{" "}
              Doubling down on our data pipeline and model iteration
              capabilities to handle the exponential growth of data and
              deployment.
            </li>
            <li>
              <span className="font-medium">Use case diversification:</span>{" "}
              Expanding to more diverse environments and tasks to accelerate
              generalization across our foundation model.
            </li>
            <li>
              <span className="font-medium">Continued commercialization:</span>{" "}
              Build the GTM flywheel to continue deployment scale.
            </li>
          </ul>
        </section>

        {/* Join Us */}
        <section className="">
          <h2
            className="text-3xl font-normal mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Join Us
          </h2>
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Our mission is to build high performance general-purpose robots.
          </p>
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            If you are an enterprise looking to solve real-world labor
            challenges, let's set up a pilot.
          </p>
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            If you are a supplier who believes in building for the long term,
            let's talk.
          </p>
          <p
            className="text-xl leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            And if you are a builder who wants to ship, we're HIRING. At Dyna,
            we are offering you a chance to be part of the core engine building
            physical world AGI—to ship your research and see it live on robots,
            solving real problems, within days.
          </p>
          <p
            className="text-xl leading-relaxed text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Join us. Visit us at{" "}
            <a
              href="https://dyna.co/careers"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              dyna.co/careers
            </a>
            .
          </p>{" "}
          <p className="mt-6 text-xl leading-relaxed text-white">
            Read the{" "}
            <a
              href="https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              press release.
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogStory;

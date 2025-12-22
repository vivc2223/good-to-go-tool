import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface AutoPlayYouTubeProps {
  videoId: string;
  title: string;
}

const AutoPlayYouTube: React.FC<AutoPlayYouTubeProps> = ({ videoId, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setIsVisible(true);
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <div ref={containerRef} className="w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1${isVisible ? '&autoplay=1&mute=1' : ''}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

const OpenWorldDexterity = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Open-World Dexterity and Live Demos around the World | DYNA Robotics</title>
        <meta
          name="description"
          content="DYNA-1i achieves cross-environment generalization, enabling robust dexterous manipulation in unseen environments with minimal training data."
        />
      </Helmet>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-24">
        {/* Main Title */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1
            className="font-normal mb-6 leading-tight text-center text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontSize: "48px",
            }}
          >
            Open-World Dexterity and Live Demos around the World
          </h1>
        </div>

        {/* Introduction */}
        <div className="max-w-none mb-12">
          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Robot foundation models must achieve both on-task robustness and cross-environment generalization to be deployed at scale. On-task robustness ensures the model can reliably solve a manipulation task, while cross-environment generalization enables deployment in new environments without performance degradation.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            In our initial <Link to="/dyna-1/research" className="underline hover:opacity-80 transition-opacity">DYNA-1 release</Link>, we developed a training recipe for Vision-Language-Action models (VLAs) that achieves exceptional robustness, with a 99%+ success rate on complex manipulation tasks. However, VLA models, including our original DYNA-1 model, still suffer from performance degradation when deployed in environments not represented in the training data. In this short blog post, we share recent results on improving DYNA-1 to efficiently generalize its robust dexterity capabilities to completely unseen environments, bringing us closer to large-scale deployment.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            The improved DYNA-1 (DYNA-1i) can robustly and efficiently execute dexterous manipulation tasks from its training data in unseen environments. Importantly, DYNA-1i's training recipe is data efficient, requiring only tens of hours of post-training data collected entirely in our office. As a case study, we consider the laundry folding task, which requires the robot to continuously pick crumpled shirts from a laundry basket, fold them, and stack them neatly into a pile. Given the large number of possible shirts as well as possible crumpled configurations, this is a highly challenging task for cross-environment generalization.
          </p>

          <p
            className="text-lg leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            By collecting data on only a handful of unique robot stations in the office, we find that DYNA-1i is already capable of generalizing this skill to unseen and drastically different scenes. For example, we tested DYNA-1i in the office entrance lobby and the parking lot and found that the model continues to attain high performance on the task. Quantitatively, we benchmark the model in both seen and unseen environments to rigorously evaluate its ability to generalize. The evaluation consists of 30-minute continuous trials, measuring how many shirts the model can fold consecutively without failure during a 30-minute window. As shown below, DYNA-1i achieves comparable performance across both testing configurations.
          </p>

          {/* Results Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full text-white border-collapse">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="text-left py-4 px-4 text-lg font-medium" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>Environment</th>
                  <th className="text-left py-4 px-4 text-lg font-medium" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>Duration</th>
                  <th className="text-left py-4 px-4 text-lg font-medium" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>Shirts Folded</th>
                  <th className="text-left py-4 px-4 text-lg font-medium" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>Throughput (shirts/hr)</th>
                  <th className="text-left py-4 px-4 text-lg font-medium" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>Avg Quality</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/20">
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>Seen (Office)</td>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>30 min</td>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>22</td>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>~40/hr</td>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>~3+</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>Unseen (Lobby / Parking / CoRL)</td>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>30 min</td>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>20</td>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>~40/hr</td>
                  <td className="py-4 px-4 text-lg" style={{ fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif" }}>~3+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            className="text-lg leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            This result is particularly exciting given the efficiency of the data collection process. Typically, enabling VLA models to generalize to unseen environments requires collecting data across tens or even hundreds of unique environments. With DYNA-1i, we show that the data collection burden can be significantly reduced through sophisticated modeling and data collection techniques.
          </p>
        </div>

        {/* Live Demo and Evaluation Section */}
        <section className="mb-16">
          <h2
            className="font-medium mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontSize: "30px",
            }}
          >
            Live Demo and Evaluation
          </h2>

          <p
            className="text-lg leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Encouraged by these internal results, we demonstrated the model's capabilities to a broader audience by performing live demos and evaluations at robotics conferences. We first demonstrated our model at the Actuate conference, where it performed laundry folding live on stage while our co-founder Jason delivered a keynote talk; see the whole talk here. As shown in the time lapse below, the live stage presents a particularly challenging deployment scenario, with lighting conditions that differ dramatically from typical office or home indoor environments.
          </p>

          {/* First YouTube Video - Actuate Conference */}
          <div className="mb-12">
            <AutoPlayYouTube videoId="Q9HZAtOCjQk" title="DYNA Actuate Conference Keynote" />
          </div>

          <p
            className="text-lg leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Later that week, our team traveled to South Korea to attend the Conference on Robot Learning (CoRL), the annual premier academic conference on robot learning. There, we deployed the same model on a brand new Dynasaur robot during exhibition hours for 3 days straight.
          </p>

          {/* Second YouTube Video - CoRL Conference */}
          <div className="mb-12">
            <AutoPlayYouTube videoId="FT3LayT-wck" title="DYNA CoRL Conference Demo" />
          </div>

          <p
            className="text-lg leading-relaxed mb-12 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            Despite never experiencing the exhibition hall conditions, the model kept performing. In our CoRL demo, the robot was positioned facing conference-goers, which naturally invited many attendees to "mess" with the robot by disturbing the table layout, unfolding sleeves that had already been folded, and even placing completely new t-shirts onto the table for our model to attempt. In all of these cases, DYNA-1i was able to robustly recover and complete the folding as usual.
          </p>
        </section>

        {/* Next Steps Section */}
        <section className="mb-16">
          <h2
            className="font-medium mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontSize: "30px",
            }}
          >
            Next Steps
          </h2>

          <p
            className="text-lg leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            }}
          >
            We are continuously pushing the boundaries of general-purpose and robust robot foundation models. Our goal is to bring this capability to businesses of every size, and unlock embodied AI for everyone. If you are obsessed about pushing the boundaries of embodied AI and building truly capable robots that are ready for production, we encourage you to reach out. We are actively hiring across engineering and research roles!
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OpenWorldDexterity;

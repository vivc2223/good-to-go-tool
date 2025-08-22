import Navigation from "@/components/Navigation";
import { Linkedin, X } from "lucide-react";
import React from "react";

const MoreResearch = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* <Navigation /> */}
      <div className="max-w-5xl mx-auto px-6 pt-12">
        {/* Main Title */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl  md:text-5xl font-light mb-6 leading-tight text-center">
            <span className="font-medium">Dynamism v1 (DYNA-1) Model:</span>
            <br /> A Breakthrough in Performance and Production-Ready Embodied
            AI
          </h1>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl leading-relaxed mb-6">
            At DYNA, our single mandate is to deliver robot performance in the
            real-world, out-of-the-box. Today we're unveiling Dynamism v1
            (DYNA-1)—our first foundation model built for round-the-clock,
            high-throughput dexterous autonomy. This model demonstrates that,
            for the first time, dexterous manipulation is now commercially
            viable.
          </p>

          <p className="text-xl leading-relaxed mb-6">
            DYNA-1 is battle-tested to upscale-restaurant standards. In a
            24-hour run, it folded 850+ napkins autonomously, sustaining ~60% of
            human speed while holding a 99.4% success rate—zero interventions,
            full shift reliability.
          </p>
          <div className="mb-16">
            <video
              className="w-full h-auto rounded-t-lg"
              controls
              loop
              muted
              playsInline
              autoPlay
            >
              <source
                src="/videos/24-hour eval 4-22 eval (combined) v4 LOGO.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className=" mb-6 flex flex-col md:flex-row items-center gap-6">
            <p className="text-xl leading-relaxed md:w-1/2">
              This sustained performance is a step-change for embodied AI.
              Conventional pipelines—bigger models plus broader datasets—still
              stall at ~80% single-episode success on hard dexterity tasks. Most
              of the models drift into unrecoverable states after 30+ minutes of
              demo-runs. We've witnessed it firsthand: even our best baselines
              look solid at first, then after an hour or two lose context and
              can't self-correct.
            </p>
            <div className="md:w-1/2">
              <div className="w-full">
                <video
                  className="w-full h-auto rounded-t-2xl"
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/Larkk1dp08wcktnmyirr4ih6a0k.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="bg-gray-100 p-4 rounded-b-2xl">
                <h5 className="text-base font-medium text-[rgb(0,77,191)] font-mono">
                  Our best internal VLA baseline quickly encounters catastrophic
                  failure states and fails to make further progress. How can we
                  unlock robot foundation models built for round-the-clock
                  dexterous autonomy?
                </h5>
              </div>
            </div>
          </div>

          <p className="text-xl leading-relaxed mb-8">
            In this blog, we will present our unique approach and some of our
            results on unlocking real-world robustness and autonomy, with early
            evidence of generalization across skills.
          </p>

          <div className="mb-8">
            <div
              className="flex overflow-x-auto gap-4 mb-1 bg-gray-200 border border-border/5 rounded-2xl"
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex-shrink-0 w-[26rem] h-64">
                <video
                  className="w-full h-full "
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/Happy-Path-Apr-28-18F91020-917D-4745-810C-8298Df21e2eb-Total1-High-Cam-1X-F1-Label(Condensed).mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex-shrink-0 w-[26rem] h-64">
                <video
                  className="w-full h-full "
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/Happy-Episode-0003-1745373987.716618-High-Label(Condensed).mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex-shrink-0 w-[26rem] h-64">
                <video
                  className="w-full h-full "
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/Happy-Episode-0105-1745435355.8029408-High-Label(Condensed).mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex-shrink-0 w-[26rem] h-64">
                <video
                  className="w-full h-full "
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/Happy-Episode-0146-1745539417.7895224-High-Label(Condensed).mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <h5 className="text-base font-medium text-[rgb(0,77,191)] leading-relaxed font-mono">
              Representative DYNA-1 execution in 1x speed over the courses of
              24-hr continuous deployment. See below for how DYNA-1 robustly
              handles extremely rare states.
            </h5>
          </div>
        </div>

        {/* Our Insights and Approach */}
        <section className="">
          <h2 className="text-3xl font-normal mb-4">
            Our Insights and Approach
          </h2>
          <h4 className="text-xl font-light mb-8 italic">
            "Don't practice until you get it right. Practice until you can't get
            it wrong."
          </h4>
          <p className="text-xl leading-relaxed mb-8">
            At Dyna, we have developed a generalizable recipe for unlocking
            robust and autonomous robot foundation models, with a crucial
            component being an accurate <strong>reward model (RM)</strong>{" "}
            capable of providing nuanced feedback across a diverse range of
            robot experiences. Building upon our prior research, we have
            successfully developed the first scalable foundation reward model
            for robotics.
          </p>
          <p className="text-xl leading-relaxed">
            This model far outperforms previous approaches and can reliably
            estimate task progress on challenging dexterity tasks, like napkin
            folding. This capability unlocks a host of production-critical
            capabilities, such as:
          </p>
          <ol className="list-decimal list-outside space-y-2 mb-12 text-xl pl-6">
            <li>
              <strong className="ml-4">Autonomous Exploration:</strong> Enabling
              the robot to intelligently explore its action space and discover
              effective strategies.
            </li>
            <li>
              <strong className="ml-4">Intentional Error Recovery:</strong>{" "}
              Allowing the robot to identify and autonomously recover from
              mistakes during task execution.
            </li>
            <li>
              <strong className="ml-4">
                High-Quality Dataset Creation and Curation:
              </strong>{" "}
              Facilitating the generation of valuable training data through
              autonomous operation.
            </li>
          </ol>
          <div
            className="flex overflow-x-auto gap-4 mb-8 bg-gray-200 border border-border/5 rounded-2xl"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="flex-shrink-0 w-[26rem] h-64">
              <video
                className="w-full h-full "
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Owr7qv6zxxrwx9vqnyw2my9mqeg.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex-shrink-0 w-[26rem] h-64">
              <video
                className="w-full h-full "
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/P9zbehvmaumd9a7oudaz8o5gasg.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex-shrink-0 w-[26rem] h-64">
              <video
                className="w-full h-full "
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Mhkt0xxmlubg4lkwr0lwau8vgk.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex-shrink-0 w-[26rem] h-64">
              <video
                className="w-full h-full "
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Luvngcmxpoflsq4gqswqmfxy88.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex-shrink-0 w-[26rem] h-64">
              <video
                className="w-full h-full "
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Ztsm6hsiqqylzyvowegqpvphjc.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex-shrink-0 w-[26rem] h-64">
              <video
                className="w-full h-full "
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Ztsm6hsiqqylzyvowegqpvphjc.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <h5 className="text-base font-medium text-[rgb(0,77,191)] mb-6 leading-relaxed font-mono">
            DYNA Reward Model can accurately estimate task progress for
            challenging bi-manual dexterous tasks like napkin folding.
          </h5>
          <div className="w-full flex flex-col md:flex-row items-center gap-2 mb-8">
            <div className="w-full md:w-1/2 h-96">
              <video
                className="w-full h-full object-cover rounded-lg"
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Qwgem5f6hiwiyezu86o7ukzf5bg.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>{" "}
            <div className="p-2 h-96 bg-gray-100 rounded-lg flex items-center justify-center md:w-1/2">
              <h5 className="text-base font-medium text-[rgb(0,77,191)] mb-8 leading-relaxed font-mono">
                A unique challenge we run into at Dyna is how can we make best
                use of the large amount of data autonomously collected by DYNA-1
                during deployment? In continuous deployment settings, robot data
                does not naturally come with episodic boundaries. We have also
                developed an approach that can automatically segment the
                streaming data and provide accurate progress estimation and
                subtask labeling to enhance the model's task understanding.
              </h5>
            </div>
          </div>
          {/* video carousel */}
        </section>

        {/* Continual Improvement */}
        <section className="mb-16">
          <h2 className="text-3xl font-normal mb-8">
            Continual Improvement, Robustness, and Quality
          </h2>

          <p className="text-xl leading-relaxed mb-2">
            By scaling our RM-in-the-loop training, DYNA-1 has leapt forward in
            just a few weeks:
          </p>

          <ul className="space-y-3 list-disc list-inside mb-8 text-xl">
            <li>
              <strong>Week 1:</strong> Base model can complete single success,
              but falls apart after 5 minutes
            </li>
            <li>
              <strong>Week 2:</strong> Ran 1 hours unaided, but compounding
              errors make recovery impossible
            </li>
            <li>
              <strong>Week 3:</strong> Ran 8 hours, but executed only 6-7
              napkins per hour (~10 mins per fold)
            </li>
            <li>
              <strong>Week 4:</strong> Completed our first 24-hour run—but
              managed only ~200 folds at low quality and speed
            </li>
            <li>
              <strong>Week 5:</strong> Completed 24+ hours with ~350 folds at
              decent production-grade quality
            </li>
            <li>
              <strong>Week 6:</strong> Sustained 24+ hours with ~800 folds and
              high production-grade quality
            </li>
          </ul>

          <div className="flex justify-center mb-8">
            <div className="max-w-md w-full">
              <img
                src="/lovable-uploads/MTKJbslH5r2QgWXGCdIgY1HoZ9U.avif"
                alt="Progress chart showing DYNA-1 improvement over weeks"
                className="w-full rounded-t-lg"
              />
              <div className="bg-gray-100 p-4 rounded-b-2xl">
                <h5 className="text-base font-medium text-[rgb(0,77,191)] leading-relaxed font-mono">
                  In continuous deployment settings, robot data does not
                  naturally come with clear episodic boundaries. Our approach
                  can also naturally segment the streaming data and provide
                  accurate progress estimation and subtask labeling to enhance
                  the model's task understanding.
                </h5>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xl leading-relaxed">
              <span className="text-xl font-semibold mb-4">Robustness. </span>
              Over this learning process, DYNA-1 iteratively becomes much better
              at handling extremely difficult and out-of-distribution
              situations. Napkin folding is particularly challenging because:
            </p>

            <ol className="list-decimal list-inside space-y-4 mb-8 text-xl">
              <li>
                <strong>Single-pull precision:</strong> Extracting exactly one
                napkin from a tall stack demands fine control and rapid
                feedback; otherwise the gripper drags out multiple napkins,
                causing misfolds and chaos (as you can see in our videos below).
              </li>
              <li>
                <strong>Flattening:</strong> When a multi-pull leaves napkins
                crumpled, the policy must (1) detect that multiple sheets were
                removed, (2) locate corners folded inward, and (3) separate &
                flatten overlapped layers before refolding. All of which are
                nontrivial dexterous endeavors
              </li>
              <li>
                <strong>Rapid self-recovery:</strong> Once in an
                out-of-distribution state, the robot must untangle the mess and
                resume folding fast enough to keep throughput intact. Every
                extra second spent on edge cases erodes throughput, so the
                policy needs to find the quickest remedy.
              </li>
            </ol>

            <p className="text-xl leading-relaxed mb-6">
              DYNA-1's ability to handle chaotic scenarios even surprised us.
              There are too many to list, but here are a few highlights:
            </p>

            <div
              className="flex overflow-x-auto gap-4 mb-8 bg-gray-200 rounded-2xl"
              style={{ scrollbarWidth: "thin" }}
            >
              <div className="flex-shrink-0 w-96 h-64">
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/Chmagulihf4wiyv7qym53qkgyg.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex-shrink-0 w-96 h-64">
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/0Hmmcysun3cegcfqg82jcsxub4.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex-shrink-0 w-96 h-64">
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/C7jmizavztugvl3sweuup5y3pc4.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex-shrink-0 w-96 h-64">
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/C7jmizavztugvl3sweuup5y3pc4.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex-shrink-0 w-96 h-64">
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay
                >
                  <source
                    src="/videos/pPyyTEGYANi8ZEUvts2Tv7tyJL0.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <h5 className="text-base font-medium text-[rgb(0,77,191)] mb-8 leading-relaxed font-mono">
              DYNA-1 can recover from extremely bad states and progress forward
              with the task. This level of extreme robustness makes DYNA-1
              production-ready.
            </h5>
          </div>

          <div className="mb-8">
            <p className="text-xl leading-relaxed mb-6">
              <span className="text-xl font-bold mb-4">Quality. </span>
              DYNA-1 achieved an unprecedented level of robustness for robot
              foundation models. But at Dyna, we hold ourselves to an even
              higher standard: production-grade quality (grades 4 or 5 out of 5
              point scale). While 98% of folds reach near-perfect quality (grade
              ≥3), only 75% hit our rigorous quality bar. What's the difference?
              Less than ⅓ inch precision on the initial fold separates
              perfection (grade 5) from near-perfection (grade 3).
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Our customers demand perfection—not near perfection—and we
              deliver. Tiny differences define commercial-grade quality at Dyna.
              This level of precision also raises the bar of our research, as
              every research idea is rigorously vetted to ensure measurable and
              significant real-world performance improvement.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-32 mb-8">
              {/* Left: Grade 5 vs Grade 3 */}
              <div className="flex flex-col items-center">
                <p className="text-base leading-relaxed mb-4 text-[rgb(0,77,191)] font-mono text-center">
                  ⬇️ Grade 5 (left) vs. Grade 3 (right)
                </p>
                <img
                  src="/lovable-uploads/gFE1VeOXPWiYfK85eG6ipoDjIY.avif"
                  alt="Grade 5 vs Grade 3 napkin folding comparison"
                  className="h-80 w-56"
                />
              </div>

              {/* Right: DYNA-1 finished napkins */}
              <div className="flex flex-col items-center">
                <p className="text-base leading-relaxed mb-4 text-[rgb(0,77,191)] font-mono text-center">
                  ⬇️ DYNA-1 finished napkins
                </p>
                <img
                  src="/lovable-uploads/soEWXRSGFPz2nJg6aUGhWCi3s4.avif"
                  alt="DYNA-1 finished napkins"
                  className="h-80 w-[26rem]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Environment Generalization */}
        <section className="mb-16">
          <h2 className="text-3xl font-normal mb-4">
            Environment Generalization and Adaptation
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            DYNA-1 achieves{" "}
            <strong>
              zero-shot environment generalization for long-horizon dexterity
            </strong>
            . Although diverse training data can help simple pick-and-place
            skills transfer, long-horizon dexterity demands not just perceptual
            (environment and object diversification) generalization but also
            robust action generalization. Through its extensive runtime
            experience, DYNA-1 has encountered and learned from an immense
            variety of distinct actions and their consequences, guided by our
            reward model. This has enabled it to successfully apply its napkin
            folding skill in a real customer environment without any prior
            training in that specific setting.
          </p>
          <div className="flex flex-col items-center lg:flex-row gap-4 mb-8 px-4">
            <div className="w-full lg:w-1/2">
              <video
                className="w-full h-80 rounded-t-lg object-cover"
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Buzqlpcoyjd7jmzikcthweqygu.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="bg-gray-100 p-4 rounded-b-2xl">
                <h5 className="text-base font-medium text-[rgb(0,77,191)] leading-relaxed font-mono">
                  DYNA-1 can out-of-box perform napkin folding on unseen
                  customer environment.
                </h5>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <video
                className="w-full h-80 rounded-t-lg object-cover"
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/I7s3vWNmpaAX9Qh1X7FGME7wU.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="bg-gray-100 p-4 rounded-b-2xl">
                <h5 className="text-base font-medium text-[rgb(0,77,191)] leading-relaxed font-mono">
                  With small amount of on-site learning, DYNA-1 then becomes a
                  fluent continual napkin folder.
                </h5>
              </div>
            </div>
          </div>
          <p className="text-xl leading-relaxed mb-8">
            That said, zero-shot generalization often sees quality and
            throughput drop. With additional on-site training, DYNA-1 quickly
            improves and becomes adept at continuous folding at a real
            restaurant site. This milestone represents a significant step
            towards our vision of delivering{" "}
            <strong>performance, out of the box</strong>.
          </p>
        </section>

        {/* Additional Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-normal mb-8">Additional Skills</h2>

          <p className="text-xl leading-relaxed mb-6">
            By focusing on dexterity and real-world robustness, we're seeing
            strong positive transfer to other tough commercial tasks, such as
            laundry folding and, at a client's request, cup-filling. DYNA-1 can
            autonomously fold many shirts of different sizes and materials in a
            row and also fill ingredient cups with utmost precision. Cup-filling
            is perhaps the hardest "no-reset" task I've encountered: delicate
            pickup, precise placement, handover, tool use—one slip ends the run.
            Though not perfect yet, DYNA-1 can clear every step while our
            internal baselines fail to move beyond the first step consistently,
            and we achieved this with just 0.7% of our full training dataset
            under 2 weeks from initial task discovery to model validation.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mb-8 px-4">
            <div className="w-full lg:w-1/2">
              <video
                className="w-full h-auto rounded-t-lg"
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Kkujcoa83yflyyrjhjizsxkejo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="bg-gray-100 p-4 rounded-b-2xl md:h-36 h-44">
                <h5 className="text-base font-medium text-[rgb(0,77,191)] leading-relaxed font-mono">
                  DYNA-1 folding many shirts of different fabrics and sizes in a
                  row. Continual deployment and production-grade execution is
                  central to all our development efforts.
                </h5>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <video
                className="w-full h-auto rounded-t-lg"
                controls
                loop
                muted
                playsInline
                autoPlay
              >
                <source
                  src="/videos/Wgkfykgceyoi8dhizws3lkotkjk.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="bg-gray-100 p-4 rounded-b-2xl md:h-36 h-44">
                <h5 className="text-base font-medium text-[rgb(0,77,191)] leading-relaxed font-mono">
                  DYNA-1 attempting the extremely challenging cup-filling tasks;
                  model view perspectives are shown deliberately to better
                  illustrate the fine-grained control aspects of this task.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <h2 className="text-3xl font-normal mb-6">Next Steps</h2>

          <p className="text-xl leading-relaxed mb-6">
            DYNA-1 now folds napkins for paying customers, and we’re unlocking
            more skills to ship into more commercial environments in the coming
            weeks & months. Mastering napkin folding won’t transform daily life,
            but it’s a pivotal step toward making embodied AI commercially
            viable.
          </p>
          <p className="text-xl leading-relaxed mb-6">
            At Dyna, we tackle embodied AI’s toughest problem: scalable,
            production-ready robot foundation models. Our goal is to bring this
            capability to businesses of every size, and unlock embodied AI for
            everyone. If you are obsessed about pushing the boundaries of
            embodied AI and building truly capable robots that are ready for
            production, we encourage you to reach out. We are actively{" "}
            <a
              href="https://ats.rippling.com/en-GB/dyna-careers/jobs"
              className="text-[rgb(0,77,191)]"
            >
              hiring
            </a>{" "}
            across AI research and engineering for both full-time and internship
            positions. Some of our videos also contain an easter egg puzzle; can
            you solve it?
          </p>

          <video
            className="w-full h-auto"
            controls
            loop
            muted
            playsInline
            autoPlay
          >
            <source
              src="/videos/Dyna-Helping-Hands-16X9-V9.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-black/90 py-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center px-4">
            <p className="text-base text-white mb-4 md:mb-0">
              © DYNA Robotics, Inc {new Date().getFullYear()}
            </p>
            <div className="flex flex-row items-center gap-4">
              <a href="https://www.linkedin.com/company/dyna-robotics/">
                <img
                  src="/lovable-uploads/linkedIn.avif"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://x.com/Dynarobotics">
                <img
                  src="/lovable-uploads/X.avif"
                  alt="X"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MoreResearch;

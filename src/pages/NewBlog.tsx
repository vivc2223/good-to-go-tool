import Navbar from "@/components/Navbar";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Tweet } from "react-tweet";

const NewBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>New Blog Post - DYNA Robotics</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium perspiciatis laborum."
        />
        <meta
          name="keywords"
          content="robotics, AI, technology, innovation, lorem ipsum"
        />
        <meta property="og:title" content="New Blog Post - DYNA Robotics" />
        <meta
          property="og:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium perspiciatis laborum."
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Blog Post - DYNA Robotics" />
        <meta
          name="twitter:description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium perspiciatis laborum."
        />
        <link rel="canonical" href="https://www.dyna.co/new-blog" />
      </Helmet>
      <Navbar />
      <main className="mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          {/* Header */}
          <div className="mb-12">
            <h1
              className="mb-6 text-center"
              style={{
                fontFamily:
                  "UntitledSans, system-ui, -apple-system, sans-serif",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: "normal",
                lineHeight: "1.2",
                color: "white",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias praesentium perspiciatis laborum
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "clamp(16px, 4vw, 18px)",
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                }}
              >
                <a
                  href="/blog/new-blog-2"
                  className="text-blue-400"
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Lorem, ipsum.
                </a>
              </div>
              <div className="h-px w-8 bg-white opacity-50"></div>
              <div
                style={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "clamp(16px, 4vw, 18px)",
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                }}
              >
                DYNA Team
              </div>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="mb-12 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oqtWoAywrrY?si=KeyAUIPtePKZ6B7X"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full max-w-2xl"
              style={{ aspectRatio: "560/315" }}
            />
          </div>

          {/* Twitter Posts */}
          <div className="mb-12 space-y-8 flex flex-col items-center">
            <Tweet id="1974040283168772571" />
            <Tweet id="1967917002808566129" />
            <Tweet id="1970261329207288289" />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div
              style={{
                fontFamily:
                  "UntitledSans, system-ui, -apple-system, sans-serif",
                fontSize: "clamp(16px, 4vw, 20px)",
                fontWeight: "normal",
                lineHeight: "1.6",
                color: "white",
              }}
            >
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                incidunt vitae officiis quam reiciendis corporis pariatur est
                rerum nobis eaque! Explicabo voluptates nemo saepe, tenetur quas
                quia sed minus mollitia.
              </p>

              <p className="mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit.
              </p>

              <h2
                className="mb-4 mt-8"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(24px, 5vw, 32px)",
                  fontWeight: "500",
                  lineHeight: "1.3",
                  color: "white",
                }}
              >
                Lorem ipsum consectetur adipisicing
              </h2>

              <p className="mb-6">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi.
              </p>

              <p className="mb-6">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus.
              </p>

              <h2
                className="mb-4 mt-8"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(24px, 5vw, 32px)",
                  fontWeight: "500",
                  lineHeight: "1.3",
                  color: "white",
                }}
              >
                Temporibus autem quibusdam
              </h2>

              <p className="mb-6">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>

              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, suscipit! Cum voluptate consectetur quas numquam
                amet, iusto doloremque blanditiis laborum magni est sit
                excepturi rem voluptatibus veniam aperiam porro neque.
              </p>

              <p className="mb-6">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur? At vero eos et accusamus et
                iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewBlog;

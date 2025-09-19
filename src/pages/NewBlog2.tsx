import Navbar from "@/components/Navbar";
import React from "react";
import { Helmet } from "react-helmet-async";

const NewBlog2 = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>New Blog Post 2 - DYNA Robotics</title>
        <meta
          name="description"
          content="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <meta
          name="keywords"
          content="robotics, AI, technology, innovation, lorem ipsum, blog"
        />
        <meta property="og:title" content="New Blog Post 2 - DYNA Robotics" />
        <meta
          property="og:description"
          content="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Blog Post 2 - DYNA Robotics" />
        <meta
          name="twitter:description"
          content="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <link rel="canonical" href="https://www.dyna.co/new-blog-2" />
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
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div
                style={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "clamp(16px, 4vw, 18px)",
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                }}
              >
                Dec 15, 2025
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
                DYNA Research Team
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="/lovable-uploads/dyna-robots.jpg"
              alt="Blog post 2 featured image"
              className="w-full h-96 object-cover border border-white"
              loading="lazy"
              decoding="async"
            />
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
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident.
              </p>

              <p className="mb-6">
                Sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt.
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
                Sed do eiusmod tempor incididunt
              </h2>

              <p className="mb-6">
                Explicabo nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet consectetur
                adipisci velit.
              </p>

              <p className="mb-6">
                Sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur.
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
                Ut labore et dolore magna aliqua
              </h2>

              <p className="mb-6">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur? At vero eos et accusamus et
                iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti.
              </p>

              <p className="mb-6">
                Atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga.
                Et harum quidem rerum facilis est et expedita distinctio.
              </p>

              <p className="mb-6">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet.
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
                Conclusion
              </h2>

              <p className="mb-6">
                Ut et voluptates repudiandae sint et molestiae non recusandae.
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewBlog2;

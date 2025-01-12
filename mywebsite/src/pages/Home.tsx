import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TimelineLayout } from "@/components/ui/timeline-layout";
import resumeData from "../assets/resume.json";
import Thumbnail from "../assets/thumbnail.png";


export default function Home() {
  const { details, experiences, projects } = resumeData;

  const mediumArticles = [
    {
      title: "Digital Labour: Where are we headed?",
      link: "https://medium.com/@hesxjdbvhb/digital-labour-where-are-we-headed-39ff84c381d4",
      thumbnail: Thumbnail, // Replace with the actual image URL
    },
    {
      title: "Beyond the Crust: Is Web Indexing next?",
      link: "https://medium.com/@hesxjdbvhb/beyond-the-crust-is-indexing-the-next-big-thing-7a70d9e992cf",
      thumbnail: Thumbnail, // Replace with the actual image URL
    },
    {
      title: "Chat with GPT: From Pendulums to Electrons",
      link: "https://medium.com/@hesxjdbvhb/chat-with-gpt-pendulums-to-electrons-43f888472098",
      thumbnail: Thumbnail, // Replace with the actual image URL
    },
  ];
  return (
    <div className="bg-gray-50 text-gray-600 w-screen">
      <div className="flex w-full">
          {/* First Container */}
          <div className="bg-gray-100 p-20 w-3/4">
            {/* Header Section */}
            <header className="mb-12">
              <h1 className="text-5xl font-bold text-left">{details.name}</h1>
              <p className="text-xl text-gray-400 mt-2 text-left">{details.role}</p>
            </header>

            {/* About Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-left mb-4">About Me</h2>
              <p className="text-md text-gray-600 text-left ext-muted-foreground">{details.about}</p>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-3xl font-bold text-left mb-6">Personal Projects</h2>

            {/*
              {projects.map((project, index) => (
                <span key={index} className="text-gray-600 text-sm block">
                  {project.name}
                </span>
              ))}

            */}
            </section>

            {/* Work Experience Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-left mb-6">Professional Experience</h2>
              <div className="mx-auto">
                <TimelineLayout timelineData={experiences} />
              </div>
            </section>
          </div>
          {/* Second Container */}
          <div className="bg-gray-200 p-10 w-1/4 flex flex-col">
          {/* Articles Section */}
          <div className="mb-8">
  <h2 className="text-lg font-bold mb-4">Articles</h2>
  <div className="space-y-6">
    {mediumArticles.map((article, index) => (
      <div key={index}>
        <div className="flex items-center space-x-4">
          {/* Thumbnail */}
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-16 h-auto object-cover rounded"
          />
          {/* Article Content */}
          <div>
            <h2 className="text-lg font-bold">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-400 transition-colors"
              >
                {article.title}
              </a>
            </h2>
          </div>
        </div>
        {/* Divider */}
        {index < mediumArticles.length - 1 && (
          <hr className="border-gray-300 my-4" />
        )}
      </div>
    ))}
  </div>
</div>


            {/* Divider */}
            <div className="h-px bg-gray-400 mb-4"></div>

            {/* Second Section */}
            <div>
                <h2 className="text-lg font-bold">Second Section</h2>
                <p className="text-sm text-gray-600">
                    This is some dummy text for the second section.
                </p>
            </div>
          </div>
      </div>

    </div>
  );
}
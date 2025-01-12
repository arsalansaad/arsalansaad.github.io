import resumeData from "../assets/resume.json";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TimelineLayout } from "@/components/ui/timeline-layout";

const experiences = [
    {
      id: 1,
      name: "XaaS (IDP Platform)",
      title: "Product Manager",
      company: "EXL Digital",
      description: "Designed Explore, a Generative AI tool to enhance customer engagement across 100+ clients. Authored comprehensive PRDs to track progress and ensure alignment with user needs. Developed a dynamic dashboard to monitor and display 15+ critical metrics for evaluating and transacting Machine Learning models, driving product analytics capabilities. Devised a pricing strategy for RFPs and scripted marketing tracks to highlight MLOps and Generative AI features during the XaaS platform launch."
    },
    {
      id: 2,
      name: "Bank Statements Extraction",
      title: "Product Manager",
      company: "EXL Digital",
      description: "Led a cross-functional team to develop a robust bank statement extraction engine, achieving 95% accuracy and reducing FTE costs by 70%. Drafted detailed business workflows and created over 50 Jira stories to ensure project scope clarity and on-time delivery. Authored user and product strategy documents to improve accessibility and facilitate seamless stakeholder communication."
    },
    {
      id: 3,
      name: "Gen AI Evaluation",
      title: "Product Manager",
      company: "Raga.ai",
      description: "Conducted a comparative study of 20+ image generation platforms to gather user insights for Generative AI evaluation. Collaborated with the ML team to develop a ranking algorithm for AI evaluation metrics. Prototyped an MVP for Generative AI evaluation using Figma, incorporating feedback from stakeholders and iterative user testing."
    },
    {
      id: 4,
      name: "AI Camera",
      title: "Product Manager",
      company: "Samsung R&D",
      description: "Benchmarked 25+ camera features across 15+ competing apps, identifying key differentiators through customer interviews and surveys involving 200+ participants. Proposed 9+ AI-powered features to improve HDR performance, low-light imaging, and smart editing capabilities for in-camera processing. Designed a comprehensive PRD with over 10 features and KPIs, along with a 2-year roadmap for the S23 camera, ensuring competitive market positioning."
    },
    {
      id: 5,
      name: "Asset Failure Modelling",
      title: "Software Engineer",
      company: "Honeywell",
      description: "Developed an ML model to detect anomalies in asset data flow, resulting in an 18% reduction in asset costs. Automated customer onboarding to a centralized cloud platform, increasing registrations by 35%. Collaborated with cross-functional teams to integrate the solution into existing workflows, enhancing operational efficiency."
    },
    {
      id: 6,
      name: "Automated Site Creation",
      title: "Software Engineer",
      company: "Honeywell",
      description: "Designed an autonomous simulator for IoT asset data nodes, eliminating 93% of supervised workflows. Implemented automated quality analysis in integrated testing, reducing supervision time by 85% and improving overall system reliability."
    }
  ]

const timelineData = [
    {
      id: 1,
      title: "Bank Statements Extraction",
      company: "Exl Digital",
      projectName: "XaaS (IDP Platform)",
      description:
        "Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework."
    },
    {
      id: 1,
      title: "Bank Statements Extraction",
      company: "Exl Digital",
      projectName: "XaaS (IDP Platform)",
      description:
        "Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework."
    },
    {
      id: 1,
      title: "Bank Statements Extraction",
      company: "Exl Digital",
      projectName: "XaaS (IDP Platform)",
      description:
        "Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework."
    },
  ];

  export default function Profile() {
    return (
        <div className="bg-gray-50 text-gray-600 min-h-screen">
            <div className="flex w-screen">
                {/* First Container */}
                <div className="bg-gray-100 p-4 w-3/4">
                    <p>This is the first container.</p>
                </div>

                {/* Second Container */}
                <div className="bg-gray-200 p-4 w-1/4">
                    <p>This is the second container.</p>
                </div>
            </div>
        </div>
    );
}
"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiNestjs,
  SiBun,
  SiHono,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiRedis,
} from "react-icons/si";
import { TbBrandSvelte } from "react-icons/tb";
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="relative z-10 text-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 animate-float">
              <Image
                src="/images/my.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-white/10 shadow-xl"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slideUp">
              Wongsathon Yawichai
            </h1>
            <p
              className="text-xl text-white/90 mb-6 animate-slideUp"
              style={{ animationDelay: "0.1s" }}
            >
              Full-stack Developer
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/bensoro2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-2xl transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <section className="mb-16 scroll-animate opacity-0">
            <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-primary/80 leading-relaxed">
                  I am a passionate Full Stack Developer based in Chiang Rai,
                  Thailand. After graduating from Chiang Rai Vocational College
                  in 2022, I've dedicated the past year to intensively
                  developing my programming skills through self-study, building
                  mini projects, and taking on freelance work.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  During this year of hands-on experience, I've worked on
                  various projects that have helped me gain practical knowledge
                  in both frontend and backend development. My freelance work
                  has given me valuable experience in working with clients and
                  delivering real-world solutions.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  Currently, I am actively seeking remote opportunities as a
                  Backend Developer. I am particularly interested in Work From
                  Home (WFH) positions that allow me to focus on building robust
                  server-side applications, API development, and database
                  management.
                </p>
                <p className="text-primary/80 leading-relaxed">
                  My goal is to join a team where I can contribute to building
                  efficient, scalable systems while working remotely. I am
                  comfortable with asynchronous communication and have
                  experience with remote collaboration tools from my freelance
                  work.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4 text-primary/70 mt-6 pt-6 border-t border-primary/10">
                <div className="flex items-center gap-2">
                  <MdEmail className="text-xl" />
                  <span>wongsathon.y@cvc.ac.th</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdPhone className="text-xl" />
                  <span>083-821-5898</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <MdLocationOn className="text-xl" />
                  <span>Chiang Rai, Thailand</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16 scroll-animate opacity-0">
            <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    Higher Vocational Certificate
                  </h3>
                  <p className="text-primary/80">
                    Chiang Rai Vocational College
                  </p>
                  <p className="text-primary/60">2020 - 2022</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    Vocational Certificate
                  </h3>
                  <p className="text-primary/80">
                    Chiang Rai Vocational College
                  </p>
                  <p className="text-primary/60">2018 - 2020</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16 scroll-animate opacity-0">
            <h2 className="text-3xl font-bold text-primary mb-6">Skills</h2>
            <div className="grid gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="grid gap-8">
                  {/* Frontend Skills */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Frontend Development
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <FaHtml5 className="text-4xl text-[#E34F26]" />
                        <span className="text-sm text-primary/70">HTML5</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <FaCss3Alt className="text-4xl text-[#1572B6]" />
                        <span className="text-sm text-primary/70">CSS3</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <FaJs className="text-4xl text-[#F7DF1E]" />
                        <span className="text-sm text-primary/70">
                          JavaScript
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiTypescript className="text-4xl text-[#3178C6]" />
                        <span className="text-sm text-primary/70">
                          TypeScript
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <FaReact className="text-4xl text-[#61DAFB]" />
                        <span className="text-sm text-primary/70">React</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiNextdotjs className="text-4xl text-primary" />
                        <span className="text-sm text-primary/70">Next.js</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <TbBrandSvelte className="text-4xl text-[#FF3E00]" />
                        <span className="text-sm text-primary/70">Svelte</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiTailwindcss className="text-4xl text-[#06B6D4]" />
                        <span className="text-sm text-primary/70">
                          Tailwind
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Backend Development
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <FaNode className="text-4xl text-[#339933]" />
                        <span className="text-sm text-primary/70">Node.js</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiExpress className="text-4xl text-primary" />
                        <span className="text-sm text-primary/70">Express</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiNestjs className="text-4xl text-[#E0234E]" />
                        <span className="text-sm text-primary/70">Nest.js</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiBun className="text-4xl text-[#FBF0DF]" />
                        <span className="text-sm text-primary/70">Bun</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiHono className="text-4xl text-[#6BA0F7]" />
                        <span className="text-sm text-primary/70">Hono</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <Image
                          src="/images/elysia.png"
                          alt="Elysia"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                        <span className="text-sm text-primary/70">Elysia</span>
                      </div>
                    </div>
                  </div>

                  {/* Database Skills */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Database
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiMysql className="text-4xl text-[#4479A1]" />
                        <span className="text-sm text-primary/70">MySQL</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiPostgresql className="text-4xl text-[#4169E1]" />
                        <span className="text-sm text-primary/70">
                          PostgreSQL
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiMongodb className="text-4xl text-[#47A248]" />
                        <span className="text-sm text-primary/70">MongoDB</span>
                      </div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Development Tools
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiGit className="text-4xl text-[#F05032]" />
                        <span className="text-sm text-primary/70">Git</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiGithub className="text-4xl text-primary" />
                        <span className="text-sm text-primary/70">GitHub</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiPostman className="text-4xl text-[#FF6C37]" />
                        <span className="text-sm text-primary/70">Postman</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiDocker className="text-4xl text-[#2496ED]" />
                        <span className="text-sm text-primary/70">Docker</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 skill-icon">
                        <SiRedis className="text-4xl text-[#DC382D]" />
                        <span className="text-sm text-primary/70">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="scroll-animate opacity-0">
            <h2 className="text-3xl font-bold text-primary mb-6">Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm project-card">
                <div className="relative h-48">
                  <Image
                    src="/images/new.png"
                    alt="News Website"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    News Website
                  </h3>
                  <p className="text-primary/70 mb-4">
                    A modern news platform with real-time updates and
                    personalized content delivery.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Next.js", "TypeScript", "Express", "MySQL"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/5 text-primary/70 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://github.com/bensoro2/News-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1"
                  >
                    View Project <span className="text-xs">→</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-sm project-card">
                <div className="relative h-48">
                  <Image
                    src="/images/realtimechat.png"
                    alt="Chat Application"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Realtime Chat App
                  </h3>
                  <p className="text-primary/70 mb-4">
                    A real-time chat application with instant messaging and room
                    features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["SvelteKit", "Socket.IO", "MongoDB", "Bun"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/5 text-primary/70 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://github.com/bensoro2/Realtime-Chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1"
                  >
                    View Project <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

import { ExperienceId } from "./experience";
import { SkillId } from "./skills";

export type SkillUsage = { id: SkillId; experienceInMonths: number };

export interface JobSkills {
  experienceId: ExperienceId;
  skills: (SkillId | SkillUsage)[];
}

export const SKILLS_USAGE: JobSkills[] = [
  {
    experienceId: "Microsoft",
    skills: [
      "JavaScript",
      // "TypeScript",
      // { id: "React", experienceInMonths: 3 },
      // { id: "MaterialUI", experienceInMonths: 3 },
      // { id: "HTML", experienceInMonths: 3 },
      // { id: "CSS", experienceInMonths: 3 },
      // { id: "CSSinJS", experienceInMonths: 3 },
      // "NodeJS",
      // "NestJS",
      // "Express",
      // "Fastify",
      // "MongoDB",
      // "Redis",
      // { id: "Docker", experienceInMonths: 2 },
      // "Git",
      // "Jest",
      // "VSCode",
      // "OOP",
      // "FP",
      // "DesignPatterns",
    ],
  },
  {
    experienceId: "Airtel",
    skills: [
      "JavaScript",
      // "TypeScript",
      // "React",
      // "Redux",
      // "MaterialUI",
      // "HTML",
      // "CSS",
      // "SASS",
      // "CSSinJS",
      // { id: "Gatsby", experienceInMonths: 6 },
      // { id: "GraphQL", experienceInMonths: 6 },
      // { id: "NetlifyCMS", experienceInMonths: 6 },
      // "Storybook",
      // "NodeJS",
      // "Express",
      // "Fastify",
      // "SocketIO",
      // "MongoDB",
      // "Redis",
      // { id: "AWS", experienceInMonths: 1 },
      // { id: "Docker", experienceInMonths: 1 },
      { id: "Kubernetes", experienceInMonths: 1 },
      // "Git",
      // { id: "GitlabCI", experienceInMonths: 6 },
      // "Jest",
      // { id: "Cypress", experienceInMonths: 6 },
      // { id: "Sentry", experienceInMonths: 6 },
      // "Webpack",
      // "i18n",
      // "VSCode",
      // "OOP",
      // "FP",
      // "TDD",
      // "DesignPatterns",
    ],
  },
  {
    experienceId: "Freelancer",
    skills: [
      "JavaScript",
      "HTML",
      // "CSS",
      // "NodeJS",
      // "Express",
      // { id: "SocketIO", experienceInMonths: 3 },
      // { id: "MongoDB", experienceInMonths: 6 },
      // { id: "PostgreSQL", experienceInMonths: 4 },
      // "Git",
      // "WebStorm",
      // "OOP",
      // "FP",
      // "DesignPatterns",
    ],
  },
];

export const CONTINUOUSLY_LEARNING_SKILLS: {
  [key in SkillId]?: { dateFrom?: Date; learningTimeRatio?: number };
} = {
  // CSSinJS: { learningTimeRatio: 0.3 },
  // DesignPatterns: { learningTimeRatio: 0.7 },
  // Docker: { learningTimeRatio: 0.2 },
  // Git: {},
  // HTML: { learningTimeRatio: 0.2 },
  JavaScript: {},
  // Jest: { learningTimeRatio: 0.5 },
  // MaterialUI: { learningTimeRatio: 0.2 },
  // MongoDB: { learningTimeRatio: 0.5 },
  // NestJS: { learningTimeRatio: 0.5 },
  // NodeJS: { learningTimeRatio: 0.5 },
  // OOP: {},
  // React: { learningTimeRatio: 0.5 },
  // SocketIO: { learningTimeRatio: 0.5 },
  // TDD: { learningTimeRatio: 0.5 },
  // TypeScript: {},
  // VSCode: {},
  // Webpack: { learningTimeRatio: 0.2 },
};

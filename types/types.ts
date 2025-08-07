// types.ts (NEW FILE - Optional for better structure)

import { ReactNode } from "react";



export type Category =
  | "All"
  | "Web Development"
  | "UI/UX Design"
  | "Digital Marketing"
  | "Content Strategy";

export interface Project {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  desc: string;
  client: string;
  duration: string;
  technologies: string[];
  results: string;
}

export interface Testimonial {
  name: string;
  company: string;
  position: string;
  text: string;
  rating: number;
}


export interface ProcessStep {
  icon: ReactNode;
  title: string;
  desc: string;
}
//define interface for project data
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  process: string[];
  outcome: string;
  image: string;
  modelUrl: string;
  likes: number;
  views: number;
  rating: number;
}

//define interface for project files
export interface ProjectFiles {
  caseStudyUrl: string;
  pdfUrl: string;
  caseStudySummary: string;
}


// projects.js
export const projects = [
  {
    id: 1,
    title: "Automotive Lightweight Frame Design",
    category: "automotive",
    description: "Reducing the overall weight of a vehicle frame without compromising on strength.",
    process: [
      "Created initial sketches to outline frame dimensions and structural elements.",
      "Developed the full frame assembly in SolidWorks, utilizing part modeling, assembly design, and weldment features.",
      "Ran stress and strain simulations to test material behavior under load.",
    ],
    outcome: "Successfully reduced weight by 15% while maintaining frame integrity.",
    image: "/placeholder.svg?height=400&width=600",
    modelUrl: "https://www.bruschitech.com/hs-fs/hubfs/APPLIANCES_CERNIERASCAME_04.jpg?width=750&name=APPLIANCES_CERNIERASCAME_04.jpg",
    likes: 124,
    views: 2340,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Consumer Electronics Housing Design",
    category: "electronics",
    description: "Design a lightweight housing for a portable electronic device with efficient cooling.",
    process: [
      "Designed the initial housing using SolidWorks sheet metal tools.",
      "Performed thermal simulations to ensure optimal cooling.",
    ],
    outcome: "Developed a housing that minimized thermal build-up, resulting in longer product lifespan.",
    image: "/placeholder.svg?height=400&width=600",
    modelUrl: "https://www.suncad.in/wp-content/uploads/2022/08/sheet1.jpg",
    likes: 89,
    views: 1560,
    rating: 4.6,
  },
  {
    id: 3,
    title: "Industrial Pump Assembly",
    category: "industrial",
    description: "Redesign of an industrial pump assembly to improve efficiency and reduce maintenance.",
    process: [
      "Analyzed existing pump design to identify improvement areas.",
      "Created detailed 3D models of all components.",
      "Performed flow simulations to optimize fluid dynamics.",
    ],
    outcome: "Increased pump efficiency by 22% and reduced maintenance frequency by 35%.",
    image: "/placeholder.svg?height=400&width=600",
    modelUrl: "https://tse3.mm.bing.net/th/id/OIP.4jCrk4RH2UZPNXA3s9NOKAHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3",
    likes: 156,
    views: 2890,
    rating: 4.9,
  }
]

const caseStudy = "/files/case-study.pdf"
const specSheet = "/files/spec-sheet.pdf"
// projectFiles.js
export const projectFiles = {
  1: {
    caseStudyUrl: caseStudy,
    pdfUrl: specSheet,
    caseStudySummary: `
      This project explored ways to minimize vehicle frame weight without compromising
      structural integrity. Using SolidWorks, multiple frame concepts were developed
      and tested under simulated real-world loads. Stress analysis showed that the
      final design maintained a safety factor above 2.5 while achieving a 15% weight reduction.
    `
  },
  2: {
    caseStudyUrl: caseStudy,
    pdfUrl: specSheet,
    caseStudySummary: `
      A lightweight, thermally efficient casing for portable electronics was designed
      with sheet metal tools in SolidWorks. The project prioritized manufacturability
      and thermal performance. Simulation results confirmed that the cooling system
      could maintain internal component temperatures within safe limits during heavy use.
    `
  },
  3: {
    caseStudyUrl: caseStudy,
    pdfUrl: specSheet,
    caseStudySummary: `
      The pump redesign focused on improving operational efficiency and lowering
      maintenance costs. Detailed component models were built in SolidWorks,
      followed by CFD simulations to improve impeller performance. The final design
      delivered a 22% performance boost while extending service intervals by 35%.
    `
  }
}


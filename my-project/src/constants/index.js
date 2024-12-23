import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

// Calculate experience duration dynamically
const calculateExperienceDuration = () => {
  const startDate = new Date("2023-04-01");
  const currentDate = new Date();
  const monthsDifference = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());

  const years = Math.floor(monthsDifference / 12);
  const months = monthsDifference % 12;

  return `${years} years and ${months} months`;
};

// Get dynamic experience duration
const experienceDuration = calculateExperienceDuration();

export const HERO_CONTENT = `
I’m an AI/ML enthusiast with almost ${experienceDuration} of software development experience, passionate about creating AI-powered solutions to solve real-world challenges. My expertise includes Machine Learning, NLP, Deep Learning, and Data Visualization.
Currently, as a Software Developer Intern at CircleChess, I lead the development of AI-driven chess bots and advanced gameplay mechanics. I’ve worked with leading institutions and startups on projects like AI trading platforms and AI/ML workshops, fueling my passion for innovation.
Outside of tech, I enjoy football, music, and writing—activities that inspire creativity. Let’s connect and collaborate on AI, technology, or shared interests!`;

export const ABOUT_TEXT = `
I’m an AI/ML enthusiast with over ${experienceDuration} of experience in software development, passionate about creating AI-powered solutions that address real-world challenges. My expertise spans Machine Learning, NLP, Deep Learning, and Data Visualization, and I’m always eager to learn more about emerging technologies that push the boundaries of what's possible.

Currently, I’m a Software Developer Intern at CircleChess, where I lead the development of AI-driven chess bots, enhance gameplay mechanics, and uncover insights using advanced algorithms and large language models. I’ve had the privilege of working with leading institutions and startups, building everything from AI trading platforms to leading workshops on AI/ML, which has fueled my curiosity and passion for this field.

When I’m not diving deep into tech, you’ll likely find me playing online co-op games like Valorant and FIFA, enjoying a game of football, or writing—activities that help me unwind and stay creative. I also love reading and exploring new ideas that inspire me both personally and professionally.

I’m constantly on the lookout for new ways to grow, whether it’s through learning new tech or tackling new challenges. I’m excited to connect with others who share a passion for AI, technology, gaming, football, or even writing. Let’s connect and explore how we can collaborate or exchange ideas!`;

export const EXPERIENCES = [
  {
    year: "04/2023 - Present",
    role: "Software Developer Intern (AI/ML)",
    company: "CircleChess",
    description: [
      "Spearheaded the development of AI-powered chess bots for the CircleChess platform, tailoring gameplay dynamically to match player skill levels and preferences, thereby enhancing user engagement.",
      "Harnessed Large Language Models (LLMs) to identify advanced patterns in chess gameplay, transforming data into actionable insights showcased through Tableau dashboards.",
      "Engineered and deployed sophisticated algorithms for strategy optimization, driving significant improvements in the platform’s gameplay mechanics.",
      "Designed an intelligent chatbot powered by an LLM with a Retrieval-Augmented Generation (RAG) model flow, leveraging the company’s knowledge base to deliver personalized and contextually accurate responses; successfully adopted by over 30,000 users.",
      "Developed and maintained Tableau reports to analyze chess player data, delivering critical insights into performance metrics and gameplay trends.",
      "Enhanced the chess AI by introducing a feature that explains why specific moves are suboptimal, offering logical explanations and alternative strategies. This improvement bridged the gap between recommending moves and fostering deeper player understanding and strategic growth.",
      "Collaborated with cross-functional teams to ensure seamless integration of advanced AI solutions and analytics into the platform, aligning with user experience goals.",
      "Conducted extensive A/B testing and iterative refinements to optimize bot strategies, leading to increased player engagement and retention.",
      "Researched and implemented cutting-edge machine learning techniques to enhance the accuracy, adaptability, and effectiveness of chess bots continuously."
    ],
    technologies: ["Python", "TensorFlow", "Tableau", "LLMs", "Postgres"],
  },
  {
    year: "08/2023 - 06/2024",
    role: "AI/ML Team Member",
    company: "GDSC CIET",
    description: ["Delivered AI/ML workshops and hands-on training sessions, equipping peers with practical expertise in cutting-edge AI technologies and methodologies. Led a series of technical lectures on AI concepts and their real-world applications, fostering a culture of learning and innovation within the university’s tech community."],
    technologies: ["Python", "Scikit-learn", "Google Colab", "NLP"],
  },
  {
    year: "09/2023 - 03/2024",
    role: "AI/ML Intern",
    company: "AlgoImpel",
    description: [
      "Developed a machine learning-driven algorithmic trading platform that improved the accuracy of financial forecasts and decision-making processes.",
      "Researched, implemented, and tested innovative trading models, contributing to the optimization of client portfolios and strategic trading operations.",
      "Built the backend with Python and Django, developing a full website and implementing the logic and mathematical formulas for backtesting multiple trading signals.",
      "Researched methods to integrate machine learning models into algorithmic trading to create a custom trading algorithm, optimizing trading strategies."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Django", "Statistics"],
  },
  {
    year: "10/2023 - 02/2024",
    role: "Research Intern",
    company: "Chitkara University",
    description: [
      "Conducted advanced research in Natural Language Processing (NLP) and deep learning, contributing to the exploration of novel AI applications.",
      "Collaborated with an interdisciplinary team to develop new AI methodologies, driving successful experimental outcomes and research advancements.",
      "Worked on Optical Character Recognition (OCR) image processing, utilizing multiple models to accurately identify human handwriting."
    ],
    technologies: ["Python", "Keras", "PyTorch", "NLP", "OpenCV"],
  },
  {
    year: "04/2023 - 08/2023",
    role: "Artificial Intelligence Intern",
    company: "Skuad",
    description: [
      "Designed and deployed machine learning solutions for predictive analysis, streamlining business processes and enhancing decision-making efficiency.",
      "Successfully integrated machine learning models into existing enterprise systems, leading to measurable improvements in operational performance and automation.",
      "Created multiple machine learning models for object detection to prevent cheating in online exams, incorporating threshold settings and image enhancement logic.",
      "Rewrote the YOLO (You Only Look Once) object detection code from scratch to enhance detection accuracy and efficiency for exam monitoring."
    ],
    technologies: ["Python", "MLOps", "AWS", "Flask", "Deep Learning"],
  },
];

export const PROJECTS = [
  {
    title: "Document Text Categorization",
    image: project1,
    description:
        "Developed a model to categorize document texts based on their content using NLP techniques. I specifically applied this model to speed up the process of finding relevant research papers based on a given abstract. This approach was showcased at an AI summit in front of multiple CEOs, where its real-time categorization capabilities and potential for academic research impressed the audience.",
    technologies: ["Python", "NLP", "Scikit-learn"],
  },
  {
    title: "Recommendation System",
    image: project2,
    description:
        "Designed a recommendation engine based on user preferences and behavior, specifically for books and movies. I used both content-based and collaborative filtering techniques and implemented multiple machine learning models, including XGBoost, to improve recommendation accuracy. A comparative study between different models was conducted to determine the best-performing algorithm.",
    technologies: ["Python", "Machine Learning", "Pandas"],
  },
  {
    title: "Fake Fingerprint Detection",
    image: project3,
    description:
        "Implemented a system to detect fraudulent fingerprints using deep learning. This project involved creating a hardware-software solution that combined temperature and SPO2 readings with an image-matching algorithm to identify fake fingerprints. I presented this solution at the SMART INDIA HACKATHON Finals at the national level, where it was recognized for its innovative approach to security.",
    technologies: ["Python", "Deep Learning", "TensorFlow"],
  },
  {
    title: "Speech Emotion Analysis",
    image: project4,
    description:
        "Analyzed speech to detect emotions using deep learning techniques. I worked on audio processing and cleaning, then utilized the RAVDESS (Ryerson Audio-Visual Database of Emotional Speech and Song) dataset to create a model that identifies human emotions such as happiness, sadness, and anger from speech. This project has applications in fields like customer service and virtual assistants.",
    technologies: ["Python", "Deep Learning", "Librosa"],
  },
];

export const CONTACT = {
  address: "Indirapuram, Ghaziabad, Uttar Pradesh 201014",
  phoneNo: "+91 9873191966 ",
  email: "shibhu.pandey02@gmail.com",
};

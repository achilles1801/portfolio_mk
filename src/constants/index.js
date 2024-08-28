import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    books,
    AI,
    amazon,
    msa,
    car,
    threejs,
    contact,
    matlab,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    python,
    mysql
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "mySQL",
        type: "Backend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: matlab,
        name: "matlab",
        type: "Frontend",
    }

];

export const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "Amazon",
        icon: amazon, 
        iconBg: "#ff9900",
        date: "May 2024 – Aug 2024",
        points: [
            "Developed and implemented a bulk importer tool, reducing manual intervention by 70% and increasing developer capacity by 30%.",
            "Integrated AWS services including AppSync, Lambda, S3, DynamoDB, SNS, and SQS to create a scalable, event-driven architecture.",
            "Implemented exponential backoff for UI polling, reducing server load during high-frequency checks."
        ],
    },
    {
        title: "Software Engineer Fellow",
        company_name: "HeadStarter AI",
        icon: AI, // Replace with the correct icon
        iconBg: "#b0bec5",
        date: "July 2024 – Present",
        points: [
            "Developing 5 AI projects, with the final project targeting 1,000 account creations or $1,000 in revenue."
        ],
    },
    {
        title: "Committee's Director",
        company_name: "MSA (Muslim Student Association)",
        icon: msa,
        iconBg: "#accbe1",
        date: "August 2022 - Present",
        points: [
            "Collaborated with team members to organize events, achieving a consistent turnout of 200+ attendees.",
            "Engaged in weekly interfaith dialogues to foster diversity, inclusivity, and respect among students and staff.",
            "Helped raise $10,000+ for charity through fundraising events and campaigns.",
        ],
    },
    {
        title: "Academic Instructor",
        company_name: "Hamzah Science Academy",
        icon: books,
        iconBg: "#fbc3bc",
        date: "August 2023 - Present",
        points: [
            "Taught comprehensive cultural studies to over 15 students with an engaging curriculum.",
            "Developed and implemented lesson plans to help students achieve academic success.",
        ],
    },
];


export const socialLinks = [

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/achilles1801',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/majdkhawaldeh',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'AWS-Powered Media Hub',
        description: "Constructed a media hub web application leveraging AWS services. The application utilizes AWS Lambda for serverless computing, enabling seamless scaling and reduced operational costs. AWS S3 is employed for secure and scalable object storage of media files, while AWS CloudFront ensures fast delivery of the content globally. The front-end is built with React, providing a dynamic and interactive user interface. Users can effortlessly upload and view media files, benefiting from the robust and efficient infrastructure.",
        link: 'https://videoplayer.majdk.com/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'AeroSys: Advanced Flight Operations Platform',
        description: 'Developed AeroSys, an advanced flight operations platform using Node.js, Express, MySQL, and GraphQL. Implemented a RESTful API to allow users to manage flights and aircraft. Utilized auth0 to implement user authentication and authorization.',
        link: 'https://github.com/achilles1801/flight_management',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Interactive Math Chatbot',
        description: 'Used the openai API to create a chatbot that can solve math problems and answer questions about math concepts.',
        link: 'https://github.com/achilles1801/mathbot_project',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Professional Developer Portfolio ',
        description: 'Built a professional portfolio website using React and Tailwind CSS, allowing users to view my projects/skills and contact me.',
        link: 'https://github.com/achilles1801/portfolio_mk',
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Android Mobile Gaming Showcase',
        description: 'Developed a mobile game for Android devices, giving users multiple levels of difficulty and game modes to choose from.',
        link: 'https://github.com/achilles1801/android-game',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Rock Paper Scissors Game',
        description: 'Developed a rock paper scissors game using Java, allowing users to track their scores and play against challenging AI opponents.',
        link: 'https://github.com/achilles1801/rockpaperscissors',
    }
];
export const coursework = [
    {
        course: "Data Structures & Algorithms",
        institution: "Georgia Tech",
        description: "Explores fundamental data structures and algorithms for efficient data manipulation and problem-solving.",
        keyTopics: ["Linked Lists", "Trees and Graphs", "Sorting Algorithms", "Complexity Analysis"]
    }, 
     {
        course: "Object Oriented Programming",
        institution: "Georgia Tech",
        description: "Focuses on principles of object-oriented programming and design, encapsulation, inheritance, and polymorphism.",
        keyTopics: ["Classes and Objects", "Inheritance", "Polymorphism", "Design Patterns"]
    },
    {
        course: "Databases",
        institution: "Georgia Tech",
        description: "Covers database design, development, and management principles, including SQL and data modeling.",
        keyTopics: ["SQL", "Data Modeling", "Normalization", "Database Management Systems"]
    }   ,
     {
        course: "Android App Development",
        institution: "Georgia Tech",
        description: "Introduces Android development, focusing on creating interactive user interfaces and app functionality.",
        keyTopics: ["Android Studio", "UI/UX Design", "API Integration", "App Lifecycle"]
    }
    

];
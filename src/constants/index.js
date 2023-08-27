import {
    react,
    backend,
    content,
    web,
    javascript,
    html,
    reactjs,
    tailwind,
    nodejs,
    greene_king,
    homebase,
    bq,
    CodeConnect,
    threejs,
    rohan,
    About,
    Projects,
    Work,
    Skills,
    Contact,
    JayI,
    AnimatedPortfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id:"about",
      title: "About",
      img: About,
  },
  {
      id:"projects",
      title: "Projects",
      img: Projects,
  },
  {
      id:"work",
      title: "Work",
      img: Work,
  },
  {
      id:"skills",
      title: "Skills",
      img: Skills,
  },
  {
      id:"contact",
      title: "Contact",
      img: Contact,
  },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: content,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Team Leader",
      company_name: "Rohan",
      icon: rohan,
      iconBg: "#E6DEDD",
      date: "May 2021 - Present",
      points: [
        "As part of my role, I developed and maintained a Customer Service Hub that proved highly beneficial in increasing productivity and streamlining our processes. By collating all relevant resources in one place, the Hub enabled our team to provide more efficient and effective customer support, leading to greater customer satisfaction and retention..",
        "With advanced Excel skills, I have extensive experience creating and updating monthly charts, reports, and spreadsheets for customer services. Proficiency in Excel's functions and features has streamlined tasks, resulting in clear and organised reports and charts that are easy to interpret.",
        "As a manager, I prioritise efficient task completion and provide team support when needed. By fostering collaboration and efficiency, we achieve our goals effectively.",
        "Demonstrated expertise of effectively resolving customer complaints, ensuring that the company's guarantee is upheld. I also take the time to educate customers when no fault is found, helping to improve their understanding of our products and services.",
        "I have a strong focus on customer experience and regularly gather data on our competitors to provide our customers with a simple and informed online experience. Additionally, I have contributed to updating our FAQs page to ensure our customers have access to all necessary information. By staying informed about our competitors and improving our online resources, I am dedicated to creating a seamless customer experience.",
      ],
    },
    {
      title: "Complaints Manager",
      company_name: "Homebase",
      icon: homebase,
      iconBg: "#E6DEDD",
      date: "March 2017 - Oct 2020",
      points: [
        "Resolved complex and high-impact complaints, including those escalated to the Managing Director or Financial Ombudsman, and handled Section 75 complaints to ensure that all loans were being paid and any issues were resolved before the end of the agreement or activation.",
        "Managed customer complaints through various channels, including social media, phone, letters, emails, and personal responses to senior management.",
        "Collaborated with cross-functional teams, including legal, finance, and customer service, to resolve complaints and ensure customer satisfaction.",
        "Analysed complaint data to identify trends and areas for improvement, and presented findings and recommendations to senior management.",
        "Trained and coached team members on complaint handling best practices and provided ongoing support and development.",
      ],
    },
    {
      title: "Frontend Team Leader",
      company_name: "B&Q",
      icon: bq,
      iconBg: "#383E56",
      date: "Oct 2020 - May 2021",
      points: [
        "Maintained accurate and up-to-date records, including inventory management, sales data and the CRM.",
        "Strong leadership, customer service, and organizational skills are essential for success in this role.",
        "As a team leader, I manage and support frontend staff, setting goals, providing guidance, and conducting performance evaluations to promote a positive work environment and achieve objectives.",
        "Process transactions and handle cash and credit card payments accurately and efficiently.",
      ],
    },
    {
      title: "Kitchen Manager",
      company_name: "Greene King (The Cock Hotel)",
      icon: greene_king,
      iconBg: "#383E56",
      date: "Jan 2016 - March 2017",
      points: [
        "Demonstrated expertise in inventory management, overseeing all aspects of kitchen inventory to ensure a steady supply of ingredients and supplies, tracking expenses, and ordering new items as needed.",
        "Proven ability to supervise and manage kitchen staff, training new employees, scheduling shifts, and ensuring that staff adhere to safety and sanitation guidelines.",
        "Skilled in menu planning and recipe development, staying up to date on food trends, and creating new dishes to keep customers engaged and satisfied.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Jay i",
      description:
        "Introducing Jay i, your gateway to cutting-edge SaaS AI. Seamlessly fusing Tailwind aesthetics with animations, the app ensures captivating design. With Clerk Authentication, diverse login options are available, while react-hook-form and react-toast streamline form validation and error handling. AI tools encompass Image, Video, Conversation, and Music Generation. From loading states to Stripe subscriptions, Jay i offers a fluid experience. This innovation hub leverages Next.js 13, React, Tailwind, Prisma, and Stripe to reshape SaaS AI.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Openai",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "orange-text-gradient",
        },
      ],
      image: JayI,
      source_code_link: "https://github.com/7Jay-Lee7/Jay-i",
    },
    {
      name: "CodeConnect",
      description:
      "CodeConnect is a sophisticated social media platform that has been developed using the MERN stack, comprising MongoDB, Express, React, and Node.js. This technological stack has empowered me to build a powerful, feature-rich social media platform that is specifically designed to meet the needs of coders. CodeConnect offers a wide range of functionalities, including the ability to register as a new user, post content, add and delete friends, upload photos, GIFs, audio, and even incorporate advertisement. My platform was designed to be highly responsive, scalable, and reliable, ensuring an unparalleled user experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDb",
          color: "orange-text-gradient",
        },
      ],
      image: CodeConnect,
      source_code_link: "https://github.com/7Jay-Lee7/CodeConnect",
    },
    {
      name: "Animated Portfolio",
      description:
        "The portfolio seamlessly integrates captivating animations that invigorate its content and provide smooth transitions, while interactive elements like buttons, hover effects, and scroll-triggered animations enhance engagement. Its responsive design ensures a consistent experience across various devices. Offering easy customisation, the portfolio can be adapted with ease. Meanwhile, optimised performance guarantees fast loading times and fluid animations, solidifying the portfolio as a compelling, technically refined showcase of my work.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "orange-text-gradient",
        },
      ],
      image: AnimatedPortfolio,
      source_code_link: "https://github.com/7Jay-Lee7/AnimatedPortfolio",
    },
  ];
  
  export { services, technologies, experiences, projects };

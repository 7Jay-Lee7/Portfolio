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
    dashboard,
    CodeConnect,
    Ai3dDesigner,
    threejs,
    rohan,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
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
          name: "MongpDB",
          color: "pink-text-gradient",
        },
      ],
      image: CodeConnect,
      source_code_link: "https://github.com/7Jay-Lee7/MERN-Social-Media",
    },
    {
      name: "3D AI Shirt Designer",
      description:
        "This is a 3D Ai Shirt Customisation application that I created using a variety of cutting-edge technologies. My platform utilises Vite, React, ThreeJS, Express, Tailwind, and Valtio to offer a highly innovative and responsive solution that enables users to customise a shirt using a 3D AI model generated by OpenAI. With my platform, users can enjoy a highly realistic and interactive experience, visualising their custom shirts in unprecedented detail.I have taken great care to ensure that my platform is highly scalable and reliable, providing users with a seamless experience from start to finish.",
      tags: [
        {
          name: "Open AI",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Ai3dDesigner,
      source_code_link: "https://github.com/7Jay-Lee7/Jays-3D-Ai-Shirt-Designer",
    },
    {
      name: "MERN Dashboard",
      description:
        "The key highlight of this project is the inclusion of an admin dashboard, which empowers users to effortlessly manage data stored in a MongoDB database.Thanks to the robust and comprehensive nature of the MERN stack, I was able to develop a highly scalable and secure web application. This project is able to show an overview of a companies data, whether it be for an ecommerce business as highlighted, or for something as KPIs for smaller businesses. The project can be adapted and utilised accordingly, whilst maintaining logins for certain personnel.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/7Jay-Lee7/MERN-Dashboard",
    },
  ];
  
  export { services, technologies, experiences, projects };

import {
    react,
    backend,
    content,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    sql,
    greene_king,
    homebase,
    bq,
    dashboard,
    servicehub,
    petlover,
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
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java, 
    },
    {
      name: "sql",
      icon: sql, 
    },
  ];
  
  const experiences = [
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
        "Maintain accurate and up-to-date records, including inventory management, sales data and the CRM.",
        "Strong leadership, customer service, and organizational skills are essential for success in this role.",
        "As a team leader, I manage and support frontend staff, setting goals, providing guidance, and conducting performance evaluations to promote a positive work environment and achieve objectives.",
        "Process transactions and handle cash and credit card payments accurately and efficiently.",
      ],
    },
    {
      title: "Team Leader",
      company_name: "Rohan",
      icon: rohan,
      iconBg: "#E6DEDD",
      date: "May 2021 - Present",
      points: [
        "As part of my role, I developed and maintained a Customer Service Hub that proved highly beneficial in increasing productivity and streamlining our processes. By collating all relevant resources in one place, the Hub enabled our team to provide more efficient and effective customer support, leading to greater customer satisfaction and retention..",
        "With advanced Excel skills, I have extensive experience creating and updating monthly charts, reports, and spreadsheets for customer service. Proficiency in Excel's functions and features has streamlined tasks, resulting in clear and organised reports and charts that are easy to interpret.",
        "As a manager, I prioritise efficient task completion and provide team support when needed. By fostering collaboration and efficiency, we achieve our goals effectively.",
        "Demonstrated expertise of effectively resolving customer complaints, ensuring that the company's guarantee is upheld.",
        "I have a strong focus on customer experience and regularly gather data on our competitors to provide our customers with a simple and informed online experience. Additionally, I have contributed to updating our FAQs page to ensure our customers have access to all necessary information. By staying informed about our competitors and improving our online resources, I am dedicated to creating a seamless customer experience.",
      ],
    },
  ];
  
  /* Can add testimonials once I start receiving them.
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];*/

  const projects = [
    {
      name: "Customer Service Hub",
      description:
        "My first real project without no guides. A locally hosted platform provides a centralised location for customer service teams to access all necessary information and procedures in one place. This includes links to all relevant sites and resources needed to effectively perform their job duties. With our platform, teams can quickly find the information they need and ensure consistency in their customer interactions. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: servicehub,
      source_code_link: "https://github.com/7Jay-Lee7",
    },
    {
      name: "Adopt a Pet Starter",
      description:
        "My first React web application that allows users to search for dogs, cats, rabbits, and birds that are up for adoption or missing. The app features tabs for each type of pet, making it easy to find the perfect pet to adopt or help locate a missing pet.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: petlover,
      source_code_link: "https://github.com/7Jay-Lee7/Adopt-a-Pet-Starter",
    },
    {
      name: "Dashboard",
      description:
        "Web-based React Dashboard using Material UI and Nivo for the charts has the data analysis and visualization. By combining the flexibility and power of React with the visually stunning designs of Material UI and Nivo, users are presented with an intuitive and customizable dashboard that can provide valuable insights into their data.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/7Jay-Lee7/React-Dashboard",
    },
  ];
  
  export { services, technologies, experiences, /*testimonials,*/ projects };
/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Daniel Mark John's Portfolio",
  description:
    "As a seasoned Software Developer, I am dedicated to building state-of-the-art applications that transform the digital landscape. With over 8 years of experience, My expertise spans across various domains, including IT & Cloud, Healthcare, Media & Communications Industries. Over the years, I have honed my skills in managing, leading, and developing software as a Senior Developer to Senior Architect across 4 prestigious organizations, including HPE | Concentrix Catalyst | Tata ELXSI | Accenture.",
  og: {
    title: "DMJ's Portfolio",
    type: "website",
    url: "https://beautiful-stroopwafel-1722a5.netlify.app/#/",
  },
};

//Home Page
const greeting = {
  title: "Daniel Mark John",
  logo_name: "DanielMarkJohn",
  nickname: "Lead Developer",
  subTitle:
  "As a seasoned Software Developer, I am dedicated to building state-of-the-art applications that transform the digital landscape. With over 8 years of experience, My expertise spans across various domains, including IT & Cloud, Healthcare, Media & Communications Industries.",
  resumeLink: "https://www.linkedin.com/in/danielmarkjohn",
  portfolio_repository:
    "https://github.com/danielmarkjohn",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/danielmarkjohn",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/danielmarkjohn/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:danielmarkj@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/danielmarkjohn",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/danielmarkjohn/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building Portfolio | ECommerce | Appointment Booking | Custom Requirements - Websites",
        "⚡ Advanced SPA's & Resposive website using Angular-NGrx | React-Redux | Vue JS",
        "⚡ Developing PWA | Hybrid mobile applications using Flutter, React Native and Ionic",
        "⚡ Creating application backend in Node, Express & MySQL, MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AZURE and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "Leetcode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F28C28",
    //   },
    //   profileLink: "https://leetcode.com/Kritagya7777/",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/kritagyakumra",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@kritagya6",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/kritagyakumra",
    // },
    // {
    //   siteName: "Coding Ninjas",
    //   iconifyClassname: "simple-icons:codingninjas",
    //   style: {
    //     color: "#F28C28",
    //   },
    //   profileLink:
    //     "https://www.codingninjas.com/codestudio/profile/34a33414-da35-4b62-ab67-1507226c6539",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "NHCE, Bangalore",
      subtitle: "B.Tech. in Electronics Engineering",
      logo_path: "gndu_logo.png",
      alt_name: "NHCE, Bangalore",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied bachelor's of engineering subjects like Communications, Electronics Core, Computer Networks, Information Systems etc.",
        "⚡ Apart from this, I have done courses on Angular, React, NodeJS and Full Stack Development.",
        "⚡ I have worked on multiple IOT Projects while Studying. Where Electronics Meets Web Components",
        "⚡ I was known for my curiosity during my entire college period and to have a good sense of humour.",
      ],
      website_link: "https://newhorizonindia.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React",
      subtitle:
        "- Kirill Eremenko, Hadelin de Ponteves, Ligency I Team, Ligency Team",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-1d665a10-da56-4510-8f43-3a4e3a1095f8/",
      alt_name: "Machine Learning",
      color_code: "#E5AA70",
    },
    {
      title: "Angular Expert",
      subtitle: "- Sameer Buna",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1CBTGevGlv1tlHv67G1QbB-eZ-OdLnVG-/view?usp=sharing",
      alt_name: "React",
      color_code: "#000",
    },
    {
      title: "Building Websites with HTML, CSS, and JavaScript",
      subtitle: "- Craig Shoemaker",
      logo_path: "Pluralsight_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1co529E0182WYglbvMnNuyHCHhu2_5wUr/view?usp=sharing",
      alt_name: "Website Building",
      color_code: "#000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Frontend Developer, Backend and Software Architect. I have also worked with some well established companies mostly as Lead Software Developer. I'm currently an Associate Architect for a Billion Dollar Company - Concentrix Catalyst.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Companies",
      experiences: [
        {
          title: "Associate Architect",
          company: "Concentrix Catalyst",
          company_url: "https://www.hpe.com/in/en/home.html",
          logo_path: "KPMG-Logo6.webp",
          duration: "July 2022 - Present",
          location: "Bangalore, India",
          description:
            "Concentrix is a global business services company that provides customer engagement, technology, and outsourcing solutions to help businesses enhance their customer experience and operational efficiency.",
          color: "#0071C5",
        },
        {
          title: "Head - Full Stack Engineer",
          company: "Trias",
          company_url: "https://www.trias.in/",
          logo_path: "KPMG-Logo5.jpeg",
          duration: "April 2020 - July 2022",
          location: "Bangalore, India",
          description:
            "Trias is a Technology Startup with AI ML Based Health Tech.",
          color: "#0071C5",
        },

        {
          title: "Senior Engineer",
          company: "Tata Elxsi",
          company_url: "https://www.tataelxsi.com/",
          logo_path: "KPMG-Logo1.png",
          duration: "March 20218 - April 2020",
          location: "Bangalore, India",
          description:
            "Tata Elxsi is a leading design and technology services provider for Automotive, Broadcast, Communications, Healthcare, and Transportation.",
          color: "#0071C5",
        },
        {
          title: "Engineer",
          company: "Accenture",
          company_url: "https://www.hpe.com/in/en/home.html",
          logo_path: "KPMG-Logo4.png",
          duration: "March 20217 - March 2018",
          location: "Bangalore, India",
          description:
            "Accenture: Pioneering technology for over eight decades, empowering innovation across the globe.",
          color: "#0071C5",
        },
        {
          title: "Trainee Engineer",
          company: "Hewlett Packard Enterprise",
          company_url: "https://www.hpe.com/in/en/home.html",
          logo_path: "KPMG-Logo.png",
          duration: "Sept 20215 - July 2016",
          location: "Bangalore, India",
          description:
            "HPE: Pioneering technology for over eight decades, empowering innovation across the globe.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Projects",
    //   experiences: [
    //     {
    //       title: "Revenue Assurance in Toll Operations",
    //       company: "IN-Cube-Highways",
    //       company_url: "https://www.cubehighways.com/",
    //       logo_path: "cube_highways_logo.jpg",
    //       duration: "Jan 2022 - Feb 2022",
    //       location: "Gurugram,India",
    //       description:
    //         "My first project was Revenue Assurance in Toll Operations. Here in this project, data related to different tolls spread all over India were given to me from the toll company, where on that data we had to perform some checks to remove the inconsistencies in that data through the use of KPI (Key Performance Indicator) and then report it to the client side through the help of document files and diagrams like “if same vehicle Plate No has been charged twice while entering to the toll or if a vehicle plate number had been charged incorrectly” etc. Firstly, we had to clean the data by doing the correct analysis of the data for performing those KPIs or checks leaving columns we don’t require, and then we had to create the tables in PostgreSQL to load all the data into it to perform all those checks with the help of SQL scripts using the concept of Joins, Subqueries, and inner queries, etc.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Governance and Operations Tool UI-UX development",
    //       company: "KPMG Internal Project",
    //       company_url: "https://home.kpmg/in/en/home.html",
    //       logo_path: "KPMG-Logo.jpg",
    //       duration: "March 2022 - June 2022",
    //       location: "Gurugram,India",
    //       description:
    //         "My second project was Governance and Operations Tool UI-UX development. Here in this project, I was assigned a task to create a modern-looking UI and add more functionalities to the tool using HTML, CSS, and JS. This tool aims to track the things performed by every member working on their respective projects or ventures. It contains two different bifurcations for Analysts and Managers. The manager section contains various features like Create New Task, View Assigned Task, User-wise Dashboard Section, Issue Tracker Section, View Leakage Dashboard, and User Access Management Section. The analyst section contains features like Create New Task, View Assigned Task, Manage SLA Compliance, Report/Update an Issue, View Status of Issue, Track Initiative Progress, Monthly Self-Assessment, Issue Tracker, etc. The sole purpose of creating this tool was to create one place where every project's progress can be tracked properly.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title:
    //         "Audit-Automation Tool (Initiative Built for the KPMG network)",
    //       company: "KPMG Internal Project",
    //       company_url: "https://home.kpmg/in/en/home.html",
    //       logo_path: "KPMG-Logo.jpg",
    //       duration: "April 2022 - July 2022",
    //       location: "Gurugram,India",
    //       description:
    //         "My third project was Audit-Automation Tool in which I have given contributions in both frontend and at the backend. Here the purpose of this project was not to automate the entire process of the audit report generation but to remove all the redundant work which we do while creating the audit report. So instead of wasting a lot of time in creating the basic ppt, we would automate this process where after filling the forms having all the required fields we would get that same generated ppt were just by selecting certain input fields and dropdowns regarding the problem and their required controls used for creating the audit report would generate a ppt having that KPMG Template(having sock reports embedded into it) + basic options that we had chosen earlier to provide it to the client as our final report. The tool contains 2 portals – for admin i.e., Manager and Above Manager Level, and for Below Manager Level. In the case of admin, we would have functionalities like Creating an audit report, Seeing the List of Audits, exporting Documents, etc. In the case of Below Manager Level, we would have the functionalities of Seeing the List of Audit, Export Documents, and Alignment of RACM to the Audit, and even we would have timely email reminders but would not have the functionality of Creating an audit report as that feature is only given to Manager or Above Manager.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create State of the Art All Platform Web Applications, React based projects and deploy them to web servers using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_dan.jpeg",
    description:
    "As a seasoned Software Architect, I am dedicated to building state-of-the-art applications that transform the digital landscape. With over 8 years of experience, My expertise spans across various domains, including IT & Cloud, Healthcare, Media & Communications Industries. Over the years, I have honed my skills in managing, leading, and developing software as a Senior Developer to Senior Architect across 4 prestigious organizations, including HPE | Concentrix Catalyst | Tata ELXSI | Accenture.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character and would create a blog website very shortly.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "New Airport Road, Bangalore, Karnataka, IN",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/arpqmqtjJspg8258",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9845985821",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};

/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Viharahamed",
  title: "Hello all,I'm Viharahamed",
  subTitle: emoji(
    "A passionate Full Stack Developer ,worked with frontned and built some applications using Reactjs and some other librarires and frameworks. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FqllsWQ0ZLj537FWngX1BhsQYJztKUkC/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Viharahamed",
  linkedin: "https://www.linkedin.com/in/viharahamed-m/",
  gmail: "viharahamed2905@gmail.com",
  leetcode: "https://leetcode.com/u/Viharahamed/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sri Ramakrishna Engineering College",
      logo: require("./assets/images/sreclogo.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2023 - 2027"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false,
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", //true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects which I have worked on",
  projects: [
    {
      image: require("./assets/images/evlogo.jpeg"),
      projectName: "EV-Tracking",
      projectDesc: "Created an E-Vehicle tracking website for our institution",
      footerLink: [
        {
          name: "EV-Tracker",
          url: "https://srec-ev-tracker-frontend.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/insta.jpg"),
      projectName: "Automated Instagram Data Extraction",
      projectDesc: "Created an Automated Instagram Data Extraction website , where we can easily extract a insta-account  details",
      //  you can add extra buttons here.
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and some other things I have done!",

  achievementsCards: [
    {
      title: "SnowFlake",
      subtitle:
        "Succesfully completed the SnowPro Association: Platform",
      image: require("./assets/images/snowflake.png"),
      imageAlt: "SnowFlake Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1i5YXPNyAudwTdzKwD2bNgWK21rzRg9vt/view?usp=drivesdk"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  display: false,
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: []
};

const talkSection = {
  display: false,
  title: "TALKS",
  subtitle: "",
  talks: []
};

const podcastSection = {
  display: false,
  title: "Podcast",
  subtitle: "",
  podcast: []
};
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9080670027",
  email_address: "viharahamed2905@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  resumeSection,
  contactInfo,
  twitterDetails,
  isHireable,

};

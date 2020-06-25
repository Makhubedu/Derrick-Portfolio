/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Derrick MAkhubedu",
    title: "Hi all, I'm Derrick",
    subTitle: emoji("Full-Stack Developer ⚙️ | Computer Science Enthusiast 🎓 | Tech Writer ✍️"),
    resumeLink: "https://nextcloud.nwu.ac.za/index.php/s/xzw9FPcEL9oJf8x"
};

// Your Sociareach Media Link

const socialMediaLinks = {

    github: "https://github.com/Makhubedu",
    linkedin: "https://www.linkedin.com/in/derrick-makhubedu-58b716185/",
    gmail: "lefaderrick@gmail.com"
};

// Your Skills Section

const skillsSection = {
    title: "What i do",
    subTitle: "FULL STACK, DEVELOPEMENT OF MOBILE AND WEB APPS AND LEARNING INTERNET OF THINGS",
    skills: [
        emoji("⚡ Designing and developing Test Web Applications using Python and Java"),
        emoji("⚡ Used Backend Frameworkd like Django and Spring"),
        emoji("⚡Working on Frontend Frameworks like React"),
        emoji("⚡ Build Mobile Applications Using Android")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "java",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "Javascript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "git",
            fontAwesomeClassname: "fab fa-git"
        },
        {
            skillName: "Django",
            fontAwesomeClassname: "fas fa-flask"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },

    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Web Development", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Mobile App Development", //Insert stack or technology you have experience in
            progressPercentage: "70%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Programming",
            progressPercentage: "80%"
        },
        {
            Stack: "Communication",
            progressPercentage: "90%"
        }
    ]
};



// Your top 3 work experiences
const workExperiences = {
    viewExperiences: false, //Set it to true to show workExperiences Section
    experience: [{
            role: "Software Engineer",
            company: "Facebook",
            companylogo: require("./assets/images/facebookLogo.png"),
            date: "June 2018 – Present",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            role: "Front-End Developer",
            company: "Quora",
            companylogo: require("./assets/images/quoraLogo.png"),
            date: "May 2017 – May 2018",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Software Engineer Intern",
            company: "Airbnb",
            companylogo: require("./assets/images/airbnbLogo.jpg"),
            date: "Jan 2015 – Sep 2015",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "Makhubedu", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "I MANAGED TO CREATE APP ",
    projects: [{
            image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
            link: "http://saayahealth.com/"
        },
        {
            image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
            link: "http://nextu.se/"
        }
    ]
};

// Blogs Section

const blogSection = {

    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
            url: "https://github.com/Makhubedu",
            title: "Building a Beautiful Code To Make Programming Easy",
            description: "Are you interested to know how beautiful code make coding live easier? If so, check out here !"
        },
        {
            url: "https://github.com/Makhubedu",
            title: "How To Be Good With VideoConferencing",
            description: "Do you want to know how a basic coporate videoConferencing workflow is implemented ? If so, check out here !"
        },
        {
            url: "https://github.com/Makhubedu",
            title: "How To Build The Internet Of Things Application with Python",
            description: "Do you want to know how a build IoT applications with Python ? If so, check out here !"
        },
        {
            url: "https://github.com/Makhubedu",
            title: "Building Cool Things with Python",
            description: "Are you interested in creating cool things with python? Are you tired of coding print('Hello World') ? If so, check out here !"
        },

    ]
};

// Soon to be added.

const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

    talks: [{
        title: "your title",
        subtitle: "your subtitle",
        slides_url: "Your slides url here",
        event_url: "your event url",
        image: "image url"
    }]
};

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: ["Paste your podcast url here"]
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+27 71 644 7548",
    email_address: "lefaderrick@gmail.com"
};


const twitterDetails = {

    userName: "Fonsa16"

};

const achievementSection = {

    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achivementsCards: [{
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
            footerLink: [
                { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
                { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
                { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
            footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
            footerLink: [
                { name: "Certification", url: "" },
                { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
            ]
        }
    ]
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, blogSection, achievementSection, talkSection, podcastSection, contactInfo, twitterDetails };
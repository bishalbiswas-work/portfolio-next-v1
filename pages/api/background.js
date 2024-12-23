const background = [
    {
        eduCards: [
            {
                id: 0,
                title: "Radha Govind University",
                degree: "Master of Computer Applications (MCA)",
                detail: "Pursued advanced studies in computer science, specializing in software engineering, web development, and data structures.",
                year: "2022 - 2024"
            },
            {
                id: 1,
                title: "Radha Govind University",
                degree: "Bachelor of Computer Applications (BCA)",
                detail: "Completed undergraduate studies in computer applications, focusing on programming, database management, and software development.",
                year: "2019 - 2022"
            },
            // {
            //     id: 2,
            //     title: 'Falcon Academy',
            //     degree: 'SSC, Science Subjects',
            //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
            //     year: '2013-2015'
            // },
            // {
            //     id: 0,
            //     title: 'UET Peshawar',
            //     degree: 'BS, Computer System Engineering',
            //     detail: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
            //     year: '2018-2022'
            // },
            // {
            //     id: 1,
            //     title: 'Peshawar Model Degree College',
            //     degree: 'HSSC, Pre Engineering',
            //     detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
            //     year: '2015-2017'
            // },
            // {
            //     id: 2,
            //     title: 'Falcon Academy',
            //     degree: 'SSC, Science Subjects',
            //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
            //     year: '2013-2015'
            // },
        ]
    },
    {
        expCards: [
            // {
            //     id: 1,
            //     title: 'JMM Technologies',
            //     role: 'Frontend Developer',
            //     url: 'https://jmm.ltd/',
            //     desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
            //     year: '02/2023 - Present',
            //     location: 'Peshawar, Pakistan'
            // },
            // {
            //     id: 2,
            //     title: 'HauzaTech',
            //     role: 'Internee',
            //     url: 'no website',
            //     desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
            //     year: '02/2023 - Present',
            //     location: 'Peshawar, Pakistan'
            // },
            // {
            //     id: 3,
            //     title: 'Internship',
            //     role: 'PHP Developer',
            //     url: 'https://techcookers.com',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },
            {
                id: 1,
                title: "BeTimeful Inc",
                role: "Full-Time",
                url: "http://betimeful.com/",
                desc: "Enhanced the BeTimeful platform, a smart productivity tool, by implementing new features and resolving bugs to improve the user experience. Refactored the backend codebase, achieving a 35% reduction in size, resulting in a 50% increase in performance and scalability. Integrated OpenAI APIs for AI-based content recommendations, improving user engagement metrics. Designed and implemented a real-time notification system using WebSockets and Redis, reducing latency by 40%. Developed an email warmup product by implementing email protocols, integrating Google and Microsoft OAuth apps, and creating a secure platform for email case assessment and user management. Conducted unit and integration testing using Jest and Cypress to ensure code quality. Collaborated with cross-functional teams to deliver high-quality, scalable microservices deployed on AWS using Docker and Kubernetes. Improved security by implementing SSL/TLS encryption, ensuring compliance with industry standards.",
                year: "Aug 2023 - Oct 2024",
                location: "Toronto, Canada - Remote"
            },
            {
                id: 2,
                title: "Techcookers LLC",
                role: "Full-Time",
                url: "http://techcookers.com/",
                desc: "Designed and implemented IoT device management dashboards using React.js and Next.js. Gained hands-on experience with serverless architectures using AWS Lambda and DynamoDB. Developed REST APIs to handle high-throughput IoT data streams with an emphasis on scalability. Built real-time data visualization systems, enabling users to monitor and analyze device activity seamlessly. Migrated legacy WordPress systems to modern React.js and Next.js-based platforms for better performance. Implemented Firebase serverless functions for cost-effective backend solutions. Improved site performance and SEO with Next.js's server-side rendering (SSR). Experimented with headless CMS architectures to integrate React with WordPress backends.",
                year: "Jan 2021 - June 2022",
                location: "Kolkata, West Bengal, India"
            },
            {
                id: 3,
                title: "Techcookers LLC",
                role: "Internship",
                url: "http://techcookers.com/",
                desc: "Developed reusable UI components with React.js, enhancing code efficiency. Explored progressive web apps (PWAs) to improve the mobile user experience. Assisted in front-end development for client projects under mentorship.",
                year: "May 2020 - Dec 2020",
                location: "Kolkata, West Bengal, India"
            }
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}

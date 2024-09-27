import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github,Facebook, Linkedin, Mail, ExternalLink, Sun, Moon, Award, Menu, Code, GraduationCap, Download, Clock, Smartphone, Search, CheckCircle } from 'lucide-react';
import profile from '../assets/img/aman.jpg';
const projects = [
  { 
    title: 'Project 1', 
    description: 'A web app built with React and Node.js', 
    image: '/placeholder.svg?height=200&width=300',
    liveLink: 'https://project1.com',
    githubLink: 'https://github.com/username/project1'
  },
  { 
    title: 'Project 2', 
    description: 'An iOS app developed using Swift', 
    image: '/placeholder.svg?height=200&width=300',
    liveLink: 'https://project2.com',
    githubLink: 'https://github.com/username/project2'
  },
  { 
    title: 'Project 3', 
    description: 'A machine learning model for image recognition', 
    image: '/placeholder.svg?height=200&width=300',
    liveLink: 'https://project3.com',
    githubLink: 'https://github.com/username/project3'
  },
];

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'Swift', level: 75 },
  { name: 'TensorFlow', level: 70 },
];

const achievements = [
  { 
    title: 'Best Developer Award', 
    description: 'Awarded by TechCorp for outstanding contributions', 
    year: '2023',
    image: '/placeholder.svg?height=100&width=100'
  },
  { 
    title: 'Hackathon Winner', 
    description: 'First place in the Annual Coding Challenge', 
    year: '2022',
    image: '/placeholder.svg?height=100&width=100'
  },
  { 
    title: 'Open Source Contributor', 
    description: 'Top 1% contributor on GitHub', 
    year: '2021',
    image: '/placeholder.svg?height=100&width=100'
  },
];

const formalDetails = {
  education: [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Tech University',
      year: '2020-2022'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'Code College',
      year: '2016-2020'
    }
  ],
  interests: [
    'Artificial Intelligence',
    'Blockchain Technology',
    'Internet of Things (IoT)',
    'Quantum Computing',
    'Cybersecurity'
  ],
  experience: [
    {
      position: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      year: '2022-Present'
    },
    {
      position: 'Software Engineer',
      company: 'Digital Solutions Ltd.',
      year: '2020-2022'
    },
    {
      position: 'Junior Developer',
      company: 'StartUp Ventures',
      year: '2018-2020'
    }
  ]
};

const coreServices = [
  {
    title: 'Timely Delivery',
    description: 'Committed to delivering high-quality projects on schedule, ensuring client satisfaction and project success.',
    icon: Clock
  },
  {
    title: 'Responsive Website Development',
    description: 'Creating visually appealing and functionally robust websites that adapt seamlessly to all devices and screen sizes.',
    icon: Smartphone
  },
  {
    title: 'SEO Optimization',
    description: 'Implementing best practices to enhance your online visibility and improve search engine rankings.',
    icon: Search
  },
  {
    title: 'Code Quality Assurance',
    description: 'Rigorous testing and code reviews to ensure clean, efficient, and maintainable code for all projects.',
    icon: CheckCircle
  }
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile App Developer",
    "Software Developer"
  ];

  useEffect(() => {
    let isMounted = true;
    const role = roles[currentRoleIndex];
    let isDeleting = false;
    let charIndex = 0;

    const typeEffect = () => {
      if (!isMounted) return;

      if (!isDeleting && charIndex <= role.length) {
        setTypewriterText(role.substring(0, charIndex));
        charIndex++;
        setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
        setTypewriterText(role.substring(0, charIndex));
        charIndex--;
        setTimeout(typeEffect, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
        setTimeout(typeEffect, 1000);
      }
    };

    typeEffect();

    return () => {
      isMounted = false;
    };
  }, [currentRoleIndex]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const NavItems = () => (
    <>
      <Button variant="ghost" size="sm">Home</Button>
      <Button variant="ghost" size="sm">About</Button>
      <Button variant="ghost" size="sm">Projects</Button>
      <Button variant="ghost" size="sm">Skills</Button>
      <Button variant="ghost" size="sm">Services</Button>
      <Button variant="ghost" size="sm">Details</Button>
      <Button variant="ghost" size="sm">Achievements</Button>
      <Button variant="ghost" size="sm">Contact</Button>
    </>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <nav className="sticky top-0 z-10 bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Amanuel</h1>
            <div className="hidden lg:flex items-center space-x-4">
              <NavItems />
            </div>
            <div className="flex items-center space-x-4">
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
              <span className="sr-only">Toggle dark mode</span>
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4">
                    <NavItems />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 relative">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={profile}
              alt="Amanuel"
              className="rounded-full w-48 h-48 mx-auto border-4 border-purple-500"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Amanuel Solomon
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 h-20"
          >
            I'm a <span className="text-blue-500 font-semibold">{typewriterText}</span>
            <span className="animate-blink">|</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </motion.div>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src="/placeholder.svg?height=300&width=400"
              alt="Jane Doe working"
              className="rounded-lg shadow-lg w-full md:w-1/2"
            />
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg"
            >
              I'm a passionate full-stack developer with 5 years of experience in creating web and mobile applications. My expertise lies in React, Node.js, and Python, with a growing interest in machine learning and AI. When I'm not coding, you can find me contributing to open-source projects or mentoring aspiring developers. I believe in the power of technology to solve real-world problems and am always excited to take on new challenges.
            </motion.p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full flex flex-col`}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center"
              >
                <Code className="h-6 w-6 mr-2 flex-shrink-0" />
                <div className="flex-grow">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full flex flex-col`}>
                  <CardHeader>
                    <service.icon className="h-12 w-12 mb-4 text-blue-500" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Formal Details</h2>
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  {formalDetails.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p>{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="interests">
              <Card>
                <CardHeader>
                  <CardTitle>Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    {formalDetails.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  {formalDetails.experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-semibold">{exp.position}</h3>
                      <p>{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.year}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Achievements & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full flex flex-col`}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-yellow-500" />
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <img src={achievement.image} alt={achievement.title} className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">Year: {achievement.year}</p>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Contact Me</h2>
          <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-2xl mx-auto`}>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below to send me a message.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message here..." rows={4} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>

      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} py-8`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
              <p className="text-sm">Full Stack Developer & Machine Learning Enthusiast</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Jane Doe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
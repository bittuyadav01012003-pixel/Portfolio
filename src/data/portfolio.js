/**
 * Centralized Portfolio Data for Bittu Kumar
 * Source of truth: Resume & verified profile information.
 * Any missing or future data can be easily updated here.
 */

export const portfolio = {
  personal: {
    name: "Bittu Kumar",
    role: "B.Tech Student | Aspiring Software Developer",
    bio: "Passionate Computer Science student focused on Data Structures & Algorithms, problem solving, software development, and continuously improving my programming skills.",
    email: "bittuyadav01012003@gmail.com",
    phone: "+91-9905690760",
    github: "https://github.com/bittuyadav01012003-pixel",
    linkedin: "https://www.linkedin.com/in/bittu-kumar-323454399/",
    status: "Available for Software Engineering Roles & Internships",
    location: "India",
    resumeUrl: "/Bittu_Kumar_Resume.png"
  },

  about: {
    headline: "Engineering robust software through disciplined problem solving and core computer science fundamentals.",
    paragraphs: [
      "I am a B.Tech Computer Science student and aspiring Software Developer with a strong dedication to core computing principles. My primary focus revolves around Data Structures & Algorithms, object-oriented system design, and building real-world practical software solutions.",
      "Whether developing contextual AI assistants with modern APIs, engineering safety-weighted algorithmic navigation tools, or architecting payroll systems in C++, I emphasize clean code, architectural clarity, and continuous learning.",
      "I am constantly expanding my problem-solving repertoire across diverse algorithmic paradigms, exploring modern frameworks, and preparing to make impactful contributions to forward-thinking engineering teams."
    ],
    pillars: [
      {
        title: "DSA & Problem Solving",
        desc: "Strengthening algorithmic foundations across arrays, trees, graphs, and dynamic programming.",
        icon: "Code2"
      },
      {
        title: "Software Engineering",
        desc: "Designing modular, maintainable applications with clean OOP, REST APIs, and structured data.",
        icon: "Layers"
      },
      {
        title: "Continuous Learning",
        desc: "Actively acquiring new technologies, industry standards, and developer tooling.",
        icon: "GraduationCap"
      },
      {
        title: "Systems & Architecture",
        desc: "Understanding low-level memory, operating systems, database schemas, and networking fundamentals.",
        icon: "Cpu"
      }
    ]
  },

  skills: {
    languages: [
      { name: "C++", category: "Systems & Algorithms" },
      { name: "Python", category: "Scripting & AI" },
      { name: "JavaScript", category: "Web Development" },
      { name: "SQL", category: "Databases & Queries" }
    ],

    core: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Object-Oriented Programming"
    ],

    tools: [
      "Linux",
      "Git",
      "GitHub",
      "HTML"
    ],

    softSkills: [
      "Time Management",
      "Problem Solving",
      "Adaptability"
    ]
  },

  dsa: {
    title: "DSA & Problem Solving",
    subtitle: "Building strong fundamentals through consistent problem solving.",
    description: "A structured conceptual progression of core data structures and algorithmic patterns essential for high-performance software engineering.",
    topics: [
      {
        id: "arrays",
        name: "Arrays",
        icon: "LayoutGrid",
        desc: "Contiguous memory structures, two-pointer techniques, sliding window patterns, and prefix sums.",
        concepts: ["Two Pointers", "Sliding Window", "Prefix Sum", "Subarrays"]
      },
      {
        id: "strings",
        name: "Strings",
        icon: "FileText",
        desc: "String manipulation, pattern matching algorithms, palindromes, and character hashing.",
        concepts: ["Pattern Matching", "Anagrams", "Palindromes", "Hashing"]
      },
      {
        id: "sorting",
        name: "Sorting",
        icon: "ArrowDownUp",
        desc: "Comparison and non-comparison sorting, time-space trade-offs, and algorithmic stability.",
        concepts: ["Merge Sort", "Quick Sort", "In-place Sorting", "Stability"]
      },
      {
        id: "binary-search",
        name: "Binary Search",
        icon: "Search",
        desc: "Logarithmic search space reduction, monotonic search spaces, and boundary value analysis.",
        concepts: ["Search Space Reduction", "Lower/Upper Bound", "Rotated Arrays"]
      },
      {
        id: "recursion",
        name: "Recursion",
        icon: "Repeat",
        desc: "Recursive call stack intuition, base-case deduction, divide-and-conquer, and backtracking.",
        concepts: ["Divide & Conquer", "Call Stack", "Backtracking", "Base Cases"]
      },
      {
        id: "linked-lists",
        name: "Linked Lists",
        icon: "Link2",
        desc: "Dynamic node allocations, pointer manipulations, fast & slow pointers, and cycle detection.",
        concepts: ["Cycle Detection", "Reversal", "Doubly Linked", "Fast & Slow Pointers"]
      },
      {
        id: "stacks",
        name: "Stacks",
        icon: "Layers",
        desc: "LIFO execution, monotonic stacks, expression parsing, and next greater element computations.",
        concepts: ["LIFO Principle", "Monotonic Stack", "Expression Parsing", "Valid Parentheses"]
      },
      {
        id: "queues",
        name: "Queues",
        icon: "AlignHorizontalJustifyStart",
        desc: "FIFO processing, circular buffers, priority queues, and level-order traversals.",
        concepts: ["FIFO Processing", "Circular Queues", "Deque", "BFS Frontier"]
      },
      {
        id: "trees",
        name: "Trees",
        icon: "GitBranch",
        desc: "Hierarchical data representation, binary search trees, traversals, and lowest common ancestor.",
        concepts: ["BST Validation", "DFS Traversals", "LCA", "Diameter of Tree"]
      },
      {
        id: "graphs",
        name: "Graphs",
        icon: "Network",
        desc: "Non-linear networks, BFS/DFS explorations, shortest paths, and topological ordering.",
        concepts: ["BFS / DFS", "Dijkstra", "Cycle Detection", "Topological Sort"]
      },
      {
        id: "dynamic-programming",
        name: "Dynamic Programming",
        icon: "Zap",
        desc: "Breaking problems into overlapping subproblems, optimal substructure, memoization, and tabulation.",
        concepts: ["Memoization", "Tabulation", "State Transitions", "Knapsack / Subsequences"]
      }
    ],

    codingStats: {
      platform: "CodeChef",
      contestRating: "829 (Div 4)",
      highestRating: "829 (1★)",
      globalRank: "181,264",
      countryRank: "175,599",
      username: "lonely_moss_25"
    },

    platforms: [
      {
        name: "CodeChef",
        username: "lonely_moss_25",
        url: "https://www.codechef.com/users/lonely_moss_25",
        rating: "829",
        status: "Verified (829)",
        icon: "Award"
      },
      {
        name: "LeetCode",
        url: "", // Set actual profile URL when available
        status: "Add Profile",
        icon: "Code"
      },
      {
        name: "Codeforces",
        url: "", // Set actual profile URL when available
        status: "Add Profile",
        icon: "Terminal"
      }
    ]
  },

  projects: [
    {
      id: "adaptive-ai-assistant",
      title: "Adaptive User Response Assistant",
      subtitle: "Personalized AI Assistant with Contextual Support",
      date: "Aug 2026",
      description: "Developed a personalized AI assistant using Python and Google Gemini API to provide contextual and conversational support. Designed the system to assist with learning, information processing, and everyday productivity while reducing repetitive tasks.",
      tags: ["Python", "Google Gemini API", "REST APIs", "JSON", "Contextual Response Generation"],
      highlights: [
        "Architected conversational pipeline integrating Google Gemini API for context retention.",
        "Engineered structured JSON schemas for automated response parsing and validation.",
        "Built RESTful endpoints facilitating interactive user queries with low latency.",
        "Implemented proactive workflows to streamline task automation and contextual assistance."
      ],
      github: "https://github.com/bittuyadav01012003-pixel",
      demo: null // Coming Soon
    },
    {
      id: "safety-aware-navigation",
      title: "Safety-aware Navigation & Emergency Assistance Platform",
      subtitle: "Risk-Weighted Algorithmic Routing & SOS System",
      date: "Jul 2026",
      description: "Developed a safety-weighted route selection algorithm that evaluates routes using configurable risk factors beyond shortest distance. Integrated interactive route visualization and rapid SOS emergency assistance interfaces.",
      tags: ["Maps API", "Geolocation API", "Route Visualization", "Safety-aware Routing", "SOS Emergency Interface"],
      highlights: [
        "Implemented custom risk-weighting algorithmic calculation balancing safety parameters against transit distance.",
        "Integrated real-time Geolocation and Maps APIs for dynamic waypoint rendering and routing.",
        "Designed one-tap SOS emergency alert workflow providing rapid situational dispatch.",
        "Built responsive client interface with interactive map layer overlays and hazard warnings."
      ],
      github: "https://github.com/bittuyadav01012003-pixel",
      demo: null // Coming Soon
    },
    {
      id: "payroll-management-system",
      title: "Payroll Management System",
      subtitle: "Full-Stack Enterprise Salary Calculation & Record Processing",
      date: "May 2026",
      description: "Developed a full-stack Payroll Management System to automate employee record management, salary calculation, payroll processing, and related administrative tasks with strict OOP architecture and persistent file storage.",
      tags: ["C++", "OOP", "File I/O", "Smart Pointers", "JSON", "HTML", "CSS", "JavaScript", "CMake"],
      highlights: [
        "Designed robust C++ object-oriented architecture employing modern smart pointers for leak-free memory management.",
        "Implemented structured file I/O and JSON serialization for persistent employee database state.",
        "Automated tax deductions, bonuses, leave tracking, and salary ledger generation.",
        "Constructed clean frontend dashboard interfacing with CMake-managed backend build pipelines."
      ],
      github: "https://github.com/bittuyadav01012003-pixel",
      demo: null // Coming Soon
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      branch: "Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      graduationYear: "Aug' 25 – Present",
      cgpa: "5.4 CGPA",
      status: "Currently Pursuing"
    },
    {
      degree: "Intermediate (12th)",
      branch: "Science Stream",
      institution: "Ram Swarth Singh",
      location: "Patna, Bihar",
      graduationYear: "Jun' 21 – Mar' 23",
      cgpa: "68%",
      status: "Completed"
    },
    {
      degree: "Matriculation (10th)",
      branch: "General Studies",
      institution: "Sufia Public School",
      location: "Siwan, Bihar",
      graduationYear: "Jun' 19 – Mar' 21",
      cgpa: "60%",
      status: "Completed"
    }
  ],

  certifications: [
    {
      name: "Programming Fundamentals using Python - Part 1",
      organization: "Infosys Springboard",
      date: "Jun 29, 2026",
      icon: "Award",
      verificationUrl: "https://verify.onwingspan.com",
      image: "/certificates/infosys-python-part1.png",
      credentialInfo: "Issued on: Monday, June 29, 2026"
    },
    {
      name: "Programming Fundamentals using Python - Part 2",
      organization: "Infosys Springboard",
      date: "Jul 19, 2026",
      icon: "Award",
      verificationUrl: "https://verify.onwingspan.com",
      image: "/certificates/infosys-python-part2.png",
      credentialInfo: "Issued on: Sunday, July 19, 2026"
    },
    {
      name: "C++ Programming",
      organization: "Cipher Schools",
      date: "Jul 2026",
      icon: "ShieldCheck",
      verificationUrl: "",
      image: null
    },
    {
      name: "Python Certificate",
      organization: "Infosys",
      date: "Mar 2026",
      icon: "Award",
      verificationUrl: "",
      image: null
    },
    {
      name: "Database Management System",
      organization: "Infosys",
      date: "Nov 2025",
      icon: "Database",
      verificationUrl: "",
      image: null
    },
    {
      name: "WNS Certificate",
      organization: "CDP",
      date: "Jun 2026",
      icon: "ShieldCheck",
      verificationUrl: "",
      image: null
    }
  ],

  achievements: {
    placeholderText: "More milestones and competitive programming achievements will be added here.",
    items: []
  }
};

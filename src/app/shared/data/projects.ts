import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'sabaybook',
    title: 'SabayBook',
    description: 'A full-stack movie booking application built with Flutter and Node.js/Express.',
    content: `
    SabayBook is a full-stack movie booking application that simulates
    a real-world reservation system, allowing users to browse movies,
    view showtimes, and place bookings through a mobile interface. The
    project uses Flutter for the frontend and Node.js with Express for
    the backend, focusing on client-server communication, RESTful APIs,
    and overall application flow.
    `,
    techStack: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express.js',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'bcryptjs',
    ],
    github: 'https://github.com/Sithi-sak/movie-booking-monorepo',
    demo: '',
  },
  {
    id: 'angkorwear',
    title: 'AngkorWear Mobile App',
    description:
      'An Android e-commerce application built with Java, enabling seamless buying and selling.',
    content: `
    AngkorWear is an Android e-commerce application designed to support
    basic buying and selling workflows, including product browsing and
    item detail viewing. Built with Java, the project focuses on Android
    app structure, UI navigation, and implementing core e-commerce concepts
    in a mobile environment.
    `,
    techStack: ['Java11', 'SQLite', 'Android Studio'],
    github: 'https://github.com/Sithi-sak/AngkorWear',
    demo: '',
  },
  {
    id: 'restaurant-pos',
    title: 'Restaurant POS',
    description: 'A Java desktop app for restaurant owner to manage orders and sales.',
    content: `
    The Restaurant POS is a Java desktop application created to help restaurant
    owners manage orders and track sales efficiently. The project emphasizes
    usability, order processing logic, and structured data handling to reflect
    real-world point-of-sale operations.
    `,
    techStack: ['Java25', 'JavaFX', 'Gradle', 'SQLite'],
    github: 'https://github.com/Sithi-sak/restaurant-pos',
    demo: '',
  },
  {
    id: 'library-system',
    title: 'Library Management System',
    description:
      'A Java Desktop program design to help librarians manage and keep track of books in the library.',
    content: `
    This Library Management System is a Java desktop application designed to
    manage book inventories and borrowing records in a library setting. The
    project focuses on CRUD operations, data organization, and building
    practical administrative tools using core Java concepts.
    `,
    techStack: ['Java11', 'MySQL'],
    github: 'https://github.com/Sithi-sak/library-system',
    demo: '',
  },
  {
    id: 'lost-and-found-app',
    title: 'Lost and Found Mobile App',
    description:
      'An Android app that enables users to report lost items and collaborate with others to recover them.',
    content: `
    The Lost and Found Mobile App enables users to report lost items and browse
    community submissions to help recover missing belongings. Built for Android,
    the project highlights user-centered design, mobile app workflows, and
    solving real-world problems through collaborative features.
    `,
    techStack: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    github: 'https://github.com/Sithi-sak/lost-and-found-mobile-app',
    demo: '',
  },
  {
    id: 'portfolio',
    title: 'Portfolio | Sithisak',
    description: 'A portfolio built with Angular to showcase my projects and skills.',
    content: `
    This portfolio website was built with Angular to present my projects,
    skills, and development journey in a structured and professional format.
    The project focuses on component-based architecture, routing, and
    responsive design to create a clean and accessible web experience.
    `,
    techStack: ['Angular', 'Vanilla CSS', 'TypeScript'],
    github: '',
    demo: '',
  },
  {
    id: 'elevator-simulator',
    title: 'Elevator Simulator',
    description: 'A small, fun side web project built using vanilla HTML/CSS/JS',
    content: `
    The Elevator Simulator is a small web-based project that simulates basic
    elevator behavior through user interaction. Built with vanilla HTML, CSS,
    and JavaScript, it focuses on logic handling, state changes, and simple UI
    feedback without external libraries.
    `,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sithi-sak/elevator-simulator',
    demo: 'https://sithi-sak.github.io/elevator-simulator/',
  },
];

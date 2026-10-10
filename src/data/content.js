/*
 * All website content in one place.
 * Every text and image here comes from the original Dr Ghulam Ali site (WordPress / Elementor export).
 * Edit a string here and it changes everywhere it is used.
 */
import { img } from '@/utils/asset';

/* ------------------------------------------------------------------ */
/* Site / contact                                                      */
/* ------------------------------------------------------------------ */
export const SITE = {
  name: 'Dr. Ghulam Ali',
  shortName: 'Dr Ghulam Ali',
  role: 'Director, Centre for Languages and Translation Studies (CeLTS), Allama Iqbal Open University',
  footerRole: 'Director, Centre for Languages and Translation Studies (CeLTS), Allama Iqbal Open University (AIOU)',
    tagline: 'Scholar • Researcher • Academic Leader',
  logoLine1: 'Dr. Ghulam Ali',
  logoLine2: 'Director CeLTS · Allama Iqbal Open University',
};

export const CONTACT = {
  email: 'g.ali@aiou.edu.pk',
  emailHref: 'mailto:g.ali@aiou.edu.pk',
  officeEmail: 'ghulam.ali@aiou.edu.pk',
  mobile: '+92 300 6550445',
  mobileHref: 'tel:+923006550445',
  office: '+92 51 9057253',
  officeHref: 'tel:+92519057253',
  address: 'Allama Iqbal Open University, Islamabad, Pakistan',
  addressFull: 'Allama Iqbal Open University, H-8, Islamabad, Pakistan',
};

export const SOCIALS = [
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/196tfdTWRj/' },
  { key: 'tiktok', label: 'Tiktok', href: 'https://www.tiktok.com/@dr.ghulam.ali4?_r=1&_t=ZS-98Uf3yXPC3Y' },
  { key: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/in/dr-ghulam-ali-a19636294?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { key: 'youtube', label: 'Youtube', href: 'https://youtube.com/@profdrghulamali?si=_HXvbyIHpM2DHem6' },
];

/* Main navigation (with IIUI-style dropdowns that jump to page sections) */
export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Academic Biography', to: '/about#biography' },
      { label: 'My Academic Journey', to: '/about#journey' },
      { label: 'Achievements & Impact', to: '/about#achievements' },
      { label: 'Mission', to: '/about#mission' },
    ],
  },
  {
    label: 'Research & Publications',
    to: '/research-and-publication',
    children: [
      { label: 'Key Initiatives & Projects', to: '/research-and-publication#initiatives' },
      { label: 'Academic & Legislative Contributions', to: '/research-and-publication#contributions' },
      { label: 'Recent Publications', to: '/research-and-publication#publications' },
      { label: 'International Engagement', to: '/research-and-publication#engagement' },
    ],
  },
  {
    label: 'Projects',
    to: '/project',
    children: [
      { label: 'Grammora.AI', to: '/project#grammora' },
      { label: 'Lekhari', to: '/project#lekhari' },
      { label: 'Language Policy & Education', to: '/project#language-policy' },
      { label: 'Translation for Accessibility', to: '/project#translation' },
      { label: 'Additional Projects', to: '/project#additional' },
    ],
  },
  { label: 'Media Presence', to: '/media-presence' },
  { label: 'Contact', to: '/contact' },
];

export const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Research & Publications', to: '/research-and-publication' },
  { label: 'Projects', to: '/project' },
  { label: 'Media Presence', to: '/media-presence' },
  { label: 'Contact', to: '/contact' },
];

export const RESEARCH_FOCUS = [
  'Translation Studies',
  'Applied Linguistics',
  'Corpus Linguistics',
  'AI & Language Technologies',
  'Machine Translation',
  'Language Policy',
];

/* ------------------------------------------------------------------ */
/* Home – hero slider                                                   */
/* ------------------------------------------------------------------ */
export const HERO_SLIDES = [
  {
    id: 'portrait',
    kicker: 'Scholar • Researcher • Academic Leader',
    line1: 'Advancing Languages,',
    line2: 'Translation & Knowledge',
    text:
      'Dr. Ghulam Ali is a distinguished scholar, researcher, and academic leader in Translation Studies and Applied Linguistics. As Director of the Centre for Languages and Translation Studies (CeLTS), Allama Iqbal Open University, he leads research and national initiatives in translation, language policy, corpus linguistics, artificial intelligence, and language technologies for Pakistani languages.',
    cta: { label: 'Explore My Work', to: '/project' },
    cta2: { label: 'Read About Me', to: '/about' },
    image: img('project-lekhari.jpg')
  },
  {
    id: 'multilingual',
    kicker: 'Translation Studies • Applied Linguistics',
    line1: 'In a Multilingual',
    line2: 'World',
    text:
      'Leading research and innovation in Translation Studies, Applied Linguistics, Corpus Linguistics, AI & Language Technologies to cultivate global understanding and academic excellence.',
       cta: { label: 'Read About Me', to: '/about' },
    image: img('hero-multilingual.jpg'),
  },
  {
    id: 'policy',
    kicker: 'Pakistan Institute of Education',
    line1: 'Evidence-Based',
    line2: 'Language Policy',
    text:
      '',
    cta: { label: 'Explore Initiative', to: '/project#language-policy' },
    image: img('contribution-language-policy.jpg'),
  },
  {
    id: 'ai',
    kicker: 'Grammora.AI ',
    line1: 'Indigenous Language',
    line2: 'Technologies',
    text:
      'Developing sustainable digital resources, linguistic corpora, and AI-driven language technologies for Urdu and other Pakistani languages, enabling them to participate meaningfully in the emerging digital and AI ecosystem.',
    cta: { label: 'Explore Research Initiatives', to: '/research-and-publication' },
    image: img('hero-ai.jpg'),
  },
  {
    id: 'translation',
    kicker: 'Translation for Language Accessibility',
    line1: 'Research That Creates',
    line2: 'Real-World Impact',
    text:
      'Principal Investigator, Project Director, and Research Lead for nationally and internationally supported initiatives in Translation Studies, language technology, multilingual education, legal translation, and linguistic resource development.',
    cta: { label: 'View Projects', to: '/project' },
    image: img('hero-translation.jpg'),
  },
  {
    id: 'together',
    kicker: 'Collaboration & Partnerships',
    line1: "Let's Advance Language,",
    line2: 'Research & Innovation Together',
    text:
      'For academic collaboration, research partnerships, scholarly engagement, translation initiatives, and language technology projects.',
    cta: { label: 'Get In Touch', to: '/contact' },
    image: img('hero-together.jpg'),
  },
];

/* ------------------------------------------------------------------ */
/* About / biography                                                    */
/* ------------------------------------------------------------------ */
export const BIO = {
  kicker: 'About Us',
  title: 'Academic Biography',
  paragraphs: [
    'Dr. Ghulam Ali is a distinguished scholar, researcher, and academic leader whose work has contributed significantly to the development of Translation Studies and Applied Linguistics in Pakistan. With more than two decades of academic experience, his research brings together translation, language, culture, corpus linguistics, artificial intelligence, and multilingual communication.',
    'As Director of the Centre for Languages and Translation Studies (CeLTS), Allama Iqbal Open University, he leads initiatives in language planning, translation policy, linguistic resource development, machine translation, and AI-driven language technologies. His research focuses particularly on Urdu and other Pakistani languages, with the aim of strengthening linguistic inclusion and developing indigenous digital language resources.',
    'He has supervised postgraduate and doctoral researchers, led nationally and internationally funded research projects, contributed to academic and policy initiatives, and represented Pakistan at international conferences, research forums, and training programmes.',
  ],
  short: [
    'Dr. Ghulam Ali is a distinguished scholar and currently serves as the Director of the Centre for Languages and Translation Studies (CeLTS) at the Allama Iqbal Open University (AIOU). For over two decades, he has pioneered regional models of academic excellence and modernized curriculum design.',
    'His primary research interests lie at the intersection of modern Translation Studies, Applied Linguistics, and Artificial Intelligence. Dr. Ali is particularly recognized for his groundbreaking initiatives in developing indigenous language technologies for Urdu, leading critical research programs that bridge machine-assisted computation with regional linguistic heritages.',
  ],
  roles: [
    { icon: 'Landmark', title: 'Academic Leader', text: 'Director, CeLTS Allama Iqbal Open University, Islamabad' },
    { icon: 'Microscope', title: 'Researcher', text: 'Translation, Linguistics & AI' },
    { icon: 'Globe', title: 'Global Scholar', text: 'International Research & Collaboration' },
    { icon: 'GraduationCap', title: 'Mentor', text: 'PhD, MPhil & Research Supervision' },
  ],
  homeImage: img('tranvisionsummit.jpeg'),
  aboutImage: img('tranvisionsummitabout.jpeg'),
  podiumImage: img('bio-podium.jpg'),
};

/* Focus areas (short labels shown under the hero) */
export const FOCUS_AREAS = [
  { icon: 'BookOpen', title: 'Translation Studies', text: 'Theory, Practice & Technology' },
  { icon: 'Languages', title: 'Applied Linguistics', text: 'Language, Society & Education' },
  { icon: 'Database', title: 'Corpus Linguistics', text: 'Data, Resources & Research' },
  { icon: 'Cpu', title: 'AI & Language Tech', text: 'NLP, Machine Translation & LLMs' },
  { icon: 'Scale', title: 'Language Policy', text: 'Planning, Multilingualism & Inclusion' },
  { icon: 'Users', title: 'Mentorship', text: 'Research Supervision & Capacity Building' },
];

/* Disciplinary focus – "Areas of Expertise" */
export const EXPERTISE = {
  kicker: 'Disciplinary Focus',
  title: 'Areas of Expertise',
  items: [
    { icon: 'BookOpen', title: 'Translation Studies', text: 'Explores translation theory, pedagogy, criticism, postcolonial translation, legal translation, and the evolving role of AI in translation.' },
    { icon: 'Languages', title: 'Applied Linguistics', text: 'Researches language, society, education, multilingualism, discourse, language policy, and real-world linguistic challenges.' },
    { icon: 'Database', title: 'Corpus Studies', text: 'Develops and analyzes linguistic corpora for Urdu and Pakistani languages to support evidence-based research, translation, lexicography, and language technology.' },
    { icon: 'Bot', title: 'Machine Translation', text: 'Advances translation technologies for Urdu and Pakistani languages, addressing data scarcity, linguistic complexity, contextual interpretation, and low-resource challenges.' },
    { icon: 'Cpu', title: 'AI & Language Tech', text: 'Develops intelligent language technologies for Pakistani languages, including NLP, grammar correction, spell checking, summarization, paraphrasing, and AI-assisted writing.' },
    { icon: 'Scale', title: 'Language Policy', text: 'Examining institutional language planning directives, minority rights, and official multilingualism in global governance.' },
  ],
};

/* Academic vision + mission */
export const VISION = {
  kicker: 'Academic Vision',
  title: 'Building the Future of Multilingual Intelligence',
  text:
    'My academic vision is to develop an internationally recognized ecosystem of research, innovation, and collaboration that empowers Pakistani languages through translation, corpus development, artificial intelligence, and language technologies. By connecting local linguistic and cultural knowledge with contemporary developments in NLP, machine translation, and Large Language Models, I aim to promote linguistic inclusion, digital sovereignty, and equitable participation in the global knowledge economy.',
  cta: { label: 'Explore Research Initiatives', to: '/research-and-publication' },
  pillars: [
    { icon: 'Cpu', title: 'Indigenous Language Technologies', text: 'Developing sustainable digital resources, linguistic corpora, and AI-driven language technologies for Urdu and other Pakistani languages, enabling them to participate meaningfully in the emerging digital and AI ecosystem.' },
    { icon: 'Database', title: 'Corpus Development & Language Resources', text: 'Building large-scale linguistic corpora and digital language repositories that support evidence-based research, translation, lexicography, education, and the development of computational models for Pakistani languages.' },
    { icon: 'Languages', title: 'AI, Translation & Linguistic Inclusion', text: 'Advancing AI-powered translation and language-processing systems that address the needs of multilingual communities while supporting cultural preservation, knowledge accessibility, and the digital empowerment of local languages.' },
  ],
  image: img('research-lab.jpg'),
  pillarsImage: img('research-pillars.jpg'),
};

export const MISSION = {
  quote:
    'My mission is to empower Pakistani languages through research, translation, and intelligent technologies while advancing knowledge, linguistic inclusion, and meaningful participation in the digital age.',
  author: '— Dr. Ghulam Ali',
};

/* Impact in numbers (home + research) */
export const IMPACT = {
  title: 'Impact in Numbers',
  items: [
    { icon: 'Award', value: 20, suffix: '+', label: 'Years of Academic Excellence' },
    { icon: 'GraduationCap', value: 50, suffix: '+', label: 'MPhil / MS Researchers Supervised' },
    { icon: 'FileText', value: 40, suffix: '+', label: 'Peer-Reviewed Publications' },
    { icon: 'Lightbulb', value: 30, suffix: '+', label: 'Research & Academic Initiatives' },
    { icon: 'Presentation', value: 50, suffix: '+', label: 'Conferences, Workshops & Trainings' },
  ],
  background: img('impact-background.jpg'),
};

/* Achievements (about page) */
export const ACHIEVEMENTS = {
  kicker: 'Achievements & Impact',
  title: 'Making a Difference Through Research and Leadership',
  items: [
    { icon: 'Award', value: 20, suffix: '+', label: 'Years of Academic Experience' },
    { icon: 'FileText', value: 80, suffix: '+', label: 'Peer-Reviewed Publications' },
    { icon: 'FolderKanban', value: 15, suffix: '+', label: 'Major Research & Translation Projects' },
    { icon: 'Globe', value: 25, suffix: '+', label: 'International Conferences & Engagements' },
    { icon: 'GraduationCap', value: 50, suffix: '+', label: 'MPhil & MS Theses Supervised' },
    { icon: 'Trophy', value: 10, suffix: '+', label: 'Awards, Fellowships & Recognitions' },
  ],
};

/* Academic journey (about page) */
export const JOURNEY = {
  kicker: 'Milestones',
  title: 'My Academic Journey',
  items: [
    { icon: 'GraduationCap', title: 'Education', text: 'Advanced academic training in Translation Studies, Applied Linguistics, language, and interdisciplinary research.' },
    { icon: 'Presentation', title: 'Teaching', text: 'Extensive university teaching, curriculum development, and academic programme design in language and translation education.' },
    { icon: 'Microscope', title: 'Research', text: 'Research spanning Translation Studies, Applied Linguistics, corpus linguistics, discourse studies, AI, NLP, and language technologies.' },
    { icon: 'Landmark', title: 'Leadership', text: 'Providing academic leadership as Director of CeLTS while leading research initiatives, institutional development, and strategic collaborations.' },
    { icon: 'Sparkles', title: 'Impact', text: 'Building tools, resources, and communities for a multilingual and inclusive future.' },
  ],
};

/* ------------------------------------------------------------------ */
/* Research & development                                               */
/* ------------------------------------------------------------------ */
export const RESEARCH_INTRO = {
  kicker: 'Research & Development',
  title: 'Key Initiatives & Projects',
  text:
    'Advancing research at the intersection of artificial intelligence, computational linguistics, translation, language policy, and digital resources to strengthen Pakistani languages and promote linguistic inclusion.',
};

export const FLAGSHIPS = [
  {
    id: 'grammora',
    tag: 'Principle Investigation',
    title: 'Grammora.AI',
    text: 'Grammora.AI is a flagship AI initiative led by Dr. Ghulam Ali to develop a comprehensive digital language ecosystem for Urdu. It integrates grammar correction, spell checking, paraphrasing, summarization, idiom translation, machine translation, and intelligent writing assistance. The project aims to strengthen Urdu’s presence in education, communication, publishing, and the emerging AI landscape through indigenous NLP and language technologies.',
    link: { label: 'Learn More', to: '/project#grammora' },
    image: img('research-pillars.jpg'),
    contain: true,
  },
  {
    id: 'lekhari',
    tag: 'Funded by Pakistan Academy of Sciences',
    title: 'Lekhari',
    text: 'Lekhari is an AI-based linguistic platform developed to strengthen Urdu’s role in the digital and artificial intelligence era. It focuses on intelligent writing, language learning, linguistic analysis, and the development of computational resources for Urdu. The project contributes to linguistic inclusion, cultural preservation, and Pakistan’s technological sovereignty by developing indigenous language technologies for a low-resource language.',
    link: { label: 'Learn More', to: '/project#lekhari' },
    image: img('grammoralogo.svg'),
    contain: true,
  },
];

export const CONTRIBUTIONS = {
  title: 'Academic & Legislative Contributions',
  text: 'Selected frameworks, structural translations, and curated linguistic records.',
  items: [
    {
      title: 'Evidence-Based Framework for Language Teaching Policy',
      tag: 'Pakistan Institute of Education',
      text: 'A nationally significant research initiative led by Dr. Ghulam Ali to develop an evidence-based framework for language-in-education policy in Pakistan. Funded by the Pakistan Institute of Education, the project examined multilingual education, language mediums, learning outcomes, and educational inclusion to provide practical recommendations for effective and equitable language policy.',
      link: { label: 'Explore Initiative', to: '/project#language-policy' },
      image: img('contribution-language-policy.jpg'),
    },
    {
      title: 'Translation of 1,030 Punjab Laws',
      tag: 'Government of Punjab',
      text: 'A major legal translation project led by Dr. Ghulam Ali involving the translation of 1,030 Punjab laws from English into Urdu. Funded by the Government of Punjab, the initiative improved public access to legislation, strengthened legal language accessibility, and supported greater awareness of citizens’ rights and responsibilities.',
      link: { label: 'View Legislation', to: '/project#translation' },
      image: img('contribution-punjab-laws.jpg'),
    },
    {
      title: 'Urdu Translation of Election Commission Rules',
      tag: 'UNDP',
      text: 'A UNDP-supported translation and localization initiative led by Dr. Ghulam Ali to make the Election Commission’s rules and regulatory framework accessible in Urdu. The project focused on legal accuracy, terminological consistency, public understanding, electoral awareness, and informed civic participation.',
      link: { label: 'Read Translation', to: '/project#translation' },
      image: img('contribution-election-rules.jpg'),
    },
    {
      title: 'Urdu Translation of Art of Parenting Manual',
      tag: 'Aga Khan Foundation',
      text: 'Funded by the Aga Khan Foundation, this project involved the translation, localization, and cultural adaptation of the Art of Parenting manual for Urdu-speaking families and educators. Led by Dr. Ghulam Ali, the initiative expanded access to resources on parenting, child development, family communication, and early childhood wellbeing.',
      link: { label: 'Access Glossary', to: '/project#translation' },
      image: img('contribution-parenting.jpg'),
    },
  ],
};

export const PUBLICATIONS = {
  title: 'Recent Publications',
  items: [
    { title: 'Negotiating Emotion and Gender through Dialogue: A Pragmatic Study of White Nights.', year: '2026' },
    { title: 'European Scholarship on the Burushaski Language: A Critical Survey of the Literature.', year: '2026' },
    { title: 'Maneuvering Roles of Adjectives in Punjabi Grammar: A Corpus-Based Computational Grammatical Analysis.', year: '2026' },
    { title: 'Modality in Legal Translation: A Corpus-Based Investigation of “Shall”.', year: '2026' },
    { title: 'Silencing Native Voices: The Contestation of Mother Tongues in Multilingual Pakistan.', year: '2026' },
  ],
  more: { label: 'View All Publications', to: '/research-and-publication#publications' },
};

export const ENGAGEMENT = {
  title: 'International Engagement',
  items: [
    { title: 'Keynote Speaker: 5th International Conference on Applied Linguistics, Riphah International University', year: '2026' },
    { title: 'Keynote Speaker: Two-Day International Punjabi Conference, University of the Punjab', year: '2024' },
    { title: 'Keynote Speaker: 5th International Conference of the Linguistic Association of Pakistan, GCUF', year: '2019' },
    { title: 'International Training: Translation Pedagogy, University of Ottawa, Canada' },
    { title: 'International Summer School: Advanced Language Engineering, Kathmandu University, Nepal' },
    { title: 'International Research Fellowship: IRSIP, Higher Education Commission of Pakistan, Canada' },
  ],
  more: { label: 'View International Engagement', to: '/research-and-publication#engagement' },
};

/* ------------------------------------------------------------------ */
/* Projects page                                                        */
/* ------------------------------------------------------------------ */
export const PROJECTS_HERO = {
  kicker: 'Research & Projects',
  title: 'Transforming Research into Meaningful Impact',
  text: 'Dr. Ghulam Ali’s research brings together Translation Studies, Applied Linguistics, corpus linguistics, artificial intelligence, language policy, and multilingual education. His projects translate academic research into practical solutions for language accessibility, digital inclusion, education, governance, and the advancement of Pakistani languages.',
  image: img('projects-hero.jpg'),
};

export const RESEARCH_ACTION = {
  kicker: 'Research in Action',
  title: 'Research That Creates Real-World Impact',
  paragraphs: [
    'Dr. Ghulam Ali has served as Principal Investigator, Project Director, and Research Lead for nationally and internationally supported initiatives in Translation Studies, language technology, multilingual education, legal translation, and linguistic resource development.',
    'His work brings together researchers, translators, linguists, technologists, policymakers, and academic institutions to develop evidence-based frameworks, translation infrastructure, linguistic resources, and indigenous AI technologies for Pakistani languages.',
  ],
  image: img('research-action.jpg'),
};

export const FEATURED_PROJECTS = {
  kicker: 'Featured Projects',
  title: 'Flagship Initiatives Advancing Language & Technology',
  items: [
    {
      id: 'grammora',
      tag: '2026 · Principal Investigator',
      title: 'Grammora.AI',
      subtitle: 'AI-Powered Urdu Language Ecosystem',
      paragraphs: [
        'Grammora.AI is a flagship artificial intelligence initiative led by Dr. Ghulam Ali to develop a comprehensive digital language ecosystem for Urdu. The project integrates grammar correction, spell checking, paraphrasing, summarization, idiom translation, machine translation, and intelligent writing assistance.',
        'By combining Natural Language Processing, machine learning, and Large Language Model technologies, Grammora.AI aims to strengthen Urdu’s presence in education, communication, publishing, and the wider digital ecosystem while addressing the linguistic and cultural needs of Urdu-speaking communities.',
      ],
      cta: { label: 'Explore Project', to: '/contact' },
      image: img('grammoralogo.svg'),
      contain: true,
    },
    {
      id: 'lekhari',
      tag: 'Funded by Pakistan Academy of Sciences',
      title: 'Lekhari',
      subtitle: 'AI-Based Linguistic System for Urdu',
      paragraphs: [
        'Lekhari is an AI-based linguistic platform focused on strengthening Urdu within the digital and artificial intelligence landscape. The project develops intelligent solutions for writing, language learning, linguistic analysis, and computational language processing.',
        'Through the creation of Urdu-specific linguistic datasets, computational models, and digital resources, Lekhari contributes to linguistic inclusion, cultural preservation, educational empowerment, and Pakistan’s technological sovereignty.',
      ],
      cta: { label: 'Explore Project', to: '/contact' },
      image: img('project-lekhari.jpg'),
    },
    {
      id: 'language-policy',
      tag: 'Language Policy & Education',
      title: 'Evidence-Based Framework for Language Teaching Policy',
      subtitle: 'Funded by Pakistan Institute of Education | Ministry of Federal Education and Professional Training',
      paragraphs: [
        'A major research initiative led by Dr. Ghulam Ali to develop an evidence-based framework for language-in-education policy and multilingual educational planning in Pakistan.',
        'The project examined language mediums, the role of mother tongues in early education, multilingual classrooms, learning outcomes, educational equity, and social inclusion through data collection, stakeholder consultation, curriculum analysis, and policy review.',
      ],
      image: img('project-language-policy.jpg'),
    },
  ],
};

export const TRANSLATION_PROJECTS = {
  kicker: 'Legal & Public Translation',
  title: 'Translation for Language Accessibility',
  items: [
    { no: '01', icon: 'Landmark', title: 'Translation of 1,030 Punjab Laws (1860–2020)', tag: 'Funded by Government of Punjab', text: 'A major legal translation project led by Dr. Ghulam Ali as Project Director, involving the translation of 1,030 Punjab laws from English into Urdu. The initiative was designed to improve public access to legislation, strengthen legal language accessibility, and support greater awareness of citizens’ rights, responsibilities, and legal procedures.' },
    { no: '02', icon: 'Vote', title: 'Urdu Translation of Election Commission Rules', tag: 'Funded by UNDP', text: 'A translation and localization initiative focused on making the Election Commission’s regulatory framework more accessible to Urdu-speaking citizens. The project emphasized legal precision, terminological consistency, transparency, electoral awareness, and informed civic participation.' },
    { no: '03', icon: 'HeartHandshake', title: 'Urdu Translation of Art of Parenting Manual', tag: 'Funded by Aga Khan Foundation', text: 'A translation, localization, and cultural adaptation project designed to make internationally recognized parenting and child-development resources accessible to Urdu-speaking families and educators. The initiative addresses parenting practices, child wellbeing, family communication, and early childhood development.' },
    { no: '04', icon: 'Gavel', title: 'Translation of Supreme Court Legal Documents', tag: 'In collaboration with LUMS, Lahore', text: 'A major legal translation initiative involving the translation of Supreme Court legal documents into Urdu. The project aimed to improve linguistic access to judicial knowledge, strengthen legal literacy, and contribute to the wider democratization of legal information.' },
  ],
};

export const ADDITIONAL_PROJECTS = {
  kicker: 'Translation & Linguistics Initiatives',
  title: 'Additional Projects',
  items: [
    { icon: 'ScrollText', title: 'Urdu Translation of PPSC Rules', tag: 'Punjab Public Service Commission', text: 'Dr. Ghulam Ali led the Urdu translation of Punjab Public Service Commission Rules, ensuring greater accessibility to regulatory and procedural information while supporting transparency and the use of Urdu in governance and public administration.' },
    { icon: 'BookMarked', title: 'Bilingual Idiom Glossary', tag: 'Funded by ORIC, Allama Iqbal Open University', text: 'A meticulous academic project tracking idiom origin, comparative semantic mapping, and cross-cultural phrase translation between English and classic Urdu.' },
  ],
};

export const PROJECT_IMPACT = {
  kicker: 'Project Impact',
  title: 'From Research to Impact',
  items: [
    { icon: 'Cpu', title: 'AI & Language Technology', text: 'Developing indigenous AI and NLP solutions for Urdu and Pakistani languages.' },
    { icon: 'School', title: 'Multilingual Education', text: 'Generating evidence-based research to inform language teaching policy and educational planning.' },
    { icon: 'Scale', title: 'Legal Accessibility', text: 'Translating major legislative and judicial resources into Urdu for wider public access.' },
    { icon: 'Database', title: 'Language Resources', text: 'Creating corpora, linguistic datasets, glossaries, and digital resources for language and translation research.' },
    { icon: 'BookOpenText', title: 'Knowledge Accessibility', text: 'Using translation to expand access to educational, legal, institutional, and cultural knowledge.' },
    { icon: 'Languages', title: 'Linguistic Inclusion', text: 'Advancing digital technologies and research infrastructures that strengthen the representation of Pakistani languages.' },
  ],
};

export const COLLABORATION = {
  kicker: 'Building Through Collaboration',
  title: 'Partners & Collaborating Institutions',
  text: 'Contemporary language, translation, and technology challenges require interdisciplinary collaboration. Dr. Ghulam Ali works with academic institutions, research organizations, technology specialists, policymakers, translators, and language professionals to develop sustainable solutions for multilingual education, translation, linguistic resources, and AI-driven language technologies.',
  partners: [
    'Pakistan Academy of Sciences',
    'University of Gujrat',
    'Centre for Language Engineering, UET Lahore',
    'Directorate of Punjab Libraries',
    'Centre for Punjabi Language and Culture, University of the Punjab',
    'National Book Foundation',
  ],
  image: img('gallery-02.jpg'),
};

/* ------------------------------------------------------------------ */
/* Media presence                                                       */
/* ------------------------------------------------------------------ */
export const MEDIA = {
  kicker: 'In the News',
  title: 'Media Presence',
  items: [
    { title: 'Politics of/in Translation: Meaning Across Languages and Borders', venue: 'Blackhole, G-11, Islamabad', year: '2025', href: 'https://www.youtube.com/watch?v=zOdz-YCWG0c', image: img('media-1.jpg') },
    { title: 'Translation Studies as a Field of Knowledge', venue: 'Morning with Farah, ATV, Islamabad', year: '2025', href: 'https://www.youtube.com/watch?v=4DhBs5GY9j8', image: img('media-2.jpg') },
    { title: 'Translator, Translation and AI', venue: 'AIOU Studio, Islamabad', year: '2025', href: 'https://www.youtube.com/watch?v=oNtiy8JLglY', image: img('media-3.jpg') },
    { title: 'Linguistic Situation in Pakistan', venue: 'AAP TV, Islamabad', year: '2025', href: 'https://www.youtube.com/watch?v=kO3-Qy-YpVE', image: img('media-4.jpg') },
    { title: 'From Words to Worlds', venue: 'Blackhole, G-11, Islamabad', year: '2025', href: 'https://www.youtube.com/watch?v=zOdz-YCWG0c', image: img('media-5.jpg') },
    { title: 'Significance of Mother Tongue', venue: 'Kay2 TV, Islamabad', year: '2025', href: 'https://www.facebook.com/ghulamali.umt/videos/views-on-language-policy-kay2-tv-islamabad/728709393604472/', image: img('media-6.jpg') },
    { title: 'Natural Language Processing', venue: 'PTV, Islamabad Studio', year: '2024', href: 'https://www.youtube.com/watch?v=AB15tCu3cpA', image: img('media-7.jpg') },
  ],
};

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */
export const CONTACT_PAGE = {
  kicker: 'Contact',
  title: 'Let’s Connect and Collaborate',
  text: 'For academic collaboration, research partnerships, scholarly engagement, translation initiatives, and language technology projects.',
  together: {
    kicker: 'Let’s Work Together',
    title: 'Fostering Innovation Through Connection',
    text: 'We collaborate with global institutions, researchers, and industries to push the boundaries of language science and technology.',
    items: [
      { icon: 'GraduationCap', title: 'Academic Collaboration', text: 'Partnerships for teaching, research, and academic development.' },
      { icon: 'Microscope', title: 'Research Partnerships', text: 'Collaborative research in language, linguistics, AI, and translation studies.' },
      { icon: 'Languages', title: 'Translation Initiatives', text: 'Projects for language accessibility, localization, and knowledge dissemination.' },
      { icon: 'Cpu', title: 'Language Technology', text: 'Building tools, resources, and intelligent systems for multilingual communities.' },
    ],
  },
};

export const CTA = {
  kicker: 'Collaboration & Partnerships',
  title: "Let's Advance Language, Research & Innovation Together",
  text: 'For academic collaboration, research partnerships, scholarly engagement, translation initiatives, and language technology projects.',
  button: { label: 'Get In Touch', to: '/contact' },
};

export const CTA_PROJECTS = {
  kicker: 'Work With Dr. Ghulam Ali',
  title: 'Have a Research Idea or Collaboration in Mind?',
  text: 'Dr. Ghulam Ali welcomes opportunities for interdisciplinary research, language technology initiatives, translation projects, academic partnerships, and knowledge development.',
  button: { label: 'Get In Touch', to: '/contact' },
};

/* ------------------------------------------------------------------ */
/* Photo gallery (the home page carousel – all 20 photos)               */
/* ------------------------------------------------------------------ */
export const GALLERY = [
  'gallery-01.jpg',
  'gallery-02.jpg',
  'impact-background.jpg',
  'gallery-04.jpg',
  'gallery-05.jpg',
  'gallery-06.jpg',
  'gallery-07.jpg',
  'gallery-08.jpg',
  'gallery-09.jpg',
  'gallery-10.jpg',
  'gallery-11.jpg',
  'gallery-12.jpg',
  'gallery-13.jpg',
  'gallery-15.jpg',
  'gallery-16.jpg',
  'gallery-17.jpg',
  'gallery-18.jpg',
  'gallery-19.jpg',
  'gallery-20.jpg',
].map((p) => img(p));

/* Background images for the inner-page title banners */
export const BANNERS = {
  about: img('banner-about.jpg'),
  research: img('banner-research.jpg'),
  projects: img('banner-projects.jpg'),
  media: img('banner-media.jpg'),
  contact: img('banner-contact.jpg'),
  notFound: img('banner-not-found.jpg'),
};

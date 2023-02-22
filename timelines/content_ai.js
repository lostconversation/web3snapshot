const data = [
  {
    title: 'Turing Test',
    year: '1950',
    description:
      'It was proposed as a way to determine whether a machine is capable of thinking and exhibiting <mark>human-like intelligence</mark>. The test involves a human evaluator who engages in natural language conversations with another human and with a machine, and must decide which of the two is the human. If the evaluator is unable to distinguish the machine from the human, the machine is said to have <mark>passed the Turing Test</mark>. The test is widely used as a benchmark for artificial intelligence and is often discussed in the context of the philosophy of mind and the potential for <mark>machines to be conscious</mark>.',
    img: 'turing-test.jpg',
  },
  {
    title: 'AI Research Begins',
    year: '1956',
    description:
      "The term <mark>'Artificial intelligence'</mark> was coined at the Dartmouth Conference. Organized by <mark>John McCarthy</mark>, who later became known as one of the pioneers of artificial intelligence research. During the conference, researchers from a variety of fields, including computer science, mathematics, psychology, and linguistics, came together to discuss the potential for creating <mark>intelligent machines</mark>.",
    img: '1956.jpg',
  },
  {
    title: 'ELIZA Launched',
    year: '1964',
    description:
      "An early <mark>Natural Language Processing (NLP)</mark> computer program created at the MIT Artificial Intelligence Laboratory. It simulated conversation by using a <mark>'pattern matching'</mark> and substitution methodology that gave users an illusion of understanding on the part of the program, but had no built in framework for contextualizing events. Directives on how to interact were provided by <mark>'scripts'</mark> written by humans.",
    img: 'eliza.jpg',
  },
  {
    title: 'Shakey',
    year: '1966',
    description:
      "A general purpose <mark>mobile robot</mark> that reasons about its own actions. Built at Stanford, the project combined research in robotics, computer vision, and natural language processing. Because of this, it was the first project that melded <mark>logical reasoning and physical action</mark>. The robot's programming was primarily done in LISP.",
    img: 'shakey.jpg',
  },
  {
    title: 'AI Winter',
    year: '1966-96',
    description:
      'Dead period for AI - but in the meanwhile we have the proliferation of <mark>Personal Computers</mark>: Apple (closed hardware & software), IBM (open hardware & software), Windows, Linux, evolution of <mark>GUIs</mark> (mouse pointers & icons), the birth of the <mark>internet</mark> and search engines like Google.',
    img: 'winter.jpg',
  },
  {
    title: 'AI in movies',
    year: '1980s-2000s',
    description:
      "From Terminator to Star Trek, the public image of AI takes shape in different variations of <mark>human-robots that think like humans</mark>, feel emotions, are incredibly smart or strong. Previously inspired by Isaac Asimov sci-fi stories (earlier Frankenstein?), later leveraged by Steven Spielberg, 'The Singularity', 'Her', 'Transcendence' and many more.",
    img: 'movies.jpg',
  },
  {
    title: 'Deep Blue Defeats World Chess Champion',
    year: '1997',
    description:
      "IBM develops a computer with the sole task of <mark>playing chess</mark>. The machine plays against world chess champion Garry Kasparov in a series of six-game matches: in '96 Garry wins, but in '97, following an update, the machine wins, in a <mark>historical milestone for artificial intelligence</mark>.",
    img: 'chess.jpg',
  },
  {
    title: 'AIBO',
    year: '1999',
    description:
      'Sony launches the first consumer robot pet dog, with <mark>skills and personality</mark> that develops over time. New models were released every year until 2006. After some years of pause, new generations came out in 2018. Average price of AIBO is about $2.000.',
    img: 'aibo.jpg',
  },
  {
    title: 'Nvidia Cuda GPUs',
    year: '2007',
    description:
      'A set of tools (computing platforms, APIs) that allow an approach called <mark>general-purpose computing on GPUs</mark>. Working with programming languages such as C, C++, and Fortran, it enables develpers and specialists in parallel programming to write Deep Learning programs to run on Nvidia hardware.',
    img: 'nvidia.jpg',
  },
  {
    title: 'Siri',
    year: '2011',
    description:
      "Intelligent <mark>virtual assistant</mark> that works via a voice interface, developed by Apple. It <mark>answer questions, make recommendations</mark>, and perform actions by delegating requests to a set of Internet services. With continued use, it <mark>adapts</mark> to users' individual language usages, searches and preferences, returning individualized results.",
    img: 'siri.jpg',
  },
  {
    title: 'Watson',
    year: '2011',
    description:
      "IBM created a <mark>question-answering computing system</mark>, applying advanced natural language processing, information retrieval, knowledge representation, automated reasoning, and machine learning technologies. It can process 500 gigabytes (the equivalent of a million books) per second. Its cost is estimated at about three million dollars. After a few years in the making, in 2011 it <mark>won the popular TV show 'Jeopardy'</mark>. After that, it has been used in a variety of industries including healthcare.",
    img: 'watson.jpg',
  },
  {
    title: 'Eugene Goostman',
    year: '2014',
    description:
      "A computer-programmed <mark>chatbot</mark> developed to simulate a 13-year-old boy, managed to convince 33% of the judges at London's Royal Society during an event dedicated to Alan Turing, that it was human. Therefore it has passed the Turing Test, even though some <mark>objections</mark> were made.",
    img: 'eugene.jpg',
  },
  {
    title: 'Alexa',
    year: '2014',
    description:
      'Launched by Amazon, an intelligent <mark>virtual assistant</mark> with a voice interface, that completes <mark>shopping tasks, music playback, making to-do lists, setting alarms</mark>, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other <mark>real-time information</mark>, such as news. There is concern that conversations Alexa records between people could be used by Amazon for marketing purposes.',
    img: 'alexa.jpg',
  },
  {
    title: 'Open source AI Frameworks',
    year: '2015',
    description:
      'Technology that is publicly available for commercial and non-commercial use under various open source licenses. Open source AI includes <mark>datasets, prebuilt algorithms, and ready-to-use interfaces</mark> to help anyone getting started with AI app development. Tensor Flow, Keras, PyTorch, Caffe, CNTK, GLuon and other tools are available. <mark>OpenAI</mark> becomes a main player.',
    img: 'open.jpg',
  },
  {
    title: 'Tay',
    year: '2016',
    description:
      "A chatbot that was originally released by <mark>Microsoft</mark> via Twitter. It caused subsequent <mark>controversy</mark> when the bot began to post inflammatory and <mark>offensive tweets</mark> through its account, causing Microsoft to shut down the service only 16 hours after its launch. According to them, this was caused by trolls who 'attacked' the service.",
    img: 'tay.jpg',
  },
  {
    title: 'AlphaGo Defeats Go Champion',
    year: '2016',
    description:
      'A computer program developed by <mark>Google DeepMind</mark>, defeats champion Lee Sedol in a five-game match of <mark>Go</mark>, a chinese 3.000 years old very complex and strategic board game, with a larger number of possible moves than chess.',
    img: 'go.jpg',
  },
  {
    title: 'The Google Assistant',
    year: '2016',
    description:
      'Google launches the Google Assistant, a virtual assistant that uses artificial intelligence to <mark>assist users with tasks and answer questions</mark>. It is available on a variety of devices, including smartphones and smart speakers. As <mark>criticism</mark>, sensitive data collected from Google Home devices included private conversations after mistaken hotword triggering, such as business calls or bedroom conversations.',
    img: 'google.jpg',
  },
  {
    title: "OpenAI's GPT-2",
    year: '2019',
    description:
      'A natural language processing model. It has been trained on a dataset of over 8 million web pages. GPT-2 has the ability to complete tasks such as <mark>translation, summarization, and question answering, and can even generate coherent paragraphs and articles on a given topic</mark>. It has been praised for its impressive language generation capabilities, but has also raised concerns about the potential for it to be used for malicious purposes such as the automation of disinformation.',
    img: 'gpt-2.jpg',
  },
  {
    title: 'AI helps fight Covid',
    year: '2020',
    description:
      'Ever since the pandemic begun, researchers have used AI for algorithms to <mark>analyze large amounts of data, such as medical records and research papers, to identify trends and insights that can help with diagnosis, treatment, and vaccine development</mark>. Additionally, for identifying close contacts of infected individuals and alerting them to the need to self-quarantine, or predicting the spread of the virus, by analyzing data on factors such as travel patterns and population density.',
    img: 'covid.jpg',
  },
  {
    title: 'Text-to-Image',
    year: '2021',
    description:
      'Neural networks that can generate <mark>stunning images</mark> from text descriptions are released to the public. They are trained on datasets of text-image pairs and able to generate a wide variety of images, including <mark>photorealistic and surrealistic ones</mark>. Examples are DALL-E (Deep Autoencoder for Language and Logic Evolution, from OpenAI), Midjourney and Stable Diffusion.',
    img: 'midj.jpg',
  },
  {
    title: "OpenAI's Chat-GPT",
    year: '2022',
    description:
      'The <mark>ultimate chatbot, that definitely passes a Turing Test: can communicate in any language, write and revise text, and write code</mark>. It enables people to improve their work, is able to generate human-like responses to user inputs and can be used for a variety of applications, including chatbots and conversational agents.',
    img: 'chat-gpt.jpg',
  },
];

export default data;

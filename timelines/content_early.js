const data = [
  {
    title: 'Sumerian Abacus',
    year: '2500 BC',
    description:
      'Scholars point to clay tablets, in which characters in Babylonian cuneiform script were used as a way of <mark>counting items and performing basic operations</mark>. A system of columns worked just like a spreadsheet, but using a different number system (base 60). Many civilizations (Egyptian, Persian, Chinese, Hindu, Native Americans) came up with an abacus, just using different base numbers.',
    img: 'abacus.jpg',
  },
  {
    title: 'Indian Weighing Scale',
    year: '2000 BC',
    description:
      'As trade developed during the ancient times, merchants developed a need to <mark>assess the value of goods</mark> such as crops, clothing and gold, in order to barter for their goods. The early devices relied on balancing goods, with two plates attached to an overhead beam which was fixed on a central pole. Measurements were taken by placing the measured object on one plate and weight stones on the other, until an equilibrium was reached.',
    img: 'scale.jpg',
  },
  {
    title: 'Egyptian Sundial',
    year: '1500 BC',
    description:
      'Invented as a way to <mark>measure time</mark>, it consisted of a flat plate with a vertical rod that cast a shadow on the plate. The position of the shadow indicated the time of day. The same concept allowed Eratosthenes (a greek polymath) to figure out that the earth is round (and even to calculate its circumference), by realizing that the length of the shadows were longer in the lower Nile (north) and shorter in the upper Nile (south).',
    img: 'sundial.jpg',
  },
  {
    title: 'Pythagoras and the Concept of Numbers',
    year: '500 BC',
    description:
      "The Greek philosopher and mathematician, is credited with developing the concept of numbers as abstract entities that can be used to represent quantities and perform calculations. So he paved the way for <mark>Mathematics, Musicology, Numerology and Cosmology, besiedes its Triangle Theorem</mark>. He also advocated for a 'public way of life' and the Pythagorean society stated that everything known to humankind could be clarified with numbers.",
    img: 'pitagora.jpg',
  },
  {
    title: 'Euclidean geometry',
    year: '300 BC',
    description:
      "A mathematical system attributed to the Greek mathematician, which he described in his textbook on geometry: <mark>'The Elements'</mark>, whose first chapter is about plane geometry. A small set of intuitively appealing axioms (postulates) lets him deduce many other propositions (theorems) from these. Although many of Euclid's results had been stated earlier, he was the first to organize these propositions into a <mark>logical system</mark> in which each result is proved from axioms and previously proved theorems.",
    img: 'euclides.jpg',
  },
  {
    title: 'Archimedes Clocks & Calculus',
    year: '200 BC',
    description:
      "Many variations of 'water timer' were found in history. He improved the technology, building the first known geared <mark>ticking clock, that was also astronomical</mark>, and even had birds singing on time! He also paved the way for <mark>Calculus</mark>, a branch of mathematics that deals with the study of change and motion. Later picked up by Newton, it is an essential foundation for modern computer science and engineering, as it allows for the modeling and analysis of complex systems and processes.",
    img: 'archimede.jpg',
  },
  {
    title: 'Ptolemaic Universe',
    year: '150 AD',
    description:
      "His earth-centric model of the solar system evenutally was proven wrong, but only a thousand years later. In his <mark>'Mathematics Syntaxis'</mark> he introduced celestial bodies moving around in orbits, and mapped over a thousand stars. He made important contributions to geography, creating the first map of the known world and developing the concept of longitude and latitude. ",
    img: 'ptolemi.jpg',
  },
  {
    title: 'Introduction of Zero',
    year: '500 AD',
    description:
      "Aryabhata, a great astronomer of the classic age of India, initially used <mark>a dot as placeholder number</mark>. Then he used it also within decimal numbers, and so in the Hindu-Arabic numeral system that dot took the form of <mark>'0'</mark>. Later, Bramhaputra started using zero in mathematical operations. Other cultures (Babylonians, Mayans, are also credited with that 'invention'. Apparently zero reached western Europe only in the 12th century.",
    img: 'zero.jpg',
  },

  {
    title: "Al-Khwarizmi's Algebra",
    year: '830 AD',
    description:
      "The Persian mathematician, was appointed as the astronomer and head of the library of the House of Wisdom in Baghdad. Brilliant mind, writes the book <mark>'The Compendious Book on Calculation by Completion and Balancing'</mark>, which introduces the concept of algebraic equations, algorithms and the use of letters to represent unknown quantities. The word 'algebra' comes from the title of that book, and the word 'algorithm' comes from his name.",
    img: 'algebra.jpg',
  },
  {
    title: "Al-Kindi's Encryption",
    year: '870 AD',
    description:
      "Also based in Baghdad, he introduced of the concept of <mark>'frequency analysis'</mark>, which is a method used to decrypt encrypted messages by analyzing the frequencies of the letters in the message. <mark>Early cryptography</mark>. He was also a leading figure in the development of Islamic philosophy, and his works on metaphysics, ethics, and psychology were widely studied in the medieval Islamic world.",
    img: 'al-k.jpg',
  },
  {
    title: 'Compass in China',
    year: '900 AD',
    description:
      "Magnetized lodestones (naturally magnetized pieces of the mineral magnetite) were already used in China at around year 0, as a way for 'divination' in combination with iron spoons. Soon they realized that <mark>cardinal directions</mark> could be found, and so the compass was born, with great benefits for navigation and travels. By this time it consisted of a <mark>magnetized needle</mark> that was suspended on a pivot and could be used to determine the direction of magnetic north.",
    img: 'compass.jpg',
  },
  {
    title: 'Printing Press in China',
    year: '900 AD',
    description:
      "The Diamond Sutra, a Buddhist book from Dunhuang, China from around 868 AD during the Tang Dynasty, is said to be the oldest known printed book. It was created with a method known as <mark>block printing</mark>, which utilized panels of hand-carved wood blocks in reverse. Other texts include a printed calendar from around 877 AD, mathematic charts, a vocabulary guide, etiquette instruction, funeral and wedding guides, children's educational material, dictionaries and almanacs. 500 years later Johannes Gutenberg invented the movable-type printing press, which started the Printing Revolution in Europe.",
    img: 'press.jpg',
  },
  {
    title: 'Al-Jazari Programmable Automaton',
    year: '1200',
    description:
      "In his 'Book in knowledge of engineering tricks' he described 50 mechanical devices, along with instructions on how to construct them. His most known machines are the <mark>'Elephant clock'</mark>, and the first known programmable automaton, a complex machine that was able to perform various tasks through the use of gears, cogs, and other mechanical components. It was driven by a system of water clocks and was capable of performing functions such as playing music, pouring water, and even serving food. He has been described as the <mark>'father of robotics'</mark> and modern day engineering.",
    img: 'al-j.jpg',
  },
  {
    title: 'Fibonacci Sequence',
    year: '1202',
    description:
      'Leonardo from Pisa, in his mathematical text, <mark>Liber Abaci</mark>, laid out the Hindu-Arabic arithmetic (replacing roman numbers, and including the zero) useful for tracking profits, losses, remaining loan balances, etc. He also introducing the Fibonacci sequence: each number being the sum of the previous two numbers: 0+1=1, 1+1=2, 1+2=3, 2+3=5, and so on. The pattern is abundant in nature, being the basis for <mark>fractal growth</mark>.',
    img: 'fibonacci.jpg',
  },
  {
    title: 'Double-entry Bookkeeping & Golden Ratio',
    year: '1494',
    description:
      "Luca Pacioli was another brilliant mind during italian renaissance. Eclectic mathematician (he also coined the <mark>Golden Ratio</mark>, φ = 1.618…), he's considered the father of accountancy since he came up with the double-entry bookkeeping system, in which every item must be entered twice, once as a credit and once as a debit. The equation <mark>Capital = Assets - Liabilities</mark> was drawn. Also known as the 'venetian method of accounting' it quickly became used by many during the flourishing businesses of those times.",
    img: 'pacioli.jpg',
  },
  {
    title: "Leonardo's Machine Drawings",
    year: '1500',
    description:
      "The renaissance polymath, da Vinci, besides designs for a flying machine and much more, also designed a mechanical calculator known as the <mark>'Scribing Compass'</mark>, which was capable of performing basic arithmetic operations. He also designed a system for recording and analyzing data using the <mark>binary system</mark>. His designs were largely theoretical and were not actually constructed during his lifetime, but his work laid the foundation for later developments in mechanical computation.",
    img: 'leonardo.jpg',
  },
  {
    title: 'Copernican Solar System',
    year: '1543',
    description:
      "In his book 'De revolutionibus orbium coelestium', he argued that the Earth and other planets in our solar system revolve around the sun, rather than the other way around as was believed at the time. Despite facing criticism and pushback from the scientific community, Copernicus's ideas were eventually accepted. He also made important contributions to mathematics, including his work on <mark>trigonometry and the calculation of planetary positions</mark>.",
    img: 'copernicus.jpg',
  },
  {
    title: "Galileo's Scientific Method",
    year: '1600',
    description:
      'He developed the modern scientific method, which emphasized the importance of <mark>empirical evidence and experimentation in the pursuit of scientific knowledge</mark>. His achievements include the telescopic discoveries of the phases of Venus and the Galilean moons, the observation of sunspots, and the use of telescopic observations to accurately determine the periods of the four largest moons of Jupiter. He also developed the concept of inertia, the law of falling bodies, and the theory of the parabolic trajectory of projectiles. ',
    img: 'galileo.jpg',
  },
  {
    title: 'Logarithms',
    year: '1614',
    description:
      'Scottish mathematician John Napier invented a <mark>mathematical function</mark> that represents the power to which a base number must be raised to produce a given number. For example, the logarithm of 1000 to base 10 is 3, because 10 to the power of 3 is 1000. Logarithms are often used in mathematics and science to simplify complex calculations, especially when working with very large or very small numbers. They can also be used to express <mark>exponential relationships</mark>, such as the relationship between time and population growth or between distance and speed. ',
    img: 'napier.jpg',
  },
  {
    title: 'The Mechanical Calculator',
    year: '1623',
    description:
      'Also known as the Calculating Clock, invented by Wilhelm Schickard, it was capable of performing <mark>basic arithmetic operations</mark> such as addition, subtraction, multiplication, and division. It was the first machine to use <mark>base-10 numerals</mark> and could store up to six digits, making it a significant improvement over previous calculating devices that relied on Roman numerals and had limited storage capabilities.',
    img: 'schickard.jpg',
  },
  {
    title: 'The Pascaline',
    year: '1642',
    description:
      'Built from the french inventor Blaise Pascal, it was a mechanical device that was capable of performing basic arithmetic operations such as addition, subtraction, and multiplication. It was designed consisted of a series of <mark>interconnected gears and wheels</mark> that were driven by a crank handle. It was the first mechanical calculator to be produced in large quantities and was <mark>widely used throughout Europe for over a century</mark>.',
    img: 'pascal.jpg',
  },
  {
    title: 'Newton & Calculus',
    year: '1665',
    description:
      'Besides his well-knowns achievements in science, he is credited (sometimes in competition with Leibniz) with the invention of Calculus, which is at its most basic is all about studying the <mark>rate of change of a quantity over time</mark>. Differential calculus deals with the rate of change of a quantity such as how the position of an object changes compared to time. Integral calculus is all about accumulation, or summing up infinitely small quantities. Such breakthrough enabled him to the famous discoveries made soon afterwards, like the <mark>laws of motion and studies on light</mark>.',
    img: 'newton.jpg',
  },
  {
    title: 'Leibniz Machine',
    year: '1673',
    description:
      'From German inventor Gottfried Wilhelm Leibniz, the machine used a system of toothed wheels and cogs to perform the calculations, and was operated by turning a crank handle. The Leibniz machine was the <mark>first calculator that could perform all four arithmetic operations</mark>. Despite its advanced capabilities, the Leibniz machine was never widely adopted and only a few prototypes were ever built.',
    img: 'leibniz.jpg',
  },
  {
    title: 'Graph Theory',
    year: '1735',
    description:
      "Swiss mathematician Leonhard <mark>Euler</mark> introduced the concept of graph theory, which is the study of graphs and their properties. The Eulerian circuit is a circuit that starts and ends at the same vertex and traverses every edge of a graph exactly once. An example is the development of the Seven Bridges of Königsberg problem, which is a famous problem in graph theory that asks whether it is possible to traverse every bridge in the city of Königsberg exactly once. A few years later he also publishes 'Mechanica', in which he introduces the concept of energy, the principle of conservation of energy, and many <mark>mathematical notations</mark> that are instrumental today (function, base, pi etc.).",
    img: 'euler.jpg',
  },
  {
    title: 'Tellurium',
    year: '1755',
    description:
      "Also called orrery, designed by the scottish astronomer James Ferguson, who also had a fascination and talent for wooden models of machinery. It's a demonstration model to show the motions of the Earth and Moon around the Sun. He also presented to the Royal Society a book called <mark>'Astronomy Explained upon Sir Isaac Newton's Principles and Made Easy to Those who have Not Studied Mathematics'</mark>.",
    img: 'ferguson.jpg',
  },
  {
    title: 'Morse Code',
    year: '1835',
    description:
      "American inventor Samuel Morse developed a system of representing letters and numbers as a series of dots and dashes that could be transmitted through <mark>telegraphy</mark>. Morse's code revolutionized <mark>long-distance communication</mark> and became a standard for transmitting information around the world.",
    img: 'morse.jpg',
  },
  {
    title: 'The Analytical Engine',
    year: '1837',
    description:
      'English inventor Charles Babbage designs this complex machine, which was intended to be a <mark>general-purpose mechanical computer</mark>. It was an ambitious project, and although Babbage was able to design and build a small prototype of the machine, he was never able to complete the full-scale version.',
    img: 'babbage.jpg',
  },
  {
    title: 'Ada Lovelace',
    year: '1843',
    description:
      'She published an article in which she described the potential of the Analytical Engine to not only perform mathematical calculations, but also to generate music, create graphics, and even produce new forms of art. She is often considered <mark>the first computer programmer</mark> due to the creation of the first algorithm intended to be processed by a machine. She also wrote about the possibility of creating machines that could think and make decisions on their own.',
    img: 'ada.jpg',
  },
  {
    title: 'Boolean Algebra',
    year: '1854',
    description:
      "English mathematician George Boole publishes <mark>'An Investigation of the Laws of Thought'</mark>, which outlines a system of symbolic logic in which the values of true and false could be represented by the numbers 1 and 0, respectively. Any logical statement can be represented as a combination of simple binary variables, and that the logical operations of <mark>AND, OR, and NOT</mark> can be performed on these variables.",
    img: 'boole.jpg',
  },
  {
    title: 'The Telephone',
    year: '1876',
    description:
      'American inventor Alexander Graham successfully called his assistant, Watson, from another room in his laboratory. This discovery allowed people to <mark>communicate over long distances</mark> by transmitting sound through electrical signals. The first telephone was a simple device that consisted of a transmitter and a receiver, which were connected by a wire.',
    img: 'bell.jpg',
  },
  {
    title: 'The Arithmometer',
    year: '1888',
    description:
      'The first <mark>digital mechanical calculator</mark> strong enough and reliable enough to be used daily in an office environment. Its <mark>sturdy design</mark> gave it a strong reputation for reliability and accuracy and made it a key player in the move from human computers to calculating machines. In the late 19th centrury many companies worldwide (France, Germany, USA, Russia etc.) produced their own variations.',
    img: 'arithmometer.jpg',
  },
  {
    title: 'Hollerith Tabulating Machine',
    year: '1890',
    description:
      'American census was improved by inventor Herman Hollerith, whose machine used <mark>punched cards</mark> to process statistical information. It greatly reduced the time and effort required to process the <mark>large amount of data</mark> collected during the census. The punched card system developed by Hollerith was eventually adopted by many other companies and became a standard method of data processing for many years.',
    img: 'hollerith.jpg',
  },
  {
    title: 'The Telegraph',
    year: '1895',
    description:
      'Italian inventor Guglielmo Marconi successfully transmitted a wireless signal over a distance of 1.5 miles (2.4 km) using his newly invented wireless telegraph. This marked the first time that a <mark>wireless signal had been transmitted over a distance</mark>, and laid the foundation for the development of modern wireless communication technologies such as radio and television.',
    img: 'marconi.jpg',
  },
  {
    title: 'Enigma',
    year: '1923',
    description:
      'Invented by German engineer Arthur Scherbius as <mark>cyphering machine, to encode messages</mark>. It featured an electromechanical rotor mechanism that scrambles the 26 letters of the alphabet, and allows for decryption thanks to 26 lights that light up when a key press is correct. Initially targeted at commercial markets, it was <mark>adopted by the Nazi apparatus</mark> during WWII (see later).',
    img: 'enigma.jpg',
  },
  {
    title: 'First Electronic Computer',
    year: '1930',
    description:
      "The 'Atanasoff-Berry Computer' was designed to solve systems of <mark>simultaneous linear equations</mark>, a task that was previously done by hand or with mechanical calculators. It used electronic switches and vacuum tubes to perform calculations and store data.",
    img: 'atanasoff.jpg',
  },
  {
    title: 'Turing Machine',
    year: '1937',
    description:
      "Alan Turing developed the concept of the <mark>'universal machine'</mark>, which is now known as the <mark>Turing machine</mark>. This theoretical device as designed to be able to perform any computation that could be represented as an algorithm, using a series of simple operations such as moving symbols around on a tape. It is often used as a <mark>theoretical tool</mark> in the study of the limits of computation, and has also been utilized in the development of artificial intelligence and machine learning.",
    img: 'turing.jpg',
  },
  {
    title: 'WWII, the Bombe & Enigma cracked',
    year: '1941',
    description:
      'Turing and his team at Bletchley Park were able to crack the Enigma code in 1941, which greatly aided the Allies in World War II. Turing played a crucial role in the development of <mark>the Bombe, a machine that was able to decipher Enigma</mark> (german military encrypted messages). The success of this effort is often considered to have shortened the war by several years.',
    img: 'bombe.jpg',
  },

  {
    title: 'Zuse Z3',
    year: '1941',
    description:
      "German engineer Konrad Zuse developed a programmable computer, designed to perform calculations using binary arithmetic, and it used <mark>electromechanical switches for input and output</mark>. It was used by Zuse's company, Zuse KG, to perform engineering calculations for the German aircraft industry. The Z3 was destroyed during World War II, but it laid the foundation for the development of modern computers.",
    img: 'zuse.jpg',
  },
  {
    title: 'The Harvard Mark I',
    year: '1944',
    description:
      'also known as the IBM ASCC (Automatic Sequence Controlled Calculator), was a electromechanical computer developed at Harvard University. It was used to solve a variety of problems in fields such as <mark>nuclear physics, meteorology, and engineering</mark>. Also used for a variety of <mark>military and scientific calculations</mark> during World War II.',
    img: 'mark.jpg',
  },
  {
    title: 'The ENIAC',
    year: '1946',
    description:
      'The Electronic Numerical Integrator and Computer is presented to the american public. It was <mark>the first general-purpose electronic computer</mark>, capable of performing complex calculations at high speeds. It was developed as a tool to help calculate artillery firing tables for the United States military during World War II. ',
    img: 'eniac.jpg',
  },
  {
    title: 'The Transistor',
    year: '1947',
    description:
      'A solid-state, electronic, small, fast and reliable device that amplifies, switches, and modulates electronic signals, and can be used to build computers, radios, and other electronic devices. Invented at Bell Labs by William Shockley, John Bardeen, and Walter Brattain, it is <mark>the building block of the microelectronic industry</mark>, a major advancement over the vacuum tube, which is slower, larger, and less reliable, and is widely used in computers until the 1970s.',
    img: 'transistor.jpg',
  },
];

export default data;

const data = [
  {
    title: 'ARPANET',
    year: '1969',
    description:
      'The Advanced Research Projects Agency Network was developed by the United States Department of Defense. It was the first <mark>wide-area computer network</mark> to use packet switching, which allows data to be <mark>transmitted between computers</mark> in small packets, rather than in a single, continuous stream. This marked the beginning of what will become the internet.',
    img: 'arpanet.jpg',
  },
  {
    title: 'First Email',
    year: '1971',
    description:
      'Ray Tomlinson sent the first email, which was a message sent from one computer to another within the same network. Computers were also in the same room. The innovation involved <mark>using the @ symbol to separate the username from the host name</mark>. Before that, developers of early mainframes and minicomputers developed similar, but generally incompatible, message applications. After the advent of time-sharing between machines, in the 60s, conventions were refined for sending mail messages over the File Transfer Protocol.',
    img: 'email.jpg',
  },
  {
    title: 'TCP/IP Protocol',
    year: '1978',
    description:
      'By then, there were many different computer networks (ARPANET, Merit, CYCLADES, X.25, SERCnet, JANET, NREN, Telenet, DATAPAC, IPSS, UUCP, NSFNET etc.), and something was needed to unify them. The Transmission Control Protocol/Internet Protocol (TCP/IP) was developed as a <mark>standard for networking computers</mark>. It is a <mark>set of rules</mark> that govern how data is transmitted between computers on the internet.',
    img: 'tcp.jpg',
  },
  {
    title: 'World Wide Web',
    year: '1989',
    description:
      "The first web page was created at <mark>CERN</mark>, the European Organization for Nuclear Research in Geneva. At first, between '84 and '88, a closed system of TCP/IP connections was created internally at CERN, then opening to other european and american institutions. Finally Tim Berners-Lee proposed a 'universal linked information system', de facto creating the <mark>World Wide Web</mark>, with several concepts and technologies like the first <mark>web server</mark>, the first web <mark>browser</mark>, and a document formatting protocol, called Hypertext Markup Language (<mark>HTML</mark>). The Web opened to the public in 1991.",
    img: 'cern.jpg',
  },
  {
    title: 'Web 1.0',
    year: '1993-2003',
    description:
      'Widespread adoption of the internet for <mark>personal and business use, encyclopedia-style information resources and news directories</mark>. Using 56k dial-up connectors (unplugging the landline phone while surfing!) simple static HTML pages became available all over the world. Companies would create their first <mark>e-commerce</mark>, hard coded without templates. Search engines like Yahoo! Altavista and later Google begun <mark>indexing the web</mark>. The collective brain of our society was formed.',
    img: 'web1.jpg',
  },
  {
    title: 'Napster & P2P',
    year: '1999',
    description:
      "A <mark>peer-to-peer file sharing</mark> service that allowed users to share music files and films with each other over the internet. Each <mark>'peer'</mark> (node) has a copy of the file that is being shared. Then, a new user downloads 'pieces of it' from multiple sources. Closed down just two years later, because some music industry corporation won a cause for copyright infringment. Countless variations popped up afterwards. Concepts of P2P, copyright and ownership became mainstream because of the <mark>global impact on creators and consumers</mark>. <mark>Streaming</mark> became the legal answer to the issue.",
    img: 'napster.jpg',
  },
  {
    title: 'Dot-Com Bubble',
    year: '2000',
    description:
      'A period of rapid growth and <mark>speculation in the technology industry</mark>, particularly in internet-based companies. Investors poured money into the sector in the late 90s. This was followed by a<mark> crash in the stock market in late 2000</mark>, as many of these companies failed to live up to their high valuations. Stock prices plummeted, and many went bankrupt. It took years to the industry to recover, but future-giants like Google and Amazon were those who survived it and <mark>reinvent themselves</mark>.',
    img: 'dotcom.jpg',
  },
  {
    title: 'Web 2.0',
    year: '2004-present',
    description:
      "The second generation of the World Wide Web, which is characterized by the development of <mark>social media, user-generated content, and interactive web applications</mark>. Billions of people are now online, thanks to the widespread adoption of <mark>broadband internet connections</mark>, faster computers and programming languages that could handle data complexity. It's the read-write web. <mark>Facebook</mark> is probably the brightest example of such technology. Communication, interaction and collaboration were forever changed.",
    img: 'web2.jpg',
  },
  {
    title: 'Mobile Internet',
    year: '2010s',
    description:
      "Since iPhone came out in 2007 <mark>smartphones</mark> became widely adopted. Websites became <mark>mobile-optimized</mark> and the rise of apps allowed for internet-based services. At first, <mark>apps were 'skeuomorphic'</mark> they replicate textures and materials of the tool they represent (a radio, a book etc.). Soon enough the opposite became true: with the phone we now order food, hail a ride, book hotel rooms, and use <mark>Twitter</mark> for talking to the world. The development of new business models, such as <mark>subscription-based services and in-app purchases</mark>, have revolutionized the way companies monetize their products and services. People are now <mark>connected 24/7</mark> and access information and services anytime, anywhere.",
    img: 'mobile.jpg',
  },
  {
    title: ' Remote Lockdowns',
    year: '2020',
    description:
      'The <mark>Covid-19</mark> pandemic had a significant impact on how society functions. People had to rely more on the internet for communication with friends, family, and colleagues. This has led to an increase in the use of <mark>video conferencing</mark> platforms, such as Zoom and Skype, as well as messaging apps, such as WhatsApp and WeChat. <mark>Remote work and distance learning</mark> became common, virtual spaces and collaboration tools are used daily by everyone.',
    img: 'zoom.jpg',
  },
  {
    title: 'Web3',
    year: '2021 and beyond',
    description:
      "The third generation of the Web, which is characterized by the development of <mark>decentralized technologies</mark> such as blockchain, the increasing use of <mark>artificial intelligence and semantic web, wearables and augmented reality devices</mark>. Web3 is still in its early stages, but the idea is that decentralized services allow <mark>creators to own their data</mark>, and to monetize it in the way they want, possibly in some form of Metaverse. Micropayments like 'rewards' for accomplishing tasks or watching content could fuel <mark>'the internet of value'</mark> in the hand of its creators. <mark>Ethereum</mark> could become the main stage of the evolution of the web.",
    img: 'web3.jpg',
  },
];

export default data;

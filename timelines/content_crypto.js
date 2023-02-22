const data = [
  {
    title: 'Data Encryption Standard',
    year: '1977',
    description:
      "Until about the '70s, cryptography was mainly practiced in secret by <mark>military or spy agencies</mark>. However, that changed when two publications brought it into public awareness: the <mark>US government publication of the Data Encryption Standard (DES)</mark>, a block cipher which became very widely used;and the first publicly available work on <mark>public-key cryptography</mark>, by Whitfield Diffie and Martin Hellman.",
    img: '1977.jpg',
  },
  {
    title: 'David Chaum',
    year: '1982',
    description:
      "A computer scientist, writes two papers about new forms of cryptography: <mark>Blind Signatures for Untraceable Payments</mark> could allow for an automated payment system, in which third parties don't see information on the payment. <mark>Security without Identification: Transaction Systems to Make Big Brother Obsolete</mark>, these ideas coalesced into something like a movement.",
    img: 'chaum.jpg',
  },
  {
    title: 'eCash & DigiCash',
    year: '1983 & 1990s ',
    description:
      "Chaum's first implemenation, is <mark>a software that stores money in a digital format</mark>, on the user's local computer, cryptographically signed by a bank. The user could spend the digital money at any shop accepting eCash, without having to open an account with the vendor. <mark>Public-key encryption technology</mark> is developed: an asymmetric algorithm that ciphers the message and assigns two keys, one public, for the sender, and one private, for the receiver. It's the standard of public-key cryptography. Later in 1989 he setup <mark>DigiCash</mark>, a currency governed by <mark>cryptographic protocols</mark>. It was simply too early (a decade, to be precise) for the implementation of such ideas on the market, and in 1998 the company had to close.",
    img: 'ecash.jpg',
  },
  {
    title: 'Time Stamps',
    year: '1991',
    description:
      'Research scientists <mark>Stuart Haber and W. Scott Stornetta</mark> introduced a computationally practical solution for time-stamping digital documents so that they <mark>could not be backdated</mark> or tampered with. The system used a <mark>cryptographically secured chain of blocks</mark> to store the time-stamped documents and in 1992 <mark>Merkle trees</mark> were incorporated to the design, making it more efficient by allowing several documents to be collected into one block.',
    img: 'timestamps.jpg',
  },
  {
    title: 'Cypherpunks',
    year: '1992',
    description:
      "Three Bay Area computer scientists (Eric Hughes, Timothy C. May and John Gilmore) formed a group for <mark>discussing cryptography, mathematics, politics, and philosophy</mark>. The name cypherpunks derives from <mark>'cipher'</mark> and <mark>'cyberpunk'</mark>. They were an eclectic crew, but they all shared a core conviction: that <mark>the Internet would soon become an important battleground for human freedom</mark>.",
    img: 'cypher.jpg',
  },
  {
    title: 'E-gold',
    year: '1996',
    description:
      'A <mark>digital-gold currency</mark> that backed the services accounts with gold coins stored in a bank safe deposit box in Florida. Through a website <mark>API</mark> these coins could be sent as instant transfers to other e-gold accounts. It gained a widespread user base and merchant adoption, but <mark>security</mark> (credit card frauds and phishing attacks) became the critical factor to its demise.',
    img: '',
  },
  {
    title: 'Hashcash',
    year: '1997',
    description:
      'Invented by <mark>Adam Back</mark>, is known as a <mark>proof-of-work system</mark> used to limit email spam and denial-of-service attacks. After a decade it has become known for <mark>its use in Bitcoin</mark> (amongst many other cryptocurrencies) as part of the /mark>mining algorithm</mark>.',
    img: 'adam.jpg',
  },
  {
    title: 'B-money',
    year: '1998',
    description:
      '<mark>Wei Dai</mark> released an essay that detailed his idea for a cryptocurrency whose concepts were later implemented in Bitcoin and other cryptocurrencies: requires a specified amount of<mark> computational work</mark>, aka Proof of work. The work done is <mark>verified by the community</mark> who update a <mark>collective ledger book</mark>. The worker is <mark>awarded funds for their effort</mark>. Exchange of funds is accomplished by collective bookkeeping and <mark>authenticated with cryptographic hashes</mark>. Contracts are enforced through the broadcast and signing of transactions with <mark>digital signature</mark> (i.e., public key cryptography).',
    img: 'wei.jpg',
  },
  {
    title: 'Bit Gold',
    year: '1998',
    description:
      "Proposed by blockchain pioneer <mark>Nick Szabo</mark>. Although the project was never implemented, it's is widely considered to be the precursor to Satoshi Nakamoto's Bitcoin protocol. In fact, the Bit Gold and Bitcoin protocols draw such close parallels that people have speculated that Szabo is the anonymous Bitcoin creator, although Szabo has denied this claim. But, he indeed coined the term <mark>Smart Contract</mark>, using it to refer to <mark>'a set of promises that are automatically executed'</mark>. Smart Contracts play a crucial role in Web3.",
    img: 'szabo.jpg',
  },
  {
    title: 'Cryptographic Chains',
    year: '2000',
    description:
      'Stefan Konst publishes his theory of <mark>cryptographic secured chains</mark>, plus ideas for implementation.',
    img: '',
  },
  {
    title: 'RPoW',
    year: '2004',
    description:
      'Computer scientist and cryptographic activist <mark>Hal Finney</mark> introduced a system called RPoW, <mark>Reusable Proof Of Work</mark>. The system worked by receiving a non-exchangeable or a <mark>non-fungible hashcash-based proof of work token</mark> and in return created an RSA-signed token that could then be transferred from person to person.',
    img: 'hal.jpg',
  },
  {
    title: 'Satoshi Nakamoto',
    year: '2008',
    description:
      "The name used by the <mark>pseudonymous person</mark> or group who authored the <mark>Bitcoin white paper</mark>, which came out to the public <mark>right after the '08 financial crisis</mark>. Satoshi created and deployed Bitcoin's original reference implementation. He also devised the first blockchain database>. In the process, Nakamoto was the first to <mark>solve the double-spending problem</mark> for digital currency using a peer-to-peer network. The true identity of Satoshi Nakamoto, the creator of Bitcoin, remains unknown to this day.",
    img: 'satoshi.jpg',
  },
  {
    title: 'Bitcoin',
    year: '2009',
    description:
      'The very first cryptocurrency is born. <mark>A decentralized system that uses a technology called blockchain</mark>, which allows for secure and transparent <mark>peer-to-peer transactions without the need for a central authority</mark>. Since its creation, Bitcoin has gained a significant following and has become widely recognized as a <mark>legitimate form of currency</mark>. It has also faced its fair share of controversy, including its <mark>association with illegal activities on the dark web</mark> and its extreme price volatility. Despite these challenges, Bitcoin has continued to grow in popularity.',
    img: 'bitcoin.jpg',
  },
  {
    title: 'Bitcoin',
    year: '2010s',
    description:
      'Stunning <mark>price action of BTC</mark>, with correlated news, starting from the famous <mark>Bitcoin Pizza</mark> event.',
    img: 'btc.jpg',
  },
  {
    title: 'Vitalik Buterin & Ethereum',
    year: '2013',
    description:
      "After co-founding Bitcoin Magazine in 2012, Vitalik almost got a job at Ripple XRP, but luckily the application didn't go through due to visa issues. At the end of 2013 <mark>he released the whitepaper for a crypto project that would leverage the power of smart contracts, through decentralized applications dApps, inventing one of the most important technologies of our time: Ethereum</mark>. Ethereum was founded in 2014 by Vitalik plus Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph Lubin, with a crowdfunded development work. It went live on July 30th 2015.",
    img: '',
  },
  {
    title: '',
    year: '',
    description: '',
    img: 'ETH_Timeline.svg',
  },
  {
    title: 'Other Layer 1s',
    year: '',
    description: 'Coming Soon',
    img: '',
  },
  {
    title: 'NFT',
    year: '',
    description: 'Coming Soon',
    img: '',
  },
];

export default data;

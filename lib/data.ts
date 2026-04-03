export type LegalDocumentType = 
  | "Act / Statute" | "Code" | "Bill" | "Ordinance" | "Resolution" 
  | "Delegated Legislation" | "Case Law / Judgment" | "Precedent";

export type LegalNodeType = 
  | "Preamble" | "Title" | "Part" | "Chapter" | "Section" | "Subsection" 
  | "Clause" | "Sub-clause" | "Proviso" | "Explanation" | "Illustration" 
  | "Article (Constitution)" | "Rule" | "Sub-rule" | "Regulation" | "Bye-law" 
  | "Order" | "Notification" | "Circular" | "Guideline" | "Scheme" 
  | "Schedule" | "Annexure" | "Appendix" | "Form" | "Offence / Offense" 
  | "Punishment" | "Penalty" | "Fine" | "Imprisonment" | "Liability" 
  | "Compensation" | "Damages" | "Amendment" | "Amendment Act" | "Repeal" 
  | "Savings" | "Definitions / Definition Clause" | "Entry (Lists: Union / State / Concurrent)" 
  | "Heading" | "Marginal Note";

export interface LegalAct {
  id: string;
  type: LegalDocumentType;
  title: string;
  year: number;
  description: string;
  lastUpdated: string;
}

export interface LegalSection {
  id: string;
  actId: string;
  nodeType: LegalNodeType;
  chapter?: string;
  sectionNumber?: string;
  title: string;
  text: string;
  explanation?: string;
  punishment?: string;
  fines?: string;
  lastUpdated: string;
}

export const acts: LegalAct[] = [
  {
    id: "act-constitution",
    type: "Act / Statute",
    title: "The Constitution of India",
    year: 1950,
    description: "The supreme law of India. The document lays down the framework that demarcates fundamental political code, structure, procedures, powers, and duties of government institutions and sets out fundamental rights, directive principles, and the duties of citizens.",
    lastUpdated: "2024-01-01",
  },
  {
    id: "act-bns",
    type: "Code",
    title: "The Bharatiya Nyaya Sanhita (BNS)",
    year: 2023,
    description: "The criminal code of India, replacing the Indian Penal Code (IPC). It consolidates and amends the provisions relating to offences and for matters connected therewith.",
    lastUpdated: "2024-03-01",
  },
  {
    id: "act-bnss",
    type: "Code",
    title: "The Bharatiya Nagarik Suraksha Sanhita (BNSS)",
    year: 2023,
    description: "The procedural law for administration of criminal justice in India, replacing the Code of Criminal Procedure (CrPC).",
    lastUpdated: "2024-03-01",
  },
  {
    id: "act-bsa",
    type: "Act / Statute",
    title: "The Bharatiya Sakshya Adhiniyam (BSA)",
    year: 2023,
    description: "The law of evidence in India, replacing the Indian Evidence Act, 1872. It consolidates and provides for general rules and principles of evidence for fair trial.",
    lastUpdated: "2024-03-01",
  },
  {
    id: "act-companies",
    type: "Act / Statute",
    title: "The Companies Act",
    year: 2013,
    description: "An Act to consolidate and amend the law relating to companies.",
    lastUpdated: "2023-12-15",
  },
  {
    id: "act-it",
    type: "Act / Statute",
    title: "The Information Technology Act",
    year: 2000,
    description: "An Act to provide legal recognition for transactions carried out by means of electronic data interchange and other means of electronic communication.",
    lastUpdated: "2024-02-10",
  },
  {
    id: "act-contract",
    type: "Act / Statute",
    title: "The Indian Contract Act",
    year: 1872,
    description: "An Act to define and amend certain parts of the law relating to contracts.",
    lastUpdated: "2024-01-15",
  },
  {
    id: "act-consumer",
    type: "Act / Statute",
    title: "The Consumer Protection Act",
    year: 2019,
    description: "An Act to provide for protection of the interests of consumers and for the said purpose, to establish authorities for timely and effective administration and settlement of consumers' disputes.",
    lastUpdated: "2023-11-20",
  },
  {
    id: "act-rti",
    type: "Act / Statute",
    title: "The Right to Information Act",
    year: 2005,
    description: "An Act to provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities.",
    lastUpdated: "2023-10-05",
  },
  {
    id: "act-posh",
    type: "Act / Statute",
    title: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act",
    year: 2013,
    description: "An Act to provide protection against sexual harassment of women at workplace and for the prevention and redressal of complaints of sexual harassment.",
    lastUpdated: "2023-09-12",
  },
  {
    id: "bill-data-protection",
    type: "Bill",
    title: "The Digital Personal Data Protection Bill",
    year: 2023,
    description: "A bill to provide for the processing of digital personal data in a manner that recognizes both the right of individuals to protect their personal data and the need to process such personal data for lawful purposes.",
    lastUpdated: "2023-08-01",
  },
  {
    id: "case-kesavananda",
    type: "Case Law / Judgment",
    title: "Kesavananda Bharati v. State of Kerala",
    year: 1973,
    description: "A landmark decision of the Supreme Court of India that outlined the basic structure doctrine of the Constitution.",
    lastUpdated: "1973-04-24",
  }
];

export const sections: LegalSection[] = [
  // Constitution
  {
    id: "sec-const-preamble",
    actId: "act-constitution",
    nodeType: "Preamble",
    title: "Preamble",
    text: "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens: JUSTICE, social, economic and political; LIBERTY of thought, expression, belief, faith and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;",
    explanation: "The preamble sets out the guiding purpose and principles of the Constitution.",
    lastUpdated: "2024-01-01",
  },
  {
    id: "sec-const-14",
    actId: "act-constitution",
    nodeType: "Article (Constitution)",
    chapter: "Part III: Fundamental Rights",
    sectionNumber: "Article 14",
    title: "Equality before law",
    text: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    explanation: "This article guarantees that everyone, regardless of who they are, is treated equally by the law in India. The government cannot discriminate or apply laws differently to different people.",
    lastUpdated: "2024-01-01",
  },
  {
    id: "sec-const-21",
    actId: "act-constitution",
    nodeType: "Article (Constitution)",
    chapter: "Part III: Fundamental Rights",
    sectionNumber: "Article 21",
    title: "Protection of life and personal liberty",
    text: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    explanation: "A fundamental right stating that the government cannot take away your life or your freedom unless they follow a fair and legally established process.",
    lastUpdated: "2024-01-01",
  },
  
  // BNS
  {
    id: "sec-bns-103",
    actId: "act-bns",
    nodeType: "Section",
    chapter: "Chapter VI: Of Offences Affecting the Human Body",
    sectionNumber: "103",
    title: "Punishment for murder",
    text: "(1) Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.\n(2) When a group of five or more persons acting in concert commits murder on the ground of race, caste or community, sex, place of birth, language, personal belief or any other similar ground each member of such group shall be punished with death or with imprisonment for life, and shall also be liable to fine.",
    explanation: "This section prescribes the penalty for committing murder, including specific provisions for mob lynching or hate crimes committed by groups of five or more people.",
    punishment: "Death or Imprisonment for life",
    fines: "Liable to fine",
    lastUpdated: "2024-03-01",
  },
  {
    id: "sec-bns-111",
    actId: "act-bns",
    nodeType: "Section",
    chapter: "Chapter VI: Of Offences Affecting the Human Body",
    sectionNumber: "111",
    title: "Organised crime",
    text: "Any continuing unlawful activity including kidnapping, robbery, vehicle theft, extortion, land grabbing, contract killing, economic offences, cyber-crimes having severe consequences, trafficking in persons, drugs, illicit goods or services and weapons, human trafficking racket for prostitution or ransom by any person or a group of persons acting in concert, singly or jointly, either as a member of an organised crime syndicate or on behalf of such syndicate, by use of violence, threat of violence, intimidation, coercion, corruption or related activities or other unlawful means to obtain direct or indirect material benefit including a financial benefit, shall constitute organised crime.",
    explanation: "Defines organized crime broadly to include various continuous illegal activities done by syndicates for financial or material gain using violence or coercion.",
    punishment: "Death or imprisonment for life (if death results), else minimum 5 years up to life",
    fines: "Minimum ₹5,00,000",
    lastUpdated: "2024-03-01",
  },

  // IT Act
  {
    id: "sec-it-65",
    actId: "act-it",
    nodeType: "Section",
    chapter: "Chapter XI: Offences",
    sectionNumber: "65",
    title: "Tampering with computer source documents",
    text: "Whoever knowingly or intentionally conceals, destroys or alters or intentionally or knowingly causes another to conceal, destroy, or alter any computer source code used for a computer, computer programme, computer system or computer network, when the computer source code is required to be kept or maintained by law for the time being in force, shall be punishable with imprisonment up to three years, or with fine which may extend up to two lakh rupees, or with both.",
    explanation: "It is a crime to intentionally hide, destroy, or change computer source code if the law requires that code to be kept. This applies to computers, programs, systems, and networks.",
    punishment: "Imprisonment up to 3 years",
    fines: "Up to ₹2,00,000",
    lastUpdated: "2024-02-10",
  },
  {
    id: "sec-it-66",
    actId: "act-it",
    nodeType: "Section",
    chapter: "Chapter XI: Offences",
    sectionNumber: "66",
    title: "Computer related offences",
    text: "If any person, dishonestly or fraudulently, does any act referred to in section 43, he shall be punishable with imprisonment for a term which may extend to three years or with fine which may extend to five lakh rupees or with both.",
    explanation: "If someone commits any of the acts mentioned in Section 43 (like damaging a computer system, stealing data, or introducing viruses) with dishonest or fraudulent intentions, they are committing a crime.",
    punishment: "Imprisonment up to 3 years",
    fines: "Up to ₹5,00,000",
    lastUpdated: "2024-02-10",
  },

  // Contract Act
  {
    id: "sec-contract-3",
    actId: "act-contract",
    nodeType: "Section",
    chapter: "Chapter I: Of the Communication, Acceptance and Revocation of Proposals",
    sectionNumber: "3",
    title: "Communication, acceptance and revocation of proposals",
    text: "The communication of proposals, the acceptance of proposals, and the revocation of proposals and acceptances, respectively, are deemed to be made by any act or omission of the party proposing, accepting or revoking, by which he intends to communicate such proposal, acceptance or revocation, or which has the effect of communicating it.",
    explanation: "This section explains that making an offer, accepting it, or taking it back can be done through any action or lack of action, as long as the person intends to communicate their decision or their action effectively communicates it.",
    lastUpdated: "2024-01-15",
  },
  {
    id: "sec-contract-4",
    actId: "act-contract",
    nodeType: "Section",
    chapter: "Chapter I: Of the Communication, Acceptance and Revocation of Proposals",
    sectionNumber: "4",
    title: "Communication when complete",
    text: "The communication of a proposal is complete when it comes to the knowledge of the person to whom it is made. The communication of an acceptance is complete,— as against the proposer, when it is put in a course of transmission to him, so as to be out of the power of the acceptor; as against the acceptor, when it comes to the knowledge of the proposer.",
    explanation: "An offer is considered communicated when the receiver knows about it. An acceptance is complete for the person making the offer as soon as the acceptance is sent (like mailing a letter). It is complete for the person accepting when the offeror actually receives it.",
    lastUpdated: "2024-01-15",
  },

  // Companies Act
  {
    id: "sec-comp-3",
    actId: "act-companies",
    nodeType: "Section",
    chapter: "Chapter II: Incorporation of Company and Matters Incidental Thereto",
    sectionNumber: "3",
    title: "Formation of company",
    text: "A company may be formed for any lawful purpose by— (a) seven or more persons, where the company to be formed is to be a public company; (b) two or more persons, where the company to be formed is to be a private company; or (c) one person, where the company to be formed is to be One Person Company that is to say, a private company, by subscribing their names or his name to a memorandum and complying with the requirements of this Act in respect of registration.",
    explanation: "Defines the minimum number of people required to start different types of companies: 7 for a public company, 2 for a private company, and 1 for a One Person Company.",
    lastUpdated: "2023-12-15",
  },

  // RTI Act
  {
    id: "sec-rti-3",
    actId: "act-rti",
    nodeType: "Section",
    chapter: "Chapter II: Right to Information and Obligations of Public Authorities",
    sectionNumber: "3",
    title: "Right to information",
    text: "Subject to the provisions of this Act, all citizens shall have the right to information.",
    explanation: "This is the core section of the RTI Act, granting every Indian citizen the fundamental right to seek information from public authorities, subject to certain exemptions.",
    lastUpdated: "2023-10-05",
  },
  
  // Additional Types Examples
  {
    id: "sec-rti-def",
    actId: "act-rti",
    nodeType: "Definitions / Definition Clause",
    chapter: "Chapter I: Preliminary",
    sectionNumber: "2",
    title: "Definitions",
    text: "In this Act, unless the context otherwise requires,— (a) 'appropriate Government' means in relation to a public authority which is established, constituted, owned, controlled or substantially financed by funds provided directly or indirectly...",
    lastUpdated: "2023-10-05",
  },
  {
    id: "sec-contract-illus",
    actId: "act-contract",
    nodeType: "Illustration",
    chapter: "Chapter I: Of the Communication, Acceptance and Revocation of Proposals",
    sectionNumber: "4",
    title: "Illustration (a)",
    text: "A proposes, by letter, to sell a house to B at a certain price. The communication of the proposal is complete when B receives the letter.",
    lastUpdated: "2024-01-15",
  },
  {
    id: "sec-bns-expl",
    actId: "act-bns",
    nodeType: "Explanation",
    chapter: "Chapter VI: Of Offences Affecting the Human Body",
    sectionNumber: "103",
    title: "Explanation 1",
    text: "For the purposes of this section, 'acting in concert' means two or more persons acting together with a common intention.",
    lastUpdated: "2024-03-01",
  },
  {
    id: "sec-it-rules-3",
    actId: "rule-it-rules",
    nodeType: "Rule",
    chapter: "Part II: Due Diligence by Intermediaries",
    sectionNumber: "3",
    title: "Due diligence by an intermediary",
    text: "An intermediary, including social media intermediary and significant social media intermediary, shall observe the following due diligence while discharging its duties...",
    lastUpdated: "2021-02-25",
  },
  {
    id: "sec-it-rules-3-1-a",
    actId: "rule-it-rules",
    nodeType: "Sub-rule",
    chapter: "Part II: Due Diligence by Intermediaries",
    sectionNumber: "3(1)(a)",
    title: "Publishing rules and regulations",
    text: "the intermediary shall prominently publish on its website, mobile based application or both, as the case may be, the rules and regulations, privacy policy and user agreement for access or usage of its computer resource by any person;",
    lastUpdated: "2021-02-25",
  }
];

export function getActById(id: string): LegalAct | undefined {
  return acts.find(act => act.id === id);
}

export function getSectionsByActId(actId: string): LegalSection[] {
  return sections.filter(sec => sec.actId === actId);
}

export function getSectionById(id: string): LegalSection | undefined {
  return sections.find(sec => sec.id === id);
}

export function searchSections(query: string): LegalSection[] {
  const lowerQuery = query.toLowerCase();
  return sections.filter(sec => 
    sec.title.toLowerCase().includes(lowerQuery) || 
    sec.text.toLowerCase().includes(lowerQuery) ||
    (sec.sectionNumber && sec.sectionNumber.toLowerCase().includes(lowerQuery)) ||
    sec.nodeType.toLowerCase().includes(lowerQuery)
  );
}


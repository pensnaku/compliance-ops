// Sprint catalog — PRD §4.6. All prices are PLACEHOLDERS to confirm before launch.
// Regulatory wording follows PRD §5 — keep it accurate when editing.

export interface Sprint {
  framework: string;
  bullets: [string, string, string];
  price: string;
  weeks: string;
}

export const sprints: Sprint[] = [
  {
    framework: 'SOC 2',
    bullets: [
      'Get through the security reviews that larger customers send you',
      'Controls that exist in your systems, not only in a policy document',
      'Evidence your auditor can actually use',
    ],
    price: 'from €20k',
    weeks: '4 weeks',
  },
  {
    framework: 'ISO 27001',
    bullets: [
      'The security standard most international customers recognise',
      'Your security programme put into practice',
      'Prepared for the certification audit',
    ],
    price: 'from €25k',
    weeks: '6 weeks',
  },
  {
    framework: 'NIS2',
    bullets: [
      'Audit logs that can’t be quietly edited',
      'Records that support the 24-hour, 72-hour and one-month reporting steps',
      'Tighter control over who can release changes and reach your systems',
    ],
    price: 'from €25k',
    weeks: '4–6 weeks',
  },
  {
    framework: 'DORA',
    bullets: [
      'Keep operating when a key provider goes down',
      'Transactions that can be safely retried',
      'Failover you have actually tested',
    ],
    price: 'from €30k',
    weeks: '6 weeks',
  },
  {
    framework: 'GDPR',
    bullets: [
      'Encryption on the data that matters most',
      'Deletion requests that reach every copy of the data',
      'Data kept in the regions you’ve promised your customers',
    ],
    price: 'from €25k',
    weeks: '4–6 weeks',
  },
  {
    framework: 'EU AI Act',
    bullets: [
      'A traceable record of the decisions your AI systems make',
      'The documentation regulators will expect to see',
      'Ready ahead of the December 2027 date for high-risk systems',
    ],
    price: 'from €20k',
    weeks: '4–6 weeks',
  },
];

export const alsoCovered =
  'PCI DSS, HIPAA, ISO 42001, ISO 27701, the Cyber Resilience Act and TISAX. If your customers ask for something else, ask us and we’ll tell you honestly whether we can help.';

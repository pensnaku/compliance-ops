// Sprint catalog — PRD §4.6. All prices are PLACEHOLDERS to confirm before launch.

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
      'Pass enterprise security reviews',
      'Controls built, not just documented',
      'Evidence ready for your auditor',
    ],
    price: 'from €20k',
    weeks: '4 weeks',
  },
  {
    framework: 'ISO 27001',
    bullets: [
      'The globally recognised standard',
      'Your security programme, implemented',
      'Ready for the certification audit',
    ],
    price: 'from €25k',
    weeks: '6 weeks',
  },
  {
    framework: 'NIS2',
    bullets: [
      'Tamper-proof audit logs',
      'Incident-reporting readiness',
      'Secure release and access controls',
    ],
    price: 'from €25k',
    weeks: '4–6 weeks',
  },
  {
    framework: 'DORA',
    bullets: [
      'Resilience to vendor outages',
      'Safe, repeatable transactions',
      'Failover that actually fails over',
    ],
    price: 'from €30k',
    weeks: '6 weeks',
  },
  {
    framework: 'GDPR',
    bullets: [
      'Encryption where it counts',
      'Erasure that reaches every store',
      'Data residency, enforced',
    ],
    price: 'from €25k',
    weeks: '4–6 weeks',
  },
  {
    framework: 'EU AI Act',
    bullets: [
      'AI decisions logged and traceable',
      'Documentation regulators expect',
      'Ready well before December 2027',
    ],
    price: 'from €20k',
    weeks: '4–6 weeks',
  },
];

export const alsoCovered =
  'PCI DSS · HIPAA · ISO 42001 · ISO 27701 · Cyber Resilience Act · TISAX — and whatever your customers ask for next';

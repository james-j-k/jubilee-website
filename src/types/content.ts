export type EvidenceSource = {
  owner: string;
  reviewedAt: string;
  source: string;
};

export type Evidence = {
  label: string;
  value: string;
  context: string;
  source: EvidenceSource;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  href: "/services" | "/commercial";
};

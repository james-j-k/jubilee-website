export type EnquiryType = "household" | "commercial" | "safety" | "general";

export type ContactEnquiry = {
  name: string;
  phone: string;
  enquiryType: EnquiryType;
  message: string;
};

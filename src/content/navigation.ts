import type { NavigationItem } from "@/types/navigation";

export const primaryNavigation: readonly NavigationItem[] = [
  { href: "/about", label: "About Jubilee", description: "Our standard and story" },
  { href: "/services", label: "Services", description: "Household LPG support" },
  { href: "/commercial", label: "Commercial", description: "Business LPG support" },
  { href: "/safety", label: "Safety", description: "Safety guidance" },
];

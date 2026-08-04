import Image from "next/image";

import jubileeLogo from "../../../../logo/jubilee-logo.jpg";
import awarenessCampaign from "../../../../photos/awareness campaign- about us.jpg";
import ownerPortrait from "../../../../photos/meet-the-owner-about us.jpg";
import office from "../../../../photos/office-about us.jpg";
import officeCloseup from "../../../../photos/office-closeup-about us.jpg";
import team from "../../../../photos/team-about us.jpg";
import withCustomers from "../../../../photos/with customers- about us.jpg";
import withCustomer from "../../../../photos/with one of beloved customer.jpg";
import { ContactCard } from "@/components/contact";
import { Container, Section, StructuredPanel } from "@/components/layout";
import { ImageFrame, OfficialBrandRail, SectionHeading } from "@/components/ui";
import { aboutPage } from "@/content/about-page";
import { createPageMetadata } from "@/lib/metadata";

import styles from "@/components/about/about-page.module.css";

export const metadata = createPageMetadata({
  title: "About Jubilee",
  description: "Meet the people, place, and local operating context behind Jubilee Indane Home in Pala.",
});

export default function AboutJubileePage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-page-title">
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <OfficialBrandRail approvedLockup={<Image alt="" src={jubileeLogo} className={styles.officialLogo} priority />} relationship="Authorised Indane Distributor" size="compact" className={styles.rail} />
              <p className={styles.eyebrow}>About Jubilee</p>
              <h1 id="about-page-title">A Pala story, since 2001.</h1>
              <p className={styles.intro}>{aboutPage.founded} What began as a local Indane agency remains rooted in the people, homes, and businesses of Pala.</p>
              <ContactCard appearance="inline" features={["whatsapp"]} className={styles.heroAction} />
            </div>
            <ImageFrame className={styles.heroImage} caption="A real customer interaction at Jubilee Indane Home in Pala." priority="feature">
              <Image src={withCustomers} alt="Jubilee team member assisting a customer at the office" className={styles.heroPhoto} priority />
            </ImageFrame>
          </div>
        </Container>
      </section>

      <Section className={styles.section} tone="surface" aria-labelledby="place-title">
        <Container>
          <SectionHeading as="h2" eyebrow="A real place in Pala" title="The place behind the work." description="Jubilee operates from a physical office in Pala—a familiar local point of contact for domestic and commercial customers." id="place-title" className={styles.heading} />
          <div className={styles.placeGrid}>
            <ImageFrame caption="Jubilee Indane Home in Pala." priority="feature">
              <Image src={office} alt="Jubilee Indane Home office in Pala" className={styles.officePhoto} />
            </ImageFrame>
            <div className={styles.officeNarrative}>
              <ImageFrame className={styles.officeCloseupFrame} caption="The Jubilee Indane Home office entrance.">
                <Image src={officeCloseup} alt="Entrance to the Jubilee Indane Home office" className={styles.officeCloseup} />
              </ImageFrame>
              <StructuredPanel>
                <ul className={styles.facts}>
                  {aboutPage.officeFacts.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>
              </StructuredPanel>
            </div>
          </div>
        </Container>
      </Section>

      <Section className={styles.people} aria-labelledby="people-title">
        <Container>
          <div className={styles.peopleGrid}>
            <ImageFrame className={styles.ownerFrame} caption="Gigi James, founder of Jubilee Indane Home.">
              <Image src={ownerPortrait} alt="Gigi James, founder of Jubilee Indane Home" className={styles.ownerPhoto} />
            </ImageFrame>
            <div className={styles.peopleCopy}>
              <p className={styles.eyebrow}>The people behind Jubilee</p>
              <h2 id="people-title">Built by someone Pala can recognise.</h2>
              {aboutPage.peopleFacts.map((fact) => <p key={fact}>{fact}</p>)}
            </div>
          </div>
          <ImageFrame className={styles.teamFrame} caption="The Jubilee Indane Home team at the Pala office.">
            <Image src={team} alt="Jubilee Indane Home team at the office" className={styles.teamPhoto} />
          </ImageFrame>
        </Container>
      </Section>

      <Section className={styles.section} aria-labelledby="community-title">
        <Container>
          <div className={styles.communityGrid}>
            <div className={styles.communityCopy}>
              <p className={styles.eyebrow}>Care beyond the counter</p>
              <h2 id="community-title">Local presence, in real moments.</h2>
              <p>For more than two decades, Jubilee has met people where their everyday lives happen: at the office, in homes, and through safety-awareness conversations.</p>
              <p>These photographs document the relationships and responsibilities that have grown alongside the agency’s work in Pala.</p>
            </div>
            <div className={styles.communityPhotos}>
              <ImageFrame className={styles.awarenessFrame} caption="A safety-awareness campaign at Jubilee Indane Home.">
                <Image src={awarenessCampaign} alt="Safety awareness campaign at Jubilee Indane Home" className={styles.awarenessPhoto} />
              </ImageFrame>
              <ImageFrame caption="A Jubilee visit with a customer in Pala.">
                <Image src={withCustomer} alt="Jubilee representative with a customer in Pala" className={styles.customerPhoto} />
              </ImageFrame>
            </div>
          </div>
        </Container>
      </Section>

      <Section className={styles.contact} aria-labelledby="about-contact-title">
        <Container>
          <div className={styles.contactPanel}>
            <div className={styles.contactCopy}>
              <p className={styles.eyebrow}>Speak to Jubilee</p>
              <h2 id="about-contact-title">The story continues with a direct conversation.</h2>
              <p>Call, message, or visit Jubilee Indane Home in Pala.</p>
            </div>
            <ContactCard appearance="inline" features={["whatsapp", "phone"]} className={styles.actions} />
          </div>
        </Container>
      </Section>
    </main>
  );
}

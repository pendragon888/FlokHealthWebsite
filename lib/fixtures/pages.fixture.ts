import { NavigationPage } from "@pages/navigation/navigation.page";
import { LandingPage } from "@pages/landing/landing.page";
import { ForPatientsPage } from "@pages/forPatients/forPatients.page";
import { CheckAvailabilityPage } from "@pages/checkAvailability/checkAvailability.page";
import { YourDetailsPage } from "@pages/checkAvailability/yourDetails.page";
import { ForOrganisationsPage } from "@pages/forOrganisations/forOrganisations.page";
import { NewsPage} from '@pages/news/news.page'
import { AboutPage } from "@pages/about/about.page";
import { JoinTheTeamPage } from "@pages/joinTheTeam/joinTheTeam.page";
import { ContactUsPage } from "@pages/contactUs/contactUs.page";
import { test as baseTest } from "@playwright/test";

type MyPages = {
  navigationPage: NavigationPage;
  landingPage: LandingPage;
  forPatientsPage: ForPatientsPage;
  checkAvailabilityPage: CheckAvailabilityPage;
  yourDetailsPage: YourDetailsPage;
  forOrganisationsPage: ForOrganisationsPage;
  newsPage: NewsPage;
  aboutPage: AboutPage;
  joinTheTeamPage: JoinTheTeamPage;
  contactUsPage: ContactUsPage;
};

export const test = baseTest.extend<MyPages>({
    navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
    forPatientsPage: async ({ page }, use) => {
    await use(new ForPatientsPage(page));
  },
    checkAvailabilityPage: async ({ page }, use) => {
    await use(new CheckAvailabilityPage(page));
  },
    yourDetailsPage: async ({ page }, use) => {
    await use(new YourDetailsPage(page));
  },
    forOrganisationsPage: async ({ page }, use) => {
    await use(new ForOrganisationsPage(page));
  },
    newsPage: async ({ page }, use) => {
    await use(new NewsPage(page));
  },
    aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  },
    joinTheTeamPage: async ({ page }, use) => {
    await use(new JoinTheTeamPage(page));
  },
    contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  }
});

export { expect } from "@playwright/test";
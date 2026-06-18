import { NavigationPage } from "@pages/navigation/navigation.page";
import { LandingPage } from "@pages/landing/landing.page";
import { AboutPage } from "@pages/about/about.page";
import { test as baseTest } from "@playwright/test";

type MyPages = {
  navigationPage: NavigationPage;
  landingPage: LandingPage;
  aboutPage: AboutPage;
};

export const test = baseTest.extend<MyPages>({
    navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
    aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  }
});

export { expect } from "@playwright/test";
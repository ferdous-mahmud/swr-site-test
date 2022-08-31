import Image from 'next/image';
import { useRouter } from "next/router";


const Logo = ({ height }) => (
  <Image
      src="me.png"
      alt="Picture of the author"
      width={200}
      height={80}
    />
);

const Vercel = ({ height = 20 }) => (
  <div>
    <a class="no-underline" href="https://www.linkedin.com/in/ferdous19" target="_blank">
  Ferdous Mahmud Akash
    </a>
  </div>
);

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "iOS Developer Portfolio & Blog",
  "bn-BD": "iOS ডেভেলপার পোর্টফোলিও এবং ব্লগ",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "bn-BD": "প্রশ্ন? আমাদের মতামত দিন →",
};

export default {
  projectLink: "https://github.com/ferdous-mahmud",
  docsRepositoryBase: "https://github.com/vercel/swr-site/blob/master/pages",
  titleSuffix: " - iOS developer blog",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo height={12} />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={"iOS developer portfolio & blog : " + (TITLE_WITH_TRANSLATIONS[locale] || "")}
        >
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const ogImage =
      meta.image ||
      `https://swr-card.vercel.app${
        /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
      }`;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – SWR" : "SWR: iOS Developer Portfolio & Blog"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "bn-BD":
        return "এই পৃষ্ঠাটি GitHub এ সম্পাদনা করুন  → ";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    return (
      <a
        href="https://linktr.ee/ferdous.mahmud"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center no-underline text-current font-semibold"
      >
        <span className="mr-1">Made With ❤️ by</span>
        <span>
          <Vercel />
        </span>
      </a>
    )
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "bn-BD", text: "বাংলা" },
  ],
};

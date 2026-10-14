// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://andrewcwang.com";
export const SITE_TITLE: string = "Andrew C Wang's Blog";
export const SITE_DESCRIPTION: string = "Personal Blog";

// SEO metadata
export const TWITTER_CREATOR: string = "@acwangpython";

// Navigation
type Page = {
	title: string;
	href: string;
};

type NavItem = Page | { title: string; children: Page[] };

// One-off pages that don't belong to a category. Listed under "Sporatic" on the home page
// and in the navbar, and indexed for search.
export const SPORATIC_PAGES: Page[] = [
	{
		title: "Workouts",
		href: "/workouts",
	},
];

export const PAGES: NavItem[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Posts",
		children: [
			{
				title: "Blog",
				href: "/blog",
			},
			{
				title: "Short Thoughts",
				href: "/short-thoughts",
			},
			{
				title: "Recipes",
				href: "/recipes",
			},
			{
				title: "Political Topics",
				href: "/political-topics",
			},
			{
				title: "Image Board",
				href: "/image-board",
			},
		],
	},
	{
		title: "Sporatic",
		children: SPORATIC_PAGES,
	},
	{
		title: "About",
		href: "/about",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
};

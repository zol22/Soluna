export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Soluna Sites",
	// Your website's title and description (meta fields)
	title: "Soluna Sites – Custom Websites for Small Businesses & Entrepreneurs",
	description:
		"Soluna Sites helps small businesses and creative entrepreneurs shine online with beautiful, responsive websites. Built with clean code or trusted builders, each site is SEO-ready, mobile-friendly, and tailored to your brand's vibe.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Solange Ormeno",
		email: "ssormeno@hotmail.com",
		twitter: "solunasites",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/logo.png", // Change this
		alt: "Soluna Sites sun and moon logo",
	},
};

export default siteData;

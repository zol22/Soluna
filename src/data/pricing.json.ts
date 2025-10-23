import edit from "@assets/images/edit.jpg";
import fullcare from "@assets/images/fullcare.jpg";
import starter from "@assets/images/starter.jpg";
export interface PackageItem {
	name: string;
	featured?: boolean;
	price: number;
	monthly?: number;
	features: string[];
	image: ImageMetadata;
	ideal: string
}

export interface AddonItem {
	name: string;
	description: string;
	price: number;
	recurring?: "monthly" | "yearly" | "one-time";
    required: boolean;
	image?: ImageMetadata;
}

// 🌞 MAIN PACKAGES
export const packages: PackageItem[] = [
	{
		name: "Starter Site",
        featured: false,
		price: 700,
		features: [
			"Up to 5 Pages (Home, About, Services, Work, Contact)",
			"Responsive Design",
			"SEO & Website Optimization",
			"Help Getting Listed on Google",
			"Contact Form Setup + Google Maps Embed",
			"Clean Layout with Clear CTA",
		],
		image: starter,
		ideal: "New business owners who want a clean, professional site with no need for frequent changes"

	},
	{
		name: "Editable Site",
		featured: true,
		price: 900,
		features: [
			"Everything in Starter",
			"CMS or Platform for Client Edits",
			"Edit Text & Images",
			"Video Tutorial Included",
			"Optional Blog or Gallery Setup"
		],
		image: edit,
		ideal: "Business owners who want to update content themselves (text, images, blogs)"
	},
	{
		name: "Full Care Plan",
		featured: false,
		price: 600,
		monthly: 99,
		features: [
			"Everything in Editable Site",
			"Hosting + Domain Managed",
			"Unlimited Edits (Text & Images)",
			"Priority Support",
			"Optional Analytics Reporting"
		],
		image: fullcare,
		ideal:"Busy professionals who want everything managed for them with ongoing support"
	},
];

// 🌙 ADD-ONS
export const addons: AddonItem[] = [
	{
		name: "Domain Management",
		description: "Yearly management and renewal of your domain name.",
		price: 20,
		recurring: "yearly",
        required: true,
	},
	{
		name: "Hosting Setup",
		description: "Includes website hosting configuration and support.",
		price: 20,
        required: true,
		recurring: "monthly",
	},
	{
		name: "Custom Domain Email Setup",
		description: "Set up a professional email (hello@yourbusiness.com). Client pays email provider fees.",
		price: 25,
        required: false,
		recurring: "one-time",
	},
	{
		name: "WhatsApp Integration",
		description: "Add a chat widget so visitors can message you instantly.",
		price: 50,
        required: false,
		recurring: "one-time",
	},
	{
		name: "Product Catalog Setup",
		description: "Create a product or service catalog without payment functionality.",
		price: 100,
        required: false,
		recurring: "one-time",
	},
	{
		name: "Booking Calendar Integration",
		description: "Add a simple scheduling calendar for appointments or services.",
		price: 75,
        required: false,
		recurring: "one-time",
	},
	{
		name: "Blog Setup",
		description: "Enable a blog feature so the client can post updates easily.",
		price: 75,
        required: false,
		recurring: "one-time",
	},
	{
		name: "Custom Site",
		description: "Convert from Wix/Squarespace to custom site",
		price: 300,
        required: false,
		recurring: "one-time",
	},
];

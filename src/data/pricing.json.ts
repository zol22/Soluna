import image1 from "@assets/images/hero2.jpg";
import image2 from "@assets/images/couple-6-crop.jpg";
import image3 from "@assets/images/couple-1-square.jpg";

export interface PackageItem {
	name: string;
	featured?: boolean;
	price: number;
	monthly?: number;
	features: string[];
	image: ImageMetadata;
}

export interface AddonItem {
	name: string;
	description: string;
	price: number;
	recurring?: "monthly" | "yearly";
    required: boolean
	image?: ImageMetadata;
}

// 🌞 MAIN PACKAGES
export const packages: PackageItem[] = [
	{
		name: "LumpSum - (one time)",
        featured: false,
		price: 300,
		features: [
			"Up to 5 Pages (Home, About, Services, Work, Contact)",
			"SEO & Website Optimization",
			"Help Getting Listed on Google",
			"Contact Form Setup",
			"Beautiful Landing Page with Clear CTA",
			"Improved User Experience (UX)",
			"User Behavior Analysis",
			"Reduce Bounce Rate & Boost Conversions"
		],
		image: image1,
	}
];

// 🌙 ADD-ONS
export const addons: AddonItem[] = [
	{
		name: "Domain Management",
		description: "Yearly management and renewal of your domain name.",
		price: 20,
		recurring: "yearly",
        required: true,
		image: image3,
	},
	{
		name: "Hosting Setup",
		description: "Includes website hosting configuration and support.",
		price: 20,
        required: true,
		recurring: "monthly",
	},
	{
		name: "Unlimited Edits",
		description: "Unlimited changes to text and images anytime you need.",
		price: 99,
        required: false,
		recurring: "monthly",
	},
];


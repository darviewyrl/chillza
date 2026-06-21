export type IconName =
	| 'leaf'
	| 'mango'
	| 'sparkles'
	| 'low-sugar'
	| 'droplets'
	| 'shopping-bag'
	| 'play'
	| 'users';

export type SocialIconName = 'facebook' | 'instagram';

export interface Product {
	brand: string;
	name: string;
	type: string;
	flavor: string;
	slogan: string;
	price: number;
	bestFor: string;
	image: string;
}

export interface Benefit {
	title: string;
	description: string;
	icon: IconName;
}

export interface SocialLink {
	name: string;
	handle: string;
	href: string;
	icon: SocialIconName;
}

export interface TeamMember {
	name: string;
	studentNumber: string;
	role: string;
	image: string;
	imageAvailable: boolean;
}

export const campaignArtwork = {
	desktop: '/images/use/gpt-artwork-desktop.png',
	mobile: '/images/use/gpt-artwork-mobile.png',
	title: '/images/use/icon-hero.png',
	price: '/images/use/icon-price.png'
} as const;

export const product: Product = {
	brand: 'CHILL ZA',
	name: 'CHILL ZA Mango Soda',
	type: 'Mango Soda Sparkling Tea',
	flavor: 'Mango Soda',
	slogan: 'Chill Your Day, Pop Your Mood!',
	price: 20,
	bestFor: 'Hot days, bright breaks, and easy refreshment',
	image: '/images/chillza-can-transparent.png'
};

export const navigation = [
	{ label: 'Home', href: '#home' },
	{ label: 'Benefits', href: '#benefits' },
	{ label: 'Product', href: '#product' },
	{ label: 'Video', href: '#video' },
	{ label: 'Contact', href: '#contact' },
	{ label: 'Team', href: '#team' }
] as const;

export const benefits: Benefit[] = [
	{ icon: 'leaf', title: 'Real Tea Extract', description: 'Rich aroma from real tea leaves.' },
	{ icon: 'mango', title: 'Sweet Mango Flavor', description: 'Deliciously sweet and tropical.' },
	{
		icon: 'sparkles',
		title: 'Sparkling & Refreshing',
		description: 'Fizzy and refreshing, perfect for any day.'
	},
	{ icon: 'low-sugar', title: 'Low Sugar', description: 'Light taste with fewer calories.' }
];

export const socialLinks: SocialLink[] = [
	{
		name: 'Facebook',
		handle: 'Chill Za Thailand',
		href: 'https://facebook.com/ChillZaThailand',
		icon: 'facebook'
	},
	{
		name: 'Instagram',
		handle: '@chillza.official',
		href: 'https://instagram.com/chillza.official',
		icon: 'instagram'
	}
];

export const teamMembers: TeamMember[] = [
	{
		name: 'Surada Supasri',
		studentNumber: '01',
		role: 'Location Preparation',
		image: '/images/team/member-01.jpg',
		imageAvailable: false
	},
	{
		name: 'Kritaporn Chooitjin',
		studentNumber: '04',
		role: 'Location Preparation',
		image: '/images/team/member-04.jpg',
		imageAvailable: false
	},
	{
		name: 'Nannapas Nilket',
		studentNumber: '06',
		role: 'Location Preparation',
		image: '/images/team/member-06.jpg',
		imageAvailable: false
	},
	{
		name: 'Warunpack Bunruangsri',
		studentNumber: '12',
		role: 'Script Writer & Actor',
		image: '/images/team/member-12.jpg',
		imageAvailable: false
	},
	{
		name: 'Tharathep Hariwon',
		studentNumber: '15',
		role: 'Script Writer',
		image: '/images/team/member-15.jpg',
		imageAvailable: false
	},
	{
		name: 'Chanathip Wongsamran',
		studentNumber: '19',
		role: 'Videographer',
		image: '/images/team/member-19.jpg',
		imageAvailable: false
	},
	{
		name: 'Pongsakorn Nichkasem',
		studentNumber: '27',
		role: 'Website Developer, Poster Designer & Product Designer',
		image: '/images/team/member-27.jpg',
		imageAvailable: false
	},
	{
		name: 'Phachara Suphamethanon',
		studentNumber: '34',
		role: 'Location Preparation',
		image: '/images/team/member-34.jpg',
		imageAvailable: false
	}
];

export interface Product {
	brand: string;
	thaiBrand: string;
	name: string;
	thaiName: string;
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
	icon: string;
}

export interface SocialLink {
	name: string;
	handle: string;
	href: string;
	icon: string;
}

export interface TeamMember {
	name: string;
	studentNumber: string;
	role: string;
	image: string;
	imageAvailable: boolean;
}

export const product: Product = {
	brand: 'CHILL ZA',
	thaiBrand: 'ชิวซ่า',
	name: 'CHILL ZA Mango Soda',
	thaiName: 'ชิวซ่า มะม่วงโซดา',
	type: 'Mango Soda Sparkling Tea',
	flavor: 'Mango Soda',
	slogan: 'Chill Your Day, Pop Your Mood!',
	price: 20,
	bestFor: 'Hot days, relaxing moments, and fun breaks',
	image: '/images/chillza-can.png'
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
	{ icon: '🍃', title: 'Real Tea Extract', description: 'Rich aroma from real tea leaves' },
	{ icon: '🥭', title: 'Sweet Mango Flavor', description: 'Deliciously sweet and tropical' },
	{
		icon: '🫧',
		title: 'Sparkling & Refreshing',
		description: 'Fizzy and refreshing, perfect for any day'
	},
	{ icon: '✨', title: 'Low Sugar', description: 'Light taste with fewer calories' }
];

export const socialLinks: SocialLink[] = [
	{
		name: 'Facebook',
		handle: 'Chill Za Thailand',
		href: 'https://facebook.com/ChillZaThailand',
		icon: 'f'
	},
	{
		name: 'Instagram',
		handle: '@chillza.official',
		href: 'https://instagram.com/chillza.official',
		icon: '◎'
	}
];

export const teamMembers: TeamMember[] = [
	{
		name: 'นางสาว สุรดา ศุภสีห์',
		studentNumber: '01',
		role: 'ผู้จัดเตรียมสถานที่ถ่ายทำโฆษณา',
		image: '/images/team/member-01.jpg',
		imageAvailable: false
	},
	{
		name: 'นางสาว กฤตภรณ์ ชูอิฐจีน',
		studentNumber: '04',
		role: 'ผู้จัดเตรียมสถานที่ถ่ายทำโฆษณา',
		image: '/images/team/member-04.jpg',
		imageAvailable: false
	},
	{
		name: 'นางสาว นันท์นภัส นิลเกษ',
		studentNumber: '06',
		role: 'ผู้จัดเตรียมสถานที่ถ่ายทำโฆษณา',
		image: '/images/team/member-06.jpg',
		imageAvailable: false
	},
	{
		name: 'นาย วรุญพักตรุ์ บุญเรืองศรี',
		studentNumber: '12',
		role: 'ผู้คิดบทโฆษณา และนักแสดงในฉาก',
		image: '/images/team/member-12.jpg',
		imageAvailable: false
	},
	{
		name: 'นาย ธราเทพ หาริวร',
		studentNumber: '15',
		role: 'ผู้คิดบทโฆษณา',
		image: '/images/team/member-15.jpg',
		imageAvailable: false
	},
	{
		name: 'นาย ชนาธิป วงศ์สำราญ',
		studentNumber: '19',
		role: 'ตากล้องถ่ายโฆษณา',
		image: '/images/team/member-19.jpg',
		imageAvailable: false
	},
	{
		name: 'นาย พงศกรณ์ นิจเกษม',
		studentNumber: '27',
		role: 'ผู้จัดทำเว็บไซต์ โปสเตอร์ และออกแบบสินค้า',
		image: '/images/team/member-27.jpg',
		imageAvailable: false
	},
	{
		name: 'นาย พชร ศุภเมธานนท์',
		studentNumber: '34',
		role: 'ผู้จัดเตรียมสถานที่ถ่ายทำโฆษณา',
		image: '/images/team/member-34.jpg',
		imageAvailable: false
	}
];

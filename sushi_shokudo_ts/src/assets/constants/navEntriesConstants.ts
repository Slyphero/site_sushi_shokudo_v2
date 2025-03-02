import type { NavEntry } from "../models/navEntryInterface";

export const navEntries: NavEntry[] = [   
	{ 
		name: "Accueil", 
		link: {name: 'home'} 
	},
	{ 
		name: "Menu", 
		link: {name: 'menu'} 
	},
	{ 
		name: "A propos", 
		link: {name: 'about'}
	},
	{
		name: "Commander",
		link: {name: 'order'}
	}
];
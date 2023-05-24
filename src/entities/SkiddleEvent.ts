import Venue from "./Venue";

export default interface SkiddleEvent {
	id: string;
	listingid: string;
	eventname: string;
	description: string;
	venue: Venue;
	imageurl: string;
	largeimageurl: string;
	link: string;
	date: string;
	dateStart: string;
	dateEnd: string;
	openingtimes: {
		doorsopen: string;
		doorsclose: string;
	};
	artists: [
		{
			artistid: string;
			name: string;
		}
	];
}

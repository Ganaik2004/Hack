import React from "react";

const equipments = [
    {
        id:1,
        image: "https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name:"Rackets",
        price: "check website",
        link: "https://www.amazon.in/s?k=rackets&crid=KZ1EMSB13TWG&sprefix=racke%2Caps%2C764&ref=nb_sb_noss_2"
    },
    {id: 2,
        image: "https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name:"Shuttlecocks",
        price: "check website",
        link: "https://www.amazon.in/s?k=shuttle+cock&crid=3KSE7M9BFBP80&sprefix=shuttle+co%2Caps%2C342&ref=nb_sb_noss_2"
    },
    {id: 3,
        image: "https://images.pexels.com/photos/1552620/pexels-photo-1552620.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Net",
        price: "check website",
        link: "https://www.amazon.in/s?k=net+for+badminton&crid=1V1KO0ZCEXTOV&sprefix=net+for+badmint%2Caps%2C1002&ref=nb_sb_noss_2"
    },
    {id: 4,
        image: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Shoes",
        price: "check website",
        link: "https://www.amazon.in/s?k=badminton+sheos&crid=13TUX3NIOK8JQ&sprefix=badminton+sh%2Caps%2C330&ref=nb_sb_noss_2"
    },
    {
        id: 5,
        image:  "https://images.pexels.com/photos/9420724/pexels-photo-9420724.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Cricket Bat",
        price: "check website",
        link: "https://www.amazon.in/s?k=cricket+bat&crid=17ZH93FYLBBHD&sprefix=cricket+b%2Caps%2C307&ref=nb_sb_noss_2"
    },
    {
        id:6,
        image: "https://images.pexels.com/photos/9420724/pexels-photo-9420724.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Cricket Ball",
        price: "check website",
        link: "https://www.amazon.in/s?k=cricket+ball&crid=3M73O6XLWXYUA&sprefix=cricket+bal%2Caps%2C295&ref=nb_sb_noss_2"
    },
    {
        id:7,
        image: "https://media.istockphoto.com/id/1191513033/photo/cricket-ball-hitting-the-stumps.jpg?b=1&s=612x612&w=0&k=20&c=GbuDmyxfarmujpmi13gAULyB099FEpoXts9TnAB7TRQ=",
        name:"Cricket Stumps",
        price: "check website",
        link: "https://www.amazon.in/s?k=cricket+stumps&crid=3GFOPAYIXWEFU&sprefix=cricket+stum%2Caps%2C322&ref=nb_sb_noss_2"
    },
    {
        id:8,
        image: "https://images.pexels.com/photos/13079894/pexels-photo-13079894.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Cricket Pads",
        price: "check website",
        link: "https://www.amazon.in/s?k=cricket+PADS&crid=1AK5422YD1JB6&sprefix=cricket+pa%2Caps%2C310&ref=nb_sb_noss_2"
    },
    {
        id:9,
        image: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name:"Basketball",
        price: "check website",
        link: "https://www.amazon.in/s?k=basketball&crid=2WD6GXAUM7B0J&sprefix=basketbal%2Caps%2C342&ref=nb_sb_noss_2"
    },
    {
        id:10,
        image: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name:"Basketball Hoop",
        price: "check website",
        link: "https://www.amazon.in/s?k=basketball+hoop&crid=6OOZY18H77KD&sprefix=basketball+hoo%2Caps%2C326&ref=nb_sb_noss_2"
    },
    {
        id:11,
        image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Basketball Shoes",
        price: "check website",
        link: "https://www.amazon.in/s?k=basketball+shoes&crid=TKTEF7DRYU7J&sprefix=basketball+shoes%2Caps%2C304&ref=nb_sb_noss_1"
    },
    {
        id:12,
        image: "https://media.istockphoto.com/id/172275826/photo/basketball-jerseys.jpg?b=1&s=612x612&w=0&k=20&c=kd_yysk9pjfSPS4C0tEBwKWqMcVAiy912sQ5yb7RDYQ=",
        name:"Basketball Jersey",
        price: "check website",
        link: "https://www.amazon.in/s?k=basketball+jersey&crid=2N0ETA6T22YAS&sprefix=basketball+jerse%2Caps%2C294&ref=nb_sb_noss_2"
    },
    {
        id:13,
        image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Tennis Racket",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+racket&crid=1G22OXSI5FTLF&sprefix=tennis+rac%2Caps%2C296&ref=nb_sb_noss_2"
    },
    {
        id:14,
        image: "https://images.pexels.com/photos/207361/pexels-photo-207361.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Tennis Ball",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+ball&crid=25PTOGFZ5ACUD&sprefix=tennis+bal%2Caps%2C289&ref=nb_sb_noss_2"
    },
    {
        id:15,
        image: "https://images.pexels.com/photos/10397775/pexels-photo-10397775.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Tennis Shoes",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+shoes&crid=3SQKQYHBEUC64&sprefix=tennis+shoe%2Caps%2C290&ref=nb_sb_noss_1"
    },
    {
        id:16,
        image: "https://media.istockphoto.com/id/943018748/photo/male-tennis-player-serving.jpg?b=1&s=612x612&w=0&k=20&c=KR_-1Ka0Og5cs8ziZw3VsY8XKygs06xIcLudOhxCiQI=",
        name:"Tennis Jersey",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+jersey&crid=1KJH1RLUC4F3V&sprefix=tennis+jersey%2Caps%2C317&ref=nb_sb_noss_1"
    },
    {
        id:17,
        image: "https://images.pexels.com/photos/10340630/pexels-photo-10340630.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Tennis Shorts",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+shorts&crid=IH4TYUEBYT25&sprefix=tennis+shor%2Caps%2C304&ref=nb_sb_noss_2"
    },
    {
        id:18,
        image: "https://media.istockphoto.com/id/858848786/photo/tennis-visor-and-balls.jpg?b=1&s=612x612&w=0&k=20&c=8tcaYywzLkVZ9RRryVZAI85S9RIGX-Fz62R3Xs0es2A=",
        name:"Tennis Cap",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+cap&crid=SJTGGQRUHZU7&sprefix=tennis+cap%2Caps%2C281&ref=nb_sb_noss_1"
    },
    {
        id:19,
        image: "https://images.pexels.com/photos/5739118/pexels-photo-5739118.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Tennis Wristband",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+wristband&crid=2SGXRW9NDQCIW&sprefix=tennis+wristban%2Caps%2C289&ref=nb_sb_noss_2"
    },
    {
        id:20,
        image: "https://images.pexels.com/photos/5765595/pexels-photo-5765595.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Tennis Headband",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+headband&crid=3UPH248V2FL9C&sprefix=tennis+headband%2Caps%2C311&ref=nb_sb_noss_1"
    },
    {
        id:21,
        image: "https://images.pexels.com/photos/5741049/pexels-photo-5741049.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Tennis Socks",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+socks&crid=2XINFIDWQH1A1&sprefix=tennis+soc%2Caps%2C290&ref=nb_sb_noss_2"
    },
    {
        id:22,
        image: "https://images.pexels.com/photos/16431235/pexels-photo-16431235/free-photo-of-tennis-player-in-top-and-skirt.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Tennis Skirt",
        price: "check website",
        link: "https://www.amazon.in/s?k=tennis+skirt&crid=2PPQ2YNWKXXMA&sprefix=tennis+skir%2Caps%2C281&ref=nb_sb_noss_2"
    },
    {
        id:23,
        image: "https://media.istockphoto.com/id/91712739/photo/soccer-ball.jpg?b=1&s=612x612&w=0&k=20&c=T2CgsDmmr372c7nSFj0_ZhYiJZohiriVM1w-DLwC_IM=   ",
        name:"Football",
        price: "check website",
        link: "https://www.amazon.in/s?k=football&crid=2VZ3NKRDCO1UD&sprefix=footbal%2Caps%2C319&ref=nb_sb_noss_2"
    },
    {
        id:24,
        image: "https://images.pexels.com/photos/774321/pexels-photo-774321.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Studs",
        price: "check website",
        link: "https://www.amazon.in/s?k=studs&crid=2EAF9H21RB3SQ&sprefix=stud%2Caps%2C299&ref=nb_sb_noss_1"
    },
    {
        id: 25,
        image: "https://images.pexels.com/photos/19079587/pexels-photo-19079587/free-photo-of-young-woman-wearing-an-argentinian-soccer-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Football Jersey",
        price: "check website",
        link: "https://www.amazon.in/s?k=football+jersey&crid=1GI1JPD08MX7R&sprefix=football+jerse%2Caps%2C284&ref=nb_sb_noss_2"

    },
    {
        id:26,
        image: "https://images.pexels.com/photos/10349969/pexels-photo-10349969.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Football Shorts",
        price: "check website",
        link: "https://www.amazon.in/s?k=football+shorts&crid=14GE83Q3N3ZTV&sprefix=football+shor%2Caps%2C300&ref=nb_sb_noss_2"
    },
    {
        id:27,
        image: "https://images.pexels.com/photos/7271269/pexels-photo-7271269.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Football Socks",
        price: "check website",
        link: "https://www.amazon.in/s?k=football+socks&crid=H9HVV5DD0H4O&sprefix=football+soc%2Caps%2C302&ref=nb_sb_noss_2"
    },
    {
        id:28,
        image: "https://images.pexels.com/photos/12659335/pexels-photo-12659335.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"Goalkeeper Gloves",
        price: "check website",
        link: "https://www.amazon.in/s?k=goalkeeper+gloves&crid=HVF1UE8GM2YL&sprefix=goalkeeper+glov%2Caps%2C302&ref=nb_sb_noss_2"
    },
    {
        id:29,
        image: "https://media.istockphoto.com/id/1223152862/photo/soccer-football-goalkeeper-catching-ball-goalie-in-action-on-the-pitch-during-match.jpg?b=1&s=612x612&w=0&k=20&c=lOoV-9fbtZD8sTiX0hOIvqT7hhTYo3aMVk3hicYyeEY=",
        name:"Goalkeeper Jersey",
        price: "check website",
        link: "https://www.amazon.in/s?k=goalkeeper+jersey&crid=3JOHFY4UX9PNW&sprefix=goalkeeper+jers%2Caps%2C295&ref=nb_sb_noss_2"
    },
]
export default function Equipments() {
    return(
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
      {equipments.map(thing => (
        <div key={thing.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          {/* Update the image source if you have URLs for player images */}
          <img src={thing.image} alt={thing.name} className="w-full h-40 object-cover mb-4" />
          <h2 className="text-lg font-semibold">{thing.name}</h2>  
          <button  className="mt-2 bg-slate-900 hover:opacity-85 text-white font-bold py-2 px-4 rounded">
           <a href={thing.link} target="_blank"> {thing.price}</a>
          </button>
        </div>
        ))}
    </div>
    )
}
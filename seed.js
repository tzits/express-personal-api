// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var campsite_list =[ 
{
	name: "Indian Rock Shelter",
	description: "It was pretty much in someone's backyard",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14202748_10207786450364121_3390420318047681803_n.jpg?oh=5fd6385e740e0e66022b2522c3081e91&oe=5865CC2C",
},
{
	name: "Overmountain Shelter",
	description: "Big Ole Tobacco Barn in Tennessee",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14141901_10207786459044338_6264810302077369649_n.jpg?oh=c75fcba4ed65cc1111da1f4ba4f3b68d&oe=58766442",
},
{
	name: "Lost Mountain Shelter",
	description: "It snowed",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14264966_10207786464004462_6506974737194207877_n.jpg?oh=b3fb7f63494b24856e9a0c7f2533fd2e&oe=587E9017",
},
{
	name: "Wood's Hole Hostel",
	description: "Best hostel on the AT, they had ducklings that needed to be played with",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14199188_10207786468884584_6907521314958120172_n.jpg?oh=32231ac2869ba540a37a70c76a799026&oe=5868D9A8",
},
{
	name: "The Priest",
	description: "Home of the Book of Confessions, and the legendary Taco Party",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14202685_10207786478884834_4604052745964286719_n.jpg?oh=03cd06545c775db3224c4ce73a99b047&oe=58650CCA",
},
{
	name: "Black Rock Hut",
	description: "Just a couple miles from a 10,000 acre forest fire",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14232393_10207786484844983_6465065940266112286_n.jpg?oh=543443d910a8d5335db5fc1f3669d46a&oe=587462B1",
},
{
	name: "Mountain Home Cabbin",
	description: "Wonderful Southern Mansion in Northern Virginia",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14222078_10207786486765031_3066871942342224505_n.jpg?oh=f5c0760d391628dd2bbe5596b95823c8&oe=586B4497",
},
{
	name: "Bromley Ski Hut",
	description: "Lovely Ski Patrol Hut with a Perfect Sunset",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14212066_10207786511205642_3170999860351250697_n.jpg?oh=01cb78bf328e35ff9f35682aa2a35783&oe=58657788",
},
{
	name: "Chimney Rocks",
	description: "The first good campsite north of the Mason-Dixon, worth the mile climb",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-0/q83/p206x206/14191952_10207786489125090_9036675698766133875_n.jpg?oh=fa26ee92cf94afd19e93239c1c91fe05&oe=58813351",
},
{
	name: "Webster Cliffs",
	description: "Stealth Sites in the White Mountains with a panoramic view",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/t31.0-0/p206x206/14257621_10207786523445948_2768640019102536544_o.jpg",
},
{
	name: "Pierce Pond",
	description: "A pleasant place to stop and swim in Maine",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14192798_10207786537886309_2655716594164775789_n.jpg?oh=75695bc86014f8e734655fde989c20ce&oe=5869C6A7",
},
{
	name: "Rainbow Springs",
	description: "Last night in the real wild, typcial Maine with sunset, lake, and of course a loon",
	image: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14199648_10207786542606427_7125026900141556609_n.jpg?oh=4fd424df558fd4e1d2d490616477ef20&oe=586F2BEC",
}]


db.Campsite.remove({}, function(err, campsites){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all campsites');

    // create new records based on the array books_list
    db.Campsite.create(campsite_list, function(err, campsites){
      if (err) { return console.log('err', err); }
      console.log("created", campsite_list.length, "campsites");
      process.exit();
    });
  }
});

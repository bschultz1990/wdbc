// ITERATING OVER OBJECTS
// const robots = {bot1: "Jeffrey", bot2: "Billy", bot3: "Samwise", bot4: "Marshall"}

// for (let name in robots) {
// 	console.log(robots[name])
// }


const boomingBlade = {
Title: "Booming Blade",
School: "Evocation",
Casting_Time: "1 action",
Range: "5 feet",
Components: "V,M",
Duration: "1 round",
Materials: "A weapon",
Description: "As part of casting this spell, you must make a melee attack with a weapon against one creature within range, otherwise the spell fails. On a hit the target suffer the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 thunder damage, and the spell ends.",
At_Higher_Levels: "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals and extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.",
}

const {Casting_Time, Duration, Materials, Description} = boomingBlade;

// for (let i in boomingBlade) {
// 	console.log(`${i.toUpperCase()}: ${boomingBlade[i]}`);
// }


const dancingLights = {
Title: "Dancing Lights",
School: "Evocation",
Casting_Time: "1 action",
Range: "120 feet",
Components: "V,S,M",
Duration: "Concentration, up to 1 minute",
Materials: "A bit of phosphorous or wychwood, or a glowworm",
Description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in  the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. \nAs a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.",
At_Higher_Levels: "",
}

for (let i in dancingLights) {
	console.log(`${i.toUpperCase()}: ${dancingLights[i]}`);
}

let bands = new Set();
bands.add ("Journey");
bands.add ("Reo Speedwagon");
bands.add ("Styx");
bands.add ("Foreigner");
bands.add ("Doobie Brothers");
bands.add ("Reo Speedwagon");
bands.add ("The Cure");
bands.delete("Styx");
console.log(bands);

if (bands.has("Journey")){
    console.log("Journey has been included in the set.");
}

if (bands.has("Van Halen")){
    console.log("Van Halen has been included in the set.");
}else{
    console.log("No Van Halen, sorry");
}

for(const band of bands){
    console.log(band);
}


// Maps


let team = new Map(
    [
        ["pitcher", "Ron Guidry"],
        ["catcher", "Rick Cerone"],
        ["centrefield", "Dave Winfield"],
        ["leftfield", "Reggie Jackson"],
        ["shortstop", "Buck Dent"],
    ]
)
team.set("thirdbase", "Graig Nettles");
console.log(team);

document.getElementById("output").innerHTML = team.get("shortstop");

for (const [key,value] of team){
    console.log("Position: " + key);
    console.log("Player: " + value);
}
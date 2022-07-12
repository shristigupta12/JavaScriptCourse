// FOR OF   -- used in loops
const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"]
for(const n of names){
    console.log(n);
}

// FOR IN   -- used in objects
const symbols = {
    yt: "Youtube", 
    ig: "Instagram", 
    fb: "Facebook", 
    lco: "LearnCodeOnline.in"
}
for(const n in symbols){
    console.log(symbols[n]);
}
const Discord = require ('discord.js');
var client = new Discord.Client();

const token = "NzAwNDEzNzkwMzQwMjUxNzI4.XpjVrQ.JibBmetyXrL9jBiykK9cadrM4dw";

client.on("ready",() => {
    //client.user.setActivity(`i'm a fat bitch`),{ Type:"PLAYING"};
    function randomStatus(){
let status = ["1v5", "breeze sucks", "jhy sucks", "i'm wet", "ami is a catfish", "Aleha is a snitch"]
let rstatus = Math.floor(Math.random() * status.length);
client.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://www.twitch.tv/mirakilos/"});

    }; 
    setInterval(randomStatus,7000);
    
   console.log("ready!");


  
})


const prefix ="+";
function doMagic8BallVoodoo() {
    var rand = [ " Okay want me to be honest I think ur pressed coz too many dicks have brainwashed you and you got trauma since birth coz ur parents didn’t want you that’s why you ended up wit only one pair of shoes and pants and shirt and a broken toshiba laptop from 2003 fkn 90% off from a second hand shop and ur sad life no wonder why ur playing this ball game", 
    "u’re the reason God created the middle finger :middle_finger: ", 
    "got not time for ur sassy ass bitch.",
"u’re a grey sprinkle on a rainbow cupcake",
"u are more disappointing than an unsalted pretzel",
"Your face makes onions cry",
"u are the human version of period cramps.",
"breeze",
"Don’t worry, the first 40 years of childhood are always the hardest.",
"God wasted a good asshole when he put teeth in your mouth",
"I wonder if you'd be able to speak more clearly if your parents were second cousins instead of first.",
"You're like a penny on the floor of a public restroom - filthy, untouchable and practically worthless.",
"You're so dense, light bends around you.",
"You may think people like being around you- but remember this: there is a difference between being liked and being tolerated."];

    return rand[Math.floor(Math.random()*rand.length)];
}


function doMemesVoodoo() {
    var rand = [ "https://i.imgur.com/9sWi99z.png",'https://i.imgur.com/bM7ezLB.png','https://i.imgur.com/vaP8rrM.png','https://i.imgur.com/cd91q2T.png','https://i.imgur.com/FX99sCf.png',
    'https://i.imgur.com/lRL1i1z.png','https://i.imgur.com/SfAbxZj.png', 'https://i.imgur.com/ynYq60b.png','https://i.imgur.com/nV6kB4t.png','https://i.imgur.com/DWmI0H8.png'];

    return rand[Math.floor(Math.random()*rand.length)];
}
    

// Later in the code:






   
client.on ("message", (message) => {
    if(message.author.bot) return;
    
    
    if(message.content.startsWith (prefix + "here") ){
        message.reply ('@everyone sup fuckers i am mira for more info about me type +info , if you need help type +help btw breeze sucks ');
    }
    if(message.content.startsWith (prefix + "mira") ){
        message.reply ('hey there cutie did u know that i have peeople that call me cute cuz i 5v1 breeze and jhy xoxo ');
    }
    if(message.content.startsWith (prefix + "info") ){
        message.reply ('i can 1V5 ez pz :sunglasses: ');
    }
    if(message.content.startsWith (prefix + "meth") ){
        message.reply ('https://i.imgur.com/DWmI0H8.png');
    }

    if(message.content.startsWith (prefix +"roast"))
{
    message.reply( doMagic8BallVoodoo());}

    if(message.content.startsWith (prefix +"meme"))
    {
        message.reply( doMemesVoodoo());}
    if(message.content.startsWith (prefix + "skin") ){
        message.reply ('ok dady ;x https://i.imgur.com/mhQ3KXP.png , https://i.imgur.com/RTUy6xx.png ');

    }
    if(message.content.startsWith ("mira") ){
        message.reply ('hey cutie :heart_eyes:  ');
    }
    if(message.content.startsWith ("ugly") ){
        message.reply ('hey ^^ ');

    }
    
    if(message.content.startsWith (prefix + "invite") ){
                            message.reply ('```\nhttps://discordapp.com/oauth2/authorize?client_id=700413790340251728&scope=bot&permissions=1878515017\n```');  }

    
                           
    if(message.content.startsWith (prefix + "help") ){
      message.reply ('```json\nOk listen u dummb \n\n-For :Memes type +meme\n\n-for :Skins type +skins\n\n-If u want nudes slide into my dms.\n\n-If u want to :Invite me type +invite\n\n-For more :Info about me type +info\n\n-Only For u baby  +meth\n\n-Want me to :Roast you ? then Type +roast\n\n.................................```  ');  
    }
  


});
  
client.login (token);
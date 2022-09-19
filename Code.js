const accessCode1 = "HULK";
const accessCode2 = "THOR";
const accessCode3 = "LOKI";
const accessCode4 = "VISION";
const accessCode5 = "WANDA";
const accessCode6 = "ULTRON";
const accessCode7 = "FALCON";
const accessCode8 = "CAPTAIN AMERICA";
const accessCode9 = "ANT MAN";
const accessCode10 = "IRON MAN";
const accessCode11 = "SPIDER MAN";

function clues(screen) {
    
    if(screen === 1){
        fill("white");
        textSize(15);
        text("K H L U", 100,50);
        fill("lightblue");
        text("Hint: I am bulky and green in color !!", 100,70);
    
        fill("white");
        textSize(15);
        text("R H T O", 700,150);
        fill("lightblue");
        text("Hint: I am the god of thunder !!", 700,170);
    
        fill("white");
        textSize(15);
        text("I L K O", 100,250);
        fill("lightblue");
        text("Hint: I am the god of mischief and yet everyone loves me !!", 100,270);
    } else if (screen === 2){
        fill("white");
        textSize(15);
        text("O S I I V N", 100,50);
        fill("lightblue");
        text("Hint: I possessed the mind stone !!", 100,70);
    
        fill("white");
        textSize(15);
        text(" N W A A D", 700,150);
        fill("lightblue");
        text("Hint: I can bend reality !!", 700,170);
    
        fill("white");
        textSize(15);
        text("R O T L U N", 100,250);
        fill("lightblue");
        text("Hint: I am an evil robot created by tony stark!!", 100,270);
        
        
    } else if (screen === 3){
        //show other 3 clues
        fill("white");
        textSize(15);
        text("L F C A N O", 100,50);
        fill("lightblue");
        text("Hint:I use mechanical wings to fly !!", 100,70);
    
        fill("white");
        textSize(15);
        text("T A N C P I A  I C A E R M A ", 700,150);
        fill("lightblue");
        text("Hint: I use a shield with a star in the center !!", 700,170);
    
        fill("white");
        textSize(15);
        text("N A T   A M N", 100,250);
        fill("lightblue");
        text("Hint:I can change size at my will.!!", 100,270);
    } else{
        //show the last clue
    }
   

}
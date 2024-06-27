console.log("Hello")

let text: string[] = [
    "Du stehst in einem hellen Raum mit drei Türen. Eine ist 'grün', eine ist 'rot' und die letzte ist 'blau'. Durch welche gehst du?",
    "Die Tür hat keine Griff! Du gehst wieder zurück.",
    "Die grüne Tür schleckt dich ab und du stirbst qualvoll!",
    "Durch das Erkunden lernst du die Höhle besser kennen und kannst Sightseeing-Touren anbieten. Dadurch wirst du sehr reich und lebst zudem ein glückliches langes Leben!",
    "Du verhungerst und träumst von einem guten Leben, dass an dir vorbei zieht.",
    "Du gelangst ins Freie und lebst ein langes, glückliches, aber sehr armes Leben.",
    "Die Tür ist zu. Die Klinke bricht allerdings ab. Welche der beiden verbleibenden Türen willst du öffnen? 'blau' oder 'grün'",
    "Mit der Klinke kannst du die Tür öffnen. Du schreitest durch sie hindurch. Allerdings gibt der Boden unter dir nach. Willst du dich irgendwo 'festhalten' oder einfach nur 'fallen'?",
    "Du hälst dich an ein Rohr fest, welches jedoch abbricht, weswegen du in die Tiefe fällst. Du landest in einem kalten See in einer riesigen Hölle. Du entdeckst einen Ausgang, der von einem Felsen versperrt ist. Möchtest du diesen mit dem Rohr 'entfernen', die Höhle 'erkunden' oder auf Hilfe 'warten'?",
    "Du landest in einem kalten See in einer riesigen Hölle. Möchtest du die Höhle 'erkunden' oder auf Hilfe 'warten'?"
]

let UserInput: string;

function roteTür():void {
    UserInput = prompt(text[6])!;
        if(UserInput=="blau") {
            blaueTür()
        } else {
            alert(text[2]); ersterRaum()
        }
}

function blaueTür():void{
    UserInput = prompt(text[7])!;
        if(UserInput=="festhalten"){
            HöhleRohr()
        } else {
            Höhle()
        }

}

function HöhleRohr():void{
    UserInput = prompt(text[8])!;
     switch(UserInput) {
        case "entfernen":
            alert(text[5]);
            break;
        case "erkunden":
            alert(text[3]);
            break;
        default:
            alert(text[4]); ersterRaum();
            break;
     }
}

function Höhle():void{
    UserInput = prompt(text[9])!;
        if(UserInput=="erkunden"){
            alert(text[3])
        } else {
            alert(text[4]); ersterRaum();
        }
}

function ersterRaum():void
{
    UserInput = prompt(text[0])!;

        switch(UserInput) {
            case "rot":
                roteTür();
                break;
            case "blau":
                alert(text[1]); ersterRaum();
                break;
            default:
                alert(text[2]); ersterRaum();
                break;
        }
}

ersterRaum();

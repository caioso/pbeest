var translation = 
{
    'A': "$00",
    'B': "$01",
    'C': "$02",
    'D': "$03",
    'E': "$04",
    'F': "$05",
    'G': "$06",
    'H': "$07",
    'I': "$08",
    'J': "$09",
    'K': "$0A",
    'L': "$0B",
    'M': "$0C",
    'N': "$0D",
    'O': "$0E",
    'P': "$0F",
    'Q': "$10",
    'R': "$11",
    'S': "$12",
    'T': "$13",
    'U': "$14",
    'V': "$15",
    'W': "$16",
    'X': "$17",
    'Y': "$18",
    'Z': "$19" 
}

// Combine strings
var text = ""
for (var i = 2; i < process.argv.length; i++)
{
    text += process.argv[i];
    text += " "
}

if (text.length > 36)
    console.log("The text does not fit in the buffer. Split will be required...")

var constants = "; " + text + "\n";
constants += "dialog:"
for (var i = 0; i < text.length; i++)
{   
    if (i%20 == 0)
        constants += ("\ndb ")
    
    if (translation[text[i]] != undefined)
        constants += translation[text[i]] + ", "
    else
        constants += "$FF" + ", "
}
constants += ("\ndialog_end:");
console.log(constants);


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
    'Z': "$19",
    'a': "$1A",
    'b': "$1B",
    'c': "$1C",
    'd': "$1D",
    'e': "$1E",
    'f': "$1F",
    'g': "$20",
    'h': "$21",
    'i': "$22",
    'j': "$23",
    'k': "$24",
    'l': "$25",
    'm': "$26",
    'n': "$27",
    'o': "$28",
    'p': "$29",
    'q': "$2A",
    'r': "$2B",
    's': "$2C",
    't': "$2D",
    'u': "$2E",
    'v': "$2F",
    'w': "$30",
    'x': "$31",
    'y': "$32",
    'z': "$33",
    '.': "$34",
    ',': "$35",
    '!': "$36",
    '?': "$37",
    '\"': "$38",
    '-': "$39",
    '(': "$3A",
    ')': "$3B",
    '*': "$3C",
    '_': "$3D",
    '0': "$3E",
    '1': "$3F",
    '2': "$40",
    '3': "$41",
    '4': "$42",
    '5': "$43",
    '6': "$44",
    '7': "$45",
    '8': "$46",
    '9': "$47",
    ':': "$48",
    ';': "$49",
    '/': "$4A",
    '\'': "$4B",

    // Text Termination character
    '$': "$FE",
}

// Combine strings
var text = ""
for (var i = 2; i < process.argv.length; i++)
{
    text += process.argv[i];
    text += " "
}
text = text.substr(0, text.length - 1);
text += "$"
if (text.length > 36)
    console.log("The text does not fit in the buffer. Split will be required...")

var constants = "; " + text.substr(0, text.length - 1) + "\n";
var page_counter = 0;
var page_limit = 50
var char_counter = 0;
constants += "dialog_page_" + page_counter + ":"

for (var i = 0; i < text.length; i++, char_counter++)
{   
    if (char_counter%20 == 0)
    {
        if (char_counter != 0)
            constants = constants.substr(0, constants.length - 2);
        constants += ("\ndb ")
    }

    if (translation[text[i]] != undefined)
    {
        constants += translation[text[i]] + ", "
    }
    else
    {
        constants += "$FF" + ", "
    }

    if (char_counter%page_limit == 0 && char_counter != 0)
    {
        constants = constants.substr(0, constants.length - 2);
        constants += ("\n"+"dialog_page_" + page_counter +"_end:\n");
        page_counter++;
        char_counter = -1;
        if (char_counter != text.length - 1)
        {
            constants += "\ndialog_page_" + page_counter + ":"
        }
    }

}
constants = constants.substr(0, constants.length - 2);
constants += ("\n"+"dialog_page_" + page_counter +"_end:");
console.log(constants);


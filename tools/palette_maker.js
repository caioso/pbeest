function toPaddedHexString(num, len) {
    str = num.toString(16);
    return "0".repeat(len - str.length) + str;
}


var r, g, b

// copy values
if (process.argv.length != 5)
    return;
else
{
    r = process.argv[2];
    g = process.argv[3];
    b = process.argv[4];

    var final = ((b&0x1F)<<10) | ((g&0x1F)<<5) | r&0x1F;

    var colorhex = (toPaddedHexString(final.toString(16), 4));
    console.log("$" + colorhex.toUpperCase())
}
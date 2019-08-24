for (var i = 0; i < 1024; i++)
{
	if ((i % 8) != (i & 0x07))
		console.log(i, i%8, i&0x07);
}

console.log("Done")

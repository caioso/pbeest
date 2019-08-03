all:
	rgbasm -ogame.obj pbeest.z80
	rgblink -mgame.map -ngame.sym -ogame.gb game.obj
	rgbfix -p0 -v game.gb

run:
	/cygdrive/c/gbdk/tools/bgb.exe game.gb

clean:
	rm *.obj *.map *.sym *.gb
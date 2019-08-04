all:
	rgbasm -ogame.obj pbeest.z80
	rgblink -mgame.map -ngame.sym -ogame.gbc game.obj
	rgbfix -p0 -v game.gbc

run:
	/cygdrive/c/gbdk/tools/bgb.exe game.gbc

clean:
	rm *.obj *.map *.sym *.gbc
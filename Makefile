DEPS	:= background/background_controller.z80 infra/interrupt_vector.z80

all: $(DEPS)
	rgbasm -opbeest.obj pbeest.z80
	rgblink -mpbeest.map -npbeest.sym -opbeest.gbc pbeest.obj
	rgbfix -p0 -v pbeest.gbc
	
pbeest.gbc: $(DEPS)
	rgbasm -opbeest.obj pbeest.z80
	rgblink -mpbeest.map -npbeest.sym -opbeest.gbc pbeest.obj
	rgbfix -p0 -v pbeest.gbc

demo: demo/demo.z80
	rgbasm -odemo.obj demo/demo.z80
	rgblink -modemo.map -nodemo.sym -odemo.gbc demo.obj
	rgbfix -p0 -v demo.gbc


run: pbeest.gbc
	/cygdrive/c/gbdk/tools/bgb.exe pbeest.gbc

rundemo:
	/cygdrive/c/gbdk/tools/bgb.exe demo.gbc

tile:
	/cygdrive/c/gbdk/tools/GBTD.exe &

map:
	/cygdrive/c/gbdk/tools/GBMB.exe &
	
clean:
	rm *.obj *.map *.sym *.gbc *.sav
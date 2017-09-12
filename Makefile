ICONS := 19 38 48 96 128
TEMPDIR := $(shell mktemp -d)

PHONY: run-firefox
run-firefox: icons
	web-ext run

PHONY: run-chrome
run-chrome: icons
	google-chrome --user-data-dir=$(TEMPDIR) --system-developer-mode --no-first-run --load-extension=`pwd`
	rm -Rf $(TEMPDIR)

PHONY: icons
icons: $(ICONS:%=icon-%.png)

icon-%.png: icon.svg
	inkscape -D -z -e $@ -w $* -h $* $+

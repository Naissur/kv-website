all:
	bundle exec jekyll build --destination build/
watch:
	bundle exec jekyll build --watch
serve:
	bundle exec jekyll serve -H 0.0.0.0 -P 4001

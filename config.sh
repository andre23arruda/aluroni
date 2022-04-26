#!/bin/bash
# run with `. config.sh`
PWD=`pwd`

run () {
	rm ./src/setupTests.ts
	rm ./src/reportWebVitals.ts
	rm ./src/App.test.tsx
	rm ./src/App.css
	rm ./src/logo.svg
	rm ./public/robots.txt

	mkdir ./src/assets
	mkdir ./src/data
	mkdir ./src/pages
	mkdir ./src/components

	yarn add normalize.css
	yarn add react-router-dom
	yarn add typescript-plugin-css-modules sass -D

	echo "import 'normalize.css'" >> ./src/index.tsx

	printf "
SUCCESS!!\n\n
- Now remove comments in 'public/index.html' \n
- And adjust 'src/index.tsx' \n\n
"
}

run
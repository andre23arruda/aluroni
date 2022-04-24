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

	mkdir ./src/pages/Example
	touch ./src/pages/Example/index.tsx
	echo "export default function Example() {
	return (
		<h1>Hello world</h1>
	)
}" >> ./src/pages/Example/index.tsx
	touch ./src/pages/Example/Example.css
	touch ./src/pages/Example/Example.module.scss

	mkdir ./src/components/Example
	echo "export default function Example() {
	return (
		<h1>Hello world</h1>
	)
}" >> ./src/components/Example/index.tsx
	touch ./src/components/Example/Example.css
	touch ./src/components/Example/Example.module.scss
}

run
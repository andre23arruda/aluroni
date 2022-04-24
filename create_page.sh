#!/bin/bash
# run with `. remove_files.sh`
PWD=`pwd`

if [[ ! -n $1 ]];
	then
		mkdir ./src/pages/NewPage
		echo "export default function NewPage() {
	return (
		<h1>Hello world</h1>
	)
}" >>   ./src/pages/NewPage/index.tsx
		touch ./src/pages/NewPage/NewPage.css
		touch ./src/pages/$1/NewPage.module.scss
	else
		mkdir ./src/pages/$1
		echo "export default function $1() {
	return (
		<h1>Hello world</h1>
	)
}" >> ./src/pages/$1/index.tsx
		touch ./src/pages/$1/$1.css
		touch ./src/pages/$1/$1.module.scss
	fi

echo "$1 created"

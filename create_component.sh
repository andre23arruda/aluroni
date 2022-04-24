#!/bin/bash
# run with `. remove_files.sh`
PWD=`pwd`

if [[ ! -n $1 ]];
	then
		mkdir ./src/components/NewComponent
		echo "export default function NewComponent() {
	return (
		<h1>Hello world</h1>
	)
}" >>   ./src/components/NewComponent/index.tsx
		touch ./src/components/NewComponent/NewComponent.css
		touch ./src/components/NewComponent/NewComponent.module.css
	else
		mkdir ./src/components/$1
		echo "export default function $1() {
	return (
		<h1>Hello world</h1>
	)
}" >>   ./src/components/$1/index.tsx
		touch ./src/components/$1/$1.css
		touch ./src/components/$1/$1.module.scss
	fi

echo "$1 created"

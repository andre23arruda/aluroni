#!/bin/bash
# run with `. remove_files.sh`
PWD=`pwd`

if [[ ! -n $1 ]];
	then
		mkdir ./src/pages/NewPage
		echo "import styles from './NewPage.module.scss'
import './NewPage.css'

export default function NewPage() {
	return (
		<h1>Hello world</h1>
	)
}" >>   ./src/pages/NewPage/index.tsx
		touch ./src/pages/NewPage/NewPage.css
		touch ./src/pages/NewPage.module.scss
	else
		mkdir ./src/pages/$1
		echo "import styles from './$1.module.scss'
import './$1.css'

export default function $1() {
	return (
		<h1>Hello world</h1>
	)
}" >> ./src/pages/$1/index.tsx
		touch ./src/pages/$1/$1.css
		touch ./src/pages/$1/$1.module.scss
	fi

echo "$1 created"

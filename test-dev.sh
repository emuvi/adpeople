#!/bin/bash
bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ~/Devs/run/app/adpeople
mkdir ~/Devs/run/app/adpeople
cd public
cp -r * ~/Devs/run/app/adpeople
cd ..

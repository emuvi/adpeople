bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ~/Wizard/run/app/adpeople
mkdir ~/Wizard/run/app/adpeople
cd public
cp -r * ~/Wizard/run/app/adpeople
cd ..
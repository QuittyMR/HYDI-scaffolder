#!/bin/bash
set -e

echo  -ne "\n\nInstalling UI dependencies...\n\n"
pushd appui
npm install
npm run bower install
npm run build
popd
ln -s `pwd`"/appui/dist" `pwd`"/build/dist"
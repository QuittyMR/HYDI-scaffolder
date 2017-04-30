#!/bin/bash
set -e

echo -ne "\n\nGenerating Virtualenv...\n\n"
virtualenv -p python3 build
source build/bin/activate

echo  -ne "\n\nInstalling dependencies...\n\n"
pip install -r dependencies3.txt

./build_ui.sh

echo -ne "\n\nDone!\n\n"

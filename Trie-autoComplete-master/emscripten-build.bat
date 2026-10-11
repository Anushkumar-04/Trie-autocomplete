@echo off
emcc trie.cpp -s WASM=1 -s MODULARIZE=1 -s EXPORT_NAME="createModule" -o trie.js --bind
pause

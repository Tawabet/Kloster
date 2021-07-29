#! /bin/sh
grep '\\/' ../*.json | sed 's/\\//' >.images
bundle Kloster.json *.json .images

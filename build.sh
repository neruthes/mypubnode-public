#!/bin/bash

case $1 in
    cf)
        wrangler pages publish . --project-name=mypubnode --commit-dirty=true --branch=main
        ;;
esac

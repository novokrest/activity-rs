#!/bin/bash

DB_PATH='../data/db'
MONGOD='mongod'

declare -a childs

echo Starting MongoDB...
$MONGOD --dbpath $DB_PATH &
MONGOD_PID=$!

echo Starting express server...
node server --port 8083 &
EXPRESS_PID=$!

sleep 5
read -p 'Press ENTER to exit'
kill $MONGOD_PID
kill $EXPRESS_PID
sleep 5

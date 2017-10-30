#!/bin/bash

mongoimport --jsonArray --drop --host $DBHOST --db $DBNAME --collection players --file ../data/players.json
mongoimport --jsonArray --drop --host $DBHOST --db $DBNAME --collection games --file ../data/games.json

#!/usr/bin/env bash

###
# Script to copy local database from windows to wsl
###

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 || exit ; pwd -P )"
CURRENT_DIR=$(pwd)
DATABASE_PATH="/mnt/d/Programs/SQLiteDatabaseBrowserPortable/Databases"

cd "$SCRIPTPATH" || echo 'SCRIPT_DIR null' | exit

cp -rfv $DATABASE_PATH/dnd5eapp.db ../database/

ls -alh ../database

echo 'Databese copy completed'

cd "$CURRENT_DIR" || exit

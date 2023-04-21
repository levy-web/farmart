#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
EDITOR=nano rails credentials:edit
rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
rails credentials:edit
rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
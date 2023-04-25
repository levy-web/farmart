# spec/rails_helper.rb
require 'devise'
# Configure Rails Environment
ENV["RAILS_ENV"] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

# Require additional libraries
require 'rspec/rails'
require 'factory_bot_rails'

# Load factories
Dir[Rails.root.join('spec', 'factories', '**', '*.rb')].each { |f| require f }

RSpec.configure do |config|
  # Use FactoryGirl syntax methods
  config.include FactoryBot::Syntax::Methods

  # Use transactions for database cleanup
  config.use_transactional_fixtures = true

  # Filter out specs with a focus tag
  config.filter_run focus: true
  config.run_all_when_everything_filtered = true

  # Load spec files
  config.pattern = "**/*_spec.rb"

  # Load support files
  config.include Devise::Test::ControllerHelpers, type: :controller
  config.include ActiveSupport::Testing::TimeHelpers
  config.include ActionView::Helpers::TranslationHelper

  # Set up database_cleaner
  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end
end

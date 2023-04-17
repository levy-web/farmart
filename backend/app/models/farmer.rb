class Farmer < ApplicationRecord
    has_secure_password
    
    has_many :animals
    has_many :orders

    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
    validates :admin_name, presence: true, uniqueness: true
    validates :password_digest, length: {minimum: 6}, if: -> { new_record? || !password.nil?}
end

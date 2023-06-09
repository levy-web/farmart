class Farmer < ApplicationRecord
    has_secure_password
    
    has_many :animals
    has_many :orders

    validates :contact_info, {presence: true, uniqueness: true, length: {minimum: 10, maximum:10}}
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
    validates :admin_name, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}
end

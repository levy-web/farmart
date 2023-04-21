class User < ApplicationRecord
    has_secure_password

    has_many :orders
    has_many :reviews
    has_many :carts

    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}
end

class Animal < ApplicationRecord
    belongs_to :Farmer
    has_many :line_items
    has_many :reviews
end

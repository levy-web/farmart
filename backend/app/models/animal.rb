class Animal < ApplicationRecord
    belongs_to :farmer
    has_many :line_items
    has_many :reviews
end

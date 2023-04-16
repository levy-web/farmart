class Order < ApplicationRecord
    belongs_to :user
    belongs_to :farmer
    has_many :line_items
    has_many :animals, through: :line_items
end

class LineItem < ApplicationRecord
    belongs_to :animal
    belongs_to :order
end

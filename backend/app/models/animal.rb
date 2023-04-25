class Animal < ApplicationRecord
    belongs_to :farmer
    has_many :line_items
    has_many :reviews
    has_many :carts
    has_one_attached :image

    validates :name, presence: true, uniqueness: true

    def image_url 
        Rails.application.routes.url_helpers.url_for(image) if image.attached?        
    end
end

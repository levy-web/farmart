class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :animal_id, :quantity, :price
end

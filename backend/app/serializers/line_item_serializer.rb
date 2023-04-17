class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :animal_id, :quantity
end

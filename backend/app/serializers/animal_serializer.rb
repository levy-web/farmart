class AnimalSerializer < ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :name, :animal_type, :breed, :age, :weight, :price, :farmer_id, :image_url
end

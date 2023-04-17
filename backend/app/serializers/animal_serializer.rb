class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :animal_type, :breed, :age, :weight, :price, :farmer_id
end

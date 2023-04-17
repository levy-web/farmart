class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :animal_id, :farmer_id, :text, :rating
end

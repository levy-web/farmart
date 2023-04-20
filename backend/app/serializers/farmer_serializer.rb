class FarmerSerializer < ActiveModel::Serializer
  attributes :id, :farm_name, :location, :contact_info
end

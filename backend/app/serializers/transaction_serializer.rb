class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :customer_name, :animal_name, :total_price, :farmer_id
end

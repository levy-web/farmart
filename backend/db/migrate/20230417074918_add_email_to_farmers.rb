class AddEmailToFarmers < ActiveRecord::Migration[7.0]
  def change
    add_column :farmers,
    :email,
    :string
  end
end

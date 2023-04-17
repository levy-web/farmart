class CreateFarmers < ActiveRecord::Migration[7.0]
  def change
    create_table :farmers do |t|
      t.string :admin_name
      t.string :farm_name
      t.string :location
      t.string :contact_info
      t.integer :user_id

      t.timestamps
    end
  end
end

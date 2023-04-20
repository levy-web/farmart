class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :farmer_id
      t.string :status
      t.decimal :total_amount

      t.timestamps
    end
  end
end

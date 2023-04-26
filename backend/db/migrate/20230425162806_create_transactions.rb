class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :customer_name
      t.string :animal_name
      t.integer :total_price
      t.integer :farmer_id

      t.timestamps
    end
  end
end

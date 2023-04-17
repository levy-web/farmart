class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.integer :user_id
      t.integer :animal_id
      t.integer :quantity
      t.decimal :price

      t.timestamps
    end
  end
end

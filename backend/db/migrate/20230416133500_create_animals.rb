class CreateAnimals < ActiveRecord::Migration[7.0]
  def change
    create_table :animals do |t|
      t.string :animal_type
      t.string :name
      t.string :breed
      t.integer :age
      t.integer :weight
      t.decimal :price
      t.integer :farmer_id
      t.string :image_url

      t.timestamps
    end
  end
end

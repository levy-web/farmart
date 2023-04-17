class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :animal_id
      t.integer :farmer_id
      t.text :comment
      t.integer :rating

      t.timestamps
    end
  end
end

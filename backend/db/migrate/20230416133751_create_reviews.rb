class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :animal_id
      t.integer :farmer_id
      t.string :comment
      t.integer :rating

      t.timestamps
    end
  end
end

class RemoveUserIdFromFarmers < ActiveRecord::Migration[7.0]
  def change
    remove_column :farmers, :user_id, :integer
  end
end

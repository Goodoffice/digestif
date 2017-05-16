class RemoveListIdNotNullConstraintFromSources < ActiveRecord::Migration[5.1]
  def change
    remove_column :sources, :list_id
  end
end

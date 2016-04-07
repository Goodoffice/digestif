class AddSlugToSourceLists < ActiveRecord::Migration
  def change
    add_column :source_lists, :slug, :string, unique: true
  end
end

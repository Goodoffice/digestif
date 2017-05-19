class AddEntryCountToSavedSearches < ActiveRecord::Migration[5.1]
  def change
    add_column :saved_searches, :entry_count, :integer
  end
end

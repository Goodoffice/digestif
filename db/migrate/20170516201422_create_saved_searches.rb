class CreateSavedSearches < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_searches do |t|
      t.string :query

      t.timestamps
    end
  end
end

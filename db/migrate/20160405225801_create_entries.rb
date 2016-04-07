class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title, null: false
      t.string :description
      t.datetime :published_at
      t.string :guid, null: false
      t.string :url, null: false
      t.integer :source_id, null: false

      t.timestamps null: false
    end

    add_index :entries, :source_id
  end
end

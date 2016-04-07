class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.string :url, null: false
      t.string :name, null: false
      t.integer :list_id, null: false

      t.timestamps null: false
    end
  end
end

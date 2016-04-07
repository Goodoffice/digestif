class CreateSourceLists < ActiveRecord::Migration
  def change
    create_table :source_lists do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end

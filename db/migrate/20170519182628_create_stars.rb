class CreateStars < ActiveRecord::Migration[5.1]
  def change
    create_table :stars do |t|
      t.belongs_to :entry, index: true
      t.belongs_to :user, index: true
      t.timestamps null: false
    end
  end
end

class AddTypeToSources < ActiveRecord::Migration[5.1]
  def change
    add_column :sources, :type, :string, default: 'FeedSource'
  end
end

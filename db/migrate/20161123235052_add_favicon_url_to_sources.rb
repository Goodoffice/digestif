class AddFaviconUrlToSources < ActiveRecord::Migration
  def change
      add_column :sources, :favicon_url, :string
  end
end

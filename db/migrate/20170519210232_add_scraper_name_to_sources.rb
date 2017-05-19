class AddScraperNameToSources < ActiveRecord::Migration[5.1]
  def change
    add_column :sources, :scraper_name, :string
  end
end

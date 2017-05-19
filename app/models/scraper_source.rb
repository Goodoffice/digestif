class ScraperSource < Source

  before_create :ingest_entries

  def ingest_entries
    self.scraper_name.constantize.new.entries.each do |item|
      next if self.entries.exists?(guid: item['url'])
      self.entries.build(
        title: decode_entities(item['title']),
        description: decode_entities(item['summary']),
        url: item['url'],
        guid: item['url'],
        published_at: item['published_at'] || Time.now
      )
    end
  end

  def ingest_entries!
    ingest_entries
    save!
  end


end

class FeedSource < Source

  before_validation :assign_name, on: :create

  def ingest_entries
    open_rss do |rss|
      rss.entries.each do |item|
        next if self.entries.exists?(guid: item.url)
        self.entries.build(
          title: decode_entities(item.title),
          description: decode_entities(item.summary),
          url: item.url,
          guid: item.url,
          published_at: item.published || Time.now
        )
      end
    end
  end

  def ingest_entries!
    ingest_entries
    save!
  end


  protected

  def open_rss
    yield Feedjira::Feed.fetch_and_parse(self.url)
  end

  def assign_name
    return if self.url.blank? || self.name.present?

    open_rss do |rss|
      self.name = rss.title
    end
  end

end


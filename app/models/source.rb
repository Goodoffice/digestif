require 'open-uri'
require 'htmlentities'
require 'feedjira'

class Source < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :url
  belongs_to :list, class_name: 'SourceList', foreign_key: 'list_id'
  has_many :entries, -> { order('published_at DESC') }

  before_validation :assign_name, on: :create
  before_create :ingest_favicon
  before_create :ingest_entries

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

  def decode_entities(string)
    coder = HTMLEntities.new
    coder.decode(string)
  end

  def open_rss
    yield Feedjira::Feed.fetch_and_parse(self.url)
  end

  def assign_name
    return if self.url.blank?

    open_rss do |rss|
      self.name = rss.title
    end
  end

end

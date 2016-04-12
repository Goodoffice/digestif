class SourceList < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates_presence_of :name
  has_many :sources, foreign_key: 'list_id'
  has_many :entries, through: :sources

  def author_attributes=(author_attributes)
    
  end

  def source_urls=(source_urls)
    source_urls.reject(&:blank?).each do |url|
      sources.build(url: url)
    end
  end
end

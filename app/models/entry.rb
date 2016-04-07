class Entry < ActiveRecord::Base
  belongs_to :source
  scope :published_today, -> { where('published_at > ?', 1.day.ago) }
end

class Entry < ActiveRecord::Base
  include PgSearch
  belongs_to :source
  scope :published_today, -> { where('published_at > ?', 1.day.ago) }
  pg_search_scope :search_for, against: %i(title description), order_within_rank: "created_at DESC"
end

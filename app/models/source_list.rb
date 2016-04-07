class SourceList < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates_presence_of :name
  has_many :sources, foreign_key: 'list_id'
  has_many :entries, through: :sources
end

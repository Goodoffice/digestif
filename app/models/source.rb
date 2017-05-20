require 'open-uri'
require 'htmlentities'
require 'feedjira'

class Source < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :url
  belongs_to :list, class_name: 'SourceList', foreign_key: 'list_id'
  has_many :entries, -> { order('published_at DESC') }, dependent: :destroy

  protected

  def decode_entities(string)
    coder = HTMLEntities.new
    coder.decode(string)
  end
end

class SourceListSerializer < ActiveModel::Serializer
  attributes :id
  has_many :sources
end


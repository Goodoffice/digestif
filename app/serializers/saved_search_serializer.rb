class SavedSearchSerializer < ActiveModel::Serializer
  attributes :query, :entry_count
end

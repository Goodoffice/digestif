class SavedSearchSerializer < ActiveModel::Serializer
  attributes :query, :unread_count

  def unread_count
    object.unread_count_for(scope)
  end
end

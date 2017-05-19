class EntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :published_at, :favicon_url, :url, :source_id, :source_name, :unread, :starred

  def favicon_url
    object.source.favicon_url
  end

  def source_name
    object.source.name
  end

  def url
    '/jobs/' + object.id.to_s
  end

  def unread
    object.unread?(scope)
  end

  def starred
    object.starred?(scope)
  end

end

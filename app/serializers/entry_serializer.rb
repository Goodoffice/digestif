class EntrySerializer < ActiveModel::Serializer
    attributes :id, :title, :published_at, :favicon_url, :url

    def favicon_url
        object.source.favicon_url
    end
end

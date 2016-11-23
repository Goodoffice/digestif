class EntrySerializer < ActiveModel::Serializer
    attributes :title, :published_at, :favicon_url

    def favicon_url
        object.source.favicon_url
    end
end

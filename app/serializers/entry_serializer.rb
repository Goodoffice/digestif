class EntrySerializer < ActiveModel::Serializer
    attributes :id, :title, :published_at, :favicon_url, :url, :source_id, :source_name

    def favicon_url
        object.source.favicon_url
    end

    def source_name
        object.source.name
    end

end

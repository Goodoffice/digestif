class API::JobsController < API::BaseController
    def index
        @entries = Entry.all.order('published_at DESC').limit(100)
        render json: @entries
    end
end


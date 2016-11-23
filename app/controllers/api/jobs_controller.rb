class API::JobsController < API::BaseController
    def index
        @entries = Entry.all.limit(100)
        render json: @entries
    end
end


class API::JobsController < API::BaseController
  def index
    @entries = filtered_entries.order('published_at DESC').limit(100)
    render json: @entries
  end

  private

  def filtered_entries
    if params[:query]
      Entry.search_for(params[:query])
    else
      Entry.all
    end
  end
end


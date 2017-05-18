class API::SavedSearchesController < API::BaseController

  def index
    @saved_searches = SavedSearch.all
    render json: @saved_searches, scope: current_user
  end

  def create
    @saved_search = SavedSearch.new(saved_search_params)
    if @saved_search.save
      render json: @saved_search
    else
      render json: @saved_search.errors
    end
  end

  private

  def saved_search_params
    params.require(:saved_search).permit(:query)
  end

end

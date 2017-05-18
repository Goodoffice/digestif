class API::JobsController < API::BaseController
  def index
    @entries = filtered_entries.
      with_read_marks_for(current_user).
      reorder('published_at DESC').
      limit(500)
    render json: @entries, scope: current_user
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


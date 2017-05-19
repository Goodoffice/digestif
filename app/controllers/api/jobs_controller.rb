class API::JobsController < API::BaseController
  def index
    @entries = filtered_entries.
      with_read_marks_for(current_user).
      with_stars_for(current_user).
      where(['published_at > ? and published_at < ?', 14.days.ago, Time.now ]).
      reorder('published_at DESC')

    render json: @entries, scope: current_user
  end

  private

  def filtered_entries
    if params[:starred] == 'true'
      current_user.entries
    elsif params[:query]
      Entry.search_for(params[:query])
    else
      Entry.all
    end
  end
end


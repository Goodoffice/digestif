class API::JobsController < API::BaseController
  def index
    @entries = filtered_entries.
      with_read_marks_for(current_user).
      with_stars_for(current_user).
      where(['published_at > ? and published_at < ?', 14.days.ago, Time.now ]).
      reorder('published_at DESC')

    render(
      json: {
        jobs: serialized_entries,
        page: page,
        query: params[:query],
        more: more?
      }
    )
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

  def page
    (params[:page] || 1).to_i
  end

  def serialized_entries
    ActiveModel::Serializer::CollectionSerializer.new(
      @entries.page(page),
      each_serializer: EntrySerializer,
      scope: current_user
    ).as_json(root: false)
  end

  def more?
    !@entries.page(page + 1).out_of_range?
  end
end


class API::SourceListsController < API::BaseController

  def create
    @source_list = SourceList.new(source_list_params)

    if @source_list.save
      render_success
    else
      render_error
    end
  end

  protected

  def source_list_params
    params[:source_list].permit(
      :name,
      author_attributes: [ :email ], 
      source_urls: []
    )
  end

  def render_success
      render json: @source_list, status: 201
  end

  def render_error
    render json: { errors: @source_list.errors }, status: 422
  end

end


class API::SourcesController < API::BaseController

  def index
    @sources = Source.all
    render json: @sources
  end


  def create
    @source = Source.new(source_params)
    if @source.save
      render json: @source
    else
      render json: @source.errors, status: :unprocessable_entity
    end
  end

  private

  def source_params
    params.require(:source).permit(:name, :url)
  end

end



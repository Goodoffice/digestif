class API::StarsController < API::BaseController

  def create
    entry = Entry.find(params[:entry_id])
    star = current_user.star!(entry)
    render json: star, status: 200
  end

  def destroy
    entry = Entry.find(params[:entry_id])
    current_user.unstar!(entry)
    render json: { message: 'unstarred' }, status: 200
  end

end

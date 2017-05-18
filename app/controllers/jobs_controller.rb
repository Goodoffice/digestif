class JobsController < ApplicationController

  before_action :authenticate_user!

  def show
    @entry = Entry.find(params[:id])
    @entry.mark_as_read! for: current_user
    redirect_to @entry.url
  end

end

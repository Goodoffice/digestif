class DigestsController < ApplicationController
  def show
    @source_list = SourceList.friendly.find(params[:slug])
  end
end

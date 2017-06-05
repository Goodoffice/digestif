class LandingController < ApplicationController
  def default
    @user = User.new
    render layout: 'site'
  end
end

class LandingController < ApplicationController
  def default
    @user = User.new
  end
end

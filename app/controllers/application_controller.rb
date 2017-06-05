class ApplicationController < ActionController::Base
  def layout_by_resource
    if devise_controller?
      "site"
    else
      "application"
    end
  end
end

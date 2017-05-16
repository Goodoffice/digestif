class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: "teejay", password: "72EKviPHQK3QBum", except: :index
end

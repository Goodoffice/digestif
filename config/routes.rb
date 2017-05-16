require 'digestif/mail_preview'

Rails.application.routes.draw do
  get 'digests/show'

  mount Digestif::MailPreview => 'mail_preview'

  post 'api/source_lists' => 'api/source_lists#create'
  get 'digests/:slug' => 'digests#show'

  get 'api/jobs' => 'api/jobs#index'
  get 'api/sources' => 'api/sources#index'
  post 'api/sources' => 'api/sources#create'



  root to: 'site#show'
end

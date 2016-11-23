require 'digestif/mail_preview'

Rails.application.routes.draw do
  get 'digests/show'

  mount Digestif::MailPreview => 'mail_preview'

  post 'api/source_lists' => 'api/source_lists#create'
  get 'digests/:slug' => 'digests#show'

  get 'api/jobs' => 'api/jobs#index'



  root to: 'site#show'
end

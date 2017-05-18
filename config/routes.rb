require 'hacker_jobs/mail_preview'

Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  get 'digests/show'

  mount HackerJobs::MailPreview => 'mail_preview'

  post 'api/source_lists' => 'api/source_lists#create'
  get 'digests/:slug' => 'digests#show'

  get 'api/jobs' => 'api/jobs#index'
  get 'api/sources' => 'api/sources#index'
  post 'api/sources' => 'api/sources#create'

  get 'api/saved_searches' => 'api/saved_searches#index'
  post 'api/saved_searches' => 'api/saved_searches#create'

  get '/jobs/:id' => 'jobs#show'

  get '/*url' => 'site#show', constraints: { format: :html }

  root 'site#show'
end

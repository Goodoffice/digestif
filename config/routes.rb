require 'hacker_jobs/mail_preview'

Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  get 'digests/show'

  devise_scope :user do
    authenticated :user do
      root to: 'site#show'
    end

    unauthenticated :user do
      root to: 'landing#default'
    end
  end


  mount HackerJobs::MailPreview => 'mail_preview'

  post 'api/source_lists' => 'api/source_lists#create'
  get 'digests/:slug' => 'digests#show'

  get 'api/jobs' => 'api/jobs#index'
  get 'api/sources' => 'api/sources#index'
  post 'api/sources' => 'api/sources#create'

  post 'api/jobs/:entry_id/star' => 'api/stars#create'
  delete 'api/jobs/:entry_id/star' => 'api/stars#destroy'

  get 'api/saved_searches' => 'api/saved_searches#index'
  post 'api/saved_searches' => 'api/saved_searches#create'

  get '/jobs/:id' => 'jobs#show'

  get '/*url' => 'app#show', constraints: { format: :html }
end

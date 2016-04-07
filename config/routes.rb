require 'digestif/mail_preview'

Rails.application.routes.draw do
  get 'digests/show'

  mount Digestif::MailPreview => 'mail_preview'

  get 'digests/:slug' => 'digests#show'
  root to: 'site#show'
end

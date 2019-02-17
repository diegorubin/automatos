Rails.application.routes.draw do
  resources :exercises, only: [:show]
  get '/', to: 'home#index'
end

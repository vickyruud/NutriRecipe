Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :users , only: [:create]
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
  get '/users', to: 'users#index'
  get '/recipes', to: 'recipes#index'
  get '/recipes/categories', to: 'recipes#new'
  # get '/recipes/new', to: 'recipes#new'
  # get '/recipes/show', to: 'recipes#show'
end

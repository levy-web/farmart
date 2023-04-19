Rails.application.routes.draw do
  resources :carts, only: [:index, :show, :create, :update, :destroy]
  resources :line_items, only: [:index, :show, :create, :update, :destroy]
  resources :orders, only: [:index, :show, :create, :update, :destroy]
  resources :reviews
  resources :farmers, only: [:new, :create, :show]
  resources :animals, only: [:index, :show, :create, :update, :destroy]
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
get '/farmer-login', to: 'sessions#new_farmer'
post '/farmer-login', to: 'sessions#create_farmer'
delete '/logout', to: 'sessions#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

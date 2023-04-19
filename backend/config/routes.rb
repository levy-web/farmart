Rails.application.routes.draw do
  resources :carts, only: [:index, :show, :create, :update, :destroy]
  resources :line_items, only: [:index, :show, :create, :update, :destroy]
  resources :orders, only: [:index, :show, :create, :update, :destroy]
  resources :reviews
  resources :farmers
  resources :animals, only: [:index, :create]
  resources :users

  # animals pdate route
  get '/my-animals', to: 'animals#myAnimals'
  get '/animals/:name', to: 'animals#show'
  put '/animals/:name', to: 'animals#update'
  delete '/animals/:name', to: 'animals#destroy'

  
  post '/user-login', to: 'sessions#user_create'
  post '/farmer-login', to: 'sessions#farmer_create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'sessions#create'
end

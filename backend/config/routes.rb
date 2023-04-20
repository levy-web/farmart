Rails.application.routes.draw do
  resources :carts, only: [:index, :show, :create, :update, :destroy]
  resources :line_items, only: [:index, :show, :create, :update, :destroy]
  resources :orders, only: [:index, :show, :create, :update, :destroy]
  resources :reviews
  resources :farmers
  resources :animals, only: [:index, :show, :create, :update, :destroy]
  resources :users
  
  post '/login', to: 'sessions#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

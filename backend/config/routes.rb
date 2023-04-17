Rails.application.routes.draw do
  resources :carts, only: [:index, :show, :create, :update, :destroy]
  resources :line_items, only: [:create]
  resources :orders
  resources :reviews
  resources :farmers
  resources :animals
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

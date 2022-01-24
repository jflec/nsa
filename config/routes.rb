Rails.application.routes.draw do
  resources :brackets
  devise_for :users
  resources :users, only: [:show], param: :slug

  authenticated :user do 
    root 'pages#index', as: :authenticated_root
  end

  root 'pages#welcome'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

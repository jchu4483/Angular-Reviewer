Rails.application.routes.draw do
  devise_for :users

  resources :reviews, only: [:create, :destroy, :update, :index, :show]

  root "application#index"
end

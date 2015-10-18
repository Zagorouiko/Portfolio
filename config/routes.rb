Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
      root 'categories#index'
    end

  resources :categories do
    resources :projects, except: [:index]
  end

  resources :posts do
    resources :comments
  end

  resources :recommendations
end

Rails.application.routes.draw do
  resources :records
  root  to: 'site#index'
  namespace :api do
    scope module: :v1 do
      resources :items, only: [:index, :create, :show, :update, :destroy]
    end
  end
end

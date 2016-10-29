Rails.application.routes.draw do
  resources :records
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :show, :update, :destroy]
    end
  end
end

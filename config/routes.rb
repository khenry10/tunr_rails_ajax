Rails.application.routes.draw do
  root to: 'artists#index'

  resources :songs, only: [:index, :show]
  resources :artists do
    resources :songs
    resources :genres
  end

  get '/test_ajax', to: 'artists#test_ajax'
  
end

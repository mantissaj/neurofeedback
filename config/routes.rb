Rails.application.routes.draw do
  root 'welcome#index'

  resources "welcome", only: [] do
    collection do
      get :index
      post :create_email
    end
  end
end

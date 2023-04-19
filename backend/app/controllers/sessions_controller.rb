class SessionsController < ApplicationController
     # for regular users
  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      token = JWT.encode({user_id: user.id}, Rails.application.secrets.secret_key_base)
      render json: {token: token}
    else
      render json: {error: 'Invalid email or password'}, status: :unprocessable_entity
    end
  end

  # for the admin/farmer
  def farmer_create
    admin = Farmer.find_by(email: params[:email])

    if farmer && farmer.authenticate(params[:password])
      token = JWT.encode({farmer_id: farmer.id}, Rails.application.secrets.secret_key_base)
      render json: {token: token}
    else
      render json: {error: 'Invalid email or password'}, status: :unprocessable_entity
    end
  end

  #logout buttons
  def destroy
    session[:user_id] = nil
    session[:farmer_id] = nil
    render json: { message: "Logged out" }
  end
  end
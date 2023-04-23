class SessionsController < ApplicationController
     # for regular users
  def user_create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      token = encode_token(user.id, user.email, "buyer")
      # token = JWT.encode({user_id: user.id, email:user.email}, ENV['task_train_key'], 'HS256')
      render json: {message:"#{user.username} succesfully logged in", data:{user:user,token:token}, status: :ok}
    else
      render json: {message:"user failed logged in", data: {error: 'Invalid email or password'}}, status: :unprocessable_entity
    end
  end

  # for the admin/farmer
  def farmer_create
    
    farmer = Farmer.find_by(email: params[:email])
    

    if farmer && farmer.authenticate(params[:password])
      token = encode_token(farmer.id, farmer.email, "farmer")
      
      # token = JWT.encode({farmer_id: farmer.id}, Rails.application.secrets.secret_key_base)
      render json: {message:"#{farmer.admin_name} succesfully logged in", data:{user:farmer,token:token}, status: :ok}
    else
      
      render json: {message:"farmer log in failed", data: {error: 'Invalid email or password'}}, status: :unprocessable_entity
      
    end
  end

  #logout buttons
  def destroy
    session[:user_id] = nil
    session[:farmer_id] = nil
    render json: { message: "Logged out" }
  end
  end
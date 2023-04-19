class SessionsController < ApplicationController
    def new
    end
  
    def create
      user_or_farmer = User.find_by(email: params[:session][:email]) || Farmer.find_by(email: params[:session][:email])
      if user_or_farmer && user_or_farmer.authenticate(params[:session][:password])
        if user_or_farmer.is_a?(User)
          log_in user_or_farmer
          redirect_to user_path(user_or_farmer)
        elsif user_or_farmer.is_a?(Farmer)
          log_in_farmer user_or_farmer
          redirect_to farmer_path(user_or_farmer)
        end
      else
        flash.now[:danger] = 'Invalid email/password combination'
        render 'new'
      end
    end
  
    def destroy
      log_out
      redirect_to root_url
    end
  end
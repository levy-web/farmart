# class AdminController < ApplicationController
#   before_action :authenticate_admin!

#   def index
#     render json: { message: 'Hello ' }
#   end

#   private

#   def authenticate_admin!
#     token = request.headers['Authorization']&.split(' ')&.last
#     payload = JwtService.decode(token)

#     if payload && payload['user_id'] == 1 # Replace 1 with the ID of your admin user
#       true
#     else
#       render json: { error: 'Unauthorized' }, status: :unauthorized
#     end
#   end
# end

class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end
# forgot password

def forgot_password
  email = params[:email]
  user = User.find_by(email: email)
  if user.present?
    token = SecureRandom.urlsafe_base64
    user.update(reset_password_token: token, reset_password_sent_at: Time.now)
    # send email to user with link to reset password
    # the email should contain the reset token in the link
    render json: { message: 'Password reset link sent to your email' }
  else
    render json: { error: 'No user with that email found' }
  end
end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :email, :password, :address)
    end
end

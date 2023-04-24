# app/controllers/api/password_resets_controller.rb

class PasswordResetsController < ApplicationController
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
end

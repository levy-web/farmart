class ApplicationController < ActionController::API
    include ActionController::Cookies
    def encode_token(uid, email, user_type)
        payload = {
            data:{
                uid: uid,
                email: email,
                user_type: user_type #add user type to payload
            },
            exp: Time.now.to_i + (6*3600)
        }
        JWT.encode(payload, "secret")
    end

    def decode_token
        # get the token from the headers
        auth_header = request.headers['Authorization']
        # check whether the token is present
        if auth_header
            # 'Bearer hafsdhfgjsdhvbd' split(' ')[1]
            token = auth_header.split(' ')[1]
            # wrap the decoding process within an exception
            begin
                JWT.decode(token, 'secret', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def authorised_user
        # use the decode_token method to get user details
        decoded_token = decode_token()

        if decoded_token
            # take out the user id and user type
            @uid = decoded_token[0]['data']['uid'].to_i
            @user_type = decoded_token[0]['data']['user_type']
            # [{payload},{header},{verify_signature}]
            # {
            #     "id": 10,
            #     "firstName": "John"
            # }
        
            # find the user that matches the ID
            # user = User.find_by(id: user_id)
        # else 
        #     render json: {error: 'User not found'}, status: :not_found
        end
    end
    def user
        User.find(@uid)
    end
    
     # store user id in session
     def save_user(id)
        session[:uid] = id
        session[:expiry] =Time.now.to_i + (6*3600)
    end
     # check for session expiry
     def session_expired?
        session[:expiry] ||= Time.now
        puts session[:expiry]
        puts session[:uid]
        puts @uid
        puts Time.now.to_i
        time_diff = session[:expiry].to_i - Time.now.to_i
        puts time_diff

        unless time_diff > 0
            render json: { message: 'failed', data: { info: 'Your session has expired. Please login again to continue' } },  status: 401 
        end
    end
       # delete user id in session
       def remove_user
        session.delete(:uid)
        session[:expiry] = Time.now
    end

    def authorize
        render json: {message: "Unauthorized access"}, status: :unauthorized unless
        authorised_user
    end

end

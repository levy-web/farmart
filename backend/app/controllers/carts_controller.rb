class CartsController < ApplicationController
  before_action :set_cart, only: %i[ show update destroy ]
  before_action :verify_auth, only: %i[show index create destroy update]
    # GET /carts
    def index
      if @user[:user_type] == "farmer"
      @carts = Cart.all
      myOrders = []
      @carts.map do |item|
        if item.animal.farmer_id == @user[:uid]
          myOrders << item
        end        
      end
      render json: myOrders
      
      else
        app_response(message:"failed", data:{info:{error:"register as a farmer"}}, status: :unauthorized)      end
    end
    # GET /carts/1
    def show
      render json: @cart
    end

    # POST /carts
    def create
      if @user[:user_type] == "buyer"
        @cart = Cart.new(cart_params)
        if @cart.save
          render json: @cart, status: :created, location: @cart
        else
          render json: @cart.errors, status: :unprocessable_entity
        end
      else
        render json: {message:"error, not authorized"}, status: :Not_Authorized
      end
    end
    # PATCH/PUT /carts/1
    def update
      if @cart.update(cart_params)
        render json: @cart
      else
        render json: @cart.errors, status: :unprocessable_entity
      end
    end
    # DELETE /carts/1

    def destroy
      if @user[:user_type] == "farmer"
        @cart.destroy
        render json: {message:"succesful, order rejected"}, status: :ok
      else
        render json: {message:"error, not authorized"}, status: :Not_Authorized
      end
    end


    private
      # Use callbacks to share common setup or constraints between actions.
      def set_cart
        @cart = Cart.find(params[:id])
      end
      # Only allow a list of trusted parameters through.
      def cart_params
        params.require(:cart).permit(:animal_id, :quantity, :price).merge(user_id: params.fetch(:user_id, @user[:uid] ))
      end
  
end

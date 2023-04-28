class TransactionsController < ApplicationController

    before_action :verify_auth, only: %i[myAnimals index create destroy update]

    def index
        if @user[:user_type] == "farmer"
            transaction = Transaction.where("farmer_id=?", @user[:uid])
            render json: {message:"successful", data: {"transactions":transaction}, status: :ok}, status: :ok
        else
            app_response(message:"failed", data:{info:{error:"register as a farmer"},status: :unauthorized},status: :unauthorized)
        end
    end

    def create
        transaction = Transaction.create(transactions_params)
        render json: transaction
    end

    private

    def transactions_params
        params.permit(:customer_name, :animal_name, :total_price).merge(farmer_id: params.fetch(:farmer_id, @user[:uid] ))
    end
end

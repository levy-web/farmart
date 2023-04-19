class FarmersController < ApplicationController
  #before_action :set_farmer, only: %i[ show update destroy ]

  # GET /farmers
  def index
    farmers = Farmer.all

    render json: @farmers
  end

  # GET /farmers/1
  def show
    render json: @farmer
  end

  # POST /farmers
  def create
    if(params[:confPassword] == farmer_params[:password])
      @farmer = Farmer.create(farmer_params)
      if @farmer.valid?
        render json: {message:"succesfully registered", data:{user:@farmer}, status: :ok}
      else
        render json: {message: "failed", data:{error:@farmer.errors.full_messages}}, status: :unprocessable_entity
      end
    else
      render json: {message: "failed", data:{info:"password doesnt match confirm password"}}, status: :unprocessable_entity
    end



  end

  # PATCH/PUT /farmers/1
  def update
    if @farmer.update(farmer_params)
      render json: @farmer
    else
      render json: @farmer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /farmers/1
  def destroy
    @farmer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_farmer
      @farmer = Farmer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def farmer_params
      params.permit(:farm_name, :location, :contact_info, :admin_name, :email, :password)
    end
end

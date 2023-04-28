class AnimalsController < ApplicationController

  before_action :set_animal, only: %i[ show update destroy ]
  before_action :verify_auth, only: %i[myAnimals create destroy update]


  # GET /animals
  def index
    @animals = Animal.all
    @newArr = []
    for value in @animals do
      @newArr << AnimalSerializer.new(value).serializable_hash[:data][:attributes]         
    end
    render json: {message:"succesfull", data:@newArr, status: :ok}
    
  end

  def myAnimals
    
    if @user[:user_type] == "farmer"
      @newArr = []
      
      @animals = Animal.where("farmer_id=?", @user[:uid] )
      for value in @animals do
        @newArr << AnimalSerializer.new(value).serializable_hash[:data][:attributes]         
      end
      render json: {message:"succesfull", data:@newArr, status: :ok}
    else
        app_response(message:"failed", data:{info:{error:"register as a farmer"}}, status: :unauthorized)
    end
  end

  # GET /animals/1
  def show
    render json: AnimalSerializer.new(@animal).serializable_hash[:data][:attributes]
  end

  # POST /animals
  def create
    if @user[:user_type] == "farmer"
    @animal = Animal.new(animal_params)

    if @animal
      @animal.save
      nimo = AnimalSerializer.new(@animal).serializable_hash[:data][:attributes]
      render json: nimo
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
    else
      app_response(message:"failed", data:{info:{error:"register as a farmer"}}, status: :unprocessable_entity)
  end

  end

  # PATCH/PUT /animals/1
  def update
    if @user[:user_type] == "farmer"
      if @animal.update(animal_params)
        render json: AnimalSerializer.new(@animal).serializable_hash[:data][:attributes]
      else
        render json: @animal.errors, status: :unprocessable_entity
      end
    else
        app_response(message:"failed", data:{info:{error:"register as a farmer"}}, status: :unprocessable_entity)
    end
  end

  # DELETE /animals/1
  def destroy
    if @user[:user_type] == "farmer"
    @animal.destroy
    render json: AnimalSerializer.new(@animal).serializable_hash[:data][:attributes]
      else
        app_response(message:"failed", data:{info:{error:"register as a farmer"}}, status: :unprocessable_entity)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal
      @animal = Animal.find_by(name: params[:name])
    end

    # Only allow a list of trusted parameters through.
    def animal_params
      params.require(:animal).permit(:name, :animal_type, :breed, :age, :weight, :price, :image).merge(farmer_id: params.fetch(:farmer_id, @user[:uid] ))
    end
end

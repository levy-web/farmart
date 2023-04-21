class AnimalsController < ApplicationController

  before_action :set_animal, only: %i[ show update destroy ]
  before_action :verify_auth, only: %i[myAnimals]


  # GET /animals
  def index
    @animals = Animal.all
    @newArr = []
    for value in @animals do
      @newArr << AnimalSerializer.new(value).serializable_hash[:data][:attributes]         
    end
    render json: @newArr
  end

  def myAnimals
    @newArr = []
    if @user[:user_type] == "farmer"
      sql = "id = :farmer_id"
      @animals = Animal.where(sql, { farmer_id: @user[:uid] })
      for value in @animals do
        @newArr << AnimalSerializer.new(value).serializable_hash[:data][:attributes]         
      end
      render json: @newArr
      else
        app_response(message:"failed", data:{info:{error:"register as a farmer"}}, status: :unprocessable_entity)
    end
  end

  # GET /animals/1
  def show
    render json: AnimalSerializer.new(@animal).serializable_hash[:data][:attributes]
  end

  # POST /animals
  def create
    @animal = Animal.new(animal_params)

    if @animal
      @animal.save
      nimo = AnimalSerializer.new(@animal).serializable_hash[:data][:attributes]
      render json: nimo
    else
      render json: @animal.errors, status: :unprocessable_entity
    end

  end

  # PATCH/PUT /animals/1
  def update
    if @animal.update(animal_params)
      render json: AnimalSerializer.new(@animal).serializable_hash[:data][:attributes]
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animals/1
  def destroy
    @animal.destroy
    render json: AnimalSerializer.new(@animal).serializable_hash[:data][:attributes]
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal
      @animal = Animal.find_by(name: params[:name])
    end

    # Only allow a list of trusted parameters through.
    def animal_params
      params.require(:animal).permit(:name, :animal_type, :breed, :age, :weight, :price, :farmer_id, :image)
    end
end

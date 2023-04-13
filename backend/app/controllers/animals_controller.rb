class AnimalsController < ApplicationController
    def index
        render json: Animal.all
    end
end

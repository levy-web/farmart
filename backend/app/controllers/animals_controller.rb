class AnimalsController < ApplicationController
    def index
        render json: Animall.all
    end
end

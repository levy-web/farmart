class CartsController < ApplicationController

    before_action :set_order_item, only: [:show, :update, :destroy]

    # GET /carts_items
    def index
      @carts_items = Carts.all
      render json: @carts_items
    end

    # GET /carts_items/1
    def show
      render json: @carts_item
    end

    # POST /carts_items
    def create
      @carts_item = CartsItem.new(carts_item_params)

      if @carts_item.save
        render json: @carts_item, status: :created
      else
        render json: @carts_item.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /carts_items/1
    def update
      if @carts_item.update(carts_item_params)
        render json: @carts_item
      else
        render json: @carts_item.errors, status: :unprocessable_entity
      end
    end

    # DELETE /carts_items/1
    def destroy
      @carts_item.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_carts_item
        @carts_item = CartsItem.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def carts_item_params
        params.require(:carts_item).permit(:order_id, :item_id, :quantity, :subtotal)
      end



end

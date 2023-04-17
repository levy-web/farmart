class LineItemsController < ApplicationController
    def index
        @line_item = LineItem.all
    
        render json: @line_item
      end
    def create
        line_item = LineItem.new(line_item_params)
        if line_item.save
          render json: line_item, status: :created
        else
          render json: line_item.errors, status: :unprocessable_entity
        end
      end
      private
      def line_item_params
        params.require(:line_item).permit(:order_id, :animal_id, :quantity)
      end
end


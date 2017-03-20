require 'pry'

class ItemsController < ApplicationController
  def index
    assets = Item.all.select { |item| item.amount >= 0 }
    liabilities = Item.all.select { |item| item.amount < 0 }

    @items = {}
    @items[:assets] = assets
    @items[:liabilities] = liabilities

    render json: @items
  end

  def show
    @item = Item.find_by(id: params[:id]);
    render json: @item
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :description, :amount)
  end
end

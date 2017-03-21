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
    @item = Item.find_by(id: params[:id])
    render json: @item
  end

  def create
    params_hash = JSON.parse(params[:json])
    @item = Item.find_or_create_by(params_hash)

    if @item.save
      render json: @item
    end
  end

  def destroy
    @item = Item.find_by(id: params[:id])
    @item.destroy
  end

end

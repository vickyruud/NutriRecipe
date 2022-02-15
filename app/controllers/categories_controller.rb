class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render :json => @categories
  end
  def update
    @category = Category.find params[:id]
    @category = category_params
    render :json => @category
    if @category.save
      render :json => @category
    else
      puts 'error saving!'
    end
  end
end

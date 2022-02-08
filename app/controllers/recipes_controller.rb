class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render :json => @recipes
  end

  def show #my recipes for the user_id = 1 for now
    @recipes = Recipe.find_by(user_id:1)
    puts @recipes
    render :json => @recipes
  end

  def new
    @recipe = Recipe.new
    puts "new recipe page loaded"
  end

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render :json => @recipe
    else
      notice 'error saving!'
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(
      :user_id,
      :category_id,
      :name,
      :description,
      :ingredients,
      :steps,
      :serving_size,
      :estimated_time,
      :rating,
      :image_url
    )
  end
end

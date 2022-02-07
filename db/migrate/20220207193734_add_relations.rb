class AddRelations < ActiveRecord::Migration[5.2]
  def change
    add_reference :recipes, :user, foreign_key: true
    add_reference :recipes, :category, foreign_key: true
    add_reference :ratings, :recipe, foreign_key: true
    add_reference :comments, :recipe, foreign_key: true
    add_reference :ratings, :user, foreign_key: true
    add_reference :comments, :user, foreign_key: true
  end
end

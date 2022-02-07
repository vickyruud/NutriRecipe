class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name     
      t.string :description
      t.integer :serving_size
      t.integer :estimated_time
      t.string :steps
      t.jsonb :ingredients
      t.integer :average_rating
      t.string :image_url

      t.timestamps
    end
  end
end

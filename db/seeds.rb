# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

CSV.foreach('seed_data/Users_seedDB.csv', headers: true) do |row|
  User.create(row.to_h)
end

CSV.foreach('seed_data/categories.csv', headers: true) do |row|
  Category.create(row.to_h)
end

CSV.foreach('seed_data/recipe_data.csv', headers: true) do |row|
  Recipe.create(row.to_h)
end

CSV.foreach('seed_data/comments.csv', headers: true) do |row|
  Comment.create(row.to_h)
end

CSV.foreach('seed_data/ratings.csv', headers: true) do |row|
  Rating.create(row.to_h)
end
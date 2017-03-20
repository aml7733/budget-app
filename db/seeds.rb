# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.create([
  { name: "Credit Card", description: "This is the description of item 1.", amount: -150 },
  { name: "Student Loan", description: "This is the description of item 2.", amount: -200 },
  { name: "Occupation", description: "This is the description of item 3.", amount: 1500 },
  { name: "Side Hustle", description: "This is the description of item 4.", amount: 1500 }
  ])

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding"

User.create!(
  username: 'user1',
  email: 'user1@example.com',
  password_digest:'password', # use bcrypt to hash password
  address: '123 Main St, Anytown, USA'
)

User.create!(
  username: 'user2',
  email: 'user2@example.com',
  password: 'password',
  address: '456 Elm St, Othertown, USA'
)

User.create!(
  username: 'user3',
  email: 'user3@example.com',
  password: 'password',
  address: '789 Oak St, Another Town, USA'
)

User.create!(
  username: 'user4',
  email: 'user4@example.com',
  password: 'password',
  address: '321 Maple St, Differenttown, USA'
)

# farmers
Farmer.create!(
  admin_name: "John Doe",
  farm_name: "Doe Farms",
  location: "New York",
  contact_info: "555-555-5555",
  email: "john@example.com",
  password:'password'
)

Farmer.create!(
  admin_name: "Jane Smith",
  farm_name: "Smith Farms",
  location: "California",
  contact_info: "555-555-5555",
  email: "jane@example.com",
  password: 'password'
)

Farmer.create!(
  admin_name: "Robert Lee",
  farm_name: "Lee Farms",
  location: "Texas",
  contact_info: "555-555-5555",
  email: "robert@example.com",
  password: 'password'
)

# animals
Animal.create!(
  animal_type: "Horse",
  breed: "Quarter Horse",
  age: 4,
  weight: 1000,
  price: 2500,
  farmer_id: 1,
  image_url: "https://example.com/horse.jpg"
)

Animal.create!(
  animal_type: "Cow",
  breed: "Angus",
  age: 2,
  weight: 1200,
  price: 3000,
  farmer_id: 2,
  image_url: "https://example.com/cow.jpg"
)

Animal.create!(
  animal_type: "Pig",
  breed: "Berkshire",
  age: 1,
  weight: 250,
  price: 500,
  farmer_id: 3,
  image_url: "https://example.com/pig.jpg"
)

Animal.create!(
  animal_type: "Sheep",
  breed: "Dorper",
  age: 3,
  weight: 150,
  price: 750,
  farmer_id: 1,
  image_url: "https://example.com/sheep.jpg"
)

Animal.create!(
  animal_type: "Goat",
  breed: "Boer",
  age: 2,
  weight: 80,
  price: 400,
  farmer_id: 2,
  image_url: "https://example.com/goat.jpg"
)

# Seed data for carts table
3.times do
  Cart.create(
    user_id: rand(1..4), # assuming there are 4 users in the system
    animal_id: rand(1..5), # assuming there are 5 animals in the system
    quantity: rand(1..10),
    price: rand(100..1000)
  )
end

Order.create!(
  user_id: 1,
  status: 'pending',
  total_amount: 100
)

Order.create!(
  user_id: 2,
  status: 'shipped',
  total_amount: 250
)

Order.create!(
  user_id: 3,
  status: 'delivered',
  total_amount: 500
)

Review.create(user_id: 1, animal_id: 2, farmer_id: 1, comment: "Great experience buying from this farmer!", rating: 4)
Review.create(user_id: 2, animal_id: 1, farmer_id: 2, comment: "The meat was delicious, would definitely buy from this farmer again.", rating: 5)
Review.create(user_id: 3, animal_id: 3, farmer_id: 2, comment: "The quality of the meat was good, but the delivery took longer than expected.", rating: 3)
Review.create(user_id: 4, animal_id: 4, farmer_id: 3, comment: "The farmer was very responsive and helpful throughout the entire process.", rating: 4)

LineItem.create([
  { order_id: 1, animal_id: 1, quantity: 2 },
  { order_id: 1, animal_id: 2, quantity: 1 },
  { order_id: 2, animal_id: 3, quantity: 3 },
  { order_id: 3, animal_id: 4, quantity: 2 }
])


puts "done seeding"

  


  

  
  

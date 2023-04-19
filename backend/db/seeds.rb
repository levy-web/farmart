# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding"

# 5.times do
#         user = User.create!(
#           username: Faker::Internet.unique.username,
#           email: Faker::Internet.unique.email,
#           password_digest: 'password',
#           address: Faker::Address.full_address
#         )
#         farmer = Farmer.create!(
#           admin_name: Faker::Name.unique.name,
#           farm_name: Faker::Company.unique.name,
#           location: Faker::Address.city,
#           contact_info: Faker::PhoneNumber.cell_phone,
#           user_id: user,
#           password: 'password',
#           email: user.email
#         )
#       end

# create a fake user
    User.create!(
      username: Faker::Internet.username,
      email: Faker::Internet.email,
      password_digest: 'password', # Set default password for all users
      address: Faker::Address.full_address
    )



# farmers
# 10.times do
#   Farmer.create(
#     admin_name: Faker::Name.name,
#     farm_name: Faker::Company.name,
#     location: Faker::Address.city,
#     contact_info: Faker::PhoneNumber.phone_number,
#     email: Faker::Internet.email,
#     password: 'password'
#   )
# end
farmer = Farmer.create(admin_name: 'kenney', farm_name: 'kamulu', password: "333333")

  # animals
10.times do
    Animal.create!(
      animal_type: Faker::Creature::Animal.name,
      breed: Faker::Creature::Dog.breed,
      age: rand(1..10),
      weight: rand(10..500),
      price: rand(500..5000),
      farmer_id: rand(1..10), # assuming there are 10 farmers in the system
      image_url: Faker::LoremFlickr.image(size: "500x500", search_terms: ['animal'])
    )
  end


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
  farmer_id: 3,
  status: 'pending',
  total_amount: 100,
  farmer_id: 2
)

Order.create!(
  user_id: 2,
  farmer_id: 3,
  status: 'shipped',
  total_amount: 250,
  farmer_id: 3
)

Order.create!(
  user_id: 3,
  farmer_id: 3,
  status: 'delivered',
  total_amount: 500,
  farmer_id: 1
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








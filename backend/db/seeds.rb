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
#   farmer = Farmer.create(
#     admin_name: Faker::Name.name,
#     farm_name: Faker::Company.name,
#     location: Faker::Address.city,
#     contact_info: Faker::PhoneNumber.phone_number,
#     email: Faker::Internet.email,
#     password_digest: 'password'
#   )
# end

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
  

  # reviews
7.times do
    Review.create!(
      user_id: rand(1..7), # assuming there are 7 users in the system
      animal_id: rand(1..50), # assuming there are 50 animals in the system
      farmer_id: rand(1..10), # assuming there are 10 farmers in the system
      comment: Faker::Lorem.paragraph(sentence_count: 3),
      rating: rand(1..5)
    )
  end

  # orders
10.times do
    order = Order.create!(
      user_id: rand(1..10), # assuming there are 10 users in the system
      status: ['pending', 'shipped', 'delivered'].sample,
      total_amount: rand(100..1000)
    )
  #line item
    3.times do
      order.line_items.create!(
        animal_id: rand(1..50), # assuming there are 50 animals in the system
        quantity: rand(1..5),
        price: rand(500..2000)
      )
    end
  end

  # carts
6.times do
    Cart.create!(
      user_id: rand(1..6), # assuming there are 6 users in the system
      animal_id: rand(1..50), # assuming there are 50 animals in the system
      quantity: rand(1..5),
      price: rand(500..2000)
    )
  end


#   LineItem.create([
#   { order_id: 1, animal_id: 1, quantity: 2 },
#   { order_id: 1, animal_id: 2, quantity: 1 },
#   { order_id: 2, animal_id: 3, quantity: 3 },
#   { order_id: 2, animal_id: 4, quantity: 2 },
#   { order_id: 3, animal_id: 5, quantity: 1 }
# ])


# Cart.create(user_id: 1, animal_id: 1, quantity: 2, price: 19.99)
# Cart.create(user_id: 2, animal_id: 3, quantity: 1, price: 25.50)
# Cart.create(user_id: 1, animal_id: 2, quantity: 3, price: 12.99)
# Cart.create(user_id: 3, animal_id: 1, quantity: 1, price: 19.99)


  puts "done seeding"
  


  

  
  

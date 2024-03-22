// This is the server file for the MirageJS server.
// It's where you define your routes, models, and any other server-side logic.
// It's also where you can seed your database with some initial data.

import { createServer, Model, Response } from 'miragejs'

createServer({
  models: {
    vans: Model,
    users: Model,
  },

  seeds(server) {
    server.create('van', {
      id: '1',
      name: 'Modest Explorer',
      price: 60,
      description:
        'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
      imageUrl:
        'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
      type: 'simple',
      hostId: '123',
      reviews: [
        {
          id: '1',
          vanId: '1',
          rating: 4,
          reviewer: 'Alice',
          content:
            'The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!!',
          date: '05/12/2023',
        },
      ],
    })
    server.create('van', {
      id: '2',
      name: 'Beach Bum',
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        'https://assets.scrimba.com/advanced-react/react-router/beach-bum.png',
      type: 'rugged',
      hostId: '123',
      reviews: [
        {
          id: '1',
          vanId: '2',
          rating: 5,
          reviewer: 'Lucas',
          content:
            'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
          date: '01/02/2024',
        },
      ],
    })
    server.create('van', {
      id: '3',
      name: 'Reliable Red',
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        'https://assets.scrimba.com/advanced-react/react-router/reliable-red.png',
      type: 'luxury',
      hostId: '456',
    })
    server.create('van', {
      id: '4',
      name: 'Dreamfinder',
      price: 65,
      description:
        'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.',
      imageUrl:
        'https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png',
      type: 'simple',
      hostId: '789',
    })
    server.create('van', {
      id: '5',
      name: 'The Cruiser',
      price: 120,
      description:
        'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.',
      imageUrl:
        'https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png',
      type: 'luxury',
      hostId: '789',
    })
    server.create('van', {
      id: '6',
      name: 'Green Wonder',
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        'https://assets.scrimba.com/advanced-react/react-router/green-wonder.png',
      type: 'rugged',
      hostId: '123',
      reviews: [],
    })
    server.create('user', {
      id: '123',
      email: 'b@b.com',
      password: 'p123',
      name: 'Bob',
      income: {
        total: 2260,
        transactions: [
          {
            id: '1',
            date: {
              day: 12,
              month: 2,
              year: 2023,
            },
            amount: 720,
            description: 'Van rental',
          },
          {
            id: '2',
            date: {
              day: 19,
              month: 7,
              year: 2023,
            },
            amount: 560,
            description: 'Van rental',
          },
          {
            id: '3',
            date: {
              day: 25,
              month: 5,
              year: 2023,
            },
            amount: 980,
            description: 'Van rental',
          },
        ],
      },
    })
  },

  routes() {
    // this.timing = 2000
    this.namespace = 'api'
    this.logging = false
    // pass through any requests that start with /_ to the real server
    this.passthrough('https://firestore.googleapis.com/**')

    this.get('/vans', (schema, request) => {
      return schema.vans.all()
      // return new this.Response(400, {}, { error: 'Error fetching data' })
    })

    this.get('/vans/:id', (schema, request) => {
      const id = request.params.id
      return schema.vans.find(id)
    })

    this.get('/host/vans', (schema, request) => {
      return schema.vans.where({ hostId: '123' })
      // return new this.Response(400, {}, { error: 'Error fetching data' })
    })

    this.get('/host/vans/:id', (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id
      return schema.vans.where({ id, hostId: '123' })
    })
    this.get('/user', (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id
      return schema.users.where({ id, id: '123' })
    })

    this.post('/login', (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody)
      // ⚠️ This is an extremely naive version of authentication. Please don't
      // do this in the real world, and never save raw text passwords
      // in your database 😅
      const foundUser = schema.users.findBy({ email, password })
      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: 'No user with those credentials found!' }
        )
      }

      // At the very least, don't send the password back to the client 😅
      foundUser.password = undefined
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      }
    })
  },
})

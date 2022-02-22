# NutriRecipe

An application for sharing recipes built with React frontend with a Ruby on Rails API and PostgreSQL database.
Users can post recipes, leave comments or reviews and provide ratings.

## Setup

You need **TWO** terminals for this as backend and frontend servers.

In the backend terminal:

1. Log on PSQL and run the following 2 commands:
   `CREATE user labber WITH password 'labber';`
   `ALTER user labber WITH SUPERUSER;`
2. Run `rvm install "ruby-2.6.6"`
3. Run `gem install rails`
4. Run `bundle` to install the dependencies.
5. Run `bin/rake db:reset` to create, load and seed db
6. Run `bin/rails s` to start the backend server and leave it running.

In the frontend terminal:

1. `cd` into `frontend` folder.
2. Run `nvm install node`
3. Run `npm install`
4. Rename the `.env.example` file to be called `.env`.
5. Then run `npm start` to start the frontend server and leave it running.

In your browser, go to `localhost:3000`

## Dependencies

- Rails 2.6.6 or above
- PostgreSQL 9.x
- Node 16.0 or above
- NPM 8.4 or above

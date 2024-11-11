#!/bin/sh
# Load environment variables if necessary

npm run build

# Run migrations
npm run m:run

# Run seeds (if applicable)
npm run seed

# Start the application
npm start

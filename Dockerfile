# Use Node.js as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json .

# Install project dependencies
RUN npm install

COPY . .

EXPOSE 5173

# Command to start the application
CMD ["npm", "run","dev"]

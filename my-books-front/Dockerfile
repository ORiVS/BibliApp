# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18.12.1 as build

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm ci

# Generate the build of the application
RUN npm run build --prod


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.21

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/my-books-front /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

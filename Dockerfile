# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml first (cache layer)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build NestJS
RUN pnpm run build

# Expose port
EXPOSE 3000

# Run app (use dev or prod as needed)
CMD ["pnpm", "run", "start:dev"]

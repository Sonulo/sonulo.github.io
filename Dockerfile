FROM node:alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json ./

# set environment variables
RUN --mount=type=secret,id=NEXT_PUBLIC_EMAILJS_SERVICE_ID \
    --mount=type=secret,id=NEXT_PUBLIC_EMAILJS_TEMPLATE_ID \
    --mount=type=secret,id=NEXT_PUBLIC_EMAILJS_USER_ID\
    export NEXT_PUBLIC_EMAILJS_SERVICE_ID=$(cat /run/secrets/NEXT_PUBLIC_EMAILJS_SERVICE_ID) &&\
    export NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$(cat /run/secrets/NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) &&\
    export NEXT_PUBLIC_EMAILJS_USER_ID=$(cat /run/secrets/NEXT_PUBLIC_EMAILJS_USER_ID)

# install dependencies
RUN npm install --verbose
COPY . .

# build
RUN npm run build

# expose the port
EXPOSE 80

CMD ["npm", "start"]

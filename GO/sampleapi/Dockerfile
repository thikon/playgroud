FROM golang:1.13.5-buster
WORKDIR /sampleapi
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .
CMD ["./app"]
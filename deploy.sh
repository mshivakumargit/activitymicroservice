docker pull mongo
docker pull node
git clone https://github.com/mshivakumargit/activitymicroservice.git
docker build -t activitymicroservice .
docker run -d -t --name mongodbserver mongo
docker run -d -t -p 9090:9090 --name api --link mongoserver:mongoserver activitymicroservice

docker cp indicators.csv mongodbserver:/tmp/indicators.csv
docker cp activitytypes.csv mongodbserver:/tmp/activitytypes.csv
docker cp activities.csv mongodbserver:/tmp/activities.csv
docker cp studentactivities.csv mongodbserver:/tmp/studentactivities.csv
docker cp students.csv mongodbserver:/tmp/students.csv
docker cp alerts.csv mongodbserver:/tmp/alerts.csv
docker cp alerttypes.csv mongodbserver:/tmp/alerttypes.csv

docker exec mongodbserver mongoimport -d activitysystemdb -c indicators --headerline --file /tmp/indicators.csv --type csv
docker exec mongodbserver mongoimport -d activitysystemdb -c activitytypes --headerline --file /tmp/activitytypes.csv --type csv
docker exec mongodbserver mongoimport -d activitysystemdb -c activities --headerline --file /tmp/activities.csv --type csv
docker exec mongodbserver mongoimport -d activitysystemdb -c studentactivities --headerline --file /tmp/studentactivities.csv --type csv
docker exec mongodbserver mongoimport -d activitysystemdb -c students --headerline --file /tmp/students.csv --type csv
docker exec mongodbserver mongoimport -d activitysystemdb -c alerts --headerline --file /tmp/alerts.csv --type csv
docker exec mongodbserver mongoimport -d activitysystemdb -c alerttypes --headerline --file /tmp/alerttypes.csv --type csv

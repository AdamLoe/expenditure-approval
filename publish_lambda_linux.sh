rm server.zip
cd server
npm install
zip -r ../server.zip *
cd ..
aws lambda update-function-code --function-name standard-api --zip-file fileb://server.zip
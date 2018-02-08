cd lambda
npm install
Compress-Archive -Force -Path * -DestinationPath ../lambda.zip
cd ..
aws lambda update-function-code --function-name tutorial --zip-file fileb://lambda.zip
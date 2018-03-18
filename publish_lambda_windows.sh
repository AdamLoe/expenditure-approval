rm server.zip
cd server
npm install
"D:\programs\7zip\7-Zip\7z.exe" a -r ..\server.zip D:\Github\standard-requests\server.zip
cd ..
aws lambda update-function-code --function-name standard-api --zip-file D:\Gi
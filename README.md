# aws-lambda-sysinfo #
A simple Lambda function that dumps the runtime environment of your AWS Lambda container.


## Installation ##
1. `git clone https://github.com/SourceBoy/aws-lambda-sysinfo.git`
2. `cd aws-lambda-sysinfo && npm install`
3. Zip the **contents of** aws-lambda-sysinfo
4. Upload the zip file as a Lambda function
5. Set the runtime to Node version 8.x
6. Set the timeout to greater than 5 seconds
7. Create an AWS API Gateway with Lambda Function as the integration type

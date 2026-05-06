# Serverless AWS Use Case

This project demonstrates a complete serverless architecture on AWS using core services such as API Gateway, Lambda, and S3, implemented with the HDC V2 framework.

## Overview

The application is designed to store and retrieve simple account data through a RESTful API. It showcases how AWS services can be integrated to build a scalable, event-driven backend without managing servers.

## Architecture Components

### 1. S3 Bucket Setup
- An Amazon S3 bucket is created using AWS CDK v2.
- A JSON file containing a single record (e.g., name and account balance) is uploaded to the bucket.
- This bucket serves as the data storage layer.

### 2. IAM Role Configuration
- An IAM role is provisioned to grant the Lambda function secure access to the S3 bucket.
- Permissions are scoped to allow read access for retrieving the stored JSON data.

### 3. Lambda Function Development
- An AWS Lambda function is implemented using Python.
- The function reads and processes the JSON file stored in S3.
- It acts as the compute layer, handling business logic and data retrieval.

### 4. API Gateway Integration
- Amazon API Gateway is configured to expose a RESTful endpoint.
- The endpoint is connected to the Lambda function, enabling external access to the application.

## Application Flow

1. The end user sends a request to the API Gateway REST endpoint.
2. API Gateway triggers the Lambda function.
3. The Lambda function executes Python code to fetch data from the S3 bucket.
4. The retrieved data is returned as a response to the user.

## Key Benefits

- **Serverless Architecture**: No infrastructure management required.
- **Scalability**: Automatically scales based on demand.
- **Cost Efficiency**: Pay only for what you use.
- **Security**: Controlled access via IAM roles and policies.

## Technologies Used

- AWS CDK v2
- Amazon S3
- AWS Lambda (Python)
- Amazon API Gateway
- AWS IAM

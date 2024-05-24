
# AWS CDK Project

This project uses the AWS Cloud Development Kit (CDK) with TypeScript for provisioning AWS resources and configuring events.

It sets up:

- S3 bucket
- SQS queue
- Lambda function. 

The S3 bucket is configured to send notifications to the SQS queue upon the creation of new objects.

**GitHub Workflow:**
This project includes a GitHub workflow to automate tasks such as building, testing, and deploying the CDK stack.

## Features

- Provisions a S3 bucket.
- Provisions a SQS queue.
- Provisions a Lambda
- Configures event notifications from S3 to SQS.
- Creates a Github workflow for CICD.

## Prerequisites

- AWS account.
- AWS CDK installed.
- Node.js installed
## Setup

1. Clone the repository:
```
git clone https://github.com/afifpatel/aws-cdk-project.git
cd aws-cdk-project
```

2. Install dependancies:

```
npm install
```

3. Deploy the stack:

```
cdk deploy
```

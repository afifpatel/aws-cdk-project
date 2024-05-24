
# AWS CDK Project

This barnch showcases how to use the AWS Cloud Development Kit (CDK) with TypeScript to create an AWS Codepipeline.

A SNS is configured to send notifications to users subscribed.

**GitHub Workflow:**
This branch **DOES NOT USE** the GitHub workflow.


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

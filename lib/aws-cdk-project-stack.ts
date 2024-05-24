import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket, EventType } from 'aws-cdk-lib/aws-s3';
import { SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { IQueue, Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export class AwsCdkProjectStack extends cdk.Stack {
  static AwsCdkStack: any;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  
    // L1 and L2 Construct of an S3 Bucket
    const level1S3Bucket = new CfnBucket(this, 'Level1ConstructBucket', {
      versioningConfiguration: {
        status: "Enabled"
      }
    });

    const level2S3Bucket = new Bucket(this, 'Level2ConstructBucket', {
      bucketName: "l2-bucket-aletha",
      versioned: true
    });

    const queue: IQueue = new Queue(this, 'MyQueue', {
      queueName: 'l2-bucket-update-message-queue'
    });

    // Add event notification for S3 bucket to send messages to SQS queue when a new object is created
    level2S3Bucket.addEventNotification(EventType.OBJECT_CREATED, new SqsDestination(queue));

    // Lambda function to be invoked by S3 bucket event notification
    const lambdaFunction = new cdk.aws_lambda.Function(this, 'LambdaFunction', {
      functionName: 'l2-bucket-update-function',
      runtime: cdk.aws_lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: new cdk.aws_lambda.AssetCode('src'),
      memorySize: 128,
      timeout: cdk.Duration.seconds(25)
    });

  }
}
import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket, EventType } from 'aws-cdk-lib/aws-s3';
import { SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { IQueue, Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

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

    // AWS CICD Pipeline

    const bucketName = new cdk.CfnParameter(this, 'BucketName', {
      type: 'String',
      default: '',
      description: 'S3 bucket name where Codepipeline will store lambda code'
    });

    const bucketKey = new cdk.CfnParameter(this, 'BucketKey', {
      type: 'String',
      default: '',
      description: 'S3 bucket key which Codepipeline will use to store lambda code'
    });

    const bucket = Bucket.fromBucketName(this, 'pipeline-bucket', bucketName.valueAsString);

    // Lambda function
    new lambda.Function(this, 'LambdaFunction', {
      functionName: 'l2-bucket-update-function',
      code: lambda.Code.fromBucket(bucket, bucketKey.valueAsString),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_16_X,
      memorySize: 128,
    });

  }
}
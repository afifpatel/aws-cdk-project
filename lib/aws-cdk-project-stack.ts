import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket, EventType } from 'aws-cdk-lib/aws-s3';
import { SqsDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class AwsCdkProjectStack extends cdk.Stack {
  static AwsCdkStack: any;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketName = new cdk.CfnParameter(this, 'bucketName', {
      type: 'String',
      default: '',
      description: 'S3 bucket name where Codepipeline will store lambda code',
    });

    const bucketKey = new cdk.CfnParameter(this, 'bucketKey', {
      type: 'String',
      default: '',
      description: 'S3 bucket key which Codepipeline will use store lambda code',
    });

    const bucket = Bucket.fromBucketName(this, 'pipeline-bucket', bucketName.valueAsString);

    // Lambda function to be invoked by S3 bucket event notification
    new lambda.Function(this, 'LambdaFunction', {
      functionName: 'aws-cdk-pipeline-lambda',
      code: lambda.Code.fromBucket(bucket, bucketKey.valueAsString),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_16_X,
      memorySize: 128,
    });

  }
}
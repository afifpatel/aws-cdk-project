import { AwsCdkCodepipelineStack } from './aws-cdk-project-codepipeline-stack';
import { AwsCdkProjectStack } from './aws-cdk-project-stack';
import { IAwsCdkCodepipelineStackProps } from '../bin/stack-config-types';
import environmentConfig from '../bin/stack-config';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';


export class CdkParentStack extends Stack {
  constructor(scope: Construct, id: string, props?: IAwsCdkCodepipelineStackProps) {
    super(scope, id, props);
    new AwsCdkProjectStack(this, 'AwsCdkProjectStack');
    new AwsCdkCodepipelineStack(this, 'AwsCdkCodepipelineStack', environmentConfig);
  }
}
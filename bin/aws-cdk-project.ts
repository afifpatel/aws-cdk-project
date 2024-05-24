#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkParentStack } from '../lib/aws-cdk-parent-stack';
import { AwsCdkCodepipelineStack } from '../lib/aws-cdk-project-codepipeline-stack';
import environmentConfig from './stack-config';

const app = new cdk.App();
// new CdkParentStack(app, 'CdkParentStack');
new AwsCdkCodepipelineStack(app, 'AwsCdkCodepipelineStack', environmentConfig);
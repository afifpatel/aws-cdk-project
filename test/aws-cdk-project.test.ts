import * as cdk from 'aws-cdk-lib';
import * as AwsCdkProjectStack from '../lib/aws-cdk-project-stack';
import { Template } from 'aws-cdk-lib/assertions';

test('Stack Created', () => {
    const app = new cdk.App();
    const stack = new AwsCdkProjectStack.AwsCdkProjectStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::S3::Bucket', {
        BucketName: 'l2-bucket-aletha',
    })

});

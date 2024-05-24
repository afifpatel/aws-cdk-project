import * as cdk from 'aws-cdk-lib';
import * as AwsCdkProjectStack from '../lib/aws-cdk-project-stack';
import { Template } from 'aws-cdk-lib/assertions';

test('Stack Created', () => {
    const app = new cdk.App();
    const stack = new AwsCdkProjectStack.AwsCdkProjectStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
        FunctionName: 'l2-bucket-update-function',
        Handler: 'index.handler',
        Runtime: 'nodejs16.x',
        memorySize: 128,
    })

});

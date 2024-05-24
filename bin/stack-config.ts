import { IAwsCdkCodepipelineStackProps } from "./stack-config-types";

const environmentConfig: IAwsCdkCodepipelineStackProps = {
    tags: {
        project: 'aws-cdk-codepipeline',
        environment: 'dev'
    },
    role: {
        name: 'codepipeline-role',
        description: 'IAM Role for Codepipeline',
        managedPolicy: 'AdministratorAccess'
    },
    keyDescription: 'KMS key used by Codepipeline',
    github: {
        tokenSecretName: 'aws-cdk-project-github-token',
        owner: 'afifpatel',
        repo: 'aws-cdk-project',
        branch: 'aws-cdk-cicd-pipeline'
    },
    codebuild: {
        templateProject: 'BuildTemplate',
        lambdaProject: 'BuildLambda',
        targetStack: 'AwsCdkCodepipelineStack',
        targetLambda: 'index.js'
    },
    pipelineName: 'LambdaDeploymentPipeline',
    bucketName: 'aletha-aws-codepipeline-bucket',
    topic: {
        name: 'codepipeline-topic',
        subEmails: ['afifpatel.iap@gmail.com']
    }
};

export default environmentConfig;
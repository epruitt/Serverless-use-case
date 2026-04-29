import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //S3 bucket
    const balanceStatusBucket = new s3.Bucket(this, "s3BucketLogicalId", {
      bucketName: "balancestatus-0127",
    });

    // IAM Role
    const iamBalanceStatusRole = new iam.Role(this, "iamBalanceRole", {
      roleName: "bankingLambdaRole",
      description: "role for lambda to access S3 bucket",
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });
    iamBalanceStatusRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonS3FullAccess"),
    );

    //Lambda Function
    const bankingLambdaFunction = new lambda.Function(this, "lambdaLogicalId", {
      handler: "lambda_function.lambda_handler",
      runtime: lambda.Runtime.PYTHON_3_10,
      code: lambda.Code.fromAsset("../services/"),
      role: iamBalanceStatusRole,
    });
  }
}

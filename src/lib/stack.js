const cdk = require("aws-cdk-lib");
const ec2 = require("aws-cdk-lib/aws-ec2");
const apigw = require("@aws-cdk/aws-apigatewayv2-alpha");

class InfraStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "VPC");

    new apigw.VpcLink(this, "link", {
      vpc,
    });
  }
}

module.exports = {
  InfraStack,
};

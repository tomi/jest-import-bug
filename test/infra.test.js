const { SynthUtils } = require("@aws-cdk/assert");
const cdk = require("aws-cdk-lib");
const Infra = require("../src/lib/stack");

test("Creating a stack", async () => {
  const app = new cdk.App();
  const stack = new Infra.InfraStack(app, "MyTestStack", {});

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});

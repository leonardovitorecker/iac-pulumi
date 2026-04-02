import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
export const bucket = new aws.s3.Bucket("widget-server-stg", {
  bucket: "widget-server-stg",
  tags: {
    IAC: "true",
  },
});

const ecr = new aws.ecr.Repository("segundo-teste-post-rocketseat", {
  name: "segundo-teste-pos-rocketseat",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  },
});

export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
export const firstBucket = new aws.s3.Bucket("first-bucket-widget-server-stg", {
  bucket: "first-bucket-widget-server-stg",
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

export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;

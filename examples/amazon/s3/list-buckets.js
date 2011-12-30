var inspect = require('eyes').inspector();
var amazon = require('amazon/amazon');
var s3Service = require('amazon/s3');

var env = process.env;
var accessKeyId = process.env.ACCESS_KEY_ID;
var secretAccessKey = process.env.SECRET_ACCESS_KEY;
var awsAccountId = process.env.AWS_ACCOUNT_ID;

var s3 = new s3Service.S3(accessKeyId, secretAccessKey, awsAccountId, amazon.US_EAST_1);

console.log( 'Region :', s3.region() );
console.log( 'EndPoint :',  s3.host() );
console.log( 'AccessKeyId :', s3.accessKeyId() );
// console.log( 'SecretAccessKey :', s3.secretAccessKey() );
console.log( 'AwsAccountId :', s3.awsAccountId() );

s3.ListBuckets(function(err, data) {
    console.log("\nlisting all the buckets (no options given) - expecting success");
    inspect(err, 'Error');
    inspect(data, 'Data');
});

s3.ListBuckets(undefined, function(err, data) {
    console.log("\nlisting all the buckets (undefined options) - expecting success");
    inspect(err, 'Error');
    inspect(data, 'Data');
});

s3.ListBuckets({}, function(err, data) {
    console.log("\nlisting all the buckets (empty options) - expecting success");
    inspect(err, 'Error');
    inspect(data, 'Data');
});

s3.ListBuckets({ Ignored : 'this is' }, function(err, data) {
    console.log("\nlisting all the buckets (nothing interesting in options) - expecting success");
    inspect(err, 'Error');
    inspect(data, 'Data');
});

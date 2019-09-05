# Enable printing executed commands
set x

# Get AWS PROFILE, S3 Bucket and CloudFront Id from environment variables or write it down statically
aws_profile=$AWS_PROFILE
s3_bucket=$S3_BUCKET_NAME
cf_id=$CLOUDFRONT_ID

echo Profile: $aws_profile
echo S3_Bucket: $s3_bucket
echo CloudFront Distribution: $cf_id

if [ -z "$aws_profile" ]; then
  echo AWS_PROFILE not found
  exit
fi
if [ -z "$s3_bucket" ]; then
  echo S3_BUCKET not found
  exit
fi

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

#set env variable for aws cli
export AWS_PROFILE=$aws_profile

echo "${green}Synching Build Folder: $s3_bucket...${reset}"
aws s3 sync build/ s3://$s3_bucket --delete --cache-control max-age=31536000,public

echo "${green}Adjusting cache...${reset}"
aws s3 cp s3://$s3_bucket/sw.js s3://$s3_bucket/sw.js --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type application/javascript --acl public-read
aws s3 cp s3://$s3_bucket/index.html s3://$s3_bucket/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read

if [ ! -z "$cf_id" ]; then
    echo "${green}Invalidating cloudfront cache${reset}"
    aws cloudfront create-invalidation --distribution-id $cf_id --paths "/*"
fi
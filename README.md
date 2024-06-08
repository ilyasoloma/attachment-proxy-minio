# attachment-proxy-minio

This server allows viewing of attachments in online Zotero libraries. There are two types of attachments supported:

* **Single files (e.g., PDFs):** Streamed directly from S3.
* **Zipped webpage snapshots:** Downloaded from S3 and mounted while user is loading the webpage snapshot. After a while the ZIP file is unmounted and deleted.

> This fork was adapted to interact with Minio local storage as part of the Zotero local server deployment project (https://github.com/ilyasoloma/zotero-selfhost)

## Install
### Download

```
git clone https://github.com/zotero/attachment-proxy
cd attachment-proxy

```

### Configure

```
cp config/sample-config.js config/default.js
nano ./config/default.js
```
Configure HMAC `secret` key and S3 `Bucket` (and `accessKeyId` and `secretAccessKey` if not using an IAM role)



## Run Docker image

```
sudo docker build -t attachment-proxy .
sudo docker run -d -p 8084:8084 --restart always attachment-proxy
```

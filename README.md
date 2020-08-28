# :zap: File Metadata Microservice for freeCodeCamp

* Creates a url short ID and stores it in a database with the original url
* Adding the shortID in a url address will redirect to the original website
* This was part of the FreeCodeCamp exercises for Front End Certification

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: File Metadata Microservice for freeCodeCamp](#zap-file-metadata-microservice-for-freecodecamp)
	* [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
	* [:books: General info](#books-general-info)
	* [:camera: Screenshots](#camera-screenshots)
	* [:signal_strength: Technologies](#signal_strength-technologies)
	* [:floppy_disk: Setup](#floppy_disk-setup)
	* [:computer: Code Examples](#computer-code-examples)
	* [:cool: Features](#cool-features)
	* [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
	* [:clap: Inspiration](#clap-inspiration)
	* [:envelope: Contact](#envelope-contact)

## :books: General info

* Original instructions (User Stories) from FCC:

1. I can submit a form that includes a file upload.
2. The from file input field  has the "name" attribute set to "upfile". We rely on this in testing.
3. When I submit something, I will receive the file name and size in bytes within the JSON response
4. To handle the file uploading you should use the [multer](https://www.npmjs.com/package/multer) npm package.

* MongoDB Cloud Atlas database set up to use Google Cloud Storage.

## :camera: Screenshots

![Example screenshot](./img/file.png).
![Example screenshot](./img/mongodb.png).

## :signal_strength: Technologies

* [Node v12](https://nodejs.org/en/) javaScript runtime built on Chrome's V8 JavaScript engine
* [Express v5](https://expressjs.com/) Fast, unopinionated, minimalist web framework for Node.js
* [Cors v2](https://www.npmjs.com/package/cors) node.js package for providing Connect/Express middleware that can be used to enable CORS with various options.

## :floppy_disk: Setup

* Create MongoDB Atlas Cloud database (or local installed MongoDB database) and add user access/database credentials (USER_NAME, USER_PASSWORD, DB_CLUSTER, PORT, DB_NAME & SESSION_SECRET) to a new `.env` file. These are used in `server.js`.
* Add your IP address to MongoDB Atlas Network Access whitelist. Or simply whitelist all (IP address 0.0.0.0/0).
* Run `node server.js` for a dev server. Navigate to `http://localhost:4000/`.
* The app will not automatically reload if you change any of the source files.

## :computer: Code Examples

* extract from `server.js` to check url is valid then generate short url using npm shortid module then save both in database

```javascript
//use dns lookup function to check url is valid
dns.lookup(parsedURL.host, (err, address) => {
	if (address === undefined) {
		res.json({
			error:
			'This url failed the formatting test - check and try again. ' +
			err,
		});
	} else {
		const data = new shortURL({
			originalURL: prependHttp(originalURL),
			shortenedURL: shortid.generate(),
		});
		console.log(data);

		data.save((err) => {
			if (err) {
				console.log(err);
				return res.send('error: unable to save to database');
			}
				console.log('all OK');
		});
		res.send(data);
	}
});
```

## :cool: Features

* Common MongoDB Atlas Cloud connection method used to save a lot of time with multiple projects.

## :clipboard: Status & To-Do List

* Status: Working. Nothing to stop the same url being saved in the database multiple times with dofferent shortIDs.
* To-Do: add a check to prevent duplicate websites having different shortIDs in the database. Replace var with const & let

## :clap: Inspiration

* [freeCodeCamp's APIs and Microservices Projects - URL Shortener Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Syntrest

#### A social app for sharing synthesizer patches, setups and ideas.

[Check the current build here](https://syntrest.herokuapp.com/) 

Currently in a pre-pre-pre-alpha state.

You can create an account, log in, and out and in again.

Heck, you could even reset your password if you like. 

Go nuts.

------------------------------------------------------------------------

Tech stack used is MERN, with Mongo running on mLab.

A few guest appearances from:

* React Router,
* JWTs,
* oAuth,
* Passport,
* Redux,
* Axios

------------------------------------------------------------------------

##Current features planned are as follows:

#### V1

* Create User Accounts
* CRUD images, from links and local uploads.
* Simple autocomplete search
* Create collections
* Likes // Comments 

#### V2

* Combine web scraping & apis to show consolidate secondhand gear listings
* Implement patch sharing, organized by synth type
* Facilitate a sharing library for soft synth patches, Max/MSP, SuperCollider, ChucK etc

  
#### V3

* Integrate with other "Remote play synth" sites
* More to come...

------------------------------------------------------------------------

As of **07/17/19** There are several issues that need to be addressed:

* JWTs don't persist when generated with oAuth.
* Styling. Clearly.
* API needs to be better organized and more in line with REST conventions.
* Images from content provider timeout
* Additional parameters needed for password reset (Can't be same one/ must still be certain length etc.)
  




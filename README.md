# epicoverflow [![Build Status](https://travis-ci.org/emascarinas/epicoverflow.svg?branch=master)](https://travis-ci.org/emascarinas/epicoverflow) [![Coverage Status](https://coveralls.io/repos/emascarinas/epicoverflow/badge.svg)](https://coveralls.io/r/emascarinas/epicoverflow)

Live Site

Authentication needed.
http://emascarinas.github.io/epicoverflow/

Can pass random user_id as below
http://emascarinas.github.io/epicoverflow/#/?id=21539

### About the site
A front end web site using Stack Exchange API to provide a more epic stackoverflow.com user experience.

When the application starts, a user will authenticate, and view own profile and stats. Able to view and search questions.

#### Home page have the following:
* Profile Information
* Badges
* Timeline of activity including Reputation, Badges, and Responses.
* A list of favorites.
* A tag cloud that will bring them directly to a search of open questions on that subject.

#### Search page have the following:
* List of questions with multiple sorting options.
* Title of question
* # of votes, answers, views for questions.
* When question was asked
* Tags associated with question.
* Tag cloud of questions in search results.

####Question page have the following:
* Title
* Body
* Comments with # of votes, duration for the Question
* Answers
* Comments with # of votes, duration for the Answer
* User can flag/unflag question as favorite.

### Technologies used:
* AngularJS
* Twitter Bootstrap
* Sass

### Added features:
* Fully responsive layout
* Can view any profile by providing id
* Loading indicator
* Global error handler
* Paginator
* Added open questions link for questions with no tag
* unit test using karma test runner and jasmine with istanbul as code coverage
* end to end test using protractor and jasmine
* travis ci and coverall - only had intial test running, will add more soon. Click on badges above to see details.
* grunt build system, npm/bower 


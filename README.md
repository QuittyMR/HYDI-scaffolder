# HYDI project scaffolder

By [Quitty](mailto:quittyband@gmail.com)

## What's HYDI?
HYDI (**H**ow'd **Y**ou **D**o **I**t?) is a productivity tool
to help you get a web-service or application up and running very quickly,
by making some tried-and-true design and architecture choices for you.

### How quickly?
3 minutes and you'll be up and running on a standard broadband connection,
with a full-featured API, scalable production-ready front-end
and promise-based communications between the two.

The rule of thumb is that each major action in a HYDI project should
take no more than 5 minutes - assuming you have your application code ready -
whether it's adding an API route, a web page or a service.

### How?

HYDI takes a 'convention over configuration' approach,
while making some tweaks that improve scalability;
The goal here is to let you get down to business quicker, while
still allowing you to carry over to production
without having to patch through hasty design decisions.
HYDI's infrastructure is meant to be [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
and scalable.

## Quickstart

#### Requirements
* NodeJS
* NPM
* Python _(2.7 or 3.6)_
* Redis
* virtualenv

#### Deployment
* git clone
* ```$ ./build.sh``` or ```$ ./build3.sh```
* ```$ ./start.sh```

Browse to localhost:4242 to see the results,
and open the dev-console to see some sample communications with the backend.

#### Important!
Instructions on adding functionality to the project are in the code -
make sure you read through the descriptions in all base classes
(**BaseApi, BaseService and BaseModel**)


## What am i getting?
* A Python API server, fully compatible with either 2.7+ or 3.x
  * Readable, maintainable and scalable
  * CORS support
  * Redis-based caching with object serialization support

* An AngularJS 1.6 front-end (component pattern)
  * Small footprint (~550Kb)
  * Automatically minified, combined and injected with source maps
  * Promise-based async communication with API
  * Mini-server for UI with browser-sync

### Not digging my choices?
HYDI is a work-in-progress, and will eventually hold many combinations
of frameworks, libraries, maybe patterns. It will also, eventually, offer multiple languages to choose from.

It is unlikely, however, that a HYDI combo will be added for a 'heavy-duty' framework or
a specialized purpose. There's a fine line between letting you work and doing your work for you.


# CHAPTER 1 Intro to Web API
**Apllication Programming Interface**
set of protocols for building communicating and Integrating application softwares.
APIs are a way to interact with applications whose internal working s are not visible to external users.

APIs can be divided into 4 categories
- web API are used to communicate between server and a client over the internet
- Remote API defines the standards of interactions for applications running on different machines.
- Libraries and frameworks act as the interface to a software.
- Operating system can specidy APIs for applications to interact with the device

**WEB APIs**
used for communication between a server and a client over the internet.
Web APIs use http request methods to communicate with a server
http standards specify a set of request methods that indicate the action that is to be performed. These methods are:
- GET gets the specified method from an endpoint. This results in a response from the server without changes in the state of the server
- POST sends some data to an endpoint. results in an action that changes the state of the server.
- PUT replace some data on a server
- DELETE deletes specified resource from the server
- HEAD asks for a response like that of a GET but only the status line and header section.
- CONNECT establishes a tunnel to the server identified by the target
- OPTION used to describe the communication options for the target resource.
- TRACE perfoms a message loop-back test along the path to the target resource
- PATCH used to apply partial modifications to a resource.

COINDESK an API that provides latest bitcoin prices
curl -i -X GET "https://api.coindesk.com/v1/bpi/currentprice.json"
run the above link in the terminal to display the prices
- cURL is used to fetch a respomse from a url
-  the flag 'i' with curl includes protocol response header in the input
- the 'x' allows us to define the method used, in this case GET.
- the content follows a standard format called JSON that is used to store and transmit data to and from the endpoint.

**JAVASCRIPT OBJECT NOTATION**
is composed of a key and value pairs seperated by a colon in the format{"key":"value"}
JSONs standardized format and lightweight nature combined with its easy interoperability with most programming languages has made it the standard tool for transmitting data.

NOTE: JSON format uses double inverted commas, while a Python Dictionary can be either single or double inverted commas.

**Why APIs are Needed**
- Integrating multiple applications. when 2 applications need to communicate.
- Building cross-platform applications. eg an app that can be used in both android and iOS.
- enhancing functionality of applications. use functionalities of other applications within a different app
- provide external access to your application. 
- as an app backend. backend are usually build as an API that can be called by the front-end.

**API Design Patterns**
architectural patterns that organize the HTTP methods

- Restful APIs (Representational State Transfer) are the most dominant architectural pattern in use. It used HTTP to define 6 constraints guidlines that restrict the way a server can process and respond to a client's request. They are built to be used in 4 HTTP methods: GET, POST, PUT and DELETE and is the predominant style for building a website and Web APIs. Restful APIs are also stateless meaning it doesn't remember anything about your previous interaction. The  client has the responsibility to own and provide any historical data or context if needed. Rest APIs are inflexible when it comes to handling change in requirements from clients.

- GraphQL APIs. allows the requestor/client to define the structure of data that is required. Graph is designed to handle change in requirements by allowing users to customise their requests and picking the data they want in return.

- CRUD APIs (Create Read Update Delete)used to build APIs for database, it is mapped to the REST standard. these are actions that can be performed by a database, if you create a REST API that handles DB operations you're in effect creating a CRUD API. They are used interchangeably.

- SOAP APIs(Simple Object Access Protocol) is the earliest API specification. it is used to define messaging protocol specification for exchanging data between 2 systems.

# CHAPTER 2: PYTHON AND WORKING WITH APIs
**programmatically accessing an API**
go to api.ipynb 
using jupyter notebook to call the coindesk API
extracting a single price from the data

# CHAPTER 3: Building APIs with flask
 python -m venv env: creates a virtual environment named env
 . env/bin/actvate: activates the virtual environment
 this is in linux
 on app.py, when you run (flask run) command on the terminal
 A brief run-down is, we asked Flask to
1. Listen to the route ‘ /gree t ’ using @app.get("/greet") which represents the home for domain URL
this case ‘ https://127.0.0.1:5000/greet ’.
2. Define and tell the listener at ‘ /gree t ’ how to respond using def index()
3. Instructions for the program to follow if a request is received at " /gree t ", i.e. return “Hello,
World!”
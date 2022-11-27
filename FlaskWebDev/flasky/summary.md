flask run command is used to run the code.
app.run() method can also be used to run the file
if __name__ == '__main__':
    app.run()
it is not necessary in this case since we can use flask run

@app.route("/user/<name>")
def user(name):
    return '<h1> Hello, {}!</h1>'.format(name)
allows user to enter their name on the url then it will be displayed on the browser
eg. http://127.0.0.1:5000/user/James displays "Hello, James!"

once the server is up, it goes into a loop that accepts requests and services them.
the server runs till you press ctrl+c on the terminal to terminate it

**Debug mode**
flask can run in debug mode. 2 modules of development are enabled in this mode
- reloader: watches all the source code of your project and automatically restarts the server when any of the files are modified
- debugger: is a web-based tool that appears in your web browser when your application raises an unhandled exception. The web beowser window transforma in to an interactive stack trace that allows you to insoect source code and evaluate expressions in any place in the stack.

debug mode is disabled by default, to enable it set a FLASK_DEBUG=1 environment variable before invoking the flask run

**Command line options**
- flask --help: provides commands provided by the application of flask itself
- flask --version: shows the version of flask
- flask run: runs a development server
- flask shell: runs a shell in the app content. (used to start a python shell session in the context of the app)

- flask -h, --host: TEXT The interface to bind to.
- flask -p, --port: INTEGER The port to bind to.
- flask --reload / --no-reload: Enable or disable the reloader. By default the reloader is active if debug is enabled.
- flask --debugger / --no-debugger: Enable or disable the debugger. By default the debugger is active if debug is enabled.
- flask --eager-loading / --lazy-loader: Enable or disable eager loading. By default eager loading is enabled if the reloader is disabled.
- flask --with-threads / --without-threads: Enable or disable multithreading.
- flask--help: Show this message and exit.

The --host argument is particularly useful because it tells the web server what network
interface to listen to for connections from clients.

flask run --host 0.0.0.0 
the above command makes the web server listen for connections on the public network interface, enabling other computers in the same network to connect as well.
The web server should now be accessible from any computer in the network a.b.c.d.5000 where abcd is the ip address of the computer running the server in your network

The --reload, --no-reload, --debugger, and --no-debugger options can be used to turn reloader and debugger on and off

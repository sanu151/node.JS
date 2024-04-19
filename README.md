# Node.JS

*Node.js is a popular open-source, cross-platform JavaScript runtime environment that allows us to execute JavaScript code outside of a web browser.*

**What it is:**

- JavaScript Runtime Environment: Node.js provides an environment where we can write and run JavaScript code on the server-side. This enables JavaScript to be used for more than just client-side scripting in web browsers.
- Cross-Platform: Node.js runs on various operating systems like Windows, Linux, macOS, and more. This makes it a versatile tool for developers.
- Event-Driven and Non-Blocking: Node.js uses an event-driven, non-blocking architecture. This means it can handle multiple requests concurrently without waiting for one operation to finish before starting another. This is ideal for building real-time applications and APIs.

**What it's used for:**

- Web Servers: Node.js is widely used for building web servers and APIs due to its non-blocking nature and ability to handle many concurrent connections efficiently. Frameworks like Express.js simplify web development with Node.js.
- Command Line Tools: We can write command-line tools and scripts using Node.js. This allows developers to automate tasks, interact with the operating system, and build utility tools.
- Real-time Applications: The event-driven architecture makes Node.js suitable for building real-time applications like chat applications, online collaboration tools, and multiplayer games.
- Microservices: Node.js is a good choice for developing microservices, which are small, independent services that work together to build a larger application.

**Benefits of using Node.js:**

- Fast and Scalable: Node.js can handle a high volume of concurrent requests efficiently due to its non-blocking architecture.
- JavaScript Everywhere: If we're already familiar with JavaScript, we can leverage our existing skills for both front-end and back-end development using Node.js.
- Large Community and Ecosystem: Node.js has a vast and active community that contributes to a rich ecosystem of libraries, frameworks, and tools.

**Getting Started with Node.js:**

- Download and Install: Download and install Node.js from the official website: *https://nodejs.org/en*
- Write JavaScript Code: Use a text editor or IDE to write JavaScript code for our application.
- Run the Code: Use the node command followed by our JavaScript file name to execute it (e.g., node app.js).

**Node.JS Modules**
- Module is a set of functions. (like js libraries such as Math).
- 3 types of modules

  > 1. Local Modules (Own created modules)
  > 2. Built-in Modules (node.js own modules) - http, url, path, fs, [no need to install this modules]
  > 3. External Modules (managed by **npm**)


**Local Modules (Our Own Created Modules)**

In Node.js, local modules are code reusability units that **we** create for our own projects. They are JavaScript files containing functions, variables, or classes that **we can** import and use in other parts of our application.

*Creating Local Modules:*

1. **File Structure:** **We can** create a separate JavaScript file for our module.  **We can** name it descriptively to reflect its functionality (e.g., `mathFunctions.js`, `dataAccess.js`).

2. **Module Content:** Inside the file, **we define** the functions, variables, or classes that **we want** to expose as part of our module. 

*Example:*

```javascript
// mathFunctions.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Exporting functions (more on this in a bit)
module.exports = {
  add,
  subtract
};
```

In this example, **we define** two functions `add` and `subtract` in the `mathFunctions.js` file.

*Importing Local Modules:*

To use the functions from our local module in another JavaScript file, **we use** the `require` function:

```javascript
// app.js

const math = require('./mathFunctions.js'); // Assuming mathFunctions.js is in the same directory

const result1 = math.add(5, 3);
const result2 = math.subtract(10, 2);

console.log(result1); // Output: 8
console.log(result2); // Output: 8
```

Here, **we import** the `mathFunctions.js` module using `require` and assign it to the `math` variable. Then, **we can access** the exported functions (`add` and `subtract`) using dot notation.

*Exporting from Modules:*

By default, everything in a JavaScript file is considered private. To make functions, variables, or classes accessible from other files, **we need to export them explicitly**. There are two common ways to do this:

1. **Named Exports:** **We can export** specific functions or variables by assigning them to the `module.exports` object:

```javascript
// mathFunctions.js (example with named exports)

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

2. **Default Export:** **We can export** a single value (function, object, etc.) as the default export using the `export default` syntax:

```javascript
// mathFunctions.js (example with default export)

export default function add(a, b) {
  return a + b;
}
```

Then, when importing, **we can use** a different name for the imported value:

```javascript
// app.js (importing default export)

const myAddFunction = require('./mathFunctions.js');

const result = myAddFunction(4, 7);
console.log(result); // Output: 11
```

*Benefits of Local Modules:*

- **Code Reusability:** Local modules allow **us to** break down our code into smaller, reusable units, promoting better organization and reducing code duplication.
- **Improved Maintainability:** By separating functionalities into modules, our code becomes easier to understand, maintain, and modify.
- **Modular Design:** Local modules encourage a modular design approach, making our application more scalable and easier to test.

*When to Use Local Modules:*

- When **we have** a set of related functions or functionalities that can be reused in multiple parts of our application.
- When **we want** to improve code organization and maintainability.
- When **we want** to create a library of reusable components for our project.

By effectively using local modules, **we can** write cleaner, more maintainable, and scalable Node.js applications.


**Built-in Modules (Node.js's Own Modules)**

Built-in modules are a core feature of Node.js that provide essential functionalities for various tasks. These modules come pre-installed with Node.js and don't require additional installation. Here's a breakdown of some commonly used built-in modules:

*Common Built-in Modules:*

* **`fs` (file system):** This module provides functions for interacting with the file system, allowing **us to** read, write, create, delete, and manipulate files and directories.
* **`http` (Hypertext Transfer Protocol):** This module enables **us to** build web servers and make HTTP requests. It allows **us to** create servers that can handle incoming HTTP requests and send responses.
* **`https` (Secure Hypertext Transfer Protocol):** Similar to `http` but provides functionality for secure communication using HTTPS.
* **`path`:** This module offers utilities for manipulating file and directory paths. It helps **us** construct valid paths, extract components like filename and extension, and check if a path is absolute or relative.
* **`os`:** This module provides access to information about the operating system our Node.js application is running on. **We can** get details like hostname, architecture, uptime, and free memory.
* **`events`:** This module is crucial for implementing the event-driven architecture in Node.js. It allows **us to** create event emitters, listen for events, and trigger them, enabling communication between different parts of our application.
* **`timers`:** This module provides functions for scheduling asynchronous timers. **We can** use it to set up delays, timeouts, and periodic execution of tasks.
* **`readline`:** This module simplifies working with readable streams like standard input, allowing **us to** read user input line by line.
* **`stream`:** This module provides a foundation for working with streams of data, which is a common pattern in Node.js for handling large amounts of data efficiently.

*Benefits of Built-in Modules:*

* **Convenience:** Built-in modules are readily available and don't require additional installation steps, saving **us** development time.
* **Standardization:** These modules provide consistent APIs across different Node.js environments, ensuring code portability.
* **Reliability:** Being part of the core Node.js distribution, built-in modules are well-tested and reliable components.

*Finding Built-in Modules:*

The complete list of built-in modules is extensive. **We can** find the official documentation for each module on the Node.js website: [https://nodejs.org/en/docs](https://nodejs.org/en/docs)

*Example (using `http` module):*

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

In this example, **we use** the `http` module to create a simple web server that listens on port 3000 and responds with "Hello World!" when a request is received.

By understanding and using built-in modules effectively, **we can** streamline our Node.js development process and create robust applications without reinventing the wheel.

**fs Module Functions :**

*Asynchronous Functions (return control before operation completes):*

| Function | Description | Asynchronous | Synchronous | Notes |
|---|---|---|---|---|
| `writeFile(path, data, options, callback)` | Writes data to a file. | Yes | No | - `path`: File path to write to. - `data`: Data to write (string, buffer, object). - `options` (optional): Options for writing. - `callback` (optional): Function called after write operation (error object as first argument). |
| `appendFile(path, data, options, callback)` | Appends data to a file. | Yes | No | Similar to `writeFile` but adds data to the end of an existing file. |
| `readFile(path, options, callback)` | Reads the contents of a file. | Yes | No | - `callback`: Function called after read operation (error object, data as string or buffer). |
| `rename(oldPath, newPath, callback)` | Renames a file or directory. | Yes | No | - Renames the file at `oldPath` to `newPath`. |
| `unlink(path, callback)` | Deletes a file. | Yes | No | Deletes the file at the specified `path`. |
| `exists(path, callback)` | Checks if a file or directory exists. | Yes | No | - `callback` receives a boolean (true if exists, false otherwise). |
| `writeFileSync(path, data, options)` | Writes data to a file (synchronous). | No | Yes | Blocks the event loop until write completes. |
| `appendFileSync(path, data, options)` | Appends data to a file (synchronous). | No | Yes | Similar to `writeFileSync` but for appending data. |
| `readFileSync(path, options)` | Reads the contents of a file (synchronous). | No | Yes | Blocks the event loop until read completes, returns data (string or buffer). |
| `renameSync(oldPath, newPath)` | Renames a file or directory (synchronous). | No | Yes | Blocks the event loop until rename completes. |
| `unlinkSync(path)` | Deletes a file (synchronous). | No | Yes | Blocks the event loop until deletion completes. |
| `existsSync(path)` | Checks if a file or directory exists (synchronous). | No | Yes | Returns a boolean (true if exists, false otherwise). |

*General Recommendations:*

- Use asynchronous functions for most cases to avoid blocking the event loop.
- Use synchronous functions cautiously as they can impact performance.
- Handle errors using callbacks or returned error objects.
- Consider promises or async/await for cleaner asynchronous handling in modern Node.js development.

*Choosing Between Asynchronous and Synchronous Functions:*

- Asynchronous functions are generally preferred for most Node.js applications because they don't block the event loop, allowing your application to remain responsive while file operations are happening in the background.
- Synchronous functions can be simpler to use but can block the event loop, potentially impacting the performance of your application if used extensively. They are typically used in scenarios where you need to ensure the file operation completes before proceeding further in your code (e.g., reading a configuration file before starting the server).
  
*Additional Notes:*

- Always handle potential errors using the callback function for asynchronous operations or by checking the returned value (error object) for synchronous functions.
- Consider using promises or async/await for a cleaner way to handle asynchronous operations in modern Node.js development.

**os Module Functions**

| Function | Description |
|---|---|
| `os.arch()` | Gets the architecture of the operating system (e.g., 'x64', 'arm'). |
| `os.cpus()` | Gets an array of objects containing information about the CPU cores. |
| `os.endianness()` | Gets the endianness of the system ('BE' for big-endian, 'LE' for little-endian). |
| `os.freemem()` | Gets the amount of free memory available on the system. |
| `os.homedir()` | Gets the user's home directory. |
| `os.hostname()` | Gets the hostname of the machine. |
| `os.platform()` | Gets the operating system platform (e.g., 'linux', 'darwin', 'win32'). |
| `os.tmpdir()` | Gets the system's temporary directory path. |
| `os.type()` | Gets the operating system name (e.g., 'Linux', 'Darwin', 'Windows_NT'). |
| `os.uptime()` | Gets the system uptime in seconds. |

**path Module Functions**

| Function | Description |
|---|---|
| `path.join(...paths)` | Joins multiple path segments into a single path string. |
| `path.normalize(path)` | Normalizes a path by resolving symbolic links, extraneous separators, etc. |
| `path.parse(path)` | Parses a path string into an object with components like directory name, filename, extension, etc. |
| `path.basename(path)` | Gets the filename from a path string. |
| `path.dirname(path)` | Gets the directory name from a path string. |
| `path.extname(path)` | Get the file extension from a path string. |
| `path.isAbsolute(path)` | Check if a path is absolute. |
| `path.relative(from, to)` | Get the relative path from one path to another. |

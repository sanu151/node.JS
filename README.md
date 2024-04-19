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

**fs - File System methods :**

*Asynchronous Functions (return control before operation completes):*

- **writeFile(path, data, options, callback)**: Writes data asynchronously to a file at the specified path.

> _path_:   The file path where you want to write the data.

> _data_:   The data to be written to the file (can be a string, buffer, or an object).

> _options (optional)_:   An object containing options for the write operation.

> _callback (optional)_:   A function that gets called when the write operation is complete (or if there's an error). It receives an error object (if any) as the first argument.

> _appendFile(path, data, options, callback)_:   Appends data asynchronously to a file at the specified path. Similar to writeFile but adds data to the end of the file if it already exists.

- **readFile(path, options, callback)**: Reads the contents of a file asynchronously at the specified path.

> _callback_:   A function that gets called when the read operation is complete (or if there's an error). It receives an error object (if any) as the first argument and the data from the file (as a string or buffer) as the second argument.

- **rename(oldPath, newPath, callback)**: Renames a file or directory asynchronously.

- **unlink(path, callback)**: Deletes a file asynchronously at the specified path.

- **exists(path, callback)**: Checks if a file or directory exists asynchronously at the specified path. The callback receives a boolean value (true if the file exists, false otherwise).

*Synchronous Functions (return control after operation completes):*

- **writeFileSync(path, data, options)**: Writes data synchronously to a file at the specified path. This function blocks the event loop until the write operation is complete.

- **appendFileSync(path, data, options)**: Appends data synchronously to a file at the specified path. Similar to writeFileSync but for appending data.

- **readFileSync(path, options)**: Reads the contents of a file synchronously at the specified path. This function blocks the event loop until the read operation is complete and returns the data from the file (as a string or buffer).

- **renameSync(oldPath, newPath)**: Renames a file or directory synchronously.

- **unlinkSync(path)**: Deletes a file synchronously at the specified path.

- **existsSync(path)**: Checks if a file or directory exists synchronously at the specified path. This function returns a boolean value (true if the file exists, false otherwise).

*Choosing Between Asynchronous and Synchronous Functions:*

- Asynchronous functions are generally preferred for most Node.js applications because they don't block the event loop, allowing your application to remain responsive while file operations are happening in the background.
- Synchronous functions can be simpler to use but can block the event loop, potentially impacting the performance of your application if used extensively. They are typically used in scenarios where you need to ensure the file operation completes before proceeding further in your code (e.g., reading a configuration file before starting the server).
  
*Additional Notes:*

- Always handle potential errors using the callback function for asynchronous operations or by checking the returned value (error object) for synchronous functions.
- Consider using promises or async/await for a cleaner way to handle asynchronous operations in modern Node.js development.

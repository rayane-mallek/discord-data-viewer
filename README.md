# discord-data-viewer
A simple Node.js web application to visualize and explore your personal Discord data, starting with messages and attachments. Future updates will include more data types for a comprehensive view of your Discord archive.

## Requirements

- Node.js (v12.x or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:rayane-mallek/discord-data-viewer.git
   cd discord-data-viewer
   ```

2. Install the dependencies

   ```sh
   npm install
   ```

## Usage

1. Place your Discord messages data in the `messages` folder. Each conversation should be in its own folder named after the conversation, with a messages.json file containing the message data.
   ```sh
   discord-data-viewer/
    ├── messages/
    │   ├── conversation1/
    │   │   └── messages.json
    │   ├── conversation2/
    │   │   └── messages.json
    │   └── conversation3/
    │       └── messages.json
   ```

2. Start the server:

  ```sh
  node server.js
  ```

3. Open your web browser and go to http://localhost:3000 to view the application.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

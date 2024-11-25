# memem

## Requirements

- **Node.js**: `v20.12.2 (LTS)`
- **NPM**: `Included with Node.js`
- **Dependencies** (Linux):
  - `libx11-xcb1`, `libxtst6`, `libnss3`, `libatk-bridge2.0-0`, `libgtk-3-0`, `libxcomposite1`, `libxrandr2`, `libasound2`, `libcups2`, `libgbm1`, `libpangocairo-1.0-0`

> **Note:** this script has been tested and verified to work with the above requirements. Ensure all listed dependencies are installed before running.

## Installation

### Linux
1. Clone this repository:
   ```bash
   git clone https://github.com/Mantodkaz/memem.git
   cd memem
2. If you have not installed required dependencies, run:
   ```bash
   chmod +x install.sh && ./install.sh
3. Ensure your `data.txt` file is prepared:<br>
   Open your memem* bot <br>
   Press `F12` (or the relevant shortcut for Developer Tools on your system).<br>
   Go to `Console tab.`<br>
   If pasting in console is not allowed, run this command first:
    ```bash
   allow pasting
   ```
   Retrieve session storage value by running:
   ```bash
   console.log(sessionStorage.getItem('__telegram__initParams'));copy(sessionStorage.getItem('__telegram__initParams'));
    ```
   Paste copied value into a file named data.txt in memem directory.<br>
 4. Run script
    ```
    node index.js
    ```

# Notes
This script has been tested on Linux with the above dependencies installed.
If an error occurs while running the script, Use the install.sh script to simplify dependency management.<br>







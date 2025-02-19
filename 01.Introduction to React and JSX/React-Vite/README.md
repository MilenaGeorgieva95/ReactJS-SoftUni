## Debugger for VSCode
- Create Run and Debug launch.json file
- select Web App (Chrome);
- clear configurations premade object
- select Chrome launch configuration
- change name to Debug
- change localhost port to the app port (same as in vite.config.js);
- app server has to run while debugging (npm run dev);
- put breakpoint in jsx function

"configurations": [
    {
        "name": "Debug",
        "request": "launch",
        "type": "chrome",
        "url": "http://localhost:3000",
        "webRoot": "${workspaceFolder}"
    }
]

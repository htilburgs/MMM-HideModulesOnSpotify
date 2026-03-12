# MMM-HideModulesOnSpotify
This is a small [Magic Mirror²](https://github.com/MichMich/MagicMirror) module that can hide one ore more modules when MMM-OnSpotify starts.<br/>
The problem I had that my MagicMirror was full and the MMM-OnSpotify came over the other modules.<br/>
With this module, I have created a way to automatically hide a module when MMM-OnSpotify opens. <br/>
When MMM-OnSpotify closes again, the original module is reloaded in its place.<br/><br/>
This module loads automatically, but is not visible on the MagicMirror.<br/>
The only thing you can see is in the logs that the module has been loaded.


## Installation
Clone this repository in your modules folder, and install dependencies:
```
cd ~/MagicMirror/modules
git clone https://github.com/htilburgs/MMM-HideModulesOnSpotify.git
cd MMM-HideModulesOnSpotify
npm install
```

## Update
When you need to update this module:
```
cd ~/MagicMirror/modules/MMM-HideModulesOnSpotify
git pull
npm install
```


## Configuration
Go to the MagicMirror/config directory and edit the config.js file. <br/>
Add the module to your modules array in your config.js.
```
{
      module: "MMM-HideModulesOnSpotify",
      config: {
            modulesToHide: ["clock","calendar"]
      }
},
```
## Configuration Options

| Option                | Description
|:----------------------|:-------------
|modulesToHide      | Array of module(s) you like to hide. Fill in the exact module Name as in your config.js

## Versions
#### v1.0.0 (12-03-2026): Initial version

## License
### The MIT License (MIT)

Copyright © 2026 Harm Tilburgs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

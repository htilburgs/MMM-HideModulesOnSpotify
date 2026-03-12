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
cd MMM-HideModulesOnSpotify.git
npm install
```

## Update
When you need to update this module:
```
cd ~/MagicMirror/modules/MMM-HideModulesOnSpotify.git
git pull
npm install
```


## Configuration
Go to the MagicMirror/config directory and edit the config.js file. <br/>
Add the module to your modules array in your config.js.
```
{
      module: "MMM-HideModules",
      config: {
            modulesToHide: ["clock","calendar"]
      }
},
```
## Configuration Options

| Option                | Description
|:----------------------|:-------------
|modulesToHide      | Array of module(s) you like to hide. Fill in the exact module Name as in your config.js


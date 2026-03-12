Module.register("MMM-HideModulesOnSpotify", {

/*   This module is used in combination with MMM-OnSpotify
     If MMM-OnSpotify comes up, because Spotify is playing 
     then hide the module configured in the config file 
*/
  
  defaults: {
    modulesToHide: [],   // modules to hide when Spotify is playing
    animationSpeed: 500
  },

  start() {
    this.modulesHidden = false;
  },

  notificationReceived(notification, payload) {

    if (notification === "NOW_PLAYING") {

      if (!payload.playerIsEmpty) {
        // Spotify started playing
        this.hideModules();
      } else {
        // Spotify stopped
        this.showModules();
      }

    }

  },

  hideModules() {
    if (this.modulesHidden) return;

    MM.getModules().enumerate((module) => {
      if (this.config.modulesToHide.includes(module.name)) {
        module.hide(this.config.animationSpeed);
      }
    });

    this.modulesHidden = true;
  },

  showModules() {
    if (!this.modulesHidden) return;

    MM.getModules().enumerate((module) => {
      if (this.config.modulesToHide.includes(module.name)) {
        module.show(this.config.animationSpeed);
      }
    });

    this.modulesHidden = false;
  }

});

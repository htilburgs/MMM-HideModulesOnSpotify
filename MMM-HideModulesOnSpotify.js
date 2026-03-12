Module.register("MMM-HideModulesOnSpotify", {

  defaults: {
    modulesToHide: [],   // modules to hide when Spotify is playing
    animationSpeed: 500
  },

  start() {
    this.modulesHidden = false;
    console.log("[MMM-HideModulesOnSpotify] Module started");
  },

  notificationReceived(notification, payload) {

    console.log(`[MMM-HideModulesOnSpotify] Received notification: ${notification}`, payload);

    if (notification === "NOW_PLAYING") {

      if (!payload.playerIsEmpty) {
        // Spotify started playing
        console.log("[MMM-HideModulesOnSpotify] Spotify is playing, hiding modules");
        this.hideModules();
      } else {
        // Spotify stopped
        console.log("[MMM-HideModulesOnSpotify] Spotify stopped, showing modules");
        this.showModules();
      }

    }

  },

  hideModules() {
    if (this.modulesHidden) {
      console.log("[MMM-HideModulesOnSpotify] Modules are already hidden");
      return;
    }

    MM.getModules().enumerate((module) => {
      if (this.config.modulesToHide.includes(module.name)) {
        console.log(`[MMM-HideModulesOnSpotify] Hiding module: ${module.name}`);
        module.hide(this.config.animationSpeed);
      }
    });

    this.modulesHidden = true;
  },

  showModules() {
    if (!this.modulesHidden) {
      console.log("[MMM-HideModulesOnSpotify] Modules are already visible");
      return;
    }

    MM.getModules().enumerate((module) => {
      if (this.config.modulesToHide.includes(module.name)) {
        console.log(`[MMM-HideModulesOnSpotify] Showing module: ${module.name}`);
        module.show(this.config.animationSpeed);
      }
    });

    this.modulesHidden = false;
  }

});

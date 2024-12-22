import { TrackerBase } from "./trackerBase";

export class ErrorTracker extends TrackerBase {

  public constructor() {
    super();
    this.init();
  }

  public init() {

    window.addEventListener('error', (e) => {
      const ua = this.ua;
      const url = this.url;
      console.log(e);
    });

  }

}
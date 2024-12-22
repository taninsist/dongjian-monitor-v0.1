export class TrackerBase {

  public readonly ua: string;
  public readonly url: string;
  constructor() {
    this.ua = navigator.userAgent;
    this.url = window.location.href;
  }
}
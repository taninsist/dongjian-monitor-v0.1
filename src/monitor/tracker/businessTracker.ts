import { TrackerBase } from "./trackerBase";
import { getCurrentTime, TimeFormat } from "../../utils/getCurrentTime"

export class BusinessTracker extends TrackerBase {

  protected readonly dongjianMonitorPV = "dongjianMonitorPV";

  protected isUV = false;

  public constructor() {
    super();
    this.init()
  }

  public init() {

    const prevTime = window.localStorage.getItem("dongjianMonitorPV");
    const curDate = getCurrentTime(TimeFormat.YYYY_MM_DD);
    console.log(prevTime, curDate);

    if (!prevTime) {
      window.localStorage.setItem("dongjianMonitorPV", curDate);
      this.isUV = true;
    } else if (prevTime !== curDate) {
      this.isUV = true;
      window.localStorage.setItem("dongjianMonitorPV", curDate);
    }

  }

}
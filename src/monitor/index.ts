import { PerformanceTracker } from "./tracker/index"
import { ErrorTracker } from "./tracker/errorTracker";
import { BusinessTracker } from "./tracker/businessTracker";

import { isDev } from "../utils/share";




/*
  demo
  "title": "前端监控系统", // 页面标题
  "url": "http://localhost:8080/", // 页面URL
  "timestamp": "1590815288710", // 访问时间戳
  "userAgent": "Chrome", // 用户浏览器类型
  "kind": "stability", // 大类
  "type": "error", // 小类
  "errorType": "jsError", // 错误类型
  "message": "Uncaught TypeError: Cannot set property 'error' of undefined", // 类型详情
  "filename": "http://localhost:8080/", // 访问的文件名
  "position": "0:0", // 行列信息
  "stack": "btnClick (http://localhost:8080/:20:39)^HTMLInputElement.onclick (http://localhost:8080/:14:72)", // 堆栈信息
  "selector": "HTML BODY #container .content INPUT" // 选择器
*/

export interface IMonitorOptions {
  appId: string;
  SecretKey: string;
}


export class DongJianMonitor {
  private appId: string;
  private SecretKey: string;
  private static instance: DongJianMonitor;
  constructor(options: IMonitorOptions) {
    this.appId = options.appId;
    this.SecretKey = options.SecretKey;
  }

  protected stabilityTracker() {
    // 稳定性监控
    const error = new ErrorTracker();
  }

  protected performanceTracker() {
    // 性能监控
    const performan = new PerformanceTracker();
    console.log('performan', performan.getPerformance());
  }

  protected businessTracker() {
    // 商业监控
    const business = new BusinessTracker();
  }
  

  static init(options: IMonitorOptions) {

    if (this.instance) {
      return this.instance;
    }
    // 初始化
    this.instance = new DongJianMonitor(options);

    window.addEventListener(isDev ? "load" : "unload", () => {

      // 稳定性监控
      this.instance.stabilityTracker();

      // 性能监控
      this.instance.performanceTracker();

      // 商业监控
      this.instance.businessTracker();
    })

    return this.instance;
  }

}
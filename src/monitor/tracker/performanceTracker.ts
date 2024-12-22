import { TrackerBase } from "./trackerBase"

export class PerformanceTracker extends TrackerBase {

  private fp: number; // 私有属性
  private fcp: number; // 私有属性
  private fmp: number; // 私有属性
  private pdt: number; // 私有属性
  // private ttfb: number; // 私有属性
  // private lcp: number; // 私有属性
  private dcl: number; // 私有属性
  // private l: number; // 私有属性
  private ttl: number; // 私有属性
  // private fid: number; // 私有属性

  constructor() {
    super();
    const [fp, fcp] = window.performance.getEntriesByType('paint')
    this.fp = fp.startTime;
    this.fcp = fcp.startTime;

    // 刚开始页面内容为空，等页面渲染完成，再去做判断
    const {
      fetchStart,
      // connectStart,
      // connectEnd,
      // requestStart,
      // responseStart,
      // responseEnd,
      domLoading,
      domInteractive,
      domContentLoadedEventStart,
      domContentLoadedEventEnd,
      loadEventStart,
    } = window.performance.timing;

    // DOM 解析耗时
    const parseDOMTime = loadEventStart - domLoading;
    this.pdt = parseDOMTime;

    // DOMContentLoaded事件回调耗时
    const domContentLoadedTime = domContentLoadedEventEnd - domContentLoadedEventStart;
    this.dcl = domContentLoadedTime;

    // 首次内容绘制时间
    this.fmp = Math.min(parseDOMTime, domContentLoadedTime);

    // 首次可交互时间
    this.ttl = domInteractive - fetchStart;

  }

  public getPerformance() {
    return {
      fp: this.fp,
      fcp: this.fcp,
      fmp: this.fmp,
      pdt: this.pdt,
      // ttfb: this.ttfb,
      // lcp: this.lcp,
      dcl: this.dcl,
      // l: this.l,
      ttl: this.ttl,
      // fid: this.fid,
      ua: this.ua,
      url: this.url,
    }
  }
}
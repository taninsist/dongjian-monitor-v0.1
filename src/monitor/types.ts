// export 
/*
监控
 - 稳定性监控 stability
    - JS 错误
    - 资源加载错误
    - 接口请求错误
    - Promise 错误
 - 性能监控 performance
    - FP 首次绘制
    - FCP 首次内容绘制
    - FMP 首次有效绘制
    - LCP 最大内容绘制
    - DCL DOM 加载完成
    - L 所有资源文件加载完成
    - TTL 首次可交互时间
    - FID 首次输入延迟
  - 商业监控 business
    - PV 页面访问量
    - UV 独立访客
    - dwellTime 页面停留时间
 */

    export enum EKind {
      stability = 'stability',
      performance = 'performance',
      business = 'business',
   }
   
   /**
    * 稳定性监控类型
    */
   export enum EStabilityType {
      /**
       * js 错误
       */
      jsError = 'jsError',
      /**
       * 资源加载错误
       */
      resourceError = 'resourceError',
      /**
       * 接口请求错误
       */
      requestError = 'requestError',
      /**
       * promise 错误
       */
      promiseError = 'promiseError',
   }
   
   /**
    * 性能监控类型
    */
   export enum EPerformanceType {
      /**
       * 首次绘制
       */
      FP = 'FP',
      /**
       * 首次内容绘制
       */
      FCP = 'FCP',
      /**
       * 首次有效绘制
       */
      FMP = 'FMP',
      /**
       * 最大内容绘制
       */
      LCP = 'LCP',
      /**
       * DOM 加载完成
       */
      DCL = 'DCL',
      /**
       * 所有资源文件加载完成
       */
      L = 'L',
      /**
       * 首次可交互时间
       */
      TTL = 'TTL',
      /**
       * 首次输入延迟
       */
      FID = 'FID',
   }
   
   /**
    * 商业监控类型
    */
   export enum EBusinessType {
      /**
       * 页面访问量
       */
      PV = 'PV',
      /**
       * 独立访客
       */
      UV = 'UV',
      /**
       * 页面停留时间 dwellTime
       */
      DT = 'DT',
   }
   
   /**
    * 上报数据
    */
   export interface IReport {
      title: string;
      url: string;
      timestamp: number;
      userAgent: string;
      kind: string;
      type: string;
      errorType: string;
      message: string;
      filename: string;
      position: string;
      stack: string;
      selector: string;
    }
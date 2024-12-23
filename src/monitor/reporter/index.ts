const reportUrl = "http://localhost:3000/api/monitor";

interface IReporterOptions {
  appId: string;
  secretKey: string;
  // reportUrl: string;
}

export class Reporter {
  private appId: string;
  private secretKey: string;
  // private reportUrl: string;
  constructor(options: IReporterOptions) {
    this.appId = options.appId;
    this.secretKey = options.secretKey;
    // this.reportUrl = options.reportUrl;
  }

  public performanceReporter(info: any) {
    console.log(info);
    const url = `${reportUrl}/performance/report`;
    // 性能监控
    fetch(url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "app-id": this.appId,
        "Content-Type": "application/json",
      },
    });
  }
}

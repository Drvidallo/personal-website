export class HealthCheckService {
  public async healthcheck (): Promise<any> {
    return { success: true }
  }
}

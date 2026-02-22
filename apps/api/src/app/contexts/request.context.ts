export class RequestContext {
  private _test: any | null = null;

  get test(): any {
    if (!this._test) {
      throw new Error('test is not defined');
    }
    return this._test;
  }

  set test(v: any) {
    this._test = v;
  }
}

export enum ErrorLevel {
  Normal = 'NORMAL',
  Fatal = 'FATAL',
}

export class SchedulerError extends Error {
  readonly level: ErrorLevel;
  readonly extras?: any;

  constructor(message: string, level: ErrorLevel, extras?: any) {
    super(message);
    this.level = level;
    this.extras = extras;
  }
}

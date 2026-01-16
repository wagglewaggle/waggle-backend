import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { format, createLogger, transports } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { LOGGER_CONFIG_TOKEN } from './logger.constant';
import { LoggerConfig } from './logger.interface';

@Injectable()
export class LoggerService extends ConsoleLogger {
  private readonly rotateLoggerFormat;
  private readonly rotateOptions;

  private readonly rotateLogger: winston.Logger;
  private readonly rotateErrorLogger: winston.Logger;
  private readonly stdoutLogger: winston.Logger;

  private readonly printConsole: boolean = true;

  constructor(@Inject(LOGGER_CONFIG_TOKEN) private config: LoggerConfig) {
    super();

    this.printConsole = this.config.printConsole;

    const label = format.label({ label: this.config.labelName });
    this.rotateLoggerFormat = format.combine(label, format.timestamp(), format.json());

    const { rotateOption } = this.config;
    this.rotateOptions = {
      datePattern: rotateOption.datePattern,
      maxSize: rotateOption.maxSize || '100m',
      maxFiles: rotateOption.maxFiles || '5d',
      utc: rotateOption.utc,
      zippedArchive: rotateOption.zippedArchive,
    };

    this.rotateLogger = createLogger({
      level: 'info',
      format: this.rotateLoggerFormat,
      transports: [
        new DailyRotateFile({
          level: 'info',
          filename: `./logs/%DATE%/${this.config.labelName}.log`,
          ...this.rotateOptions,
        }),
      ],
    });
    this.rotateErrorLogger = createLogger({
      level: 'error',
      format: this.rotateLoggerFormat,
      transports: [
        new DailyRotateFile({
          level: 'error',
          filename: `./logs/%DATE%/${this.config.labelName}-error.log`,
          ...this.rotateOptions,
        }),
      ],
    });
    this.stdoutLogger = createLogger({
      format: format.simple(),
      transports: [
        new transports.Console({
          silent: !this.printConsole,
        }),
      ],
    });
  }

  private getFileLogger(isError: boolean): winston.Logger {
    return isError ? this.rotateErrorLogger : this.rotateLogger;
  }

  private getConsoleLogger(): winston.Logger {
    return this.stdoutLogger;
  }

  log(message: string, meta?: unknown): void {
    this.getFileLogger(false).info(message, meta);
    this.getConsoleLogger().info(message, meta);
  }
  warn(message: string, meta?: unknown): void {
    this.getFileLogger(false).warn(message, meta);
    this.getConsoleLogger().warn(message, meta);
  }
  debug(message: string, meta?: unknown): void {
    this.getFileLogger(false).debug(message, meta);
    this.getConsoleLogger().debug(message, meta);
  }
  verbose(message: string, meta?: unknown): void {
    this.getFileLogger(false).verbose(message, meta);
    this.getConsoleLogger().verbose(message, meta);
  }
  error(message: string, meta?: unknown): void {
    this.getFileLogger(true).error(message, meta);
    this.getConsoleLogger().error(message, meta);
  }
}

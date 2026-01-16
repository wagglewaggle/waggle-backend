export interface LoggerConfig {
  labelName: string;
  printConsole?: boolean;
  rotateOption: LoggerRotateOption;
}

export interface LoggerRotateOption {
  /**
   * default: 'YYYY-MM-DD'
   */
  datePattern?: string;

  /**
   * 회전할 파일의 최대 크기입니다.
   * 바이트 수 또는 kb, mb 및 GB 단위가 될 수 있습니다. 단위를 사용하는 경우 접미사로 'k', 'm' 또는 'g'를 추가합니다.
   * (default: 100m)
   */
  maxSize?: string;

  /**
   * 보관할 최대 로그 수입니다. 설정하지 않으면 로그가 제거되지 않습니다.
   * 이는 파일 수 또는 일 수일 수 있습니다. 일을 사용하는 경우 접미사로 'd'를 추가합니다.
   * (default: 5d)
   */
  maxFiles?: string;

  /**
   * 파일 이름의 날짜에 UTC 시간을 사용합니다. (default: false)
   */
  utc?: boolean;

  /**
   * 저장된 로그 파일을 gzip으로 압축할지 여부를 정합니다. (default: false)
   */
  zippedArchive?: boolean;
}

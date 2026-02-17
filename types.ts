export interface TimeState {
  hours: string;
  minutes: string;
  seconds: string;
  dayOfWeek: string;
  dateString: string;
}

export enum ClockMode {
  Standard = 'STANDARD',
  Dimmed = 'DIMMED'
}
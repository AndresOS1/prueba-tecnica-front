export interface HauseI {
  id: any;
  nameHause: string;
  description: string;
  serviceElectricPower: string;
  serviceWaterPower: string;
  serviceSewer: string;
  statusId: 0;
  status: {
    id: 0;
    statusName: string;
  };
  zoneId: 0;
  zone: {
    id: 0;
    nameZone: string;
  };
}

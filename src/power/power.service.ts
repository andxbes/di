import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.info(`Supplying ${watts} worth of power.`);
  }
}

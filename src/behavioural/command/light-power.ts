import { SmartHouseCommand } from "./smart-house-command";
import { SmartHouseLight } from "./smart-house-light";

export class LightPower implements SmartHouseCommand{
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on()
  }

  undo(): void {
    this.light.off()
  }
}

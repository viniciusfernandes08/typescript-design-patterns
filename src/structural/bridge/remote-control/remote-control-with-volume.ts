import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const prevVolume = this.device.getVolume();
    this.device.setVolume(prevVolume + 10);
  }

  volumeDown(): void {
    const prevVolume = this.device.getVolume();
    this.device.setVolume(prevVolume - 10);
  }
}

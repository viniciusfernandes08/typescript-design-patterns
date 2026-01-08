import { LightPower } from "./light-power";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

// receiver
const blueLight = new SmartHouseLight('Luz azul')
const greenLight = new SmartHouseLight('Luz verde')

// Command
const blueLightPower = new LightPower(blueLight)
const greenLightPower = new LightPower(greenLight)
const greenLightIntensity = new LightPower(greenLight)

// Invoker
const smartHouseApp = new SmartHouseApp()
smartHouseApp.addCommand('btn-1', blueLightPower)
smartHouseApp.addCommand('btn-2', greenLightPower)
smartHouseApp.addCommand('btn-3', greenLightIntensity)

smartHouseApp.executeCommand('btn-1')
smartHouseApp.undoCommand('btn-1')

smartHouseApp.executeCommand('btn-2')
smartHouseApp.undoCommand('btn-2')

for (let i = 0; i < 10; i++) {
  smartHouseApp.executeCommand('btn-3')
}

for (let i = 0; i < 10; i++) {
  smartHouseApp.undoCommand('btn-3')
}

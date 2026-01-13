import { ImageEditor } from "./image-editor";
import { ImageEditorBackupManager } from "./image-editor-manager";

const imageEditor = new ImageEditor('assets/image.png', 'png')
const backupManager = new ImageEditorBackupManager(imageEditor)

backupManager.backup()
imageEditor.convertFormatTo('jpeg')

backupManager.undo()
console.log(imageEditor)
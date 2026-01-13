import { ImageEditor } from "./image-editor";
import { Memento } from "./memento";

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup do estado de ImageEditor`)
    this.mementos.push(this.imageEditor.save())
  }

  undo(): void {
    const memento = this.mementos.pop()

    if (!memento) {
      console.log('sem mementos para backup')
      return;
    }

    this.imageEditor.restore(memento)
    console.log(`Restaurado backup de ${memento.getName()}`)
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento)
    }
  }
}
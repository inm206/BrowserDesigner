<template>
  <div class="justify-center flex">
    <canvas ref="canvas" width="600" height="600" class="border"></canvas>
  </div>
  <br><br>
  <div class="container mx-auto">
    <CanvasControls @add-square="addSquare" @add-circle="addCircle" @remove="removeObject" @send-to-back="sendToBack" @bring-to-front="bringToFront" @export="exportToPng" @undo="undo" @redo="redo" />
  </div>
</template>

<script>
import { fabric } from "fabric";
import 'fabric-history';
import CanvasControls from './CanvasControls.vue'
let canvas
export default {
  name: 'FabricCanvas',
  props: {
  
  },
  components: {
    CanvasControls
  },

  data () {
    return {
      intSquareCount: 0,
      intCircleCount: 0
    }
  },

  mounted() {
    const ref = this.$refs.canvas;
    canvas = new fabric.Canvas(ref);
    const rect = new fabric.Rect({
      fill: 'red',
      width: 20,
      height: 20
    });
    canvas.add(rect);
  },

  methods: {
    addSquare() {
      const square = new fabric.Rect({
        left: this.intSquareCount * 20,
        top: this.intSquareCount * 20,
        fill: 'red',
        width: 20,
        height: 20
      });
      canvas.add(square);
      this.intSquareCount++
      if (this.intSquareCount == 30) {
        this.intSquareCount = 0
      }
    },

    addCircle() {
      const circle = new fabric.Circle({
        left: this.intCircleCount * 45,
        top: this.intCircleCount * 45,
        fill: 'blue',
        radius: 30
      });
      canvas.add(circle);
      this.intCircleCount++
      if (this.intCircleCount == 13) {
        this.intCircleCount = 0
      }
    },

    removeObject() {
      let selected = canvas.getActiveObject()
      if (selected._objects) { 
        selected._objects.forEach(obj => canvas.remove(obj))
      } else {
        canvas.remove(selected)
      }
    },

    sendToBack() {
      let selected = canvas.getActiveObject()
      canvas.sendToBack(selected)
      canvas.discardActiveObject()
    },

    bringToFront() {
      let selected = canvas.getActiveObject()
      canvas.bringToFront(selected)
      canvas.discardActiveObject()
    },

    exportToPng() {
      let dataURL = canvas.toDataURL({format: 'png'})
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "canvas.png";
      link.click();
    },

    undo() {
      canvas.undo();
    },

    redo() {
      canvas.redo();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

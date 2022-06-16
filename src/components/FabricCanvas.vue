<template>
  <canvas ref="canvas" width="400" height="400" class="border"></canvas>
  <br><br>
  <div class="container mx-auto">
    <CanvasControls @add-square="addSquare" @add-circle="addCircle" @remove="removeObject" />
  </div>
</template>

<script>
import { fabric } from "fabric";
import CanvasControls from './CanvasControls.vue'
let canvas
export default {
  name: 'FabricCanvas',
  props: {
  
  },
  components: {
    CanvasControls
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
        fill: 'red',
        width: 20,
        height: 20
      });
      canvas.add(square);
    },

    addCircle() {
      const circle = new fabric.Circle({
        fill: 'blue',
        radius: 30
      });
      canvas.add(circle);
    },

    removeObject() {
      let selected = canvas.getActiveObject()
      if (selected._objects) { 
        selected._objects.forEach(obj => canvas.remove(obj))
      } else {
        canvas.remove(selected)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

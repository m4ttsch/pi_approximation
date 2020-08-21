<template>
  <div class="Dartboard m-auto">
    <div class="my-5" v-if="total">
      <span class="text-2xl">
        <katex-element :expression="`\\pi = ${pi}`" />
      </span>
      <div class="text-sm">
        <div><katex-element :expression="`D_{hit} = ${hits}`" /></div>
        <div><katex-element :expression="`D_{tot} = ${total}`" /></div>
      </div>
    </div>
    <div class="flex justify-between mb-1">
      <a
        href="#"
        class="link"
        :disabled="simulationInProgress"
        @click.prevent="startSimulation"
        >Start</a
      >
      <a
        href="#"
        class="link"
        :disabled="!simulationInProgress"
        @click.prevent="pauseSimulation"
        >Pause</a
      >
      <a
        href="#"
        class="link"
        :disabled="!total"
        @click.prevent="resetSimulation"
        >Reset</a
      >
    </div>
    <canvas
      height="340"
      width="340"
      ref="canvas"
      class="m-auto border relative"
    />
  </div>
</template>

<script>
export default {
  name: "Dartboard",
  data() {
    return {
      total: 0,
      hits: 0,
      requestId: 0
    };
  },

  computed: {
    pi() {
      return (4 * this.hits) / this.total || 0;
    },

    simulationInProgress() {
      return !!this.requestId;
    }
  },

  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
    this.ctx.fillStyle = "#63B3ED";
  },

  methods: {
    pauseSimulation() {
      cancelAnimationFrame(this.requestId);
      this.requestId = 0;
    },

    resetSimulation() {
      this.pauseSimulation();
      this.hits = 0;
      this.total = 0;
      this.ctx.clearRect(0, 0, 340, 340);
    },

    startSimulation() {
      if (!this.requestId) requestAnimationFrame(() => this._runSimulation());
    },

    _runSimulation() {
      let hits = 0;

      for (let i = 0; i < 1000; i++) {
        const [x, y] = [Math.random(), Math.random()];

        if (Math.sqrt((x - 0.5) ** 2 + (y - 0.5) ** 2) < 0.5) {
          hits++;
        }

        this.ctx.fillRect(x * 340 - 1, y * 340 - 1, 1, 1);
      }

      this.hits += hits;
      this.total += 1000;
      this.requestId = requestAnimationFrame(() => this._runSimulation());
    }
  }
};
</script>

<style lang="scss" scoped>
.Dartboard {
  width: 340px;
}

canvas {
  background: no-repeat center/100% url("../assets/dartboard.svg");
}

.link {
  @apply underline;
  @apply text-blue-800;

  &[disabled] {
    @apply opacity-25;
    @apply pointer-events-none;
  }
}
</style>

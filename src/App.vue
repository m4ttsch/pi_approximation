<template>
  <div id="app" class="bg-blue-100 h-full text-gray-800">
    <div
      class="font-body bg-gray-100 max-w-sm md:max-w-xl m-auto pt-4 md:pt-8 px-4 md:px-8"
    >
      <div class="mb-3">
        <h1 class="text-center text-2xl md:text-4xl font-display">
          Approximating Pi With Darts
        </h1>
        <p class="my-5">
          Consider a square backdrop in which we inscribe a circular dartboard.
          We begin to throw darts at the dartboard, but, since we have terrible
          aim, our darts are equally likely to hit any point on the backdrop,
          dartboard or not.
        </p>
        <p class="my-5">
          As a result of our perfectly random aim, the ratio of the number of
          darts that hit the dartboard, <katex-element expression="D_{hit}" />,
          to the total number of darts thrown,
          <katex-element expression="D_{tot}" />, is equal to the ratio of the
          of the areas of the dartboard and its inscribing backdrop.
        </p>
        <p class="my-5">
          If the radius of the dartboard equals
          <katex-element expression="r" />, then the area of the backdrop equals
          <katex-element expression="4r^2" /> and the area of the dartboard
          equals <katex-element expression="\pi r^2" />. We can now write the
          following equation:
        </p>
        <div class="text-center">
          <div
            v-katex="'\\dfrac{D_{hit}}{D_{tot}} = \\dfrac{\\pi r^2}{4r^2}'"
          />
        </div>
        <p class="my-5">
          We can rearrange to solve for <katex-element expression="\pi" />:
        </p>
        <div class="text-center">
          <div v-katex="'\\pi = \\dfrac{4 * D_{hit}}{D_{tot}}'" />
        </div>
        <p class="my-5">
          Can we approximate <katex-element expression="\pi" /> by throwing an
          infinite number of darts at this dartboard?
        </p>
      </div>
      <Dartboard />
      <p class="text-center pt-12 pb-3 text-gray-600 text-xs">
        Made with <span class="text-red-400">&hearts;</span> in NYC by
        <a
          href="https://www.linkedin.com/in/matt-schlenker-3457b047/"
          target="_blank"
          class="text-blue-800 underline"
        >
          Matt Schlenker</a
        >.
        <br />
        Make sure to check out
        <a
          href="//omscs-notes.com"
          target="_blank"
          class="text-blue-800 underline"
        >
          OMSCS Notes</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import Dartboard from "./components/Dartboard.vue";
import "katex/dist/katex.min.css";

export default {
  name: "App",
  components: { Dartboard }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lora&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>

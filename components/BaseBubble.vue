<script setup lang="ts">
const {
  width = 1062,
  height = 1088,
  gradientStartColor = '#117F76',
  gradientEndColor = '#117F76',
} = defineProps<{
  width?: string | number
  height?: string | number
  gradientStartColor?: string
  gradientEndColor?: string
}>()
</script>
<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 1062 1088"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      opacity="0.7"
      filter="url(#filter0_f_35_76)"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M536.885 861.896C498.97 854.095 461.406 846.351 426.14 830.393C391.766 814.838 363.758 789.672 332.059 769.211C295.92 745.884 248.601 735.678 224.359 700.147C200.341 664.944 200.837 618.347 200.058 575.739C199.302 534.388 205.953 493.275 219.864 454.327C233.422 416.367 251.763 379.208 280.387 350.829C308.133 323.321 348.204 314.008 381.694 293.885C414.814 273.984 442.903 247.019 478.432 231.829C517.664 215.056 558.621 199.789 601.288 200.002C645.876 200.225 693.131 207.604 729.723 233.083C766.263 258.525 782.188 303.796 805.145 341.947C826.604 377.609 857.473 410.732 861.543 452.154C865.62 493.652 839.659 531.53 827.697 571.475C817.4 605.861 811.783 641.315 795.34 673.222C778.993 704.944 750.387 727.752 731.543 758.056C707.047 797.45 707.743 858.079 666.814 879.912C627.904 900.669 580.08 870.783 536.885 861.896Z"
        fill="url(#paint0_linear_35_76)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_35_76"
        x="6.10352e-05"
        y="3.05176e-05"
        width="1061.97"
        height="1087.1"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood
          flood-opacity="0"
          result="BackgroundImageFix"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="100"
          result="effect1_foregroundBlur_35_76"
        />
      </filter>
      <linearGradient
        id="paint0_linear_35_76"
        x1="530.987"
        y1="887.104"
        x2="530.987"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        <stop :stop-color="gradientStartColor" />
        <stop
          offset="1"
          :stop-color="gradientEndColor"
        />
      </linearGradient>
    </defs>
  </svg>
</template>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 22 22"
    xml:space="preserve"
  >
    <rect y="0" class="no-fill" width="22" height="22" />
    <g>
      <path
        class="fill"
        d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8
		c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"
      />
    </g>
  </svg>
</template>

<style scoped>
svg {
  width: 22px;
  height: 22px;
  top: calc(50% - 11px);
  left: calc(50% - 11px);
  position: absolute;
  border-radius: 11px;
  border: 2px solid #25b99a;
  transition: background 0.2s ease;
}
*:hover > svg {
  background: rgba(37, 185, 154, 0.5);
}
*:hover > svg .fill {
  fill: #ffffff;
}
.fill {
  fill: #25b99a;
  transition: fill 0.2s ease;
}
.no-fill {
  fill: none;
}
</style>


/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { EuiIconProps } from '@elastic/eui';

export const DropIllustration = ({ title, titleId, ...props }: Omit<EuiIconProps, 'type'>) => (
  <svg
    width={176}
    height={176}
    viewBox="0 0 176 176"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M122.155 89.485H12.389v40.796h109.766V89.485z" fill="#58C5A7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.471 91.253c.358-.28.786-.454 1.236-.503A1.664 1.664 0 0122 92.647a1.842 1.842 0 01-1.801 1.375 1.65 1.65 0 01-1.513-1.69c.156-.426.428-.8.785-1.08zm-6.188 3.1c.137 0 .618-.07.646-.275.027-.207-.358-.482-.509-.496a.482.482 0 00-.495.317c-.041.22.206.412.357.454zm-.908 5.197v1.952c.097.108.22.188.357.234a1.156 1.156 0 001.376-1.086c.096-.536-.372-1.018-1.142-1.141-.197-.03-.4-.016-.591.041zm34.375 9.213a.797.797 0 00-.921.371c-.385.619-.33.921.275 1.54-.041.549-.041 1.101 0 1.65a.548.548 0 00.376.522.557.557 0 00.614-.192c.076-.103.16-.203.245-.304.314-.373.64-.759.607-1.332l-.591-.605c.041-.798-.192-1.527-.605-1.65zm-33.096 5.211a.727.727 0 00-.646-.88 2.289 2.289 0 00-.62 0v2.131h.152a.715.715 0 00-.165.275v.468a.44.44 0 00.316.343c.385.097.578-.44.591-.618.014-.179 0-.564-.357-.605h-.055c.395-.257.676-.656.784-1.114zm.261 1.952c-.165-.041-.165-.206-.165-.33a.348.348 0 01.22-.124c.082.042.289.193.192.262a.263.263 0 00-.074.097c-.035.063-.067.122-.173.095zm-1.54 2.613v.632a1.71 1.71 0 001.169.853 1.062 1.062 0 001.107-.45c.078-.118.132-.25.158-.389a1.376 1.376 0 00-1.059-1.568 1.536 1.536 0 00-1.375.922zm1.293 4.304a1.38 1.38 0 001.457-.894 1.513 1.513 0 00-1.182-1.595c-.427 0-.95.522-1.045 1.169a1.112 1.112 0 00.77 1.32zm11.809-1.457c.158.123.29.277.387.453.962.247 1.553.948 1.347 1.705a1.966 1.966 0 01-1.925 1.471 1.898 1.898 0 01-1.375-1.746 1.225 1.225 0 01-.234-.894c.11-.66.784-1.334 1.265-1.251.195.05.377.139.535.262zm4.91.989a1.376 1.376 0 00-1.265.701 1.16 1.16 0 00-.357.151c.038.136.066.274.082.413a2.842 2.842 0 00-.082.33 1.155 1.155 0 001.072 1.375 1.374 1.374 0 001.664-1.375 1.472 1.472 0 00-1.113-1.595zm-4.262 7.164a1.004 1.004 0 00.523.632c.343.124.838-.371.756-.756-.06-.28-.186-.378-.281-.453a.473.473 0 01-.09-.083c-.633-.028-1.032.371-.908.66zm4.386-1.059c.232.136.433.319.591.536.174-.022.349-.026.523-.014a1.01 1.01 0 01.839.935.806.806 0 01-.096.33h-4.126a1.378 1.378 0 01.124-.605c.454-1.045 1.375-1.54 2.145-1.182zm-5.514.536a.904.904 0 00.908-.838c0-.468-.289-.674-.729-.715a.83.83 0 00-.864.43.828.828 0 00-.098.326.75.75 0 00.216.572.753.753 0 00.568.225zm11.688.344c.041-.853.44-1.251 1.127-1.251.757.055 1.458.646 1.43 1.21 0 .288-.453.701-.92.948h-1.156a1.202 1.202 0 01-.481-.907zm14.286-7.205c.124-.22.097-.385-.137-.495-.234-.11-.372-.082-.495.138a.314.314 0 00.01.396c.03.037.07.065.114.085a.316.316 0 00.509-.124zM13.2 130.267h-.825v-6.985c.072-.015.154-.046.245-.08h.001v-.001c.394-.148.945-.355 1.514.37.333.425-.1.878-.317 1.105a1.2 1.2 0 00-.095.105.78.78 0 01.646-.151.74.74 0 01.674.866v.151a1.87 1.87 0 012.447 0 1.702 1.702 0 01-.11-.907.851.851 0 01.839-.784c.742-.055 1.595.701 1.375 1.155-.18.42-.488.771-.88 1.004h.192a.866.866 0 01.77.839 1.55 1.55 0 01-.33 1.003c.66-.151 1.471.702 1.279 1.637-.047.232-.14.452-.275.646h-3.3c-.137-.206-.275-1.664.151-1.898.326-.178.716.077.943.226.07.045.125.081.157.091.113.033.18-.043.283-.163.023-.026.047-.055.075-.085h-.138a2.187 2.187 0 01-.976-.852c-.27.371-.675.622-1.128.701a2.637 2.637 0 01-.632.261 1.628 1.628 0 01-.371-.399 1.841 1.841 0 01-.825-1.636c.02-.123.057-.244.11-.357a.765.765 0 01-.234.123c.12.29-.057.572-.2.8-.055.086-.104.164-.13.232-.045.116.03.18.153.285.14.12.34.291.493.65.289.673-.632 1.595-1.609 1.375h-.096c.098.21.14.442.124.673zm4.895-4.056h-.082a.58.58 0 01-.317-.192c.052.109.089.225.11.343.092-.058.189-.109.289-.151zm22.358-1.87c-.633-.068-1.018.317-1.114 1.073a.179.179 0 00-.083.069 1.374 1.374 0 00.316 1.375 1.23 1.23 0 001.306-.385.782.782 0 00.62-.605 1.843 1.843 0 00-1.045-1.527zm-19.345 1.893a.813.813 0 01-.208-.573.906.906 0 01.963-.77.827.827 0 01.715.977.736.736 0 01-.318.525.75.75 0 01-.604.107.813.813 0 01-.548-.266zm28.575-6.065a1.195 1.195 0 01-.073-.709 1.374 1.374 0 011.32-.426.962.962 0 01.426 1.169.885.885 0 01-.49.525.877.877 0 01-.72-.017 1.192 1.192 0 01-.463-.542zm-32.358-1.919a.55.55 0 00-.605.66c0 .275.151 1.004.536.976.385-.027.756-.646.798-.921.041-.275-.275-.715-.729-.715zm5.795 8.839c.213.248.34.557.365.882-.041.481-.564.812-1.306.812h-.33a1.09 1.09 0 01-.756-1.018c.04-.55.742-1.169 1.21-1.169.318.073.604.246.817.493zm-.937 1.694h-.004.041H22.183zm0 0c-.675.012-1.338.366-1.338.866-.007.206.04.409.138.591h2.392a.734.734 0 000-.165c0-.837-.315-1.222-1.192-1.292zm-2.15-12.114c0 .605.317 1.003.674.907a1.05 1.05 0 00.633-.522c.124-.344-.371-.839-.756-.757-.272.059-.373.179-.452.273a.502.502 0 01-.098.099zm5.34 9.231c.028.082.037.17.023.256-.027.454-.44.756-.715.715-.275-.041-.88-.412-.907-.797-.028-.385.701-.523.976-.523a.535.535 0 01.623.349zm2.127 4.312h.481a.62.62 0 00-.481 0zm-4.648-6.366c.138.083.33.33.234.536-.082.193-.398.22-.55.179-.151-.041-.454-.412-.371-.605.082-.192.55-.192.688-.11zm25.617 6.422l.192-.33a2.2 2.2 0 00.454-.097.856.856 0 00-.083.413h2.984a1.2 1.2 0 00-.445-1.285 1.207 1.207 0 00-.435-.2 1.943 1.943 0 00-1.059 0 .8.8 0 00-.563-.536c-.688-.22-.963-.083-1.375.646-.543.098-1.08.226-1.609.385a.582.582 0 00-.34.318.59.59 0 00-.004.466 2.012 2.012 0 00-1.1.275l3.383-.055zm7.38-16.424a.77.77 0 01-.01-.393c.811-.426 1.1-.426 1.292-.041a.783.783 0 01-.343.963.77.77 0 01-.94-.529zm-3.795 1.45a.885.885 0 01.334.206c.508.316.536.646.412.853-.124.206.316.261.481.123.165-.137.592-.316.99.262.399.577-.233 1.058-.66 1.292-.426.234-.728.33-1.072 0-.16-.154-.321-.182-.505-.215-.21-.037-.452-.079-.76-.321a1.376 1.376 0 01-.261-1.843.9.9 0 01.651-.401.875.875 0 01.39.044zm-17.074 1.155c0-.165-.22-.427-.357-.44-.138-.014-.537 0-.55.412-.013.378.31.398.49.41l.046.003c.165.013.385-.262.371-.385zm4.318 2.447c-.798-.275-1.032-.756-.798-1.375.248-.284.59-.47.962-.522a.756.756 0 01-.618-.605 1.032 1.032 0 01.88-.99.353.353 0 01.268.109.342.342 0 01.09.276c.002.092.012.196.022.302.031.34.065.71-.091.825a.766.766 0 01.316 0c.343.165.522.633.343 1.169-.288.811-.577 1.086-1.374.811zm15.014-7.755c0-.044.009-.093.018-.144.026-.155.055-.326-.141-.419a.303.303 0 00-.44.165c-.069.165-.179.577 0 .687.178.11.55-.192.563-.289zm-5.898 14.011c.07.029.132.077.178.138a1.1 1.1 0 01.798-.124c.536.138.962 1.238.536 1.513a.933.933 0 01-.715 0 .77.77 0 010 .275c-.178.509-.756.66-1.457.371a.955.955 0 01-.206-.11c.027.082-.042.536-.386.468-.343-.069-.343-.427-.343-.592a.315.315 0 01.22-.302.908.908 0 010-.88 1.116 1.116 0 011.375-.757zm-3.685 4.098c.082-.344-.426-.962-.853-1.059a.674.674 0 00-.524.136.668.668 0 00-.246.483c-.096.701 0 1.196.399 1.279a1.38 1.38 0 001.224-.839zm13.166-11.052a.757.757 0 01-.31-.031.849.849 0 01-.481-1.127.685.685 0 01.595-.549.688.688 0 01.285.026.897.897 0 01.577 1.1.767.767 0 01-.666.581zm-22.806 4.809a1.372 1.372 0 01-.81.014 1.168 1.168 0 01-.413-1.499.661.661 0 01.633-.467c.27-.143.576-.201.88-.165.426.082.632.303.632.77-.03.264-.119.518-.261.742v.138c-.169.219-.4.381-.661.467zm-5.169-11.852c.22 0 .412-.206.454-.357.041-.152-.083-.619-.289-.647-.206-.027-.481.358-.481.509 0 .151.096.468.316.495zm.591 2.805c-.096.412-1.058.66-1.375.412-.261-.247-.261-1.402.578-1.416a.932.932 0 01.289 0c.068-.165.26-.412.426-.412a.448.448 0 01.289.398 1.103 1.103 0 01-.207.427 1.22 1.22 0 010 .591zm22.44 7.04c-.027-1.224.426-2.516 2.214-2.228.342.056.672-.045.99-.142.386-.118.753-.231 1.1-.05a2.116 2.116 0 01.949 1.774 2.6 2.6 0 01-1.746 2.598 1.111 1.111 0 01-.867 0c-.19.191-.402.357-.632.495a.987.987 0 01-.564-.756 1.69 1.69 0 01-1.031-.577A1.899 1.899 0 0152.95 121zm-31.061-3.383c0 .495.619.674.907.743.29.069.564-.289.592-.646.027-.358-.275-.825-.633-.729-.048.013-.1.025-.155.038-.344.081-.758.178-.711.594zm-1.733-10.546c.07-.371 1.403-1.059 1.61-.783.233.275.467 1.154-.235 1.347-.7.192-1.443-.192-1.375-.564zm6.958 19.127a1.25 1.25 0 00.77 1.746 1.182 1.182 0 001.526-.536 1.775 1.775 0 00-.949-1.994 1.254 1.254 0 00-1.347.784zm.99-3.658c.027 0 .124.22.124.22-.041.069-.193.289-.261.192-.024-.032-.055-.055-.085-.078-.059-.043-.112-.083-.094-.183.027-.151.288-.151.316-.151zM33 127.077a1.38 1.38 0 00-1.375.674c-.124.317.289 1.004.701 1.155a.6.6 0 00.702-.22 1.512 1.512 0 00.948.757.829.829 0 00.922-.784c.08.046.162.088.247.124a1.148 1.148 0 00.939.009 1.13 1.13 0 00.628-.697 1.372 1.372 0 00-.32-1.666 1.375 1.375 0 00-.532-.287 1.488 1.488 0 00-1.856.661 1.195 1.195 0 00.11 1.045 1.448 1.448 0 00-.866.33c.068-.605-.014-1.004-.248-1.101zm-9.996-16.747c.069.124.22.467.069.591a.533.533 0 01-.592.055c-.179-.069-.344-.467-.179-.646a.634.634 0 01.702 0zm-8.195 2.984h-.275a.809.809 0 00-.44.866c-.006.256.071.507.22.715.239-.06.483-.102.729-.124a.695.695 0 00-.262.523 1.732 1.732 0 001.375 1.622 1.276 1.276 0 001.045-1.182 1.089 1.089 0 00-1.114-1.279 1.74 1.74 0 00-.538-.002c.02-.005.06-.026.071-.108.044-.228-.208-.45-.454-.666-.14-.124-.277-.245-.357-.365zm1.99-6.431c.043.175.044.357.003.532a.897.897 0 01-1.03.585.897.897 0 01-.386-.186 1.04 1.04 0 01-.222-.83 1.036 1.036 0 01.484-.71.99.99 0 01.907.137c.117.136.2.298.244.472zm.884 16.619c.49.176.881.032 1.14-.063.145-.053.248-.091.303-.047.022.018.052.048.089.085.22.218.688.681 1.135.328a1.074 1.074 0 00.426-1.375 1.06 1.06 0 00.949-.743 1.76 1.76 0 000-.66c.162-.105.31-.229.44-.371a1.376 1.376 0 00-.165-2.117 1.538 1.538 0 00-2.255.371c-.394.54-.25.955-.133 1.295.104.3.187.541-.142.754-.316.205-.51.146-.712.085-.247-.075-.508-.154-1.02.231-.936.701-.84 1.939-.055 2.227zm.893-9.377c.206-.096.537.124.537.289.055.178-.014.536-.22.563a.637.637 0 01-.578-.343.441.441 0 01.261-.509zm2.186 1.581a.605.605 0 00.66.715 1.062 1.062 0 00.757-.412c.11-.206-.179-.99-.564-1.031a.796.796 0 00-.852.728zm11.804 8.348c.05-.002.1.007.145.026.087.019.184.035.283.052.343.058.715.121.79.292a.77.77 0 01-.798 1.003 1.043 1.043 0 01-.728-1.1.33.33 0 01.308-.273zm37.311-5.226c-.77-.11-1.636.412-1.677 1.003-.041.592.564 1.114 1.182 1.169a1.208 1.208 0 001.21-1.114c.07-.618-.178-.99-.715-1.058zm-1.503 4.809c.014-.231.082-.456.197-.657a1.38 1.38 0 01.704-.862 1.368 1.368 0 011.111-.059 2.063 2.063 0 011.238 2.103 1.691 1.691 0 01-2.131 1.032 1.521 1.521 0 01-1.006-.88 1.516 1.516 0 01-.113-.677zm4.075-14.325a1.376 1.376 0 00-1.636.413c-.248.481.15 1.182.866 1.526a1.004 1.004 0 001.182-.44 1.209 1.209 0 00-.412-1.499zm-12.26 19.874a1.61 1.61 0 01-.789-.899 1.555 1.555 0 011.251-1.581c.88-.014 1.843.371 1.843 1.004a1.57 1.57 0 01-1.114 1.581 1.613 1.613 0 01-1.19-.105zm6.54-4.707a1.868 1.868 0 00-2.132.866 1.567 1.567 0 00.702 2.062 2.48 2.48 0 002.406-.907 1.608 1.608 0 00-.976-2.021zm-3.819-8.983a1.583 1.583 0 011.11-.092 1.539 1.539 0 01.605 1.884 1.58 1.58 0 01-1.815.385 1.086 1.086 0 01-.674-1.375c.152-.353.427-.637.774-.802zm6.362-1.77c-.577-.275-1.058 0-1.375.743a1.375 1.375 0 00.358 1.526 1.51 1.51 0 001.76-.646 1.375 1.375 0 00-.743-1.623zm-10.725 16.033c.22-.344.674-.344 1.197 0 .149.114.31.211.481.288.17.052.332.126.481.22h-2.269a.633.633 0 01.11-.508zm13.503-2.558a1.183 1.183 0 002.2.674 1.457 1.457 0 00-.578-1.774c-.398-.151-1.443.537-1.622 1.1zm-58.74-17.545a.88.88 0 01.261 0 1.623 1.623 0 011.1 1.581 1.225 1.225 0 01-1.375.784 1.651 1.651 0 01-.921-.357v-1.375c.034-.04.066-.082.097-.123.044-.059.088-.117.137-.166H12.375v-5.115a1.113 1.113 0 011.114 1.54 1.279 1.279 0 000 .715 2.75 2.75 0 01.178 1.87 1.47 1.47 0 01-.357.646zm-.935-4.771v-.66a.55.55 0 010 .66zm1.705-.22a.893.893 0 00.674 1.031.909.909 0 001.017-.701 1.03 1.03 0 00-.756-1.114.883.883 0 00-.935.784zm60.76 13.21c.166.323.21.695.125 1.049a1.508 1.508 0 01-.773.947 1.508 1.508 0 01-1.221.057 1.174 1.174 0 01-.876-1.048c-.012-.163.01-.326.065-.479a1.663 1.663 0 011.898-1.237c.337.135.615.387.781.711zm-10.394 3.551c-.09.552.336.793.785 1.046l.095.054.165-.114c.398-.272.797-.544.591-1.123a.347.347 0 00-.082-.151 2.024 2.024 0 001.155-1.073.853.853 0 00-.605-1.045 1.213 1.213 0 00-.955-.053 1.218 1.218 0 00-.695.658 1.375 1.375 0 00.11 1.183.835.835 0 00-.564.618zm22.15.271c.038.097.049.204.029.307 0 .206-.426.137-.605.082a.549.549 0 01-.316-.522c.055-.206.564-.193.701-.11a.547.547 0 01.19.243zm1.968 5.669a1.195 1.195 0 00-1.375.77c-.22.592-.083 1.004.426 1.21a1.472 1.472 0 001.76-.563 1.377 1.377 0 00-.811-1.417zm-4.895-8.772c.398.069.412.509.288.825-.082.316-.398.564-1.003.316a2.784 2.784 0 00-.06-.228c-.062-.221-.137-.486-.078-.624.083-.193.454-.358.853-.289zm6.325 3.781a.466.466 0 00-.234-.591.5.5 0 00-.426-.027.513.513 0 00-.322.524.509.509 0 00.418.452.527.527 0 00.564-.358zm2.224-2.268a.685.685 0 01.292-.015c.069.014.247.275.151.427l-.038.064c-.103.175-.273.466-.54.321-.237-.13-.177-.396-.14-.557v-.001a.562.562 0 00.017-.102.671.671 0 01.258-.137zm-31.086-.482a.76.76 0 00.423-.446.77.77 0 00-.038-.613c-.123-.247-.48-.563-.728-.55-.619 0-.839.523-.908 1.128l.007.006c.328.301.712.653 1.245.475zm15.712 6.117c-.285-.221-.688-.535-.518-.933.168-.432.608-.341 1.019-.256l.177.036c.454.082.55.481.372.88-.179.398-.647.618-.894.398a3.96 3.96 0 00-.156-.125zm-18.049-18.217c-.22.674.564 1.073.949.921a.809.809 0 00.343-.962.742.742 0 00-1.292.041zm3.892 1.969c.25-.043.506 0 .728.121a1.378 1.378 0 01.66 1.306c-.069.619-.316.88-.963.88h-1.044v.564a1.565 1.565 0 01-.949 1.482 1.574 1.574 0 01-.605.127.975.975 0 01-.715-.248 2.022 2.022 0 01-.591-1.87 1.76 1.76 0 011.553-1.127h.564c.204-.32.444-.615.715-.88.17-.188.398-.313.647-.355zm19.14 10.131c-.798-.481-1.21-.385-1.65.44-.334.624-.556 1.012-.794 1.426l-.238.417c-1.182-.55-1.375-.482-1.554.604.44.509.908.454 1.375 0 1.279.963 2.104.523 2.324-1.168.103-.047.209-.089.316-.124.468-.069.605-.399.647-.811a.85.85 0 00-.427-.784zm-2.198 9.221c.004-.179.045-.355.121-.517.399-.963 1.196-1.444 1.911-1.155a1.757 1.757 0 01.963 1.883 1.733 1.733 0 01-2.145 1.032 1.3 1.3 0 01-.751-.72 1.294 1.294 0 01-.099-.523zm-1.68-15.312a1.084 1.084 0 00-.811.233c-.427.523-.152.99.357 1.472.084-.03.17-.055.253-.081.427-.128.824-.248.847-.799a.757.757 0 00-.646-.825zM28.6 116.641c-.179-.014-.715-.206-.619-.591.11-.371.619-.371.798-.33a.55.55 0 01.426.564c-.041.357-.426.371-.605.357zm11.866-3.891a.82.82 0 00-.632.454.55.55 0 00.495.729c.233 0 .866-.083.907-.606.042-.522-.563-.577-.77-.577zm-3.011 9.57c-.082-.234-.014-.715.151-.811.383-.15.704-.427.908-.784.041-.096.247-.179.357-.179.413.124.468.564.413.715a11.73 11.73 0 01-.192.481 1.228 1.228 0 01.66 1.004c-.015.33-.716.756-1.128.756a.918.918 0 01-.688-.715 1.055 1.055 0 01-.481-.467zm3.699-3.52a.647.647 0 00.481.852.196.196 0 00.096 0 1.6 1.6 0 00.784.495 1.207 1.207 0 001.306-.618 2.025 2.025 0 00-.701-1.884 1.376 1.376 0 00-1.279.619.618.618 0 00-.687.536zM15.252 96.463a.963.963 0 01.67-.213.949.949 0 01.84 1.017.894.894 0 01-.936.784 1.059 1.059 0 01-.921-.976.963.963 0 01.347-.612zm21.53 21.333a1.226 1.226 0 00-1.307.66.866.866 0 00.591 1.059.975.975 0 001.169-.426c.151-.399-.11-1.197-.454-1.293zm-1.238 6.683c.206-.083.687-.138.825 0 .272.314.638.531 1.045.619.083.01.15.122.207.217.02.032.037.061.054.085-.027.413-.192.578-.578.578a7.28 7.28 0 01-1.375-.234c-.206-.069-.522-.316-.522-.495.01-.292.133-.569.344-.77zm9.061-10.354a1.016 1.016 0 00-1.114.577c-.261.839-.096 1.513.426 1.678a1.182 1.182 0 10.688-2.255zm1.99 2.892c.142-.042.285-.085.416-.142a1.378 1.378 0 011.252.303 1.124 1.124 0 01.44 1.072 1.376 1.376 0 01-.936 1.059 1.84 1.84 0 01-1.54-.344c-.219-.179-.272-.366-.321-.539-.019-.065-.037-.129-.063-.19a.839.839 0 010-.756c.106-.27.422-.364.753-.463zm-4.809-1.256a.441.441 0 00.413.371.626.626 0 00.495-.467c0-.206-.303-.358-.509-.358-.206 0-.44.193-.399.454zm2.136 5.613a1.525 1.525 0 01.174-1.075 1.99 1.99 0 012.407-.592 1.667 1.667 0 01.247 2.324 1.373 1.373 0 01-2.241.261 1.525 1.525 0 01-.587-.918zm-7.828-6.534a.65.65 0 00-.547.016.655.655 0 00-.347.424.605.605 0 00.33.839.643.643 0 00.777-.031.645.645 0 00.172-.217.754.754 0 00-.385-1.031zm6.448-3.121c.097-.248.344-.248.523-.248.096 0 .509.206.358.481-.126.229-.385.211-.564.198a1.22 1.22 0 00-.096-.005.325.325 0 01-.208-.163.316.316 0 01-.013-.263zm-1.003-2.585c-.248.509 0 1.265.426 1.375.426.11 1.375-1.004 1.169-1.485-.206-.481-1.348-.399-1.595.11zm-23.224-4.125a.633.633 0 00.577.343c.207 0 .276-.385.22-.563-.054-.179-.33-.385-.536-.289a.442.442 0 00-.261.509zm-2.14-4.767a.815.815 0 01.614-.046c.572.149.582.574.593 1.037.003.094.005.189.012.283-.839.385-1.238.426-1.513 0a1.046 1.046 0 01-.11-.811.815.815 0 01.405-.463zm1.205 11.326c0 .398.124.715.495.797a4.88 4.88 0 002.874-.082c.137-.073.262-.165.371-.275a1.091 1.091 0 00.297-1.148 1.081 1.081 0 00-.93-.736h-.11c.092-.127.153-.273.18-.426a.798.798 0 00-.784-.908.752.752 0 00-.798.366.751.751 0 00-.096.294c-.004.202.034.404.11.591h-.317a1.707 1.707 0 00-1.292 1.527zm4.473-11.346a1.47 1.47 0 011-.342c.742.028 1.512 1.155 1.36 2.062a1.248 1.248 0 01-.992 1.036c-.167.033-.34.031-.506-.004a1.575 1.575 0 01-1.079-.62 1.588 1.588 0 01-.296-1.209c.05-.361.234-.69.513-.923zm2.608 8.829c.138.358 1.375.537 1.54 0a.837.837 0 00-.357-1.058c-.481-.138-1.32.701-1.183 1.058zm2.187 8.451c.176-.041.359-.044.536-.008.563.041 1.155.632 1.1 1.168a1.758 1.758 0 01-1.691 1.375c-.51 0-.908-.687-.908-1.375a1.253 1.253 0 01.963-1.16zm22.398-2.937a.88.88 0 00-1.072.413.736.736 0 00-.054.602.744.744 0 00.411.443.88.88 0 001.073-.413.724.724 0 00-.1-.87.73.73 0 00-.258-.175zM25.878 97.611c-.083-.151-.083-.756.165-.839a.77.77 0 01.7.358.689.689 0 01-.22.632.673.673 0 01-.645-.15zm-2.063 16.156c-.413 0-.921.482-1.045 1.265.033.034.07.081.112.133.113.143.257.326.438.376a.67.67 0 00.289 0c.165.096.398 0 .577-.206a.837.837 0 00.385-.495 1.06 1.06 0 00-.756-1.073zm6.29 6.069c.127-.249.333-.449.585-.569.32-.143.65-.258.99-.343a1.634 1.634 0 01.468 2.268c-.184.267-.466.45-.784.509a1.371 1.371 0 01-1.375-1.059 1.262 1.262 0 01.116-.806z"
      fill="#54B399"
    />
    <path d="M135.905 24.86H26.139v40.796h109.766V24.86z" fill="#58C5A7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.218 26.624c.358-.28.788-.453 1.24-.499a1.664 1.664 0 011.292 1.898 1.842 1.842 0 01-1.801 1.375 1.65 1.65 0 01-1.513-1.692c.154-.427.425-.802.782-1.082zm-6.186 3.104c.138 0 .62-.07.647-.276.027-.206-.358-.48-.509-.495a.482.482 0 00-.495.317c-.041.22.206.412.357.453zm-.907 5.197v1.953c.097.107.22.188.358.233a1.153 1.153 0 001.375-1.086c.11-.536-.372-1.017-1.142-1.141-.198-.03-.4-.016-.591.041zM60.5 44.138a.798.798 0 00-.921.37c-.385.62-.33.922.275 1.54-.04.55-.04 1.102 0 1.65a.55.55 0 00.99.33c.076-.102.16-.202.245-.303.314-.373.64-.759.607-1.333l-.591-.605c.041-.797-.192-1.526-.605-1.65zm-33.096 4.905c.022.1.022.205 0 .306a1.87 1.87 0 01-.798 1.114h.069c.357.04.371.426.357.605-.013.178-.206.715-.59.618a.44.44 0 01-.317-.357v-.454a.715.715 0 01.165-.275h-.151v-2.131c.205-.028.413-.028.619 0a.727.727 0 01.646.574zm.096 1.928c0 .124 0 .289.165.33.106.027.138-.032.173-.095.02-.036.04-.073.075-.097.096-.069-.11-.22-.193-.262a.344.344 0 00-.22.124zm-1.375 3.575v-.632a1.54 1.54 0 011.375-.922 1.374 1.374 0 011.059 1.568 1.06 1.06 0 01-1.265.839 1.72 1.72 0 01-1.169-.853zm2.177 3.479c-.265.162-.576.23-.884.193a1.113 1.113 0 01-.77-1.32c.096-.647.618-1.17 1.044-1.17a1.513 1.513 0 011.183 1.596 1.375 1.375 0 01-.573.7zm11.312-.811a1.373 1.373 0 00-.921-.715c-.482-.083-1.155.591-1.265 1.251-.042.317.042.638.233.894a1.898 1.898 0 001.375 1.746 1.967 1.967 0 001.925-1.471c.206-.756-.385-1.458-1.347-1.705zm3.791.707c.224-.124.477-.183.733-.171a1.47 1.47 0 011.113 1.595 1.374 1.374 0 01-1.663 1.375 1.155 1.155 0 01-1.073-1.375c.021-.112.048-.222.082-.33a2.746 2.746 0 00-.082-.413c.11-.07.23-.121.358-.15.124-.224.309-.407.532-.531zm-3.336 7.365a1.002 1.002 0 01-.194-.372c-.124-.289.275-.688.907-.66.023.03.055.055.09.083.096.075.222.173.282.453.082.385-.413.88-.757.756a1.004 1.004 0 01-.328-.26zm4.783-.895c-.158-.217-.36-.4-.59-.536-.77-.357-1.692.138-2.146 1.182-.086.19-.129.397-.123.605h4.124a.812.812 0 00.097-.33 1.004 1.004 0 00-.839-.934 2.615 2.615 0 00-.523.013zm-5.486-.24a.908.908 0 01-.618.24.758.758 0 01-.784-.797.838.838 0 01.962-.757c.44.042.729.248.729.715a.908.908 0 01-.289.598zm12.197-.667c-.688 0-1.087.398-1.128 1.251a1.21 1.21 0 00.481.907h1.155c.468-.247.922-.66.922-.948.027-.564-.674-1.155-1.43-1.21zm13.02-6.449c.234.11.262.275.138.495a.316.316 0 01-.508.124.316.316 0 01-.124-.482c.124-.22.261-.247.495-.137zm-38.458 8.608h.811a1.376 1.376 0 00-.123-.674h.096c.976.22 1.897-.701 1.608-1.375a1.635 1.635 0 00-.493-.65c-.122-.105-.198-.17-.153-.285.027-.068.076-.146.13-.232.143-.228.32-.51.2-.8a.77.77 0 00.234-.123c-.053.113-.09.234-.11.357a1.841 1.841 0 00.825 1.637c.1.152.226.287.371.398.221-.06.434-.147.633-.261.452-.079.856-.33 1.127-.701.232.376.572.673.977.852h.137l-.075.085c-.103.12-.17.196-.282.163-.033-.01-.087-.046-.157-.091-.228-.149-.618-.404-.944-.225-.426.233-.288 1.69-.15 1.897h3.3c.134-.194.228-.414.274-.646.193-.935-.618-1.788-1.278-1.636.223-.286.34-.641.33-1.004a.852.852 0 00-.77-.839.91.91 0 00-.193 0c.393-.232.7-.584.88-1.004.22-.453-.633-1.21-1.375-1.155a.853.853 0 00-.839.784c-.046.307-.008.62.11.907a1.65 1.65 0 00-1.045-.467 1.677 1.677 0 00-1.375.426v-.151a.77.77 0 00-.674-.88.84.84 0 00-.646.165 1.54 1.54 0 01.085-.09c.219-.22.68-.685.328-1.12-.57-.725-1.12-.518-1.514-.37h-.001c-.09.035-.173.066-.245.081l-.014 7.026zm5.624-4.126h.096c-.03.013-.06.026-.088.04l-.008-.04zm-.303-.192a.577.577 0 00.28.247 1.9 1.9 0 00-.17.097 1.005 1.005 0 00-.11-.344zm21.643-.536c.096-.757.481-1.073 1.114-1.073a1.842 1.842 0 011.044 1.526.783.783 0 01-.618.605 1.224 1.224 0 01-1.306.386 1.375 1.375 0 01-.317-1.444.18.18 0 01.083 0zm-18.439.247a.812.812 0 00.756.839.742.742 0 00.922-.633.853.853 0 00-.716-.99.935.935 0 00-.962.784zm28.71-6.201a1.197 1.197 0 00.536 1.251.88.88 0 001.21-.508.962.962 0 00-.426-1.17 1.374 1.374 0 00-1.32.427zm-32.542-1.18a.55.55 0 01.257-.03c.454 0 .77.44.729.715-.041.275-.413.894-.798.921-.385.028-.536-.701-.536-.976a.55.55 0 01.348-.63zm6.417 9.691a1.526 1.526 0 00-1.182-1.375c-.468-.068-1.17.619-1.21 1.169a1.086 1.086 0 00.756 1.017h.334c-.675.013-1.338.367-1.338.853-.008.21.04.419.138.605h2.392a.723.723 0 000-.165c0-.837-.315-1.222-1.192-1.292h.037-.041c.742 0 1.265-.33 1.306-.812zm-2.777-10.395c-.358.096-.674-.302-.674-.907a.495.495 0 00.098-.099.705.705 0 01.452-.273c.385-.082.88.413.756.757a1.044 1.044 0 01-.633.522zm4.688 8.58a.535.535 0 00-.646-.605c-.275 0-1.004.138-.976.523.027.385.632.756.907.797.275.041.688-.261.715-.715zm2.585 4.057h-.481a.605.605 0 01.481 0zm-4.895-5.83a.468.468 0 00-.233-.537c-.023 0-.057-.002-.099-.006-.187-.015-.521-.041-.589.116-.082.193.22.564.371.605.151.041.468.014.55-.178zM69.6 49.218a.77.77 0 01-.01-.393c.811-.426 1.1-.44 1.292-.041a.783.783 0 01-.344.963.77.77 0 01-.938-.529zm-3.795 1.45a.895.895 0 01.334.206c.508.316.536.646.412.852-.124.207.316.262.481.124.165-.137.591-.316.99.261.399.578-.234 1.06-.66 1.293-.426.234-.729.33-1.072 0-.16-.153-.318-.182-.5-.215a1.493 1.493 0 01-.765-.335 1.375 1.375 0 01-.261-1.829.893.893 0 011.041-.357zM48.73 51.824c0-.165-.22-.426-.357-.44-.138-.014-.537 0-.55.412-.013.378.31.398.49.41.017 0 .032.002.046.003.165.013.385-.262.371-.385zm4.318 2.447c-.798-.275-1.032-.756-.798-1.375.23-.27.545-.454.894-.522a.756.756 0 01-.619-.605 1.031 1.031 0 01.88-.99.331.331 0 01.358.371l.004.02c.082.398.198.96-.005 1.121a.77.77 0 01.317 0c.343.165.632.358.343 1.169-.288.811-.577 1.086-1.374.811zm15.014-7.755c0-.044.009-.093.018-.144.026-.155.055-.326-.141-.42a.303.303 0 00-.44.166c-.069.164-.179.577 0 .687.178.11.55-.193.564-.289zm3.583 7.057a.77.77 0 01-.31-.03.853.853 0 01-.481-1.128.688.688 0 01.88-.523.894.894 0 01.577 1.1.772.772 0 01-.666.581zm-22.806 4.81c-.263.085-.545.09-.81.013a1.169 1.169 0 01-.413-1.498.66.66 0 01.633-.468c.27-.143.576-.201.88-.165.426.082.632.303.632.77a1.76 1.76 0 01-.261.743v.137c-.169.219-.4.382-.661.467zM43.67 46.53c.22 0 .413-.206.454-.358.041-.15-.083-.618-.289-.646-.206-.027-.481.358-.481.509a.481.481 0 00.316.495zm.591 2.805c-.096.413-1.059.66-1.375.413-.261-.248-.261-1.403.578-1.417a.939.939 0 01.288 0c.07-.165.262-.412.427-.412a.454.454 0 01.288.399 1.1 1.1 0 01-.206.426c.049.194.049.397 0 .591zm22.44 7.04c-.027-1.224.427-2.516 2.214-2.227.342.055.672-.046.99-.143.386-.118.753-.231 1.1-.05a2.117 2.117 0 01.949 1.774 2.599 2.599 0 01-1.746 2.599 1.115 1.115 0 01-.867 0c-.19.19-.402.356-.632.494a.99.99 0 01-.564-.756 1.69 1.69 0 01-1.031-.577 1.897 1.897 0 01-.413-1.114zM35.64 52.992c0 .495.619.674.907.743.29.069.564-.289.592-.646.027-.358-.275-.825-.633-.73-.048.014-.1.026-.155.039-.344.081-.758.178-.711.594zm-1.733-10.546c.07-.371 1.403-1.058 1.61-.783.233.275.467 1.155-.235 1.347-.7.193-1.443-.192-1.374-.564zm6.958 19.127a1.253 1.253 0 00.77 1.746 1.182 1.182 0 001.526-.537 1.773 1.773 0 00-.935-1.993 1.266 1.266 0 00-1.361.783zm.99-3.658c.028 0 .124.22.124.22-.041.069-.193.289-.261.193-.024-.033-.055-.056-.085-.079-.059-.043-.112-.083-.094-.183.027-.151.288-.151.316-.151zm4.895 4.538a1.375 1.375 0 00-1.375.673c-.124.317.289 1.004.701 1.155a.605.605 0 00.702-.22 1.499 1.499 0 00.948.756.825.825 0 00.922-.783l.247.123a1.14 1.14 0 001.567-.687 1.375 1.375 0 00-.852-1.953 1.485 1.485 0 00-1.856.66 1.196 1.196 0 00.11 1.045 1.458 1.458 0 00-.866.33c.068-.605-.014-1.003-.248-1.1zm-9.996-16.748c.069.124.22.468.069.591a.535.535 0 01-.592.055c-.178-.069-.343-.467-.178-.646a.633.633 0 01.7 0zm-8.195 2.984h-.275a.811.811 0 00-.44.866c-.006.256.071.507.22.715.239-.06.483-.102.729-.124a.689.689 0 00-.262.523 1.732 1.732 0 001.375 1.622 1.278 1.278 0 001.045-1.182 1.088 1.088 0 00-1.114-1.279 1.734 1.734 0 00-.538-.002c.02-.005.06-.026.071-.108.044-.228-.208-.45-.454-.666-.14-.124-.277-.245-.357-.365zm1.99-6.43c.043.174.044.356.003.531a.893.893 0 01-1.416.399 1.032 1.032 0 01.262-1.54.99.99 0 01.907.137c.117.136.2.298.244.472zm.884 16.618c.49.176.882.032 1.14-.063.145-.053.248-.091.303-.047.022.018.052.048.089.084.22.219.688.682 1.135.329a1.073 1.073 0 00.426-1.375 1.059 1.059 0 00.949-.742 1.76 1.76 0 000-.66c.161-.105.31-.23.44-.372a1.375 1.375 0 00-.165-2.117 1.54 1.54 0 00-2.255.371c-.394.54-.25.957-.132 1.294.104.298.186.535-.143.741-.314.197-.507.143-.709.086-.247-.07-.508-.143-1.024.244-.934.701-.838 1.939-.054 2.227zm.893-9.377c.206-.096.536.124.536.289.055.178-.013.536-.22.563a.62.62 0 01-.577-.357.44.44 0 01.261-.495zm2.187 1.581a.604.604 0 00.66.715 1.058 1.058 0 00.756-.412c.11-.206-.179-.99-.564-1.032a.798.798 0 00-.852.73zm11.803 8.348a.33.33 0 01.145.026c.087.019.184.035.283.052.343.058.715.121.79.292a.772.772 0 01-.798 1.004 1.045 1.045 0 01-.728-1.1.33.33 0 01.308-.274zm37.311-5.227c-.77-.11-1.636.413-1.677 1.004-.041.591.564 1.114 1.182 1.169a1.21 1.21 0 001.21-1.114c.07-.619-.178-.99-.715-1.059zm1.683-9.589c.296-.075.609-.048.889.075a1.21 1.21 0 01.412 1.498 1.004 1.004 0 01-1.182.44c-.715-.343-1.114-1.045-.867-1.526.189-.24.452-.412.748-.487zm-7.54 6.166a1.581 1.581 0 00-1.884.893 1.086 1.086 0 00.674 1.376 1.58 1.58 0 001.815-.386 1.54 1.54 0 00-.605-1.883zm3.877-.935c.317-.743.798-1.018 1.375-.743a1.375 1.375 0 01.743 1.623 1.513 1.513 0 01-1.76.646 1.375 1.375 0 01-.358-1.526zM27.321 45.03h-.261c.174-.175.297-.393.358-.632a2.75 2.75 0 00-.18-1.884 1.224 1.224 0 010-.701 1.114 1.114 0 00-1.113-1.554.55.55 0 000-.66v5.775H26.359a1.559 1.559 0 00-.137.166 2.463 2.463 0 01-.097.123v1.375c.263.21.585.335.921.357.591 0 1.279-.33 1.375-.784a1.623 1.623 0 00-1.1-1.58zm.64-4.34a.894.894 0 01-.131-.651.88.88 0 01.935-.784 1.03 1.03 0 01.756 1.114.907.907 0 01-1.017.701.894.894 0 01-.543-.38zm60.754 13.608a1.512 1.512 0 00-.907-1.76 1.664 1.664 0 00-1.898 1.237 1.17 1.17 0 00.811 1.526 1.497 1.497 0 001.994-1.003zm-9.734 3.548c-.449-.253-.875-.494-.785-1.046a.839.839 0 01.564-.619A1.375 1.375 0 0178.65 55a1.21 1.21 0 011.65-.605.84.84 0 01.605 1.045 2.022 2.022 0 01-1.155 1.073c.04.043.068.094.082.15.206.58-.193.852-.591 1.124l-.165.114-.042-.024-.053-.03zm21.394-.468a.547.547 0 00-.22-.55c-.138-.083-.646-.096-.701.11a.55.55 0 00.316.522c.179.055.605.124.605-.082zm-2.956-3.41c.398.069.412.508.288.825-.082.316-.398.564-1.003.316a2.85 2.85 0 00-.06-.228c-.062-.22-.137-.486-.078-.624.083-.193.454-.358.853-.29zm6.325 3.781a.471.471 0 00-.234-.591.512.512 0 00-.608.094.507.507 0 00.076.771c.061.042.129.07.202.084a.521.521 0 00.564-.358zm2.224-2.268a.675.675 0 01.292-.014c.069.013.247.274.151.426l-.041.07c-.103.177-.273.47-.536.315a.48.48 0 01-.124-.66.673.673 0 01.258-.137zM74.882 55a.769.769 0 00.385-1.059c-.123-.247-.48-.564-.728-.55-.619 0-.839.523-.908 1.128l.007.006c.328.301.712.653 1.244.475zm-1.388-11.179c-.385.151-1.169-.247-.949-.921a.742.742 0 011.293-.041.812.812 0 01-.344.962zm3.671 1.169a1.128 1.128 0 00-1.375.234c-.271.265-.51.56-.715.88h-.564a1.76 1.76 0 00-1.553 1.127 2.021 2.021 0 00.59 1.87.977.977 0 00.716.248 1.567 1.567 0 001.553-1.609v-.564c.127 0 .25.008.37.016.234.015.458.03.675-.016.647 0 .894-.261.963-.88a1.375 1.375 0 00-.66-1.306zm16.761 10.45c.44-.825.853-.921 1.65-.44a.853.853 0 01.427.797c-.042.413-.18.812-.647.812a3.015 3.015 0 00-.316.123c-.22 1.692-1.045 2.132-2.324 1.156-.467.453-.935.508-1.375 0 .179-1.087.372-1.155 1.554-.62l.142-.243c.276-.474.512-.878.89-1.585zM91.7 48.909a1.084 1.084 0 00-.811.233c-.427.523-.152.99.357 1.472.084-.03.17-.055.253-.08.427-.13.824-.25.847-.8a.756.756 0 00-.646-.825zM42.35 52.016c-.179-.014-.715-.22-.619-.591.11-.371.619-.371.798-.33a.55.55 0 01.426.564c-.041.357-.426.371-.605.357zm11.866-3.891a.824.824 0 00-.632.454.55.55 0 00.495.728c.233 0 .866-.082.907-.605.042-.522-.563-.577-.77-.577zm-3.011 9.57c-.082-.234-.014-.715.151-.811a1.8 1.8 0 00.908-.784c.041-.179.247-.179.357-.179.413.124.468.564.413.715-.02.054-.05.109-.08.165-.055.103-.113.21-.113.316a1.223 1.223 0 01.66.99c-.014.344-.715.77-1.127.77a.922.922 0 01-.688-.715 1.06 1.06 0 01-.481-.467zm3.699-3.52a.646.646 0 00.481.853h.096c.207.238.48.41.784.495a1.21 1.21 0 001.306-.62 2.021 2.021 0 00-.701-1.883 1.375 1.375 0 00-1.279.619.619.619 0 00-.687.536zM29.002 31.838a.963.963 0 01.67-.213.949.949 0 01.84 1.017.894.894 0 01-.936.784 1.059 1.059 0 01-.921-.976.963.963 0 01.347-.612zm21.53 21.333a1.224 1.224 0 00-1.376.647.866.866 0 00.592 1.072.977.977 0 001.168-.426c.22-.399-.041-1.197-.385-1.293zm-1.238 6.683c.206-.083.687-.138.825 0 .272.314.638.531 1.045.618.11.014.261.207.261.303-.027.413-.192.578-.578.578a7.184 7.184 0 01-1.375-.234c-.206-.069-.522-.316-.522-.495.01-.292.133-.569.344-.77zM58.355 49.5a1.018 1.018 0 00-1.114.578c-.261.838-.096 1.512.426 1.677a1.512 1.512 0 001.554-.88 1.5 1.5 0 00-.866-1.375zm1.99 2.892c.142-.042.285-.085.416-.142a1.375 1.375 0 011.252.303 1.127 1.127 0 01.44 1.072 1.375 1.375 0 01-.936 1.059 1.842 1.842 0 01-1.54-.344c-.219-.18-.272-.366-.321-.539a1.485 1.485 0 00-.063-.19.84.84 0 010-.756c.106-.27.422-.364.753-.463zm-4.809-1.256a.44.44 0 00.413.371.66.66 0 00.495-.467c0-.206-.303-.358-.509-.358-.206 0-.44.193-.399.454zm2.136 5.613a1.527 1.527 0 01.174-1.075 1.994 1.994 0 012.407-.591 1.663 1.663 0 01.247 2.323 1.376 1.376 0 01-2.241.261 1.527 1.527 0 01-.587-.918zm-7.828-6.534a.66.66 0 00-.894.44.605.605 0 00.33.839.646.646 0 00.949-.248.757.757 0 00-.385-1.031zm6.448-3.121c.097-.248.344-.248.523-.248.096 0 .509.207.358.482-.126.228-.385.21-.564.197-.036-.003-.069-.005-.096-.005a.316.316 0 01-.22-.426zm-1.003-2.585c-.248.508 0 1.265.426 1.375.426.11 1.375-1.004 1.169-1.485-.206-.482-1.348-.399-1.595.11zM32.065 40.37a.619.619 0 00.578.358c.206 0 .274-.386.22-.578-.056-.192-.33-.371-.537-.275a.44.44 0 00-.261.495zm-2.14-4.753a.811.811 0 01.614-.046c.572.149.582.574.593 1.038.003.093.005.188.012.282-.839.385-1.238.427-1.513 0a1.045 1.045 0 01-.11-.811.81.81 0 01.405-.463zm1.205 11.326c0 .398.124.715.495.797a4.88 4.88 0 002.874-.083 1.51 1.51 0 00.371-.274 1.087 1.087 0 00-.633-1.884h-.11c.092-.127.153-.273.18-.427a.797.797 0 00-.785-.907.755.755 0 00-.893.66 1.5 1.5 0 00.11.591h-.316a1.704 1.704 0 00-1.293 1.527zm4.473-11.346a1.47 1.47 0 011-.342c.742.027 1.512 1.155 1.36 2.063a1.253 1.253 0 01-1.498 1.03 1.58 1.58 0 01-1.375-1.828c.05-.36.234-.69.513-.923zm2.608 8.83c.138.357 1.375.535 1.54 0a.866.866 0 00-.357-1.073c-.481-.124-1.32.715-1.183 1.072zm2.187 8.45a1.25 1.25 0 01.536-.008c.564.041 1.155.632 1.1 1.169a1.76 1.76 0 01-1.691 1.375c-.51 0-.908-.688-.908-1.375a1.25 1.25 0 01.963-1.161zm22.398-2.937a.894.894 0 00-1.072.399.754.754 0 00.357 1.059.88.88 0 001.073-.413.729.729 0 00-.358-1.045zM39.627 32.986c-.082-.151-.082-.756.165-.839a.77.77 0 01.702.358.689.689 0 01-.22.632.673.673 0 01-.647-.15zm-2.062 16.157c-.412 0-.921.48-1.045 1.264.033.034.07.08.112.133.113.143.257.326.438.376.096.014.193.014.289 0 .165.097.398 0 .577-.206a.838.838 0 00.385-.495 1.058 1.058 0 00-.756-1.073zm6.29 6.068c.127-.25.333-.449.585-.569.32-.143.65-.258.99-.343a1.639 1.639 0 01.468 2.269c-.184.266-.466.449-.784.508a1.375 1.375 0 01-1.375-1.059 1.265 1.265 0 01.116-.806z"
      fill="#54B399"
    />
    <path d="M162.085 56.072H50.999V96.87h111.086V56.072z" fill="#8ADFC8" />
    <path
      className="lnsDropIllustration__adjustFill"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.574 36.575a8.91 8.91 0 110 17.82 8.91 8.91 0 010-17.82zM23.98 103.166h14.946v14.947H23.98v-14.947zm45.306-34.072L59.14 85.388h20.295L69.286 69.094zm54.288 4.224a2.901 2.901 0 012.197-.292 2.902 2.902 0 011.898 3.589l-3.96 13.516-4.125 12.691c-2.186 7.467-10.326 11.647-18.576 9.227-5.17-1.513-11.564-7.109-12.692-11.592l-3.575-16.156a3.066 3.066 0 011.953-3.712 2.75 2.75 0 013.52 1.939l2.062 6.874.207-.715 1.663-5.65 5.541-19.168a2.864 2.864 0 015.259-.583 2.86 2.86 0 01.242 2.178l-5.212 17.792 2.475.715 6.174-21.134a2.868 2.868 0 012.434-2.048 2.868 2.868 0 012.105.61 2.852 2.852 0 011.057 1.92c.041.374.009.752-.096 1.114l-6.242 21.133 2.475.715L115.5 68.53a2.868 2.868 0 012.434-2.048 2.868 2.868 0 012.105.61 2.852 2.852 0 011.057 1.92c.041.374.009.752-.096 1.113l-5.225 17.751 2.475.715 3.974-13.516c.2-.742.685-1.374 1.35-1.758z"
    />
    <path
      className="lnsDropIllustration__adjustFill lnsDropIllustration__hand"
      id="lnsDropIllustrationArrow"
      d="M84.688 156.577v-31.021c0-1.17.853-2.118 1.906-2.118s1.906.948 1.906 2.118v31.021l15.617-15.617a1.907 1.907 0 012.696 2.696l-16.175 16.175a5.695 5.695 0 01-3.525 1.652 1.725 1.725 0 01-1.039 0 5.695 5.695 0 01-3.524-1.652l-16.175-16.175a1.907 1.907 0 012.696-2.696l15.617 15.617z"
    />
  </svg>
);

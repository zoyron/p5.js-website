/*
 * @name 3D속 사인 코사인
 * @description 사인, 코사인, 그리고 push / pop 함수는 3D에도 적용됩니다.
 */
function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);
  rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.001 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      sphere(8, 6, 4);
      pop();
    }
    pop();
  }
}

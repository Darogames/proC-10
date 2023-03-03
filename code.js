var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["96c07d7a-f534-4a86-bdcd-9a397893cac1","1c7e0dbb-49c9-4b2d-8cf5-7ed6ca02e484","5891533d-70a4-47ba-bdf7-0d5b29688508","6db5c798-3104-4832-a54f-212e65f71687","9b097b25-6da9-45be-9140-9aedfda1b70b"],"propsByKey":{"96c07d7a-f534-4a86-bdcd-9a397893cac1":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":10,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"1c7e0dbb-49c9-4b2d-8cf5-7ed6ca02e484":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/CemJ.ne_XSLQAUcZV6kUysoENjVKLXoF/category_faces/pupilportrait_06.png","frameSize":{"x":282,"y":381},"frameCount":1,"looping":true,"frameDelay":2,"version":"CemJ.ne_XSLQAUcZV6kUysoENjVKLXoF","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":381},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CemJ.ne_XSLQAUcZV6kUysoENjVKLXoF/category_faces/pupilportrait_06.png"},"5891533d-70a4-47ba-bdf7-0d5b29688508":{"name":"car2","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:46:28 UTC","pngLastModified":"2021-01-05 19:47:32 UTC","version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"6db5c798-3104-4832-a54f-212e65f71687":{"name":"car3","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:46:49 UTC","pngLastModified":"2021-01-05 19:46:55 UTC","version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"9b097b25-6da9-45be-9140-9aedfda1b70b":{"name":"car4","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:47:05 UTC","pngLastModified":"2021-01-05 19:47:05 UTC","version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 7;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  
 
//Agrega velocidad  para hacer que el auto se mueva.
car1.velocityY = 7;
car2.velocityY = 7;
car3.velocityY = -7;
car4.velocityY = -7;
car1.scale = 0.2;
car2.scale = 0.2;
car3.scale = 0.2;
car4.scale = 0.2;
car1.setAnimation("car1");
car2.setAnimation("car2");
car3.setAnimation("car3");
car4.setAnimation("car4");

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
// Crea la función bounceoff para hacer que el auto rebote en los límites.  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  sam.scale = 0.05;
  sam.setAnimation("sam");
  

//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
   if(keyDown("left")){
     
     sam.x = sam.x -5;
     
   }
   
     if(keyDown("right")){
     
     sam.x = sam.x +5;
     
   }
//Agregar la condición de reducir la vida de Sam si toca el carro.
if(sam.isTouching(car1) || sam.isTouching(car2) || 
sam.isTouching(car3) || sam.isTouching(car4)) {
  
  sam.x = 20;
  sam.y = 190;
  life = life -1;
  
}

if(life == 0){
  
  car1.velocityY = 0;
  car2.velocityY = 0;
  car3.velocityY = 0;
  car4.velocityY = 0;
  sam.velocityX = 0;
  
}
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

/*
  * @name अंक और रेखाएं
  * @description पॉइंट्स और लाइन्स का इस्तेमाल बेसिक ज्योमेट्री ड्रा करने के लिए किया जा सकता है।
  * फॉर्म को स्केल करने के लिए वेरिएबल 'd' का मान बदलें। चार
  * चर 'डी' के मान के आधार पर स्थिति निर्धारित करते हैं।
  */
function setup() {
  let d = 70;
  let p1 = d;
  let p2 = p1 + d;
  let p3 = p2 + d;
  let p4 = p3 + d;

  // स्क्रीन को 720 पिक्सल चौड़ा और 400 पिक्सल ऊंचा सेट करता है
  createCanvas(720, 400);
  background(0);
  noSmooth();

  translate(140, 0);

  // ग्रे बॉक्स बनाएं
  stroke(153);
  line(p3, p3, p2, p3);
  line(p2, p3, p2, p2);
  line(p2, p2, p3, p2);
  line(p3, p2, p3, p3);

  // सफेद बिंदु बनाएं
  stroke(255);
  point(p1, p1);
  point(p1, p3);
  point(p2, p4);
  point(p3, p1);
  point(p4, p2);
  point(p4, p4);
}
